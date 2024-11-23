import React from 'react'

function Button({children, textColor = "text-secondaryTextColor", className="", ...props}) {
  return (
    <div>
      <button
      className={` border-2 border-borderColor rounded-full px-2 font-semibold text-lg  flex justify-center items-center ${textColor} ${className}`}
      {...props}
      >{children}</button>
    </div>
  )
}

export default Button;
