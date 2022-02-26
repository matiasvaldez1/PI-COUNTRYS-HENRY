import React from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { postActivity } from '../../redux/actions/actions';
import { Link } from 'react-router-dom';
import styles from '../Activities/Form.module.css';

const Form = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [form,setForm] = useState({
    name: "",
    country: "",
    difficulty: "",
    duration: "",
    season: "",
  })
  function validate(form) {
    let errors = {};
    if (!form.name || !form.country || !form.duration) {
      errors.error = "Please complete all required fields"
    }
    return errors;
  }
  
 
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  }

  
  function handleSubmit(e){
    e.preventDefault()
    if (
      form.name !== "" &&
      form.duration !== "" &&
      form.country !== "" &&
      form.season !== "" &&
      form.difficulty !== ""
    ){
      dispatch(postActivity(form))
      alert("Actividad creada!")
    setForm({
      name: "",
      country: "",
      difficulty: "",
      duration: "",
      season: ""
    })}
    else{
      alert("Please complete the required fields")
    }
    }


  return (
    <div className={styles.background}>
    <form className={styles.container}>
      <h1>Post your activity</h1>
        <div>
            <p>Name</p>
            <input
            type="text"
            value={form.name}
            name= "name"
            onChange={handleChange}/>
          
        </div>
        <div>
          <p>Country</p>
          <input 
          type="text"
          value={form.country}
          name="country"
          onChange={handleChange}
          />
        </div>
        <div>
          <p>Duration</p>
          <input 
          type="text"
          value={form.duration}
          name="duration"
          onChange={handleChange}
          />
        </div>
          <div>
            <p>Difficulty</p>
          <select value={form.difficulty} name="difficulty" onChange={handleChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div>
            <p>Season</p>
              <select value={form.season} name="season" onChange={handleChange}>
                <option>Summer</option>
                <option>Fall</option>
                <option>Winter</option>
                <option>Spring</option>
              </select>
            {errors.error && (
              <p style={{color: "red"}}>{errors.error}</p>
            )}
        </div>
        <button type='submit' onClick={handleSubmit}>Submit</button>
    </form>
        <Link to="/home"><button>Go Home</button></Link>
    </div>
  )
}
export default Form; 