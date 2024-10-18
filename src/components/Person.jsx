import React from 'react'
import personData from './Person.json'

export default function Person() {

  return (
    <div>
        <h1 className='headingStyle'>Nested Data</h1>
        {
            personData.map((person, index) =><div key={index} className='card'>
                <h3>Name: {person.name}</h3>
                <p>Age: {person.age}</p>
                {
                    person.phones.map((phone, index)=> <div key={index}>
                        <p>Home Contact: {phone.home}</p>
                        <p>Office Contact: {phone.office}</p>
                    </div>)
                }
            </div>)

        }
    </div>
  )
}
