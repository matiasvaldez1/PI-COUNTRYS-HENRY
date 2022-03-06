import { useDispatch, useSelector} from 'react-redux';
import { searchCountryName } from '../../redux/actions/actions';
import { getCountries } from '../../redux/actions/actions';
import {Link} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import styles from './NavBar.module.css';

const Navbar = () => {
    const dispatch= useDispatch();
    const [country, setcountry] = useState("");
    const allCountries = useSelector((state) => state.allCountries);
    const countriesNames = allCountries.map(e => e.name)
    console.log(countriesNames)
    
    function handleChange(e){
        e.preventDefault()
        setcountry(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(countriesNames.includes(country)){
        dispatch(searchCountryName(country))
        setcountry("")
        }
        else{
            alert("Este country no existe")
        }
    }

    useEffect(() => {
        dispatch(getCountries());
        }, []);

    return (
        <div className={styles.hero}>
                        <Link to='/postActivity'><button className={styles.btnCrt}>Create Activity</button></Link>
                    <div className={styles.nav}>
                        <input
                        className={styles.input}
                        type = "text"
                        placeholder= "Search countries respecting capital letters..."
                        onChange={(e) => handleChange(e)}
                        />
                    <button className={styles.btnSch} type="submit" onClick={e => handleSubmit(e)}>🔍</button>
                    </div>
        </div>
    )
};

export default Navbar;

