import { useState } from 'react';
import { getProfileByUserName } from '../../services/profileService';
import './search.css';
import { useProfile } from '../../context/ProfileContext';
import { CircularIndeterminate } from '../CircularIndeterminate';

function Search() {
  const [search, setSearch] = useState("");
  const [ error, setError ] = useState(null);

  const { loading, setLoading, setProfile } = useProfile();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setProfile(null);
    setError(null);

    if (!search.trim()) {
      setLoading(false);
      setError("Por favor ingrese un nombre de usuario.");
      return;
    }

    const profile = await getProfileByUserName(search);

    if (!profile) {
      setError(`No se encontró un usuario con el nombre "${search}"`);
    } 
    else {
      setProfile(profile);
    }

    setLoading(false);
  }

  return (
    <>
      <form className="search-container" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            if(!e.target.value.trim()) {
              setError(null);
            }
          }}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <div className="search-loading">
        {loading && <CircularIndeterminate />}
      </div>

      {error && ( 
        <div className="search-error">
          {error}
        </div>
      )}
    </>
  );
}

export default Search;
