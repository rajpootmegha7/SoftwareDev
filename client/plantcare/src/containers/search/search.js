import React, { Component } from 'react'
import './style.css'
import Watercard from '../../components/watercard/Watercard';
import plant_herb from '../../images/herb.png'
import plant_bush from '../../images/bush.png'
import plant_tree from '../../images/tree.png'

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
        {code:1, desc: "With its stately upright foliage that almost looks artificial, the snake plant (also called mother-in-law’s tongue) adds great architectural form to a room and complements all styles of decor.", name: 'Snake Plant', image:'https://www.almanac.com/sites/default/files/users/The%20Editors/snake_plant_sansevieria_trifasciata_laurentii_mokkie-wc_full_width.jpg',plant_size: 2, water_schedule:3},
        {code:2, desc: "Whether you choose upright or trailing/climbing types, philodendrons are one of the easiest houseplants you can possibly grow. You can train them up a trellis or simply leave them to their own devices; philodendrons will survive no matter what.", name: 'Philodendron', image:'https://cdn.shopify.com/s/files/1/0812/7647/products/Screenshot2020-04-2717.05.28.png?v=1625306899',plant_size: 3, water_schedule:2},
        {code:3, desc: "With its stately upright foliage that almost looks artificial, the snake plant (also called mother-in-law’s tongue) adds great architectural form to a room and complements all styles of decor.", name: 'Snake Plant', image:'https://www.almanac.com/sites/default/files/users/The%20Editors/snake_plant_sansevieria_trifasciata_laurentii_mokkie-wc_full_width.jpg',plant_size: 2, water_schedule:1},
        {code:4, desc: "Whether you choose upright or trailing/climbing types, philodendrons are one of the easiest houseplants you can possibly grow. You can train them up a trellis or simply leave them to their own devices; philodendrons will survive no matter what.", name: 'Philodendron', image:'https://cdn.shopify.com/s/files/1/0812/7647/products/Screenshot2020-04-2717.05.28.png?v=1625306899',plant_size: 1, water_schedule:3},
        {code:1, desc: "With its stately upright foliage that almost looks artificial, the snake plant (also called mother-in-law’s tongue) adds great architectural form to a room and complements all styles of decor.", name: 'Snake Plant', image:'https://www.almanac.com/sites/default/files/users/The%20Editors/snake_plant_sansevieria_trifasciata_laurentii_mokkie-wc_full_width.jpg',plant_size: 2, water_schedule:3},
        {code:2, desc: "Whether you choose upright or trailing/climbing types, philodendrons are one of the easiest houseplants you can possibly grow. You can train them up a trellis or simply leave them to their own devices; philodendrons will survive no matter what.", name: 'Philodendron', image:'https://cdn.shopify.com/s/files/1/0812/7647/products/Screenshot2020-04-2717.05.28.png?v=1625306899',plant_size: 2, water_schedule:2},
        {code:3, desc: "With its stately upright foliage that almost looks artificial, the snake plant (also called mother-in-law’s tongue) adds great architectural form to a room and complements all styles of decor.", name: 'Snake Plant', image:'https://www.almanac.com/sites/default/files/users/The%20Editors/snake_plant_sansevieria_trifasciata_laurentii_mokkie-wc_full_width.jpg',plant_size: 2, water_schedule:2},
        
    ];
    this.plantTypeOptions = [
        {name:'Herb', id:'pl-12', image:plant_herb},
        {name:'Bush', id:'pl-13', image:plant_bush},
        {name:'Tree', id:'pl-14', image:plant_tree},
    ];
    this.onCustomPage = this.onCustomPage.bind(this);
    this.onPlantTypeChange = this.onPlantTypeChange.bind(this);
}

componentDidMount(){
    this.setState({plantData: this._plantdata});
}

typeOptionTemplate(option) {
    console.log(option)

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



onCustomPage(event) {
    this.setState({
        first: event.first,
        rows: event.rows,
        currentPage: event.page + 1
    });
}
imageBodyTemplate=(rowData)=>{
    console.log(rowData.image);
    return(<img id='img-plant'src={rowData.image}
    onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} 
    alt="" className="product-image" />);
}

rowPlantDescription=(rowData)=>{
    return(
    <div className='plant_card'>
        <div className='plant_name'>{rowData.name}&nbsp;#{rowData.code} </div>
        <p className='plant_desc'>{rowData.desc}</p>
        <div className='plant_req'>
            
            <Watercard plant_size={rowData.plant_size} number_of_drops={rowData.water_schedule}  />
            {/* <div className='plant_label'>season is {rowData.season} </div> */}
        </div>
        
    </div>
    );
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
                    <h1>Header</h1>
                    <div className='dashboard_top_container'>
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
                                options={this.plantTypeOptions} 
                                onChange={this.onPlantTypeChange} 
                                optionLabel="name"
                                valueTemplate={this.selectedTypeTemplate} 
                                itemTemplate={this.typeOptionTemplate}
                                >Plant Type</Dropdown>

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

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
