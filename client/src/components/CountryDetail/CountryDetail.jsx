import styles from '../CountryDetail/CountryDetail.module.css';
import { getCountryDetail } from '../../redux/actions/actions';
import {useDispatch,useSelector} from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';

const Countrydetail = () => {
    const {id} = useParams();

    useEffect(() => {
        dispatch(getCountryDetail(id))
    },[])
    
    const dispatch = useDispatch();
    const oneCountry = useSelector((state) => state.countryDetail);
/*     console.log(oneCountry) */
    return (
        <div className={styles.wrapper}>
            <Link to={'/home'}>
            <button className={styles.btn}>
                Back To Home
            </button>
            </Link>
            {oneCountry.map(el =>{
                return (
                    <>
                    <div className={styles.container}>
                        <h1 className={`${styles.alignItems}`}>{el.name} Details</h1>
                        <img className={styles.img} src={el.img} alt='Country Flag'/>
                        <h1 className={`${styles.alignItems}`}>{el.name}</h1>
                        <p>{el.id}</p>
                        <p>{el.capital}</p>
                        <p>Population: {el.population}</p>
                        <p>Continent: {el.continent}</p>
                        <p>Subcontinent: {el.subregion}</p>
                        <p>Area: KM2 {el.area}</p>
                    </div>
                    {el.activities && <div className={styles.activitiesWrapper}>
                            {el.activities.map(act =>{
                                return (
                                    <>
                                    <h1 className={`${styles.alignItems} ${styles.h1Activity}`}>Activities</h1>
                                    <div className={styles.activitiesDiv}key={act.id}>
                                    <p>Activity: {act.name}</p>
                                    <p>Difficulty: {act.difficulty}</p>
                                    <p>Duration: {act.duration}</p>
                                    <p>Season: {act.season}</p>
                                    </div>
                                    </>
                        )
                    })}
                    </div>}
                    </>
                )
            })}
        </div>
    );
}

export default Countrydetail;
