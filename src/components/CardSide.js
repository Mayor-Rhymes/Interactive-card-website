


import React from 'react'
import CardBack from './CardBack'
import CardFront from './CardFront'


const CardSide = ({cardName, cardNumber, cardDateFirst, cardDateSecond, cvv}) => {
  return (
    <div className="bg-mobile-main-image bg-cover bg-no-repeat h-[300px] pt-10 mb-[100px] xl:w-[500px] xl:bg-desktop-main-image xl:h-screen">
        
          <CardBack cvv={cvv}/>


          <CardFront cardName={cardName} cardNumber={cardNumber} cardDateFirst={cardDateFirst} cardDateSecond={cardDateSecond}/>

        


    </div>
  )
}

export default CardSide