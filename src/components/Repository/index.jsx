import './repository.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCodeFork } from '@fortawesome/free-solid-svg-icons';

function Repository({repository}) {

    return(
        <div className="repository-container">
            <div className='repository-title'>
                    <h3>{repository.name}</h3>
            </div>
             <div className='repository-data'>
                <div className='repository-star'>
                    <FontAwesomeIcon icon={faStar} className='star'/>
                         <p>{repository.star}</p>
                </div>
                <div className='repository-fork'>
                    <FontAwesomeIcon icon={faCodeFork} className='fork'/>
                    <p>{repository.fork}</p>
                </div>
            </div>
            <div className='repository-update'>
                <em>Updated at {repository.updated}</em>
            </div>
        </div>
    )
}

export default Repository;