import React from 'react'
import { Pagination } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, deepOrange, grey } from '@mui/material/colors';

const darkTheme=createTheme({
    palette: {
      type: "dark",
      primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
    },
  });

const CustomPagination = ({setPage,numOfPages = 10}) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0);
    }

    return (
        <div
        style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
        }}>
            <ThemeProvider theme={darkTheme}>
           <Pagination count={numOfPages} hideNextButton hidePrevButton color="primary" onChange={(e) => handlePageChange(e.target.textContent)} />
           </ThemeProvider>
        </div>
    )
}

export default CustomPagination
