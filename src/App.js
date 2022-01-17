import { Container } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import { Routes, Route } from "react-router-dom";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import Series from "./Pages/Series/Series";
import Watched from "./Pages/Watched/Watched";
import Notes from "./Pages/Notes/Notes";
import { GlobalProvider } from "./components/Context/GlobalState";

function App() {
  return (
  <>
  <GlobalProvider>
  <BrowserRouter>
  
  <Header />
  <div className="app">
   <Container>
   <Routes>
     <Route path='/' element={<Trending />} exact />
     <Route path='/movies' element={<Movies />} />
     <Route path='/series' element={<Series />} />
     <Route path='/search' element={<Search />} />
     <Route path='/watched' element={<Watched />} />
     <Route path='/notes' element={<Notes />} />
   </Routes>
   </Container>
  </div>;
  <SimpleBottomNavigation />
  </BrowserRouter>
  </GlobalProvider>
  </>
  );
}

export default App;
