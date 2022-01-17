import React from "react";
import { useForm } from "react-hook-form";
import Select from 'react-select'
import "./Notes.css";

export default function  Notes () {

 const {register,handleSubmit,formState: { errors }} = useForm();

 const onSubmit = (data) => {
     console.log(data);
 }

 const styles = {
    control: base => ({
      ...base,
      "&:hover": {
        borderColor: "red"
      }}),
      option: (styles, state) => ({
        ...styles,
        //fontWeight: state.isSelected ? "bold" : "normal",
          color: "black"
       // backgroundColor: state.isSelected ? 'red' : 'black',
      })
    
  };

 const options = [
    { value: 'male', label: 'Male'},
    { value: 'female', label: 'Female' }
  ]

  

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
      <input type="text" placeholder="First Name" name="firstname" {...register('firstname', { required: true, minLength: 8 })} />
      {errors?.firstname && <span>This field is required</span>}
      <label>Gender</label>
      <Select name="sex" styles={styles} options={options} defaultValue={{ value: 'male', label: 'Male' }} />

      <input type="submit" />
    </form>
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <input type="text" placeholder="Email" name="email"  {...register('email')}/>
        //     <input type="password" placeholder="Password" name="password" {...register('password', { required: true, minLength: 8 })}/>
        //     {errors?.password && <span>This field is required</span>}
        //     <input type="submit" />
        // </form>
    );
}

