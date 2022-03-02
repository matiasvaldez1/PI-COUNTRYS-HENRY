import React from 'react';
import styles from './Paginado.module.css';

export default function Paginado({countryPerPage, allCountries, paginate}) {
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(allCountries / countryPerPage); i++) {
        pageNumber.push(i);
    }
    return (
        <nav>
                <ul className={styles.ul}>
                    {pageNumber && pageNumber.map(el =>(
                        <li className={styles.li} key={el}>
                            <button className={el > 25 ? styles.displaynone : styles.btn}onClick={() => paginate(el)}>{el <= 25 ? el : ""}</button>
                        </li>
                    ))}
                </ul>
        </nav>
    )
}
