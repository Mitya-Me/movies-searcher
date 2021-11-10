import './NoResultSection.scss'

const NoResultSection = () => {
    return (
        <div className='no-result-message'>
          <p>
                <span className='no-result-message__one'>Sorry </span>
                <span className='no-result-message__two'>but no results </span>
                <span className='no-result-message__three'>
                    were found for your search.
                </span>
          </p>
        </div>
    );
};

export default NoResultSection;
