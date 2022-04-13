import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import './style.css'; 
import plant_pic from '../../images/plant2.png'
import herb from '../../images/herb.png'
import bush from '../../images/bush.png'
import tree from '../../images/tree.png'

const plantImage = (type) => {
    if (type == 'tree'){
        return <img src={tree} width='30' height='30' id='img_line'></img>
    }
    else if (type == 'shrub'){
        return <img src={bush} width='30' height='30' id='img_line'></img>
    }
    else { 
        return <img src={herb} width='30' height='30' id='img_line'></img>
    }
}

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
            <div id='title_block'>
                <p id='list_title_text'>My Plants</p>
                {/* <img src={plant_pic} width='25' height='25' id='logo'></img> */}
                <hr id='custom_line'></hr>
            </div>
            <div>
                {emptyPlanner === true ? (<p>Please add some plants.</p>): null}
                
                {filledPlanner.map(item => (
                    <ul key={item.name} >
                      <div id='same_line'>
                        {plantImage(item.type)}
                         <li id='text_line'>{item.name}</li>
                      </div>  
                      
                    </ul>
                ))}
            </div>
            
        </div>
    );
}
          