import { RootState } from "../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Artist } from "../models/artist";
import { Song } from "../models/song";
import { Album } from "../models/album";
import { Genre } from "../models/genre";

export interface MusicState {
    artists: Artist[];
    albums: Album[];
    songs: Song[];
    genres: Genre[];
}

const initialState: MusicState = {
    artists: [],
    albums: [],
    songs: [],
    genres: [],
};

export const MusicSlice = createSlice({
    name: "Music",
    initialState,
    reducers: {
        setSongs: (state, action) => {
        state.songs = action.payload;
        },
        setAlbums: (state, action) => {
        state.albums = action.payload;
        },
        setArtists: (state, action) => {
        state.artists = action.payload;
        },
        deleteArtist: (state, action) => {
        state.artists.splice(action.payload, 1);
        },
        addArtist: (state, action) => {
        state.artists.push(action.payload);
        },
        updateArtist: (state, action) => {
        state.artists[action.payload.index] = action.payload.genre;
        },
        setGenres: (state, action) => {
        state.genres = action.payload;
        },
        deleteGenre: (state, action) => {
        state.genres.splice(action.payload, 1);
        },
        addGenre: (state, action) => {
        state.genres.push(action.payload);
        },
        updateGenre: (state, action) => {
        state.genres[action.payload.index] = action.payload.genre;
        },
    },
});

export const musicSelector = (state: RootState) => state.music;

export const artistsSelector = (state: RootState) => musicSelector(state).artists;
export const albumsSelector = (state: RootState) => musicSelector(state).albums;
export const songsSelector = (state: RootState) => musicSelector(state).songs;
export const genresSelector = (state: RootState) => musicSelector(state).genres;

export const {
    setArtists, deleteArtist, addArtist, updateArtist, 
    setAlbums, 
    setSongs,
    setGenres, deleteGenre, addGenre, updateGenre,
} = MusicSlice.actions;

export default MusicSlice.reducer;
