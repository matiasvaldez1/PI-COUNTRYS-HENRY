import { filterActivity, filterCountriesByContinent, getActivities, getCountries, orderName } from '../../redux/actions/actions';
import { orderbypop } from '../../redux/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import React, { useEffect,useState } from 'react';
import Paginado from '../Paginado/Paginado';
import styles from '../Home/Home.module.css'
import Navbar from '../NavBar/NavBar';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';

const Home = () => {
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    const allActivities = useSelector((state) => state.activities);
    console.log(allActivities)
    const [ordenado, setOrdenado] = useState("");
    const [currentPage, setcurrentPage] = useState(1);
    const [countryPerPage, setcountryPerPage] = useState(10 || 11);
    const indexOfLastCountry = currentPage * countryPerPage;
    const indexOfFirstCountry= indexOfLastCountry - countryPerPage;
    const currentCountry = allCountries?.slice(indexOfFirstCountry,indexOfLastCountry);
    /* const extractCountry= currentPage === 1 ? currentCountry.pop() : ""; */
    /* const insertCountry= currentPage === 2 ? currentCountry.push(extractCountry) : ""; */



        function paginate(pageNumber){
            setcurrentPage(pageNumber)
        }   
    


    useEffect(() => {
        dispatch(getCountries());
        dispatch(getActivities());
        }, [dispatch]);

        function handleCountries(e){
            e.preventDefault()
            dispatch(getCountries())
            setOrdenado("")
        }

        function handleOrderName(e) {
            e.preventDefault();
            dispatch(orderName(e.target.value));
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
        function handleOrderByAct(e){
            e.preventDefault()
            dispatch(filterActivity(e.target.value))
            setOrdenado(`Ordered by  ${e.target.value}`);
        }
        function handleByContinent(e){
            e.preventDefault()
            dispatch(filterCountriesByContinent(e.target.value))
            setOrdenado(`Ordered by  ${e.target.value}`);
        }

    return (
        <>
        {currentCountry.length ? 
        <div className={styles.background}>
            <Navbar />
            <div className={styles.filtersPosition}>
                <div className={styles.filtersFlex}>
                <div>
                    <label className={styles.label}>Sort by population: </label>
                    <select className={styles.select} onChange={(e) => handleOrderByPop(e)}>
                        <option selected disabled>Highest to lower</option>
                        <option value="Ascendant population">Ascendant</option>
                        <option value="Descendant population">Descendant</option>
                    </select>
                </div>
                <div>
                    <label className={styles.label}>Sort by name: </label>
                    <select onChange={(e) => handleOrderName(e)}>
                        <option selected disabled>A-Z</option>
                        <option value="Ascendant">Ascendant</option>
                        <option value="Descendant">Descendant</option>
                    </select>
                </div>
                <div>
                    <label className={styles.label}>Sort by continent: </label>
                    <select 
                    onChange={(e) => handleByContinent(e)}
                    >
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Antarctica">Antarctica</option>
                    </select>
                </div>
                <div>
                        <label className={styles.label}>Sort by activities: </label>
                    <select onChange={(e) => handleOrderByAct(e)}>
                        {allActivities && allActivities.map(e=>{
                            return <option>{e.name}</option>
                        })}
                    </select>
                </div>
                <button className={`${styles.btn} ${styles.res}`} onClick={(e) =>handleCountries(e)}>Reload all countries</button>
                </div>
            </div>
            <div className={styles.background}>
                {ordenado? <h1 className={styles.h1}>{ordenado}</h1>: <h1 className={styles.h1}>Countries</h1>}
                    <div className={styles.wrapper}>
                        {currentCountry.map(country =>{
                            return (
                                <div key={country.id} className={styles.container}>
                                <Card name={country.name} continent={country.continent} flag={country.img} key={country.id} id={country.id}/>
                                </div>
                            )
                        })
                        }
                    </div>
                            <Paginado
                                countryPerPage={countryPerPage}
                                allCountries={allCountries.length}
                                paginate={paginate}
                                />
            </div>
        </div>
         : <Loading/ >}
         </>
    );
}

export default Home;
