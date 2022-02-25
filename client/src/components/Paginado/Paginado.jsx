import React from 'react';
import styles from './Paginado.module.css';

export default function Paginado({countryPerPage, allCountries, paginate}) {
    const pageNumber = []
    for (let i = 0; i <= Math.ceil(allCountries / countryPerPage); i++) {
        pageNumber.push(i+1);
    }
    return (
        <nav>
                <ul className={styles.ul}>
                    {pageNumber && pageNumber.map(el =>(
                        <li className={styles.li} key={el}>
                            <button className={styles.btn}onClick={() => paginate(el)}>{el}</button>
                        </li>
                    ))}
                </ul>
        </nav>
    )
}
