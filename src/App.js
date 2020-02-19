import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';


class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tasks : [],
            isDisplayForm : false
		}
	}

	componentDidMount() {
		if (localStorage && localStorage.getItem('tasks')) {
			var tasks = JSON.parse(localStorage.getItem('tasks'));
			this.setState({
				tasks : tasks
			});
		}
	}
	


	s4()
	{
		return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
	}

	generateID()
	{
		return this.s4() + this.s4() + '-' + this.s4();
	}

    showTask = () =>
    {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        });
    }

    onCloseForm = () => {
        this.setState({
            isDisplayForm: false
        });
    }

    onSubmit = (data) => {
        var {tasks} = this.state;
        data.id = this.generateID();
        tasks.push(data);
        this.setState({
            tasks : tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onUpdateStatus = (id) =>{
    	var {tasks} = this.state;
    	var index = this.findIndex(id);
    	if (index != -1) {
    		console.log(index);
    		tasks[index].status = !tasks[index].status;
    	}
    	this.setState({
    		tasks : tasks
    	});
    	localStorage.setItem('tasks', JSON.stringify(tasks));

    }

   findIndex = (id) => {
   		var {tasks} = this.state;
   		var result = -1;
   		tasks.forEach((task, index) => {
   			if (task.id === id) {
   				result = index;
   			}
   		});
   		return result;
   }

	render() {

		var {tasks, isDisplayForm} = this.state ;
        var eleForm = (isDisplayForm ?
             <TaskForm onSubmit = {this.onSubmit} onCloseForm = {this.onCloseForm}/> : '');

		return (
			<div className="container">
        <div className="text-center">
            <h1>Task Mamagement</h1>
            <hr/>
            
        </div>
        <div className="row">

        		
            <div className= {isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
             	{eleForm}
            </div>

            <div className= {isDisplayForm?'col-xs-8 col-sm-8 col-md-8 col-lg-8': 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick = {this.showTask}
                >
                    <span className="fa fa-plus mr-5"></span>Add Task
                </button>

            

             {/*SEARCH*/}
                <div className="row mt-15">
                    <Control/>
                </div>

                <div className="row mt-15">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TaskList 
                        	tasks = {tasks}
                        	onUpdateStatus = {this.onUpdateStatus}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
	);
	}
}

export default App;
