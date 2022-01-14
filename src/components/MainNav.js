import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import DevicesIcon from '@mui/icons-material/Devices';

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        backgroundColor: "#2d313a !important",
        bottom: 0,
        zIndex: 100,
    },
})

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  let navigate = useNavigate();

  useEffect(() => {
      if(value===0)
        navigate("/")
      else if(value===1)
        navigate("/movies")
      else if(value===2)
        navigate("/series")
      else if(value===3)
        navigate("/search")
      else if(value===3)
        navigate("/watched")
      
  }, [value,navigate])

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        className={classes.root}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{ color: "white" }} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{ color: "white" }} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{ color: "white" }} label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction style={{ color: "white" }} label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction style={{ color: "white" }} label="Watched" icon={<DevicesIcon />} />
      </BottomNavigation>
    </Box>
  );
}