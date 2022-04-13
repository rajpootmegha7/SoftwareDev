import React, { Component, Fragment } from 'react'
import './style.css'
import { Grid } from '../../components/grid/grid';
import { PlantList } from '../../components/plant_list/plant_list';

const Planner = () => { 
    return(
        <div>
            <div id='banner'>
                <p id='banner-text'> My Planner </p>
            </div>
            <div>
                <p id='garden'>Garden Area</p>
                <div class='float-container'>
                    <div class='float-child-1'>
                        <Grid/>
                    </div>
                    <div class='float-child-2'>
                        <PlantList/>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Planner;