import {useDispatch, useSelector} from 'react-redux';
import { getCountries } from '../../redux/actions/actions';
import React, { useEffect } from 'react';

const Home = () => {
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    

    useEffect(() => {
        dispatch(getCountries());
        }, [dispatch]);

    return (
        <div>
            {allCountries.map(country =>{
                return (
                    <p>{country.name}</p>
                )
            })}
        </div>
    );
}

export default Home;
