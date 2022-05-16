import { setArtists } from "../features/musicSlice";
import { setLoading } from "../features/loaderSlice";
import { AppDispatch } from "../app/store";
import { Artist } from "../models/artist";

// import {
//     CreateArtistDTO,
//     ArtistPosition,
//     UpdateArtistDTO,
// } from "../views/admin/artist/form";
  
export const getArtists = () => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch("http://localhost:8000/artist");
  
      if (response.status !== 200) return "";
  
      const artists: Artist[] = await response.json();
      dispatch(setArtists(artists));
    } catch (err) {
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
};