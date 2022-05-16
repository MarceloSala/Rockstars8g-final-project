import { setAlbums } from "../features/musicSlice";
import { setLoading } from "../features/loaderSlice";
import { AppDispatch } from "../app/store";
import { Artist } from "../models/artist";

export const getAlbums = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch("http://localhost:8000/album");

    if (response.status !== 200) return "";

    const albums: Artist[] = await response.json();
    dispatch(setAlbums(albums));
  } catch (err) {
    throw err;
  } finally {
    dispatch(setLoading(false));
  }
};
