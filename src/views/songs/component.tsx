import { Box, Typography } from '@mui/material';
import SongCard from '../../components/cards/song/component'

const Songs = () => {
    return (
        <Box sx={{paddingTop: '2.5cm', paddingLeft: '1cm'}}>
            <Box sx ={{width:'100%'}}>
                <Typography>
                    Listen to music
                </Typography>
                <Box sx={{width: "100%",display: "flex", overflowX: "auto", gap: "60px", paddingBottom: "20px",}}>
                    <SongCard image='https://play-lh.googleusercontent.com/QovZ-E3Uxm4EvjacN-Cv1LnjEv-x5SqFFB5BbhGIwXI_KorjFhEHahRZcXFC6P40Xg' name='La cancion'></SongCard>
                    <SongCard image='https://play-lh.googleusercontent.com/QovZ-E3Uxm4EvjacN-Cv1LnjEv-x5SqFFB5BbhGIwXI_KorjFhEHahRZcXFC6P40Xg' name='La cancion'></SongCard>
                    <SongCard image='https://play-lh.googleusercontent.com/QovZ-E3Uxm4EvjacN-Cv1LnjEv-x5SqFFB5BbhGIwXI_KorjFhEHahRZcXFC6P40Xg' name='La cancion'></SongCard>
                    <SongCard image='https://play-lh.googleusercontent.com/QovZ-E3Uxm4EvjacN-Cv1LnjEv-x5SqFFB5BbhGIwXI_KorjFhEHahRZcXFC6P40Xg' name='La cancion'></SongCard>
                </Box>            
            </Box>
        </Box>
    );
}

export default Songs;