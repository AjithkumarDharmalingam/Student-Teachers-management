import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useSelector,useDispatch } from 'react-redux';
import {deleteTS} from './../redux/userReducer'
import { useNavigate } from 'react-router-dom';

function AllTS() {
  let data = useSelector((state)=>state.student.ts_name)
  let dispatch = useDispatch()
  let navigate = useNavigate()
  return <div>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Student1</th>
          <th>Student2</th>
          <th>Student3</th>
          <th>Student4</th>
          <th>Teacher</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e,i)=>{
            return <tr key={i}>
            <td>{i+1}</td>
            <td>{e.student1}</td>
            <td>{e.student2}</td>
            <td>{e.student3}</td>
            <td>{e.student4}</td>
            <td>{e.teacher}</td>
            <td>
            <Button variant="primary" onClick={()=>navigate(`/edit-ts/${i}`)}>
            <i class="fa-regular fa-pen-to-square"></i>Edit</Button>
            &nbsp;&nbsp;
            <Button variant="danger" onClick={()=>dispatch(deleteTS({index:i}))}>
            <i className="fas fa-trash"></i>Delete</Button>
            </td>
          </tr>
          })
        }
       
      </tbody>
    </Table>
  </div>
}

export default AllTS