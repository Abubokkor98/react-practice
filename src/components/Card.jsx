import React from 'react'

export default function Card(props) {
  console.log(props);

    // const todoTitle = 'Call Family';
    // const todoDesc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, cumque.';
    const date = new Date();
    const fullDate = date.getDate();
    const month = date.getMonth();
    const currentYear = date.getFullYear();
    
  return (
    <div>
      <div className='card'>
        <h3 className='cardTitle'>Title:{props.titleText}</h3>
        <p className='cardDesc'>Desc: {props.descText}</p>
        <p className='cardFooter'>{fullDate + "/" + month + "/" + currentYear}</p>
      </div>
    </div>
  )
}
