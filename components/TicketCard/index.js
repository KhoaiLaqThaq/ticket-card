import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash';

import TinderCard from './../react-tinder-card'
import { getAll } from './../../store/actions/ticketCardAction'

const TicketCard = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.ticketReducer.tickets);
  const swipeButtonType = useSelector((state) => state.swipeReducer.action)
  // const [lastDirection, setLastDirection] = useState("");
  
  useEffect(() => {
    dispatch(getAll())
  }, [])

  useEffect(() => {
    if (_.eq(swipeButtonType, 'refresh')) {
      dispatch(getAll())
      dispatch({type: 'none'})
    }
  }, [swipeButtonType])

  function setBackground(type) {
    switch(type) {
      case 'save':
        return '#1f6d13';
      case 'lucky':
        return '#4cc4c2';
      default:
        return '#d55835';
    }
  }

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction)
  }
 
  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  }

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {tickets && tickets.map((t) => (
            <TinderCard
              className="swipe"
              key={t.id}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, t.name)}
              onCardLeftScreen={() => outOfFrame(t.name)}
            >
              <div
                className="card flex-center-vertical"
                style={{ backgroundColor: setBackground(t.type)}}
              >
                <div className="card-body">
                  <p className="name noselect">{t.name}</p>
                </div>
              </div>
            </TinderCard>
          ))}
      </div>
    </div>
  )
}

export default TicketCard;
