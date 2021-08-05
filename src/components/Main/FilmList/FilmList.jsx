import FilmCard from "../FilmCard/FilmCard";

import "./FilmsList.scss";

const FilmsList = (props) => {
    const { movies = [] } = props;

    return (
        <div className='filmslist'>
            {movies.length ? (
                movies.map((film) => (
                    <FilmCard
                        key={film.imdbID}
                        title={film.Title}
                        year={film.Year}
                        id={film.imdbID}
                        type={film.Type}
                        poster={film.Poster}
                    />
                ))
            ) : (
                <div className='no-result-message'>
                    <span className='no-result-message__one'>Sorry</span>
                    <span className='no-result-message__two'>
                        but no results
                    </span>
                    <span className='no-result-message__three'>
                        were found for your search.
                    </span>
                    
                </div>
            )}
        </div>
    );
};

export default FilmsList;
