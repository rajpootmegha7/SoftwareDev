import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import './style.css'; 
import plant_pic from '../../images/plant2.png'

export const PlantList = () => {
    const [emptyPlanner, setEmptyPlanner] = useState(false);

    useEffect(() => {
        return fetch('http://localhost:4000/auth/planner', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token')
          },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            if (data.length === 0) { 
                setEmptyPlanner(true); 
            }
        })
    }); 


    return (
        <div id='list_block'>
            <div>
                <p>My Plants</p>
                <img src={plant_pic} width='25' height='25'></img>
                {emptyPlanner === true ? (<p>Please add some plants.</p>): null}
            </div>
        </div>
    );
}
          