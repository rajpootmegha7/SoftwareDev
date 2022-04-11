import React, { Component } from 'react'
import './style.css'
import drops from '../../images/drops.png'
import plsize from '../../images/plsize.png'

export default class Watercard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             active_drops: parseInt(this.props.number_of_drops,10),
             plant_size: parseInt(this.props.plant_size,10),
        }
    }
    setActiveDropsImage=()=>{
            let nrows = [];
            let remaning_days = 3 - this.state.active_drops;
            for (var i = 0; i < this.state.active_drops; i++) {
                nrows.push(<img src={drops} />);
            }
            for (var i = 0; i < remaning_days; i++) {
                nrows.push(<img src={drops} style={{'opacity': '50%'}} />);
            }
            return(<div className='image_card'>{nrows}</div>)

    }
    setActivePlantSizeImage=()=>{
            let nrows = [];
            let remaning_size = 3 - this.state.plant_size;
            for (var i = 0; i < this.state.plant_size; i++) {
                nrows.push(<img src={plsize} />);
            }
            for (var i = 0; i < remaning_size; i++) {
                nrows.push(<img src={plsize} style={{'opacity': '50%'}} />);
            }
            return(<div className='image_card'>{nrows}</div>)

    }
    

    render() {
        return (
            <div className='watering_card'>
                {this.setActivePlantSizeImage()}
                {this.setActiveDropsImage()}

            </div>
        )
    }
}
