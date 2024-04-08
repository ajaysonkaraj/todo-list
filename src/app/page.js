"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask ,setMainTask]= useState([]);

  const submitHandler = (e) =>{
    e.preventDefault();
    // console.log(title, desc)
    setMainTask([...mainTask, {title, desc}]);
    setTitle("");
    setDesc("");
    // console.log(mainTask);
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  }

  let renderTask = <h2>No task available !!</h2>

  if (mainTask.length > 0){
    renderTask = mainTask.map((t,i) => {
      return (
        <li key={i} className='flex items-center justify-between ms-5 me-5 mb-1'>
          <div className='flex items-center justify-between w-2/3'> 
          <p className='text-xl font-semibold w-1/3'>{t.title} :</p>
          <p className='font-medium  W-2/3'>{t.desc}</p>
        </div>
        <button className=' hover:bg-red-700 bg-red-600 rounded px-4 py-2 font-bold text-white ' 
          onClick={()=>{
            deleteHandler(i)
          }}
        >Delete</button>
        </li>
      );
    });
  }
  return (
    <>
      <div className='bg-black text-4xl font-bold text-white flex justify-center pt-4 pb-3 '>
        <h1>To-Do List</h1>

      </div>
      <form onSubmit={submitHandler}>
        <div className='flex justify-center mt-10 '>
          <input type="text" className='border-2 rounded border-black ps-2 me-2' placeholder='Enter Title here'
            value={title} onChange={(e) => {
              setTitle(e.target.value)
            }}
          />

          <input type="text" className='border-2 rounded border-black ps-2 me-2' placeholder='Enter task'
            value={desc} onChange={(e) => {
              setDesc(e.target.value)
            }}
          />

          <button className='bg-[#7d59e7] text-white font-bold ps-2 pe-2 rounded hover:bg-[#6621df]'
            
          >Add task</button>
        </div>
        
      </form>
      <hr className='m-5'/>
      <div className=' p-8 bg-slate-200 '>
        <ul>
        {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page
