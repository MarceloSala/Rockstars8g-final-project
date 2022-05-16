import { Box, Typography, Button } from "@mui/material";
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Songs from '../songs/component';

const Home = () => {
    
    return (
        <>
        <Box sx={{paddingTop: '2.5cm', paddingLeft: '1cm'}}>
            <Box>
            <Typography variant="h2" >
                Only the best songs
            </Typography>
            </Box>
            <Box sx={{paddingTop: '.5cm', width: '100%', textAlign: 'center'}}>
                <Button variant="contained" href="songs" >
                    Get Started
                </Button> 
            </Box>
        </Box>
        </>
    );
};

export default Home;
