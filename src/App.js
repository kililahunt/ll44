import React from 'react';
import './App.css';

function App() {
  return (
      <div className="container">
        <div className="text-center">
            <h1>Work Management</h1>
        </div>
        <div className="row">
           <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              {/*Form*/}
              <div className="panel panel-warning">
                 <div className="panel-heading">
                    <h3 className="panel-title">
                        Add work
                        <span
                           className="fa fa-times-circle text-right"
                        ></span>
                     </h3>
                 </div>

                 <div className="panel-body">
                    <form>
                       <div className="form-group">
                          <label>Name:</label>
                          <input 
                              type="text" 
                              className="form-control"
                              name = "name"
                           />
                       </div>

                       <label>Status:</label>
                          <select
                              className = "form-control"
                              name = "status"
                           >
                              <option value = {true}>Active</option>
                              <option value = {false}>Deactive</option>

                          </select><br/>
                           
                           <div className="text-center">
                              <button type="submit" className="btn btn-warning">
                                 <span className="fa fa-plus mr-5"></span>Save
                              </button>&nbsp;
                              <button type="button" className="btn btn-danger">
                                 <span className="fa fa-close mr-5"></span>Cancel
                              </button>
                           </div>
                  
                    </form>
                 </div>
              </div>
           </div>
           <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <button type="button" className="btn btn-primary">
                  <span className="fa fa-plus mr-5"></span>Add
              </button>
           </div>
        </div>
      </div>
  );
}

export default App;
