import React from 'react'
import '../Card/Card.css'

export default function Card({name,flag,continent,id}) {
    return (
    <div>
        <img src={flag} alt='img' height={200} width={200}/>
        <h1>{name}</h1>
        <p>{continent}</p>
    </div>
    )
}
