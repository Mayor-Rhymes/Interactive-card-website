

import React from 'react'
import cardLogo from '../images/card-logo.svg';

const CardFront = ({cardNumber, cardName, cardDateFirst, cardDateSecond}) => {
  return (
    <div className="absolute top-[20%] left-[5%] bg-front-image bg-center w-80 h-[220px] ml-[auto] mr-12 rounded-md pt-[20px] text-large text-white sm:absolute xl:absolute xl:left-[15%]">
          

          <img src={cardLogo} alt="log" className="ml-5"/>
          <p className="mt-[3rem] text-2xl text-center">{cardNumber}</p>
         
         <section className="flex justify-between">
           <p className="mr-[1rem] ml-[1rem] uppercase mt-[1rem] text-sm text-ellipsis">{cardName.length > 20 ? cardName.substring(0, 20).concat('...') : cardName}</p>
           <p className="ml-[3rem] mr-[2rem] uppercase mt-[1rem] text-sm">{cardDateFirst}/{cardDateSecond}</p>

         </section>
         

    </div>
  )
}

export default CardFront