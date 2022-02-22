import { getCountries } from '../../redux/actions/actions';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import React, { useEffect,useState } from 'react';
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';
import Navbar from '../NavBar/NavBar';

const Home = () => {
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
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

    return (
        <div>
            <Navbar />
            {currentCountry?.map(country =>{
                return (
                    <div>
                    <Link to={'/countries/' + country.id}>
                    <Card name={country.name} continent={country.continent} flag={country.img} key={country.id}/>
                    </Link>
                    </div>
                )
            })}
                <Paginado
                    countryPerPage={countryPerPage}
                    allCountries={allCountries.length}
                    paginate={paginate}
                    />
        </div>
    );
}

export default Home;
