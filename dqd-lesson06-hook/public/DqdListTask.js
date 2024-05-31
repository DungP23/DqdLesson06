import React from 'react'

export default function DqdListTask({renderDqdListTasks }) {
    console.log(renderDqdListTasks);

    //render data
    let DqdElementTask = renderDqdListTasks.map((task, index)=>{
        return (
            <>
                <tr key={index}>
                    <td>{index+1}</td>    
                    <td>{task.Dqd_taskId}</td> 
                    <td>{task.Dqd_taskName}</td>     
                    <td>{task.Dqd_level}</td>  
                    <td>
                        <button className='btn btn-success'>edit</button>
                        <button className='btn btn-danger'>remove</button>
                    </td>
                </tr>   

            </>
        )
    })
    
  return (
    <div>
        <h2>danh sách các nhiệm vụ </h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Task ID</th>
                    <th>Task Name</th>
                    <th>Task level</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {nqmElementTask}
            </tbody>
        </table>
    </div>
  )
}