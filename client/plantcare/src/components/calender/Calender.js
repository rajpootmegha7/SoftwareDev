import React, { Component } from 'react'
import './style.css'
/* 
Author: Megha Rajpoot
Description: Calendar component to create a schedule based on watering schedule of each plant.
If a plant watering schedule is 2 then it will display the plant name with the difference of 2
days in the calendar.
User can see water schedule for upto 4 weeks into the calendar.
*/

export default class Calender extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            plant_list_tmp: this.props.data_to_calender,
            plant_list: [],
        }
    }
    // Function to create calendar based on the plant list
    createWateringSchedule(plantlists){
        if(plantlists === null || plantlists.length === 0) return;
        
        this.plant_arr = [];
        this.water_arr= [];
        this.watering_plant_lists = [];

        console.log('plantlists',plantlists)
        plantlists.forEach((row)=>{
            this.plant_arr.push(row.name);
            this.water_arr.push(row.water_schedule);
            var pos = parseInt(row.water_schedule);
            var count = 0
            var iterator = 0
            while(iterator <= 27){
                var new_name;
                console.log('this.watering_plant_lists[count]', this.watering_plant_lists[count], 'count:', count)
                if(this.watering_plant_lists[count] !== undefined)    
                    new_name = this.watering_plant_lists[count] + "," + row.name
                else
                    new_name = row.name
                
                if(iterator === count){
                    this.watering_plant_lists[iterator] = new_name
                    count = count + pos
                }
                else
                    this.watering_plant_lists[iterator] = " "

                iterator = iterator + 1;
            }
        })
        console.log('watering_plant_lists', this.watering_plant_lists)
        console.log('arr', this.plant_arr, this.water_arr)
        return this.watering_plant_lists;
    }

    //Function to create week card into the calendar
    createWeekCard(){
        // if(this.state.plant_list_tmp === null || this.state.plant_list_tmp.length === 0) return;
        let weekcard_array = [];
        console.log('createWeekCard', this.state.plant_list_tmp)
        var plant_list = this.createWateringSchedule(this.state.plant_list_tmp);

        const start = new Date();
        var clname_id;
        for(var i = 0; i < 28; i++){
            let loop = new Date(start);
            let newDate = loop.setDate(loop.getDate() + i);
            loop = new Date(newDate)
            var new_date_str = loop.toString().substring(0,15)

            if(i < 7) clname_id = 'week1';
            else if(i >=7 && i < 14) clname_id = 'week2';
            else if(i >=14 && i < 21) clname_id = 'week3';
            else if(i >=21 && i < 28) clname_id = 'week4';

            weekcard_array.push(this.createDayCard(new_date_str, plant_list[i], clname_id))
        }
        // this.setState({weekCards: this.weekcard_array})
        return(<div className='week-block'>{weekcard_array}</div>)

    }
    //Function to create day card and display plant schedule.
    createDayCard(day_name,plant_list, clname_id){
        // if(plant_list === undefined) return;
        let list_array = [];
        plant_list.toString().split(",").forEach(element => {
            list_array.push(<div style={{fontSize: '14px'}}>{element}</div>)
        });
        return(
            <div id='day-card' className={clname_id}>
                <p>{day_name}</p>
                <div>{list_array}</div>
            </div>
        )
    }
    //function to create week blocks into the calendar
    displayWeek(event,week){
        event.preventDefault();

        const day_ele = document.getElementsByClassName('week-block')[0].children;

        for(var i = 0; i < day_ele.length; i++){
            day_ele[i].style.display = 'none'
        }

        const wk_ele = document.getElementsByClassName(week);
        for(var i = 0; i < wk_ele.length; i++){
            wk_ele[i].style.display = 'block'
        }
    }

    render() {
        return (
            <div className='calender-board'>
                <div>
                    <p>Watering Schedule </p>
                    <button className='wk-btn' onClick={(e)=>this.displayWeek(e,'week1')}>week1</button>
                    <button className='wk-btn' onClick={(e)=>this.displayWeek(e,'week2')}>week2</button>
                    <button className='wk-btn' onClick={(e)=>this.displayWeek(e,'week3')}>week3</button>
                    <button className='wk-btn' onClick={(e)=>this.displayWeek(e,'week4')}>week4</button>
                </div>
                <div id='board-week-calender' className='calender-board-weeks'>
                    {this.state.plant_list_tmp.length !== 0 ? this.createWeekCard() : <div>No Schedule</div>}
                    {/* {this.createWeekCard()} */}
                </div>
            </div>
            
        )
    }
}
