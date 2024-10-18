import React from 'react'

export default function Card(props) {
  // console.log(props);
  const {titleText, descText} = props;

    // const todoTitle = 'Call Family';
    // const todoDesc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, cumque.';
    const date = new Date();
    const fullDate = date.getDate();
    const month = date.getMonth();
    const currentYear = date.getFullYear();

    const name = ['dog', 'cat', 'mouse'];
    const [dog, cat, mouse] = name;
    // console.log(name);
    // console.log(dog, cat,mouse);
    
  return (
    <div>
      <div className='card'>
        <h3 className='cardTitle'>Title:{titleText}</h3>
        <p className='cardDesc'>Desc: {descText}</p>
        <p className='cardFooter'>{fullDate + "/" + month + "/" + currentYear}</p>
      </div>
    </div>
  )
}
