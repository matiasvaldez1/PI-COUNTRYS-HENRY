import { getCountries, orderName } from '../../redux/actions/actions';
import { orderbypop } from '../../redux/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import React, { useEffect,useState } from 'react';
import Paginado from '../Paginado/Paginado';
import styles from '../Home/Home.module.css'
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/NavBar';
import Card from '../Card/Card';

const Home = () => {
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    const [ordenado, setOrdenado] = useState("");
    const [currentPage, setcurrentPage] = useState(1);
    const [countryPerPage, setcountryPerPage] = useState(10);
    const indexOfLastCountry = currentPage * countryPerPage;
    const indexOfFirstCountry= indexOfLastCountry - countryPerPage;
    const currentCountry = allCountries?.slice(indexOfFirstCountry,indexOfLastCountry);


    function paginate(pageNumber){
        setcurrentPage(pageNumber)
    }   
    


    useEffect(() => {
        dispatch(getCountries());
        }, [dispatch]);

        function handleCountries(e){
            e.preventDefault()
            dispatch(getCountries())
            setOrdenado("")
        }

        function handleOrder(e) {
            e.preventDefault();
            dispatch(orderName(e.target.value));
            setcurrentPage(1);
            setOrdenado(`Ordered by  ${e.target.value}`);
    }
    function handleOrderByPop(e) {
        e.preventDefault();
        dispatch(orderbypop(e.target.value));
        setcurrentPage(1);
        setOrdenado(`Ordered by  ${e.target.value}`);
/*         e.target.value === "Ascendantpop" || "Descendantpop"? */
/*         :setOrdenado("Countries"); */
}

    return (
        <div className={styles.background}>
            <Navbar />
            <div className={styles.filtersPosition}>
                <div className={styles.filtersFlex}>
                <div>
                    <label className={styles.label}>Sort by population: </label>
                    <select onChange={(e) => handleOrderByPop(e)}>
                        <option selected disabled>Highest to lower</option>
                        <option value="Ascendant population">Ascendant</option>
                        <option value="Descendant population">Descendant</option>
                    </select>
                </div>
                <div>
                    <label className={styles.label}>Sort by name: </label>
                    <select onChange={(e) => handleOrder(e)}>
                        <option selected disabled>A-Z</option>
                        <option value="Ascendant">Ascendant</option>
                        <option value="Descendant">Descendant</option>
                    </select>
                </div>
                <div>
                        <label className={styles.label}>Sort by activities: </label>
                    <select>
                        <option value="surf">Surf</option>
                        <option value="hiking">Hiking</option>
                        <option value="walk">Walk</option>
                    </select>
                </div>
                <button className={styles.btn} onClick={(e) =>handleCountries(e)}>Reload all countries</button>
                </div>
            </div>
            <div className={styles.background}>
                {ordenado? <h1 className={styles.h1}>{ordenado}</h1>: <h1 className={styles.h1}>Countries</h1>}
                    <div className={styles.wrapper}>
                        {currentCountry?.map(country =>{
                            return (
                                <div className={styles.container}>
                                <Card name={country.name} continent={country.continent} flag={country.img} key={country.id} id={country.id}/>
                                </div>
                            )
                        })}
                    </div>
                            <Paginado
                                countryPerPage={countryPerPage}
                                allCountries={allCountries.length}
                                paginate={paginate}
                                />
            </div>
        </div>
    );
}

export default Home;
