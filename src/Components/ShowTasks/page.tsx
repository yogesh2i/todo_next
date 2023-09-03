import { taskType } from '@/app/page'
import React from 'react'

export default function Show({tasks,deleteTask,editTask,saveEdit}:{tasks:taskType[],deleteTask:(id:number|null)=>void,editTask:(id:number)=>void,saveEdit:(id:number)=>void}) {
  return (
    <div>
      {tasks &&
        tasks.map((i)=>{
             return (
                <>
                <div key={i.id}>
                
                <span>{i.title}</span>
                &nbsp;
                <button type='button' onClick={()=>deleteTask(i.id)}>Delete</button>
                &nbsp;
                <button type='button' onClick={()=>editTask(i.id)}>Edit</button>
                &nbsp;
                <button type='button' onClick={()=>saveEdit(i.id)}>Save</button>
                </div>
                </>
             )
        })
      }
    </div>
  )
}
