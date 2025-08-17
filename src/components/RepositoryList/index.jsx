import Repository from "../Repository";
import './repositoryList.css';

function RepositoryList({repositories = []}) {

    return(
        <>
            <h3>Repositories</h3>
            <div className="repository-list-container">
                {repositories.map(repo => 
                <a href={repo.url} target="_blank" key={repo.id} rel="noopener noreferrer">
                    <Repository repository={repo}/>
                </a>)}  
            </div>
        </>
        
    )
}

export default RepositoryList;