import React from "react";
 const Button = (handleClick, className, textStyles, btnText) => {
    return(
        <>
            <div onClick={handleClick} className={className}>
                <p className={textStyles}>{btnText}</p>
            </div>
        </>
    )
}
export default Button