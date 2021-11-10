import { useState, useEffect } from "react";

import SearchPanel from "./SearchPanel/SearchPanel";
import FilmList from "./FilmList/FilmList";
import Preloader from "./Preloader/Preloader";

import "./Main.scss";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const searchMovies = (str, category = "all") => {
        setLoading(true);

        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${category !== "all" ? `&type=${category}` : ""
            }`
        )
            .then((resp) => resp.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=black`)
            .then((resp) => resp.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <main className='main'>
            <SearchPanel searchMovies={searchMovies} />

            <div className='container'>
                {loading ? <Preloader /> : <FilmList movies={movies} />}
            </div>
        </main>
    );
};

export default Main;
