'use client'
import Show from '@/Components/ShowTasks/page';
import styles from './page.module.css';
import {useState} from 'react';

export type taskType={
  title: string,
  id: number,
}
export default function Home() {
  // const initialTask : taskType = [{
  //   title: '',
  //   id: null,
  // }]
  const [task,setTask] = useState<taskType[]>([]);
  const [input,setInput] = useState('');
  const [edit,setEdit] = useState<boolean>(false);

  function handleInput(a:string){
   setInput(a)
   
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    if(!edit){

      if(input!==''){
        setTask([...task,{
          title: input,
          id: task.length,
        }])
        setInput('');
      }
    }
  }
  const deleteTask=(id:number|null)=>{
    let newArr = task.filter((i)=>i.id!=id);
    setTask(newArr)
  }
  const editTask=(id:number)=>{
    let text = task[id].title;
   setInput(text);
   setEdit(true);
  }
  const saveEdit=(id:number)=>{
    let arr = [...task];
    arr.splice(id,1,{ title:input,
      id:id})
    setTask(arr);
    setEdit(false);
  }
  return (
   <>
   <div className={styles.container}>

   <h1 className={styles.heading}>Todo List</h1>
   <form className={styles.form} onSubmit={(e)=>handleSubmit(e)}>
    <input type="text" placeholder='Enter your task' value={input} onChange={(e)=>handleInput(e.target.value)}/>
    <button type='submit'>Add</button>
  
   </form>
    <Show tasks={task} deleteTask={deleteTask} editTask={editTask} saveEdit={saveEdit}/>
   </div>
   </>

  )
}
