import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Notes.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(false);
  const LOCAL_STORAGE_KEY = 'MoviesApp.notes';

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(storedNotes);
    if (storedNotes) setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
  });

  const onSubmit = (data) => {
    console.log(data.id);
    if (edit) {
      alert(data.id);
      console.log(notes);
      const updated = notes.map((note) => {
        if (note.id === data.id) {
          return data;
        }
        return note;
      });
      setEdit(false);
      setNotes([...notes, updated]);
      console.log(updated);
    } else {
      setNotes([...notes, data]);
    }

    reset();
  };

  function clearNotes(review) {
    const newNotes = notes.filter((note) => note.id !== review);
    setNotes(newNotes);
  }

  function editNotes(review) {
    console.log(review);
    const editNotes = notes.find((note) => note.id === review);

    setValue('name', editNotes.name);
    setValue('gender', editNotes.gender);
    setValue('review', editNotes.review);
    setEdit(true);
  }

  const [gender, setGender] = React.useState('Male'); //
  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <Grid
      container
      spacing={5}
      position="relative"
      overflow="auto"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid item xs={12} md={6}>
        <InputLabel style={{ color: 'white', paddingTop: '10px' }}>
          Name
        </InputLabel>

        <TextField
          fullWidth
          id="fullWidth"
          style={{ backgroundColor: 'white' }}
          {...register('name', { required: 'Name field is required' })}
          variant="filled"
        />
        <TextField
          value={uuidv4()}
          style={{ display: 'none' }}
          {...register('id')}
        />

        {errors?.name && <p> {errors?.name.message}</p>}

        <InputLabel style={{ color: 'white', paddingTop: '10px' }}>
          Gender
        </InputLabel>

        <Select
          style={{ backgroundColor: 'white', width: '100%' }}
          {...register('gender')}
          value={gender}
          onChange={handleChange}
        >
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
        </Select>

        <InputLabel style={{ color: 'white', paddingTop: '10px' }}>
          Review
        </InputLabel>

        <TextField
          multiline
          rows={4}
          placeholder="Type your review:"
          style={{
            width: '100%',
            backgroundColor: 'white',
          }}
          name="review"
          {...register('review', {
            required: 'Review field is required',
            minLength: {
              value: 10,
              message: 'Review field must have more than 10 characters',
            },
            maxLength: {
              value: 300,
              message: 'Review field must have less than 300 characters',
            },
          })}
        />

        {errors?.review && <span>{errors?.review.message}</span>}
      </Grid>

      <Grid item xs={12} md={6} style={{ paddingBottom: '10px' }}>
        <TableContainer>
          <Table
            id="split_table"
            size="small"
            style={{ backgroundColor: 'white' }}
          >
            <TableHead></TableHead>
            <TableBody>
              {notes.map((note, index) => (
                <>
                  <TableRow key={index}>
                    <TableCell style={{ borderBottom: 'none' }}>
                      Name: {note.name}
                    </TableCell>
                    <TableCell style={{ borderBottom: 'none' }}>
                      Gender: {note.gender}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ borderBottom: 'none' }} colSpan={2}>
                      Review: {note.review}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ borderBottom: 'none' }} colSpan={2}>
                      <Button
                        variant="contained"
                        style={{
                          width: '40%',
                          marginLeft: '30%',
                          marginRight: '30%',
                        }}
                        onClick={() => clearNotes(note.id)}
                      >
                        Clear review
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        style={{
                          width: '40%',
                          marginLeft: '30%',
                          marginRight: '30%',
                        }}
                        onClick={() => editNotes(note.id)}
                      >
                        Edit review
                      </Button>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      {/* todos.map((item_todo) => {
    return <Todo key={item_todo.id} toggleTodo={toggleTodo} todo={item_todo} />;
  }); */}

      <Grid item md={12}></Grid>

      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Grid>
  );
}
