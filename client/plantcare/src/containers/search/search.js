import React, { Component } from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Parallax } from 'react-parallax';
import './style.css'
import image_p2 from '../../images/search2.jpeg'

export default class Search extends Component {
constructor(props) {
    super(props)

    this.state = {
        plantName:'',
        plantData:[],
        selectedPlants: null,
        plantType: null,
        season: null,
        location: null,
    }
}


    render() {
        return (
            <div>
                <div className='dashboard_container'>
                <Parallax bgImage={image_p2} strength={500}   > 
                <div className='dashboard_top_container'>
                <p className='search_text'>PlantCare Encylopedia</p>
                    <div className='search_container'>
                    
                    
                    <div className="col-12 md:col-4">
                        <div className="p-inputgroup">
                            <InputText placeholder="My dream plants is .."/>
                            <Button icon="pi pi-search" className="p-button-warning"/>
                        </div>
                        </div>
                    <div className="dropdown_cont">
                            <Dropdown id='drop-2' placeholder='Select Plant Type'
                                value={this.state.plantType}
                                options={this.plantType} 
                                // onChange={this.onPlantTypeChange} 
                                optionLabel="name">Plant Type</Dropdown>

                            <Dropdown id='drop-3' placeholder='Select Seasons'
                                value={this.state.season}
                                options={this.season} 
                                // onChange={this.onSeasonChange} 
                                optionLabel="name">Seasons</Dropdown>

                            <Dropdown id='drop-4' placeholder='Select Location'
                                value={this.state.location}
                                options={this.location} 
                                // onChange={this.onLocationChange} 
                                optionLabel="name">Location</Dropdown>
                    
                    </div>
                        
                    </div>
                </div> 
                </Parallax>
                <div className='search_result_container'>
                    

                </div>
                
                </div>
            </div>
        )
    }
}
