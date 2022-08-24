

import React from 'react'

const CardBack = ({cvv}) => {
  return (
    <div className="bg-back-image bg-cover bg-no-repeat bg-center bg-white w-80 h-[200px] ml-[auto] mr-12 rounded-md xl:absolute xl:top-[56%] xl:left-[20%]">
        
      <p className="mt-[5.4rem] ml-[16rem] text-white">{cvv}</p>
     
        
    </div>
  )
}

export default CardBack