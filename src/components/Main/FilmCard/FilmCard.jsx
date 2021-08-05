import './FilmCard.scss'

const FilmCard = (props) => {
    const { title, year, type, poster } = props;
    return (
        <div className="filmcard">
            <div className="filmcard__img">
                {
                    poster === "N/A" ?
                        <img src="https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png" alt=""/>
                        :
                        <img src={poster} alt="" />
                }
            </div>

            <div className="filmcard__title">
                <p className="filmcard__title-name">{title}</p>
                <p className="filmcard__title-year">{type}</p>
                <p className="filmcard__title-type">{year}</p>
            </div>

        </div>
    )
}

export default FilmCard;
