import React from 'react'
import Input from './Input'
import Button from './Button'

export default function Form(props) { //inputs=Array, title=String
    return (
    <div>
        <h2>{props.title}</h2>
        <form>
            {

                props.inputs.map( inProps => {
                    return (
                        <Input 
                        name = {inProps.name}
                        placeholder = {inProps.placeholder}
                        type = {inProps.type}
                        style={inProps.style}
                        id={inProps.id}
                        onChange={inProps.onChange}
                        />    
                    )
    
                })
            }
        </form>
        <Button 
        text="Submit"
        onClick={props.subimt}
        />
        </div>
    )
}
