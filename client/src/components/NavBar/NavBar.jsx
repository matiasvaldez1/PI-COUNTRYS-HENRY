import { useDispatch } from 'react-redux';
import { searchCountryName } from '../../redux/actions/actions';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import React from 'react';
import styles from './NavBar.module.css';

const Navbar = () => {
    const dispatch= useDispatch();
    const [country, setcountry] = useState("");
    
    function handleChange(e){
        e.preventDefault()
        setcountry(e.target.value)
        console.log(country)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(searchCountryName(country))
        setcountry("")
    }

    return (
        <div className={styles.hero}>
                        <Link to='/postActivity'><button className={styles.btnCrt}>Create Activity</button></Link>
                    <div className={styles.nav}>
                        <input
                        className={styles.input}
                        type = "text"
                        placeholder= "Search countries..."
                        onChange={(e) => handleChange(e)}
                        />
                    <button className={styles.btnSch} type="submit" onClick={e => handleSubmit(e)}>🔍</button>
                    </div>
        </div>
    )
};

export default Navbar;

