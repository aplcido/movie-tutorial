import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';


const Search = () => {
    const [type, setType] = useState(0);

    const darkTheme = createTheme({
        palette: {
          type: "dark",
          primary: {
            main: "#fff",
            
          },
        },
      });

    return (
       
      <div style={{display: "flex", margin: '15px 0' }}>
          <ThemeProvider theme={darkTheme}>
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            //onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant="contained" style={{marginLeft: 10}}>
              <SearchIcon />
          </Button>
            
            </ThemeProvider>
        </div>
        
    )
}

export default Search;