import { useEffect, useMemo } from "react";
import { Box} from '@mui/material';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import { useAppSelector } from "./app/hook";

import { tokenSelector } from "./features/authSlice";

import SideMenu  from './components/sideMenu/component';

import Artists from './views/artists/component';
import Albums from './views/albums/component';
import Songs from './views/songs/component';
import Home from './views/home/component';

const publicPaths = ["/", "/artists", "/songs", "/albums",];
function App() {
  const token = useAppSelector(tokenSelector);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const publicPath = publicPaths.some((path) => path === location.pathname);
    if(token === undefined && !publicPath) navigate("/");
  }, [location, navigate, token]);

  return ( 
    <>
      <Box sx={{ display: 'flex' }}>
          {<SideMenu/>}
          <Box>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/artists" element={<Artists/>}/>
              <Route path="/songs" element={<Songs/>}/>
              <Route path="/albums" element={<Albums/>}/>
            </Routes>
            
          </Box>
      </Box>
    </>
  );
}

export default App;
