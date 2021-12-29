import { SwipeableDrawer } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

function TinderCards() {


    const [ people, setPeople ] = useState([])

    useEffect(() => {
        async function fetchData(){
            const res = await axios.get('https://tinder-clone-backend-6.herokuapp.com/tinder/cards')
            setPeople(res.data)
        }
        fetchData()
        
    }, [])

    const swiped = ( direction, nameToDelete) => {
        console.log('removing '+ nameToDelete)
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
                            key={person.name}
                            preventSwipe={['up', 'down']}
                            onSwipe={ dir => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                        <div
                            style={{backgroundImage: `url("${person.imgUrl}")`}}
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
