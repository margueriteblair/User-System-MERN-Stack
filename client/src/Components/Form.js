import React from 'react'
import Input from './Input'
import Button from './Button'

export default function Form(props) { //inputs=Array, title=String
    const button_onClick = () => {
        props.submitFunc(document.getElementById(props.id))
    }

    return (
    <div>
        <h2>{props.title}</h2>
        <form>
            
            {
                Array.isArray(props.inputs)
                ? 
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
                : "Dev Warning! No inputs, check code."
            }
        </form>
        <Button 
        text={"Submit"}
        type="button"
        onClick={button_onClick}
        style={{margin: 50}}
        />
        </div>
    )
}
