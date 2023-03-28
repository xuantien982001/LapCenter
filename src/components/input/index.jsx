import React from "react";
//field: tên của giá trị
 const Input = (type, handleChange, value, className, field, isTextarea, rows, placeholder) => {

    return (
        <>
            {isTextarea ?
                (<textarea 
                    value={value} 
                    onChange={(e) => handleChange(e.target.value, {field})} 
                    rows={rows} 
                    type={type}
                    placeholder={placeholder} 
                    className= {className} />
                )
                :
                (<input
                    value={value}
                    onChange={(e) => handleChange(e.target.value, { field })}
                    type={type}
                    placeholder={placeholder}
                    className={className}
                />)


            }


        </>
    )
}
export default Input