

const Button = ({text, size}) => {
   return(


    <button className={`bg-dark-violet w-[${size}%] h-[50px] mx-[auto] text-white rounded-md block`} >

        {text}

    </button>
   )


}

export default Button;  