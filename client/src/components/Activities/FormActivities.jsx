import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
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
            type="text"
            value={form.name}
            name= "name"
            onChange={handleChange}/>
          
        </div>
        <div className={styles.centering}>
          <p>Country</p>
          <input 
          className={styles.labelStyle}
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
            {errors.error && (
              <p style={{color: "red"}}>{errors.error}</p>
            )}
        </div>
        <div className={styles.btnPosition}>
        <button className={styles.btnStyle} type='submit' onClick={handleSubmit}>Submit</button>
        </div>
    </form>
    </div>
  )
}
export default Form; 