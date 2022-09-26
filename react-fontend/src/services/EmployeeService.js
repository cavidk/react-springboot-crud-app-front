import axios from 'axios';

const EMPLOYEE_APP_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService{
   getEmployees(){
      return axios.get("EMPLOYEE_APP_BASE_URL", this.getEmployees);
   }
}
export default new EmployeeService()