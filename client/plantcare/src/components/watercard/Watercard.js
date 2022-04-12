import React, { Component } from 'react'
import './style.css'
import drops from '../../images/drops.png'
import plsize from '../../images/plsize.png'
import winterImg from '../../images/Winter.png'
import fallImg from '../../images/Fall.png'
import summerImg from '../../images/Summer.png'
import springImg from '../../images/Spring.png'

export default class Watercard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             active_drops: parseInt(this.props.number_of_drops,10),
             plant_size: parseInt(this.props.plant_size,10),
             season_type: this.props.season_type,
        }
    }
    setActiveDropsImage=()=>{
            let nrows = [];
            let remaning_days = 3 - this.state.active_drops;
            for (var i = 0; i < this.state.active_drops; i++) {
                nrows.push(<img src={drops} alt='drops' />);
            }
            for (i = 0; i < remaning_days; i++) {
                nrows.push(<img src={drops} alt='drops' style={{'opacity': '50%'}} />);
            }
            return(<div className='image_card'>{nrows}</div>)

    }
    setActivePlantSizeImage=()=>{
            let nrows = [];
            let remaning_size = 3 - this.state.plant_size;
            for (var i = 0; i < this.state.plant_size; i++) {
                nrows.push(<img src={plsize} alt='plt'/>);
            }
            for (i = 0; i < remaning_size; i++) {
                nrows.push(<img src={plsize} alt='plt' style={{'opacity': '50%'}} />);
            }
            return(<div className='image_card'>{nrows}</div>)

    }
    setSeasonImage=() =>{
        const season_name = this.state.season_type
        console.log('sesson: ', season_name)
        switch(season_name) {
            case 'Winter':
              return(<div className='image_card'><img src={winterImg} alt='winter'/></div>)
            case 'Fall':
                return(<div className='image_card'><img src={fallImg} alt='fall'/></div>)
            case 'Summer':
                return(<div className='image_card'><img src={summerImg} alt='summer'/></div>)
            case 'Spring':
                return(<div className='image_card'><img src={springImg} alt='spring'/></div>)
          }
    }
   
    render() {
        return (
            <div className='watering_card'>
                {this.setActivePlantSizeImage()}
                {this.setActiveDropsImage()}
                {this.setSeasonImage()}
            </div>
        )
    }
}
