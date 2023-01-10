import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector ,useDispatch } from 'react-redux';
import {editTS} from './../redux/userReducer'
import {useNavigate,useParams} from 'react-router-dom'


function EditTS() {
  let {id} = useParams()
  let data = useSelector((state)=>state.student.ts_name)
  let [student1,setStudent1] = useState("")
  let [student2,setStudent2] = useState("")
  let [student3,setStudent3] = useState("")
  let [student4,setStudent4] = useState("")
  let [teacher,setTeacher] = useState("")
  let dispatch = useDispatch()
  let navigate = useNavigate()

  useEffect(()=>{
    if(id && id < data.length)
    {
      setStudent1(data[id].student1)
      setStudent2(data[id].student2)
      setStudent3(data[id].student3)
      setStudent4(data[id].student4)
      setTeacher(data[id].teacher)
    }
    else
    {
      navigate('/all-ts')
    }
  },[])
 
  let handleSubmit = () =>{
      dispatch(editTS({index:id,data:{student1,student2,student3,student4,teacher}}))
      navigate('/all-ts')
    }
  return <div className='container-fluid'>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Student1</Form.Label>
        <Form.Control type="text" value={student1}placeholder="Enter StudentName" onChange={(e)=>setStudent1(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Student2</Form.Label>
        <Form.Control type="text" value={student2}placeholder="Enter StudentName" onChange={(e)=>setStudent2(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Student3</Form.Label>
        <Form.Control type="text" value={student3}placeholder="Enter StudentName" onChange={(e)=>setStudent3(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Student4</Form.Label>
        <Form.Control type="text" value={student4}placeholder="Enter StudentName" onChange={(e)=>setStudent4(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Teacher</Form.Label>
        <Form.Control type="text" value={teacher}placeholder="Enter TeacherName" onChange={(e)=>setTeacher(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
  </div>
}

export default EditTS