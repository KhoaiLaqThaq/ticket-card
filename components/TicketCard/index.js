import React, { useState, useEffect } from "react";
import TinderCard from './../react-tinder-card'
import tickets from './tickets.json'

const TicketCard = (props) => {

  const [ticket, setTicket] = useState([]);
  // const [lastDirection, setLastDirection] = useState("");
  
  useEffect(() => {
    const ticketList = tickets.reverse();
    setTicket(ticketList);
  }, [])

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
        {ticket && ticket.map((t) => (
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
