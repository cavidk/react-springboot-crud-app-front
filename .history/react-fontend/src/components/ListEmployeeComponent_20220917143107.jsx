import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

export default class ListEmployeeComponent extends Component {
  constructor(props){
   super(props)

   this.state = {

      employees : []
   }
  }
  
    componentDidMount(){
       EmployeeService.getEmployees().then((res) => {
          this.setState({employees: res.data});
  
   });
  }
  
   render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row"></div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
             <th>Employee First Name</th>  
             <th>Employee Last Name</th>  
             <th>Employee Email Id</th>  
             <th>Actions</th>  
            </tr>
          </thead>
            <tbody>
               {
                 this.state.employees.map(
                   employee =>
                   <tr key = {employee.id}>
                       <td>{employee.firstname}</td>
                       <td>{employee.lastname}</td>
                       <td>{employee.emailId}</td>
                   </tr>
                 ) 
               }
            </tbody>
         </table>
      </div>
    )
  }
}
