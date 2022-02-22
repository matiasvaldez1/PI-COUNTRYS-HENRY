import React from 'react'

export default function Paginado({countryPerPage, allCountries, paginate}) {
    const pageNumber = []
    for (let i = 0; i <= Math.ceil(allCountries / countryPerPage); i++) {
        pageNumber.push(i+1);
    }
    return (
        <nav>
                <ul>
                    {pageNumber && pageNumber.map(el =>(
                        <li key={el}>
                            <button onClick={() => paginate(el)}>{el}</button>
                        </li>
                    ))}
                </ul>
        </nav>
    )
}
