import { SwipeableDrawer } from '@mui/material'
import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

function TinderCards() {


    const [ people, setPeople ] = useState([
        {
            name: 'John',
            url: 'https://images.unsplash.com/photo-1495216875107-c6c043eb703f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        },
        {
            name: 'Matt',
            url: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        }
    ])

    const swiped = ( direction, nameToDelete) => {
        console.log('removing '+ nameToDelete)
        //setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen" )
    }
    
    return (
        <div className='tinderCards'>
            <div className="tinderCards__cardContainer">
                {people.map( person => {
                    return (
                        <TinderCard
                            className='swipe'
                            key='person.name'
                            preventSwipe={['up', 'down']}
                            onSwipe={ dir => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                        <div
                            style={{backgroundImage: `url("${person.url}")`}}
                            className='card'
                        >
                            <h3>{person.name}</h3>
                        </div>

                        </TinderCard>

                    )
                }
                )}

            </div>
        </div>
    )
}

export default TinderCards
