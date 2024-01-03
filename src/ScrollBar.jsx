import React from "react";

const ScrollBar = (props) => {
    return(
        <div style={{overflowY: "scroll", height: "400px"}}>
        {props.children}
    </div>
    )
}

export default ScrollBar;