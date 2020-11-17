import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Kritika', 'Krishna', 'Seema', 'Snehal', 'Ritanjan', 'Ritanjan']
    
    const persons = [
        {
            id: 1,
            name: 'Kritika',
            age: 23,
            skills: 'React'
        },
        {
            id: 2,
            name: 'Krishna',
            age: 59,
            skills: 'Accounting'
        },
        {
            id: 3,
            name: 'Seema',
            age: 57,
            skills: 'HouseWife'
        },
        {
            id: 4,
            name: 'Snehal',
            age: 30,
            skills: 'ML'
        },
        {
            id: 5,
            name: 'Ritanjan',
            age: 31,
            skills: 'Python'
        }
    ]
const nameList = names.map((name, index) => <h2 key={index}>{index}. {name}</h2>)
//const personList = persons.map(person => <Person key={person.id} person={person}/>)

    return (
        <div>
            {
                // names.map(name => <h2>{name}</h2>)
                nameList
               // personList
            }
        </div>
    )
}

export default NameList
