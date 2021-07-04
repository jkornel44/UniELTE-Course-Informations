import { useState } from 'react';
import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { addCourse, removeCourse } from '../../store/selectedActions';

function Course({ data, mylist }) {
    const dispatch = useDispatch();

    const getTypeColor = () => {
        switch(data['Oratipus']) {
            case 'elõadás'   : return 'purple';
            case 'gyakorlat' : return 'blue';
            case 'szakdolgozat' : return 'red';
            case 'virtuális' : return 'gray';
            case 'terepgyakorlat' : return 'yellow';
            default : return 'green';
        }
    }

    const handleSelect = () => {
        if (!mylist) {
            dispatch(addCourse(data));
        } else {
            dispatch(removeCourse(data));
        }
        console.log('katt')
    } 

    const isEqual = (course, mycourse) => {
        return course['Kurzuskod'] === mycourse['Kurzuskod'] && course['Csop'] === mycourse['Csop'] ? true : false;
    }
    
    return(
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                    <span>{data['Kurzuskod']}</span>
                </div>
            </td>

            <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex items-center">
                    <span className="font-medium text-truncate" style={{maxWidth: 250+"px"}}>{data['Kurzusnev']}</span>
                </div>
            </td>

            <td className="py-3 px-6 ">
                <div className="flex items-center justify-center">
                    <span className={`bg-${getTypeColor()}-200 text-${getTypeColor()}-600 py-1 px-3 rounded-full text-xs`}>{data['Oratipus']} - {data['Csop']}</span>
                </div>
            </td>

            <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                    <span>{data['Oktato']}</span>
                </div>
            </td>

            <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                    <span>{data['Idopont']}</span>
                </div>
            </td>

            <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                    <span className="text-truncate" style={{maxWidth: 150+"px"}}>{data['Helyszin']}</span>
                </div>
            </td>

            <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">   
                    { !mylist ?
                        <PlusCircleIcon className='h-4 transform hover:text-green-500 hover:scale-110 cursor-pointer' onClick={() => handleSelect()}/>
                        :
                        <XCircleIcon className='h-4 transform hover:text-red-500 hover:scale-110 cursor-pointer' onClick={() => handleSelect()}/>
                    }
                </div>
            </td>
        </tr>
    );
  }
  
  export default Course;