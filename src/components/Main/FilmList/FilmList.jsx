import FilmCard from "../FilmCard/FilmCard";
import NoResultSection from "../NoResultSection/NoResultSection";

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
                <NoResultSection />
            )}
        </div>
    );
};

export default FilmsList;
