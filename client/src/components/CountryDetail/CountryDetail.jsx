import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getCountryDetail } from '../../redux/actions/actions';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Countrydetail = () => {
    const {id} = useParams();

    useEffect(() => {
        dispatch(getCountryDetail(id))
    },[])
    
    const dispatch = useDispatch();
    const oneCountry = useSelector((state) => state.countryDetail);
    console.log(oneCountry)
    return (
        <div>
            <h1>Country Detail</h1>
            {oneCountry.map(el =>{
                return (
                <div>
                    <img src={el.img} alt='Country Flag'/>
                    <h1>{el.name}</h1>
                    <p>{el.capital}</p>
                    <p>{el.population}</p>
                    <p>{el.continent}</p>
                    <p>{el.subregion}</p>
                    <p>{el.area}</p>
                    {el.activities.map(act =>{
                        return (
                            <div key={act.id}>
                            <p>{act.name}</p>
                            <p>{act.difficulty}</p>
                            <p>{act.duration}</p>
                            <p>{act.season}</p>
                            </div>
                        )
                    })}
                </div>
                )
            })}
            <Link to={'/home'}>
            <button>
                Go Back
            </button>
            </Link>
        </div>
    );
}

export default Countrydetail;
