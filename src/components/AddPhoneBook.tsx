import { Box, Button, TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import { IPhoneBook } from "../types/phoneBookTypes";



type props = {
    savePhoneBook: (phoneBook: IPhoneBook | any) => void;
  }
  
  
  export const AddPhoneBook: React.FC<props> = ({ savePhoneBook }) => {
     const [phoneBook, setPhoneBook] = React.useState<IPhoneBook | {}>();    
     
        const handlePhoneBookData = (e:ChangeEvent<HTMLInputElement>) => {
            setPhoneBook({
            ...phoneBook,
            [e.currentTarget.id]: e.currentTarget.value
            });

        };

        const addNewPhoneBook = (e: React.FormEvent) => {
            console.log('clicked')
            e.preventDefault();
            setPhoneBook(phoneBook);
            savePhoneBook(phoneBook);

        };

    
        return (
            <Box component="form" sx={{'.MuiTextField-root': { m: 1, width: 400,
            }}}>
            <div className='content'>
                   <TextField name='firstName' id='firstName' label='First Name' onChange={handlePhoneBookData}/>
                   <TextField name='lastName' id='lastName' label='Last Name' onChange={handlePhoneBookData} />
                   <TextField name='phoneNumber' id='phoneNumber'  label='Phone Number' onChange={handlePhoneBookData}/>
            <Button style={{ width: 400, margin: 5}} size="large" variant="contained" onClick={(e)=> addNewPhoneBook(e)} disabled={phoneBook === undefined ? true : false}>Save</Button>
            </div>
          </Box>
          );
};

