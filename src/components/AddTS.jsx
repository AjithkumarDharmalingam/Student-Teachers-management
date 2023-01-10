import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import {addTS} from './../redux/userReducer'
import {useNavigate} from 'react-router-dom'


function AddTS() {
  let [student1,setStudent1] = useState("")
  let [student2,setStudent2] = useState("")
  let [student3,setStudent3] = useState("")
  let [student4,setStudent4] = useState("")
  let [teacher,setTeacher] = useState("")
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let handleSubmit = () =>{
      dispatch(addTS({student1,student2,student3,student4,teacher}))
      navigate('/all-ts')
    }
  return <div className='container-fluid'>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Student1</Form.Label>
        <Form.Control type="text" placeholder="Enter StudentName" onChange={(e)=>setStudent1(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Student2</Form.Label>
        <Form.Control type="text" placeholder="Enter StudentName" onChange={(e)=>setStudent2(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Student3</Form.Label>
        <Form.Control type="text" placeholder="Enter StudentName" onChange={(e)=>setStudent3(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Student4</Form.Label>
        <Form.Control type="text" placeholder="Enter StudentName" onChange={(e)=>setStudent4(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Teacher</Form.Label>
        <Form.Control type="text" placeholder="Enter TeacherName" onChange={(e)=>setTeacher(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
  </div>
}

export default AddTS