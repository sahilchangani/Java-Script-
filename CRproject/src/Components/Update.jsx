// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Update({data,setData}) {
    const [id,setId] = useState ('');
    const [name,setName] = useState('');
    const [subject,setSubject] = useState("")
    const navigate = useNavigate();
    const handleEdit = () => {
        const oldData = data.find((item)=>item.id == id)
        setName(oldData.name)
        setSubject(oldData.subject)
      }
    const handleUpdate = () =>{
        const updatedData = data.map((item)=>
            item.id == Number(id) ? {...item , name:name , subject:subject  } : item
        );
        setData(updatedData);
        navigate('/');
    }
  return (
    <>
    <center><br /><br />
        <h1>Update</h1>
        <input className='u1' type="text" placeholder='Enter ID No' onChange={(e)=>setId(e.target.value)} /> <br />
        <button className='u2' id="bt1" onClick={handleEdit}>Find Data</button> <br />
        <input className='u1' type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/> <br />
        <input className='u1' type="text" placeholder='Enter subject' value={subject} onChange={(e)=>setSubject(e.target.value)}/> <br />

        <button className='u2' id="bt3" onClick={handleUpdate}>Update Data</button> <br /><br />
    </center>
    </>
  )
}