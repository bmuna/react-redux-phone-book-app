import React from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { AddPhoneBook } from './components/AddPhoneBook';
import {  Grid, Typography } from '@mui/material';
import { getFilteredPhoneBook } from './utils/utils'
import { addPhoneBook } from './actions/addPhoneBookAction';
import { RootState } from './store';
import { PhoneBookTable } from './components/TablePhoneBook';
import { FilterPhoneBook } from './components/FilterPhoneBook';
import { IPhoneBook } from './types/phoneBookTypes';

const App: React.FC = () => {
  const phoneBooks = useSelector((state: RootState) => state.add.phoneBooks);
  const filtersData = useSelector((state: RootState) => state.filters);
  const filteredPhoneBook = getFilteredPhoneBook(phoneBooks, filtersData);

  const dispatch = useDispatch();
  const savePhoneBook = (phoneBook: IPhoneBook) => {
    dispatch(addPhoneBook(phoneBook));
  };
  
  return (
    <main>
      <Typography sx={{ m: '60px' }} variant="h4" align="center" color="textPrimary" display="block" gutterBottom >
        Phone Book
      </Typography>
      <Grid container spacing={2} >
        <Grid item lg={6} md={6}>
          <AddPhoneBook savePhoneBook={savePhoneBook} />
        </Grid>
        <Grid item lg={6} md={6}>
        <div className='content'>
          <FilterPhoneBook/>
          <PhoneBookTable
            phoneBooks={filteredPhoneBook}
          />
          </div>
        </Grid>
      </Grid>
    </main>
  );
}

export default App;
