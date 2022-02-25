import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({name,flag,continent,id}) {
    return (
    <div className={styles.container}>
        <Link className={styles.link}to={'/countries/' + id}>
        <img className={styles.p}src={flag} alt='img' height={100} width={200}/>
        <h1 className={styles.h1}>{name}</h1>
        <p className={styles.p}>{continent}</p>
        </Link>
    </div>
    )
}
