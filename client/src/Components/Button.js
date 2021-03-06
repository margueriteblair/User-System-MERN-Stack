import React from 'react'

export default function Button(props) {
    console.log(props);
    
    return (
        <div>
            <button onClick={props.onClick}>{props.text}</button>
        </div>
    )
}
