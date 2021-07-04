import { useState } from 'react';
import Section from './Section';
import Task from './Task';

function TimeTable({data}) {
    const days = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek'];
    const arr = Array(15).fill(0).map((_, i) => i * i);
    console.log(data);
    return(
        <div className="bg-white shadow-md rounded-xl my-6 overflow-x-auto">
            <div className="bg-green-900 text-white uppercase text-sm leading-normal">
                <div className="py-3 px-6 text-left">Órarend</div>
            </div>

            <table className="min-w-max w-full h-full table-auto relative">
                <tbody className="text-gray-600 text-sm font-light">
                    
                    <tr className="border-b border-gray-200">
                        <td className=" px-3 border-l w-min"></td>
                        {
                            days.map(day =>  
                                <td className="py-4 px-3 border-l items-center w-1/6" key={day}>
                                    <div className="flex items-center">
                                        <span className="font-medium">{day}</span>
                                    </div>
                                </td>
                            )
                        }
                    </tr>
                    
                    {
                        arr.map((_, index) => 
                            <tr className="border-dashed border-b border-gray-200"key={index} >
                                <td className=" py-1 px-3 border-l w-auto">
                                    <div className="flex items-center">
                                        <span>{index+8}:00</span>
                                    </div>
                                </td>
                                {
                                    days.map((day, index) => <Section key={index}/>)
                                }
                            </tr>
                        )
                    } 
                </tbody>
                {
                    data.map((task, idx) => <Task data={task} key={idx}/>)
                }
            </table>
        </div>
    );
  }
  
export default TimeTable;