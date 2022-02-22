import React from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { postActivity } from '../../redux/actions/actions';
import { Link } from 'react-router-dom';

const Form = () => {
  const dispatch = useDispatch();
  const [form,setForm] = useState({
    name: "",
    country: "",
    difficulty: "",
    duration: "",
    season: "",
  })
  
  function handleChange(e){
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })}
    console.log(form)

  function handleSubmit(e){
    e.preventDefault()
    dispatch(postActivity(form))
    alert("Actividad creada!")
    setForm({
      name: "",
      country: "",
      difficulty: "",
      duration: "",
      season: ""
    })
  }

  return (
    <div>
    <form>
      <h1>Post your country</h1>
        <div>
          <label>Name
            <input
            type="text"
            value={form.name}
            name= "name"
            onChange={handleChange}/>
          </label>
        </div>
        <div>
          <label>Country
          <input 
          type="text"
          value={form.country}
          name="country"
          onChange={handleChange}
          />
          </label>
        </div>
        <div>
          <label>Duration
          <input 
          type="text"
          value={form.duration}
          name="duration"
          onChange={handleChange}
          />
          </label>
        </div>
          <div>
            <label>Difficulty
          <select value={form.difficulty} name="difficulty" onChange={handleChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </label>
        </div>
        <div>
            <label>Season
              <select value={form.season} name="season" onChange={handleChange}>
                <option>Summer</option>
                <option>Fall</option>
                <option>Winter</option>
                <option>Spring</option>
              </select>
            </label>
        </div>
        <button type='submit' onClick={handleSubmit}>Submit</button>
    </form>
        <Link to="/home"><button>Go Home</button></Link>
    </div>
  )
}
export default Form; 