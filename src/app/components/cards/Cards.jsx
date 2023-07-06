import React from 'react'
import Card from '../card/Card.jsx';
import felicity from '../../../assets/Ellipse1.png'


const Cards = () => {
    const user = {
      id: 1,
      name: "Felicity Belle Amis",
      image: felicity,
      rol: "Work Joe",
      detail: "Leave it to us to change jobs for designers!",
    };

  return (
      <div>
          <Card user={user}/>
    </div>
  )
}

export default Cards;