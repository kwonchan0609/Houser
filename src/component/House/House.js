import React from 'react'

export default function House(props){
    return(
       <div>
        <h3> Property Name: {props.list.name}</h3>
        <h3> Address: {props.list.address}</h3>
        <h3> City: {props.list.city}</h3>
        <h3> State: {props.list.state}</h3>
        <h3> Zip: {props.list.zipcode}</h3>
        <button>delete</button>
        </div>
        
    )
}