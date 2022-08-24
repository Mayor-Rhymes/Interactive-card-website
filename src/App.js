
import Form from './components/Form';
import CardSide from './components/CardSide';
import FeedBack from './components/FeedBack';

import React, {useState} from 'react'


const App = () => {


  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000')
  const [cardName, setCardName] = useState('Jane Appleseed')
  const [cardDateFirst, setCardDateFirst] = useState('00')
  const [cardDateSecond, setCardDateSecond] = useState('00')
  const [submitted, setSubmitted] = useState(false)
  const [cvv, setCvv] = useState('000')

  console.log(cardNumber, cardName, submitted, cvv)

  return (
    <div className="h-screen w-screen px-[auto] xl:flex">
      <CardSide cardNumber={cardNumber} cardName={cardName} cardDateFirst={cardDateFirst} cardDateSecond={cardDateSecond} cvv={cvv}/>
      {!submitted && <Form 
      setCardNumber={setCardNumber} 
      setCardName={setCardName} 
      setCardDateFirst={setCardDateFirst} 
      setCardDateSecond={setCardDateSecond} 
      setSubmitted={setSubmitted}
      setCvv={setCvv}
      cardNumber={cardNumber} 
      cardName={cardName} 
      cardDateFirst={cardDateFirst} 
      cardDateSecond={cardDateSecond}
      cvv={cvv}
      
      />}
      {submitted && <FeedBack /> }
      
    
    </div>
  )
}

export default App