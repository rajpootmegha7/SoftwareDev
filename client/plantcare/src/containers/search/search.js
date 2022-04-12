import React, { Component } from 'react'
import './style.css'
import { Link} from "react-router-dom";
import Watercard from '../../components/watercard/Watercard';
import plant_herb from '../../images/herb.png'
import plant_bush from '../../images/bush.png'
import plant_tree from '../../images/tree.png'
import drops from '../../images/drops.png'
import plsize from '../../images/plsize.png'
import winterImg from '../../images/Winter.png'
import fallImg from '../../images/Fall.png'
import summerImg from '../../images/Summer.png'
import springImg from '../../images/Spring.png'

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

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
        layout: 'grid',
        first: 0,
        rows: 5,
    }
    this._plantdata = [
        {code:1, desc: "With its stately upright foliage that almost looks artificial, the snake plant (also called mother-in-law’s tongue) adds great architectural form to a room and complements all styles of decor.", 
        name: 'Snake Plant', image:'https://www.almanac.com/sites/default/files/users/The%20Editors/snake_plant_sansevieria_trifasciata_laurentii_mokkie-wc_full_width.jpg',plant_size: 2, water_schedule:3, plant_type: 1},
        {code:2, desc: "Whether you choose upright or trailing/climbing types, philodendrons are one of the easiest houseplants you can possibly grow. You can train them up a trellis or simply leave them to their own devices; philodendrons will survive no matter what.",
         name: 'Philodendron', image:'https://cdn.shopify.com/s/files/1/0812/7647/products/Screenshot2020-04-2717.05.28.png?v=1625306899',plant_size: 3, water_schedule:2, plant_type: 2},
    ];
    this.plantTypeOptions = [
        {name:'Herb', id:'pl-12', image:plant_herb},
        {name:'Shrub', id:'pl-13', image:plant_bush},
        {name:'Tree', id:'pl-14', image:plant_tree},
    ];
    this.season=[
        {name: 'Winter', code:'win1'},
        {name: 'Fall', code:'fal1'},
        {name: 'Spring', code:'sp1'},
        {name: 'Summer', code:'sum1'},
    ]
    this.location=[
        { name:'New York', code:'NY'},
        { name:'California', code:'CA'},
        { name:'Texas', code:'TA'},
        { name:'New Jersey', code:'NJ'},
        { name:'Florida', code:'FL'},
        { name:'Georgia', code:'GA'},
    ]

    this.onCustomPage = this.onCustomPage.bind(this);
    this.onPlantTypeChange = this.onPlantTypeChange.bind(this);
    this.onSeasonChange = this.onSeasonChange.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
    this.onClickSearchButton = this.onClickSearchButton.bind(this);
    this.onClickDefault = this.onClickDefault.bind(this);
    this.rowPlantDescription = this.rowPlantDescription.bind(this);
    this.imageBodyTemplate = this.imageBodyTemplate.bind(this);
}

componentDidMount(){
    this.setState({plantData: this._plantdata})
}

typeOptionTemplate(option) {

    return (
        <div className="country-item">
            <img alt={option.name} src={option.image} style={{'width':'2em'}} className={`flag flag-${option.id.toLowerCase()}`} />
            <div>{option.name}</div>
        </div>
    );
}
selectedTypeTemplate(option, props) {
    if (option) {
        return (
            <div className="country-item country-item-value">
                <img alt={option.name} src={option.image} style={{'width':'2em'}} className={`flag flag-${option.id.toLowerCase()}`} />
                <div>{option.name}</div>
            </div>
        );
    }

    return (
        <span>
            {props.placeholder}
        </span>
    );
}

onPlantTypeChange(e) {
    this.setState({ plantType: e.value });
}

onSeasonChange(e) {
    this.setState({ season: e.value });
}

onLocationChange(e) {
    this.setState({ location: e.value });
}

onCustomPage(event) {
    this.setState({
        first: event.first,
        rows: event.rows,
        currentPage: event.page + 1
    });
}
imageBodyTemplate=(rowData)=>{
    return(<img id='img-plant'src={rowData.image}
    onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} 
    alt="" className="product-image" />);
}

setActiveDropsImage=(active_drops)=>{
    let nrows = [];
    let remaning_days = 3 - active_drops;
    for (var i = 0; i < active_drops; i++) {
        nrows.push(<img src={drops} alt='drops' />);
    }
    for (i = 0; i < remaning_days; i++) {
        nrows.push(<img src={drops} alt='drops' style={{'opacity': '50%'}} />);
    }
    return(<div className='image_card'>{nrows}</div>)

}
setActivePlantSizeImage=(plant_size)=>{
    let nrows = [];
    let remaning_size = 3 - plant_size;
    for (var i = 0; i < plant_size; i++) {
        nrows.push(<img src={plsize} alt='plt'/>);
    }
    for (i = 0; i < remaning_size; i++) {
        nrows.push(<img src={plsize} alt='plt' style={{'opacity': '50%'}} />);
    }
    return(<div className='image_card'>{nrows}</div>)

}
setSeasonImage=(season_type) =>{
const season_name = season_type
console.log('sesson: ', season_name)
switch(season_name) {
    case 'Winter':
      return(<div className='image_card'><img src={winterImg} alt='winter'/></div>)
    case 'Fall':
        return(<div className='image_card'><img src={fallImg} alt='fall'/></div>)
    case 'Summer':
        return(<div className='image_card'><img src={summerImg} alt='summer'/></div>)
    default:
        return(<div className='image_card'><img src={springImg} alt='spring'/></div>)
  }
}

rowPlantDescription=(rowData)=>{

    console.log('rowPlantDescription', rowData)
    return(
    <div className='plant_card'>
        <div className='plant_name'>{rowData.name} </div>
        <p className='plant_desc'>{rowData.desc}</p>
        <div className='plant_req'>
            {/* <Watercard plant_size={rowData.plant_type} number_of_drops={rowData.water_schedule} season_type={rowData.season_type}   /> */}
            <div className='watering_card'>
                {this.setActivePlantSizeImage(rowData.plant_type)}
                {this.setActiveDropsImage(rowData.water_schedule)}
                {this.setSeasonImage(rowData.season_type)}
            </div>
        </div>
        
    </div>
    );
}

onClickSearchButton =(e)=>{
    e.preventDefault();

    if(this.state.plantName === '' && this.state.plantType === null && this.state.season === null && this.state.location === null){
        alert('No Options Selected');
        return;
    }
    this.searchData = {
        name: this.state.plantName,
        type: this.state.plantType ? this.state.plantType.name: '',
        season: this.state.season ? this.state.season.name: '',
        location: this.state.location ? this.state.location.name: '',
    }

    console.log('this.searchData', this.searchData)
    var request = new Request('http://localhost:4000/search/', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(this.searchData)
    });
    var that = this;
    this._plantInfo =[];
    fetch(request)
        .then(function (response){
            response.json().then(function(res){
                
                res.data.forEach(row => {
                    // console.log(row)
                    that._plantInfo.push({code: row.plant_id,
                    desc: row.description,
                    name: row.name,
                    image: row.image,
                    plant_type: row.plant_type_id,
                    season_type: row.season_type,
                    location_name: row.state_name,
                    water_schedule: row.water_schedule
                })
            })
            that.setState({plantData: that._plantInfo})
            console.log('final:', that.state.plantData)

        })
        .catch((err)=>{
            console.log('In catch1: '+ err.message);
            that.setState({plantData: null})
        })
    })
    .catch(function (err) {
        console.log('In catch2: ' + err.message);
        that.setState({plantData: null})
    });

}
onClickDefault = (e)=>{
    e.preventDefault();
    this.setState({
        season: '',
        plantType: '',
        plantName:'',
        location: '',
        plantData: null
    })
}

    render() {
        const footer = `Total ${this.state.plantData ? this.state.plantData.length : 0} plants found.`;
        const template1 = {
            layout: 'PrevPageLink PageLinks NextPageLink',
            'PrevPageLink': (options) => {
                return (
                    <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                        <span className="p-3">Prev</span>
                    </button>
                )
            },
            'NextPageLink': (options) => {
                return (
                    <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                        <span className="p-3">Next</span>
                    </button>
                )
            },
            'PageLinks': (options) => {
                if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
                    const className = className(options.className, { 'p-disabled': true });

                    return <span className={className} style={{ userSelect: 'none' }}>...</span>;
                }

                return (
                    <button type="button" className={options.className} onClick={options.onClick}>
                        {options.page + 1}
                    </button>
                )
            }
        };
        return (
            <div>
                <div className='dashboard_container'>
                    <div className='dashboard_top_container'>
                    <div className='search_container'>
                        <div className="col-12 md:col-4">
                            <div className="p-inputgroup">
                                <InputText placeholder="My dream plants is .." value={this.state.plantName} onChange={(e) => this.setState({plantName: e.target.value})}/>
                                <Button icon="pi pi-search" className="p-button-warning" onClick={this.onClickSearchButton}/>
                                <Button id="button_default" label="Default Settings" onClick={this.onClickDefault}/>

                            </div>
                        </div>
                        <div className="dropdown_cont">
                            <Dropdown id='drop-2' placeholder='Select Plant Type'
                                value={this.state.plantType}
                                options={this.plantTypeOptions} 
                                onChange={this.onPlantTypeChange} 
                                optionLabel="name"
                                valueTemplate={this.selectedTypeTemplate} 
                                itemTemplate={this.typeOptionTemplate}
                                >Plant Type</Dropdown>

                            <Dropdown id='drop-3' placeholder='Select Seasons'
                                value={this.state.season}
                                options={this.season} 
                                onChange={this.onSeasonChange} 
                                optionLabel="name">Seasons</Dropdown>

                            <Dropdown id='drop-4' placeholder='Select Location'
                                value={this.state.location}
                                options={this.location} 
                                onChange={this.onLocationChange} 
                                optionLabel="name">Location</Dropdown>
                        </div>
                    </div>
                </div>
                    <div className='result_container'>
                        <p>Results</p>
                        <div className='result_cards'>
                            <DataTable value={this.state.plantData} footer={footer} responsiveLayout="scroll"
                            selection={this.state.selectedPlants} 
                            onSelectionChange={(e) => this.setState({ selectedPlants: e.value })}
                            paginator paginatorTemplate={template1} first={this.state.first} rows={this.state.rows} onPage={this.onCustomPage}>
                                <Column body={this.imageBodyTemplate}></Column>
                                <Column  body={this.rowPlantDescription}></Column>
                                <Column selectionMode="multiple" headerStyle={{ width: '10em' }} exportable={false}></Column>
                            </DataTable>
                            <div className='planner_btn_card'>
                            <Button className='planner_btn'>
                            <Link className='planner-link' to={{
                            pathname: '/Planner',
                            state: this.state.selectedPlants}}>Add To Planner
                        </Link>
                    </Button>
                </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
