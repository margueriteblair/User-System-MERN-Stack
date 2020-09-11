import React from 'react'

export default function Button(props) {
    console.log(props);
    
    return (
        <div>
            <button>{props.text}</button>
        </div>
    )
}
