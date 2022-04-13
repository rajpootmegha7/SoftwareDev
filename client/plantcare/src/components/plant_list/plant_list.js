import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import './style.css'; 
import plant_pic from '../../images/plant2.png'

export const PlantList = () => {
    const [emptyPlanner, setEmptyPlanner] = useState(false);
    const [filledPlanner, setFilledPlanner] = useState([]); 

    useEffect(() => {
        fetch('http://localhost:4000/planner', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token')
          },
        })
        .then(response => response.json())
        .then(data => {
            if (JSON.stringify(data) === '{}') { 
                setEmptyPlanner(true); 
            }
            else{ 
                const jsonReceived = JSON.parse(data.planner_json); 
                setFilledPlanner(jsonReceived.plants); 
            }
        })
    }, []); 


    return (
        <div id='list_block'>
            <div id='list_title'>
                <p id='list_title_text'>My Plants</p>
                {/* <img src={plant_pic} width='25' height='25' id='logo'></img> */}
            </div>
            <div>
                {emptyPlanner === true ? (<p>Please add some plants.</p>): null}
                {filledPlanner.map(item => (
                    <ul key={item.name}>
                    <li>{item.name}</li>
                    </ul>
                ))}
            </div>
            
        </div>
    );
}
          