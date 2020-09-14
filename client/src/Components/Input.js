import React from 'react'
        //placeholder
        //type
        //onChange function
        //name for the input

export default function Input(props) {

    return (
        <input 
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
        style={{...defautStyle, ...props.style}}
        />
    )
}

const defautStyle = {
    color: 'black',
    background: '#222',
    border: 'none',
    padding: 10,
    borderRadius: 5
}
