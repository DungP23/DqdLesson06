import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import DqdListTask from './components/DqdListTask';
import DqdTaskOrEdit from './components/DqdTaskOrEdit';

function App() {
  //mock data 
  const nqm_listTasks = [
    { Dqd_taskId:2210900015,Dqd_taskName:"Dang Quang Dung", Dqd_level:"Small" },
    { Dqd_taskId:1,Dqd_taskName:"Học lập trình frontend", Dqd_level:"Small" },
    { Dqd_taskId:2, Dqd_taskName:"Học lập trình reactjs",Dqd_level:"Medium"},
    { Dqd_taskId:3, Dqd_taskName:"Lập trình với Frontend - Reactjs",Dqd_level:"High"},
    { Dqd_taskId:4, Dqd_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",Dqd_level:"Small"},
   ]

    const [DqdlistTasks, setDqdListTasks] = useState(Dqd_listTasks);


    const DqdHandleSubmit = (DqdParam)=>{
      console.log("app:",DqdParam);
      setNDqdListTasks(prev =>{
        return[
          ...prev,
        ]
      })
    }

  return (
    <div className="container border">  
      <h1>Dang Quang Dung</h1>
      <hr/>
      <div>
        {/*danh sach list tasks*/}
       <DqdListTask renderDqdListTasks  =  {DqdlistTasks} />
      </div>
      <div>
        <DqdTaskOrEdit nqmOnSubmit={DqdHandleSubmit}/>
      </div>
    </div>
  );
}

export default App;