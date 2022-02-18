import React from 'react'

const Navbar = () => {
    return (
        <div>
            <h1>Country's App</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name"/>
                </label>
                    <input type="submit" value="Search"/>
                <select>
                    <option value="ascendant">Ascendant</option>
                    <option value="descendant">Descendant</option>
                </select>
                <select>
                    <option value="">Surf</option>
                    <option value="">Hiking</option>
                </select>
                </form>
        </div>
    )
};

export default Navbar;

