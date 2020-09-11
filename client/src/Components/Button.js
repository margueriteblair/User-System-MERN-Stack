import React from 'react'

export default function Button(props) {
    console.log(props);
    
    return (
        <div>
            <button style={{...props.style}} onClick={props.onClick}>{props.text}</button>
        </div>
    )
}

const buttonStyle = {
    padding: 10,
    borderRadius: 5,
    fontSize: "large"
}
