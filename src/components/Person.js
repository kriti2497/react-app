import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2> I am {person.name}. I am {person.age} years old. I'm proficient at {person.skills}</h2>
        </div>
    )
}

export default Person
