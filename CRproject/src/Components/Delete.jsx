import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Delete({data,setData}) {
  
  const  [id,setId] = useState("");
  const navigate = useNavigate();


  const Handeldelete = () => {
    let deleteitem = data.filter((item) => item.id != id);
    setData(deleteitem);
    navigate("/");
  }

  return (
    <div>
      <h1>Delete</h1>
      <input className='d1' type="text" value={id} onChange={(e)=>setId(e.target.value)}/> <br />
      <button className='d2' onClick={Handeldelete}>Delete</button>
    </div>
  )
}
