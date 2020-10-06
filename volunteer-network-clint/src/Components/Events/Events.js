import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

const Events = () => {
    const[events,setEvents] = useState([]);
    useEffect(()=>{
        fetch('https://oktest5555.herokuapp.com/events')
        .then(res=> res.json())
        .then(data =>setEvents(data))
    },[])
    return (
        <div>
          {
              events.map((data)=> <Event data={data} key={data._id}></Event>)
          }  
        </div>
    );
};

export default Events;