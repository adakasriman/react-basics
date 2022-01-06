import React, { useState } from "react";

function Button(props){
    const [title,setTitle] = useState("click form function");
    return (
        <div>
            <button onClick={()=> setTitle('upadted form function')}>{title}</button>
        </div>
    )
}

export default Button;
