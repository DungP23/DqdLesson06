import React, { useState } from 'react'

export default function DqdTaskOrEdit({DqdOnSubmit}) {
        const DqdTakssObj = {
            Dqd_taskId:0,
            Dqd_taskName:"",
            Dqd_level:""
        }
        const[DqdTask, setdqdTask] =useState(DqdTakssObj);

        //hàm sử lý sự kiện dựa trên điều kiện thay đổi sự kiện
        const DqdHandleChange = (DqdEvent)=>{
            let Name = DqdEvent.target.name;
            let value = DqdEvent.target.value;
            
            setdqdTask(prev => {
                return{
                    ...prev,
                [Name]:value,
                }
            })
        }
      const DqdHandleSubmit = (DqdEvent)=> {
        DqdEvent.preventDefault();
        DqdOnSubmit(nqmTask)
        
      }
  return (
    <div>
        <h2>them moi task</h2>
        <form>
            <div>
                <label>Task ID</label>
                <input name='Dqd_TaskID' value={DqdTask.Dqd_taskId} onChange={DqdHandleChange} />
            </div>
            <div>
                <label>Task Name</label>
                <input name='Dqd_TaskName' value={DqdTask.Dqd_taskName} onChange={DqdHandleChange} />
            </div>
            <div>
                <label>Task level</label>
               <select name='Dqd_level' value={DqdTask.Dqd_level}>
                <option value={'Small'}></option>
                <option value={'Medium'}></option>
                <option value={'High'}></option>
               </select>
            </div>
            <button onClick={'DqdHandleSubmit'}>ghi lại</button>
        </form>
    </div>
  )
}