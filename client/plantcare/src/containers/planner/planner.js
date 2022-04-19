/* eslint-disable */
import React, { Component, useState, Fragment } from 'react'
import './style.css'
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { TabView, TabPanel } from 'primereact/tabview';
import plant_bck from '../../images/garden_bck.png'
import planner_plant from '../../images/planner_plant.png'
import Calender from '../../components/calender/Calender';
import Footer from '../Footer/Footer';

/*
Author : Megha Rajpoot
Description : Planner class component is taking the state of selected plants from search class and using it to
add the planner on the grid square boxes of fixed size. User can also save their grid and update their grid. 
*/

export default class Planner extends Component {

    constructor(props) {
        super(props)

        this.state = {
            plantList: null,
            selectedPlant: { deletePlant, stoneBlock },
            saved_data: [{}]
        }
        this.onClickSavePlanner = this.onClickSavePlanner.bind(this);
        this.getSavedBoardOnScreen = this.getSavedBoardOnScreen.bind(this);
        this.onClickUpdateSavedPlanner = this.onClickUpdateSavedPlanner.bind(this);
    }

    componentDidMount() {
        if (this.props.location.state === undefined || this.props.location.state === null)
            this.setState({ plantList: null, selectedPlant: { deletePlant } })
        else
            this.setState({ plantList: [deletePlant, stoneBlock, ...this.props.location.state] })

        this.onClickUpdateSavedPlanner()
    }

    // success toast message which will display for 3 seconds on the right side of screen.
    showSuccess(message) {
        this.toast.show({ severity: 'success', summary: 'Success Message', detail: message, life: 3000 });
    }


    //Get saved planner from database and display it on the saved boards.
    getSavedBoardOnScreen = () => {

        var saved_data_output = this.state.saved_data;
        var final_res = [];


        saved_data_output.forEach((row) => {
            final_res.push(<div className='square_blocks'><img src={row.src} alt={row.plname} height={100} width={100} /></div>)
        })

        return (
            saved_data_output.length === 1 ?
                <div>No Data</div>
                :
                <div className='plant-board_saved'>
                    <div className='planner_canvas'>
                        <div className='square_details'>
                            {final_res}
                        </div>
                    </div>
                </div>
        )

    }
    // Update the saved planner grid with the new planner on the active board.
    onClickUpdateSavedPlanner() {
        var reqdata = { user_id: localStorage.getItem('user_id') }
        var request = new Request('http://localhost:4000/planner/get', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(reqdata)
        });

        var that = this;
        this.retrieved_data = [];
        fetch(request)
            .then(function (response) {
                if (response.status === 400) throw new Error('Data Not Retrieved');
                response.json().then(function (res) {
                    console.log('res', res)
                    that.setState({ saved_data: JSON.parse(res.planner_json) })
                })
                    .catch((err) => {
                        console.log('In catch1: ' + err.message);
                        that.setState({ plantData: null })
                    })
            })
            .catch(function (err) {
                console.log('In catch2: ' + err.message);
                that.setState({ plantData: null })
            });

        console.log('saved:', this.state.saved_data)

    }

    //Function to save planner grid into the database using json data objects.
    onClickSavePlanner() {

        const planner_html_object = document.querySelector('.square_details');
        const planner_data = [];

        // get all children of planner
        const childern = planner_html_object.childNodes;
        childern.forEach(li => {
            planner_data.push({ 'plname': li.firstElementChild.alt, 'src': li.firstElementChild.src });
        });
        console.log('planner_data', planner_data);

        this.searchData = {
            user_id: localStorage.getItem('user_id'),
            data: JSON.stringify(planner_data)
        }

        var request = new Request('http://localhost:4000/planner/save', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(this.searchData)
        });

        var that = this;
        fetch(request)
            .then(function (response) {

                if (response.status === 400) throw new Error('Data Not Saved');
                response.json().then(function (res) {
                    that.showSuccess('Sucessfully Saved Your Field.');
                })
                    .catch((err) => {
                        console.log('In catch1: ' + err.message);
                        that.setState({ plantData: null })
                    })
            })
            .catch(function (err) {
                console.log('In catch2: ' + err.message);
                that.setState({ plantData: null })
            });
    }


        render() {
            return (
                <Fragment>
                    <div className='planner-card' style={{ height: '63rem' }}>
                        <Toast ref={(el) => this.toast = el} />
                        <div id='banner'>
                            <p id='banner-text'> My Planner </p>
                        </div>
                        <TabView className="tabview-header-icon">
                            <TabPanel header="Active Board">
                                {this.state.plantList ?
                                    <div className='planner_desk'>
                                        <div className='garden_area_board'>
                                            <div className='garden_area_heading'>
                                                <p>Garden area</p>
                                                <Button className='btn-saveplanner' onClick={this.onClickSavePlanner}>Save</Button>
                                            </div>

                                            <div className='plant-board'>
                                                <div className='planner_canvas'>
                                                    <GridBoard number_blocks={this.state.inputgrid} selectedPlant={this.state.selectedPlant}></GridBoard>
                                                </div>
                                            </div>
                                            <Calender data_to_calender={this.props.location.state} />
                                        </div>

                                        <div className='plant-list_menu' >
                                            <div style={{ display: 'inline-flex' }}>
                                                <p>My Plants</p>
                                                <img src={planner_plant} alt='planner-plant-image' style={{ height: '3rem', width: '3rem' }} />
                                            </div>
                                            <ListBox value={this.state.selectedPlant} options={this.state.plantList}
                                                onChange={(e) => this.setState({ selectedPlant: e.value })}
                                                optionLabel="name" style={{ width: '15rem' }} listStyle={{ maxHeight: '40em' }} />

                                        </div>

                                    </div>
                                    :
                                    <div className='msg_container'>
                                        <p>No plants are selected on the search page.</p>
                                    </div>
                                }
                            </TabPanel>
                            <TabPanel header="Saved Board" rightIcon="pi pi-save" >
                                <Button className='save_board_btn' onClick={this.onClickUpdateSavedPlanner}>Update Saved Planner</Button>
                                <div className='saved_container'>
                                    {this.getSavedBoardOnScreen()}
                                </div>

                            </TabPanel>
                        </TabView>
                    </div>
                    <Footer />
                </Fragment>
            )
        }
    }

var deletePlant = { code: '_00', name: 'Delete', desc: '', image: plant_bck }
var stoneBlock = { code: '_99', name: 'Stones', desc: '', image: 'https://m.media-amazon.com/images/I/81FSS+MhhdL._AC_SX679_.jpg' }

//Function to save the plant id details in the image tag under the list.
function PlantImage(plantId) {
    return (<img src={plantId.plantId.image} alt={plantId.plantId.name} code={plantId.plantId.code} height={100} width={100} />)
}
//Function to set the plants and children over the square grid boxes.
function Square({ selectedPlant, children }) {

    const [square, setSquare] = useState({
        children: children
    })

    //Function to handle the click functionality to place plants over grid.
    function handleGridClick() {
        if (selectedPlant.selectedPlant === null || selectedPlant.selectedPlant === undefined) return;
        updateChild(<PlantImage plantId={selectedPlant.selectedPlant} />);
    }

    const updateChild = (child) => {
        setSquare(previousState => {
            return { ...previousState, children: child }
        });
    }
    const slotValue = square.children === undefined ?
        <img src={deletePlant.image} alt={deletePlant.name} code={deletePlant.code} height={100} width={100} />
        :
        square.children;

    return (<div className='square_blocks' onClick={handleGridClick}> {slotValue}</div>)
}
//function to render the squares boxes over the grid.
function renderSquare(i, selectedPlant) {

    return (<Square white selectedPlant={selectedPlant} />)
}
//function to set the grid space to place the 28 squares on the grid.
function GridBoard(selectedPlant) {
    const squares = []
    for (let i = 0; i < 28; i++) {
        squares.push(renderSquare(i, selectedPlant))
    }

    return (
        <div className='square_details'>
            {squares}
        </div>
    )
}