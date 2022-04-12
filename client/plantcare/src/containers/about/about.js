import React, { Component } from 'react'
import './style.css'
import carlos from '../../images/carlos.jpeg'
import elo from '../../images/elo.png'
import pranjal from '../../images/Summer.png'
import megha from '../../images/Megha.jpg'
import Footer from '../Footer/Footer'


export default class about extends Component {
    render() {
        return (
            <div>
                <div className='about_us_container'>
                    <div className='intro_info'>
                        <div className='text_details'>
                            <p className='heading_name'>Your Garden, reimagined</p>
                            <p className='bodyname'>Plant Care is a garden planning web application that allows users to plan out the space/garden of their dreams
                                quickly. People want a high-yield crop garden or a beautiful indoor space with plants but lack the knowledge and
                                expertise to plan and create it. Plant Care solves this problem by providing the tools to plan a garden and information
                                about growing plants. With PlantCare, users are able to search for different plants based on a number of filters, plan
                                out which plants will go into their indoor space and garden and be aware of plant information such as any watering requirements.</p>
                        </div>
                    </div>
                    <div className='Vision Statement'>
                        <p id='Font_1'> Vision Statement</p>
                        <p id='Body_1'>PlantCares strives to provide an efficient platform in which users are able to learn more about plants and be motivated to
                            create their spaces/gardens with the plants they desire.</p>

                    </div>
                    <div className='Team_details'>
                        <p id='Font_1'> The Team</p>
                        <div className='Pic_cont'>
                        <div><img className='team' src={megha} alt="Avatar"></img><p id='Font_1'>Megha Singh</p><p id='Type2'>Full-Stack Developer</p>
                        <p id='Type2'>MS ITWS 22'</p></div> 
                        <div><img className='team' src={elo} alt="Avatar"></img><p id='Font_1'>Elo Ekor</p><p id='Type2'>Back-End Developer</p>
                        <p id='Type2'>MS ITEC 22'</p></div> 
                        <div><img className='team'src={pranjal} alt="Avatar"></img><p id='Font_1'>Pranjal Jain</p><p id='Type2'>Back-End Developer</p>
                        <p id='Type2'>MS ITWS 23'</p></div> 
                        <div><img className='team' src={carlos} alt="Avatar"></img><p id='Font_1'>Carlos Power</p><p id='Type2'>Full-Stack Developer</p>
                        <p id='Type2'>MS ITEC 22'</p></div> 
                        </div>

                    </div>

                </div>
                <Footer/>
            </div>

        )
    }
}
