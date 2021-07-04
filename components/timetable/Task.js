import { useState } from 'react';
import { getDayCount } from '../../../névtelen mappa/UniELTE-Course-Informations/src/helpers/helpers';
import Section from './Section';

function Task({data}) {

    const getTypeColor = () => {
        switch(data.type) {
            case 'elõadás'   : return 'purple';
            case 'gyakorlat' : return 'blue';
            case 'szakdolgozat' : return 'red';
            case 'virtuális' : return 'gray';
            case 'terepgyakorlat' : return 'yellow';
            default : return 'green';
        }
    }

    let style = {
        left: getDayCount(data.day) * 16.67 + '%',
        top: ((data.from.hour - 8) + (data.from.minute / 60)) * 6.5 + 9.04 + '%',

        width: 16.67+'%',
        height: ((data.to.hour - data.from.hour) + ((data.to.minute - data.from.minute) / 60)) * 6.5 + '%'
    } 
    return(
        <div className={`justify-left bg-${getTypeColor()}-200 text-${getTypeColor()}-600 py-1 px-3 rounded absolute w-1/6 text-xs transition duration-500 ease-in-out transform hover:scale-105 overflow-auto`} style={style} >
            <span className="block font-medium"> #{data.code} {data.subject}</span>
            <span className="block"> {data.from.hour}:{data.from.minute}-{data.to.hour}:{data.to.minute} </span>
            <span className="block font-thin">{data.teacher}</span>
            <span className="block font-thin">{data.place}</span>
            
        </div>
    );
  }
  
export default Task;