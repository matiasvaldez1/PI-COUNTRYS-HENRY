import { useDispatch } from 'react-redux';
import { searchCountryName } from '../../redux/actions/actions';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import React from 'react';

const Navbar = () => {
    const dispatch= useDispatch();
    const [country, setcountry] = useState("");

    function handleSelectChange(e){
        e.preventDefault()
        console.log(e.target.value)
    }

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
        <div>
            <nav>
                <div>
                    <input
                    type = "text"
                    placeholder= "Buscar..."
                    onChange={(e) => handleChange(e)}
                    />
                    <button type="submit" onClick={e => handleSubmit(e)}>Buscar</button>
                </div>
                <div>
                    <label>Sort alphabetically: </label>
                    <select onClick={(e) => handleSelectChange(e)}>
                        <option value="asc">Ascendant</option>
                        <option value="des">Descendant</option>
                    </select>
                </div>
                <div>
                    <label>Sort by poblation: </label>
                    <select onClick={(e) => handleSelectChange(e)}>
                        <option value="asc">Ascendant</option>
                        <option value="des">Descendant</option>
                    </select>
                </div>
                <div>
                        <label>Sort by activities: </label>
                    <select>
                        <option value="surf">Surf</option>
                        <option value="hiking">Hiking</option>
                        <option value="walk">Walk</option>
                    </select>
                </div>
            </nav>
                <Link to='/postActivity'><button>Create Activity</button></Link>
        </div>
    )
};

export default Navbar;

