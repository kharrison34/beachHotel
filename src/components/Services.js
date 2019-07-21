import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';
export default class Services extends Component {

 state={
     services: [
         {
             icon: <FaCocktail/>,
             title: "Free Cocktails",
             info: 'We offer free specialty cocktails upon your arrival until your departure!'
         },
         {
            icon: <FaHiking/>,
            title: "Free Hiking",
            info: 'We offer some of the most scenic trails in all of North America with our professional tour guides '
        },
        {
            icon: <FaShuttleVan/>,
            title: "Free Shuttle",
            info: 'We offer free shuttle rides to and from the airport. once you arrive you are safetly in our hands'
        },
        {
            icon: <FaBeer/>,
            title: "Strongest Beer",
            info: 'We offer free foreign and domestic beer all hours of the day.'
        }
     ]
 }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                    <div className="services-center">
                       {this.state.services.map((item, index) => {
                           return <article key={index} className="service">
                               <span>{item.icon} </span>
                               <h6> {item.title}</h6>
                               <p>{item.info}</p>
                           </article>

                       })} 
                    </div>
                
            </section>
        )
    }
}
