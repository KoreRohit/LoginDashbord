import React from "react";
import ReactDom from "react-dom";
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MainDashbord from "./MainDashbord";

class TeacherInfo extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            employee:[]
        }
    }
    render(){
        return <>
        <div className="container">
          <MainDashbord/>
            <div className="row" style={{marginTop:'20px'}}>
            <center><h3>Teacher Information</h3><hr></hr></center><br></br>

            <Form className="d-flex" style={{marginLeft:'680px', marginBottom:'20px'}}>
                <Form.Control
                  type="search"
                  placeholder="Search Teacher Name"
                  className="me-2"
                  aria-label="Search"
                  style={{width:'250px'}}
                />
                <Button variant="outline-success">Search</Button>
              </Form>
        {/* <center>
        <table border='5' width='50%' align='center'>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Delete</th>
            <th>Update</th>
        </tr>

        <tbody>
        {
            this.state.employee.map((employee)=><tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.salary}</td>
                {/* //this dynamic routing for delete employeedata below */}
                {/* <td><Link to={`/delemp/${employee.id}`}>Delete</Link></td>  */}
                {/* <td><Link to={`/updateemp/${employee.id}/${employee.name}/${employee.salary}`}>Update</Link></td> */}
            {/* </tr>) */}
        {/* } */}

        {/* </tbody>
        </table>
        </center> */} 
         <center>
        <Table striped bordered hover style={{ boxShadow:'3px 3px 5px 0.5px rgba(2,2,2,5)'}}>
      <thead>
        <tr>
        <th>Id</th>
            <th>Teacher Name</th>
            <th>Department Name</th>
            <th>Teacher Email</th>
            <th>Teacher Contact</th>
            <th>Teacher Username</th>
            <th>Teacher Password</th>
            <th>Delete</th>
            <th>Update</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>shyam</td>
          <td>Mechanical</td>
          <td>shyam@gmail.com</td>
          <td>789788</td>
          <td>shyam</td>
          <td>shyam123</td>
          <td>Delete</td>
          <td>Update</td>
        </tr>

        <tr>
          <td>2</td>
          <td>ram</td>
          <td>Civil</td>
          <td>ram@gmail.com</td>
          <td>789454788</td>
          <td>ram</td>
          <td>ram123</td>
          <td>Delete</td>
          <td>Update</td>
        </tr>

        <tr>
          <td>3</td>
          <td>mohan</td>
          <td>IT</td>
          <td>mohan@gmail.com</td>
          <td>777788</td>
          <td>mohan</td>
          <td>mohan123</td>
          <td>Delete</td>
          <td>Update</td>
        </tr>
      </tbody>
    </Table>
    </center>
    </div>
    </div> 
        </>
    }
    // componentDidMount(){
    //     EmployeeService.getEmployee().then((res)=>{
    //         this.setState({employee:res.data});
    //     });
    // }
}
export default TeacherInfo;