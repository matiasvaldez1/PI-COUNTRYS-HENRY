import React,{useEffect} from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { postActivity } from '../../redux/actions/actions';
import { Link } from 'react-router-dom';
import styles from '../Activities/Form.module.css';
import { getCountries } from '../../redux/actions/actions';

const Form = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const countriesNames = allCountries.map(e => e.name)
  const [errors, setErrors] = useState({});
  const [form,setForm] = useState({
    name: "",
    country: [],
    difficulty: "",
    duration: "",
    season: "",
  })
  function validate(form) {
    let errors = {};
    if (!form.name || !form.country || !form.duration || !form.difficulty || !form.season) {
      errors.error = "Required to complete all fields"
    }
    if(form.name.length < 2 ){
      errors.error = "Please enter a valid name"
    }
    if(!countriesNames.includes(form.country)){
      errors.error = "Please enter a valid country"
    }
    return errors;
  }

  useEffect(() => {
    dispatch(getCountries())
  }, [])
  
  
 
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
      country: [],
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
      <Link to="/home">
        <button className={`${styles.btnStyle} ${styles.btnMargin}`}>
        Go Home
        </button>
        </Link>
    <form className={styles.container}>
      <h1 className={styles.h1}>Post your activity</h1>
        <div className={styles.centering}>
            <p>Name</p>
            <input
            className={styles.labelStyle}
            placeholder="Name of the activity"
            type="text"
            value={form.name}
            name= "name"
            onChange={handleChange}/>
          
        </div>
        <div className={styles.centering}>
          <p>Country</p>
          <input 
          className={styles.labelStyle}
          placeholder="Country name respecting capital letters"
          type="text"
          value={form.country}
          name="country"
          onChange={handleChange}
          />
        </div>
        <div className={styles.centering}>
          <p>Duration</p>
          <input
          className={styles.labelStyle} 
          placeholder="Ej: 10 minutes"
          type="text"
          value={form.duration}
          name="duration"
          onChange={handleChange}
          />
        </div>
          <div className={styles.centering}>
            <p>Difficulty</p>
          <select value={form.difficulty} name="difficulty" onChange={handleChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className={styles.centering}>
            <p>Season</p>
              <select value={form.season} name="season" onChange={handleChange}>
                <option>Summer</option>
                <option>Fall</option>
                <option>Winter</option>
                <option>Spring</option>
              </select>
        </div>
            {errors.error && (
              <p style={{color: "red"}}>{errors.error}</p>
            )}
        <div className={styles.btnPosition}>
        <button className={styles.btnStyle} type='submit' onClick={handleSubmit}>Submit</button>
        </div>
    </form>
    </div>
  )
}
export default Form; 