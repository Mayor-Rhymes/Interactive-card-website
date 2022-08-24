
import Button from './Button';
import { useState } from 'react';


const Form = ({cardName, cardNumber, cardDateFirst, cardDateSecond, setCardName, setCardNumber, setCardDateFirst, setCardDateSecond, setSubmitted, setCvv}) => {
   const [isRequired, setIsRequired] = useState(false)
   const handleSubmit = (e) => {

       
       e.preventDefault();
       setIsRequired(!isRequired)
       if(cardName !== "Jane Appleseed" && cardNumber !== "0000 0000 0000 0000"  && cardDateFirst !== "00" && cardDateSecond !== "00"){


          setSubmitted((prevState) => !prevState)
          
       }
       
   }
   return(


    <form className="w-[75%] flex-col space-y-10 py-[50px] mx-[auto] xl:py-[150px] xl:px-[300px]" onSubmit={handleSubmit}>

      <div className="flex-col">
        <label htmlFor="card-name" className="font-bold">CARDHOLDER NAME</label>
        <input type="text"
         id="card-name" 
         placeholder="e.g. Jane Appleseed" 
         className=" h-[50px] w-[100%] border px-[10px] rounded-md invalid:border-error valid:border-font-violet"
         onChange={(e) => setCardName(e.target.value) }
         required={isRequired}
         />

      </div>

      <div className="flex-col">
        <label htmlFor="card-number" className="font-bold">CARD NUMBER</label>
        <input type="text" 
        id="card-number" 
        placeholder="e.g. 1234 5678 9123 0000" 
        className="h-[50px] w-[100%] border px-[10px] rounded-md invalid:border-error valid:border-font-violet"
        onChange={(e) => setCardNumber(e.target.value)}
        required={isRequired}
        />
      </div>

      <div className="flex space-x-5">

        <div>
         <label className="font-bold"> 
            EXP DATE(MM/YY) 
         </label>
       
        <div className="flex space-x-4">
         <input type="text" 
         placeholder="MM" 
         className="border h-[50px] w-[45%] px-[10px] rounded-md invalid:border-error valid:border-font-violet"
         onChange={(e) => setCardDateFirst(e.target.value)}
         required={isRequired}
         
         />

         <input 
         type="text" 
         placeholder="YY"
         className="border h-[50px] w-[45%] px-[10px] rounded-md invalid:border-error valid:border-font-violet"
         onChange={(e) => setCardDateSecond(e.target.value)}
         required={isRequired}
         />
        </div>

        </div> 

        <div className="flex-col">
         <label className="font-bold">
            CVC
         </label>

         <input type="text" placeholder="e.g. 123" className="border w-[100%] h-[50px] px-[10px] rounded-md invalid:border-error valid:border-font-violet" onChange={(e) => setCvv(e.target.value)} required={isRequired}/>
        </div> 


      </div>


      <Button text={"Confirm"} size={100}/>


    



    </form>
   )

}

export default Form;