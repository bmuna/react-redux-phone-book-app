
import * as React from "react";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { IPhoneBook } from "../types/phoneBookTypes";


type Props = {
  phoneBooks: IPhoneBook[];
};

  export const PhoneBookTable: React.FC<Props> = ({ phoneBooks }) => {
    return (
      <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>     
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Phone Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {        
             phoneBooks.length > 0 ?
             phoneBooks.map((phoneBook: IPhoneBook) => (
              <TableRow 
              key={phoneBook.id}
              >
                <TableCell align="left">{phoneBook.firstName}</TableCell>
                <TableCell align="left">{phoneBook.lastName}</TableCell>
                <TableCell align="left">{phoneBook.phoneNumber}</TableCell>
              </TableRow>
            )):  
            <TableRow>
              <TableCell align="center" colSpan={3}>
                No Data
              </TableCell>
            </TableRow> 
          }
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
      );
    };
