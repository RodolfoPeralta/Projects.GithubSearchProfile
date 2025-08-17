export async function getProfileByUserName(username) {
    try {

        if(!username) {
            return null;
        }

        const response = await fetch(`https://api.github.com/users/${username}`);

        if(!response.ok) {
            throw(`User with name ${username} not found`);
        }

        const data = await response.json();

        if(!data) {
            return null;
        }

        const repositories = await getRepositories(data.repos_url);

        const profile = {
            name: data.login,
            img: data.avatar_url,
            location: data.location,
            bio: data.bio,
            followers: data.followers,
            following: data.following,
            repositories: repositories
        }

        return profile;
    }
    catch(error) {
        return null;
    }
}

async function getRepositories(url) {
    try {
        if(!url) {
            return [];
        }

        const response = await fetch(url);

        if(!response.ok) {
            return [];
        }

        const data = await response.json();

        const repositories = data.map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            star: repo.stargazers_count,
            fork: repo.forks_count,
            updated: repo.updated_at
        }));

        return repositories;
    }
    catch(error) {
        return [];
    }
}