function Button({label, iconURL, backgroundColor, borderColor, textColor, fullwith }) {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
      ${backgroundColor 
      ? `${backgroundColor} ${textColor} ${borderColor}`
      : " bg-coral-red text-white"}
      rounded-full ${fullwith && 'w-full'}"}`}>
        {label}

       {iconURL && <img src={iconURL} alt="arrow right icon" className=" ml-2 rounded-full" />}  
    </button>
  )
}

export default Button