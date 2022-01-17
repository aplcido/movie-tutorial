import React from "react";
import { useForm } from "react-hook-form";
import "./Notes.css";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Input } from "@material-ui/core";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


export default function  Notes () {

 const {register,handleSubmit,formState: { errors }} = useForm({
    criteriaMode: "all"
  });

 const onSubmit = (data) => {
     console.log(data);
 }

 const [gender, setGender] = React.useState("Male");//
 const handleChange = event => {
    setGender(event.target.value);
  };

//  const styles = {
//     control: base => ({
//       ...base,
//       "&:hover": {
//         borderColor: "red"
//       }}),
//       option: (styles, state) => ({
//         ...styles,
//         //fontWeight: state.isSelected ? "bold" : "normal",
//           color: "black"
//        // backgroundColor: state.isSelected ? 'red' : 'black',
//       })
    
//   };






  return (  

    <Grid
  container spacing={5}
  position= "relative"
  overflow= "auto"
  component="form"
  onSubmit={handleSubmit(onSubmit)}
  direction="row"
  justifyContent="space-around"
  alignItems="center"
>

    
    
<Grid item md={6} style={{paddingBottom: "10px"}}>
      <InputLabel style={{color: "white"}}>Name</InputLabel>

      <TextField fullWidth id="fullWidth" style={{backgroundColor: "white"}} {...register('name', { required: "Name field is required" })} variant="filled" />
      {errors?.name && <p> {errors?.name.message}</p>}
      </Grid>     
 
<Grid item md={6} style={{paddingBottom: "10px"}}>  
      <InputLabel style={{color: "white"}}>Gender</InputLabel>
      <Select style={{backgroundColor:"white", width:"100%" }} {...register("gender")} value={gender} onChange={handleChange}>
     <MenuItem value={"Male"}>Male</MenuItem>
     <MenuItem value={"Female"}>Female</MenuItem>
   </Select>
   </Grid>  
  
   <Grid item md={6}> 
   <InputLabel style={{color: "white"}}>Review</InputLabel>
    
   <textarea  placeholder="Type your review:" style={{width: "100%", height: "150px", paddingBottom: "10px"}} name="review" {...register("review", {required: "Review field is required", minLength: {value:10, message:"Review field must have more than 10 characters"}, maxLength: {value:300,message:"Review field must have less than 300 characters"} })} />
       {errors?.review && <span>{errors?.review.message}</span>}
       </Grid> 

       <Grid item md={6}> 
   
   </Grid>   
   <Grid item md={12}> 
   
   </Grid>
   
       
   <Button variant="contained" type="submit">Submit</Button>

    
    </Grid>
  );


//     return (
//     <form onSubmit={handleSubmit(onSubmit)}>
        
//         <InputLabel style={{color: "white"}}>Name</InputLabel>
//         <TextField id="outlined-basic" label="Name" style={{backgroundColor: "white", marginBottom:"10px"}} {...register('name', { required: "Name field is required" })} variant="outlined" />
       

//       {errors?.name && <span>{errors?.name.message}</span>}
     
//       {/* <Select name="gender" styles={styles} options={options} {...register('gender', { required: "Name field is required" })} /> */}
      
//       <InputLabel style={{color: "white"}}>Gender</InputLabel>
//   <Select style={{backgroundColor:"white", marginBottom:"10px"}} {...register("gender")} value={gender} onChange={handleChange}>
//     <MenuItem value={"Male"}>Male</MenuItem>
//     <MenuItem value={"Female"}>Female</MenuItem>
//   </Select>
//   <InputLabel style={{color: "white"}}>Review</InputLabel>
//       <textarea style={{width: "100%", height:"150px"}} placeholder="Type your review:" name="review" {...register("review", {required: "Review field is required", minLength: {value:10, message:"Review field must have more than 10 characters"}, maxLength: {value:300,message:"Review field must have less than 300 characters"} })} />
//       {errors?.review && <span>{errors?.review.message}</span>}

//       <input type="submit" />
//     </form>
//         // <form onSubmit={handleSubmit(onSubmit)}>
//         //     <input type="text" placeholder="Email" name="email"  {...register('email')}/>
//         //     <input type="password" placeholder="Password" name="password" {...register('password', { required: true, minLength: 8 })}/>
//         //     {errors?.password && <span>This field is required</span>}
//         //     <input type="submit" />
//         // </form>
//     );
}

