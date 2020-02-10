import React, { useState } from 'react';

function RepoList () {
    const [repositories, setRepositories] = useState([]);
    const [repo, setRepo] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        setRepositories([...repositories, repo]);
        setRepo('');
    }
    return (
    <form className="container" onSubmit={handleSubmit}>
        <input data-cy="input-test" type="text" value={repo} onChange={e => setRepo(e.target.value)} />
        <button className="add-button" data-cy="btn-test" type="submit">Adicionar</button>
        <ul>
            {repositories.map(repo => <li className="list" data-cy="li-test" key={repo}>{repo}</li>)}
        </ul>
    </form>
        
    )
}

export default RepoList;