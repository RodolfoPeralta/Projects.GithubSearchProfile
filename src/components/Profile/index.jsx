import Label from '../Label';
import './profile.css';
import { useProfile } from '../../context/ProfileContext';
import RepositoryList from '../RepositoryList';

function Profile() {

    const { profile } = useProfile();

    return(
        <>
            { profile &&
                <div className='profile-container'>

                    <section className='profile-section-user'>
                        <div className='profile-section-user-img'>
                            <img src={profile.img} alt={`${profile.name} profile`} />
                        </div>
                        <div className='profile-section-titles'>
                            <h2>{profile.name}</h2>
                            <h3>{profile.bio}</h3>
                        </div>
                        <div className='profile-section-user-data'>
                            <Label label="Followers" info={profile.followers}/>
                            <Label label="Following" info={profile.following}/>
                            <Label label="Location" info={profile.location}/>
                        </div>
                    </section>

                    <section className='profile-section-repositories'>
                        <RepositoryList repositories={profile.repositories}/>
                    </section>
                </div>
            }
        </>
    )
}

export default Profile;