import React from 'react'
import imager from '../images/icon-complete.svg';




const FeedBack = () => {
  return (
    <div className="w-[100%] flex-col items-center justify-center space-y-10 mx-[auto] py-[50px] xl:px-[100px] xl:py-[150px]">  

        <img className="block mx-[auto]" src={imager} alt="imager"/>

        <h1 className="uppercase text-4xl text-center">Thank you!</h1>

        <p className="text-xl font-bold text-center">We have added your card details</p>


        

        <button className={`bg-dark-violet w-[75%] h-[50px] mx-[auto] text-white rounded-md block xl:w-[300px]`} >
           Continue
        </button>


    </div>
  )
}

export default FeedBack