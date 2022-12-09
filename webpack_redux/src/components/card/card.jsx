import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getContributors, getCurrentRepo } from '../actions/repos';
import './card.less'

const Card = (props) => {
    const { username, reponame } = useParams()
    const [repo, setRepo] = useState({ owner: {} })
    const [contributors, setContributors] = useState([])

    useEffect(() => {
        getCurrentRepo(username, reponame, setRepo)
        getContributors(username, reponame, setContributors)
    }, [])

    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate(-1)} type="button" class="btn btn-light">BACK</button>
            <div class="card mb-3" style={{ maxWidth: '800px', height: 'auto' }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={repo.owner.avatar_url} class="img-fluid rounded-start" alt="" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{repo.name}</h5>
                            <p class="card-text"><small class="text-muted">{repo.stargazers_count}</small></p>
                            <p class="card-text">{contributors.map((c, index) =>
                                <div>{index + 1}. {c.login}</div>
                            )}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card;

{/* <div>
            <button onClick={() => navigate(-1)} className='back-btn'>BACK</button>
            <div className='card mb-3'>
                <img src={repo.owner.avatar_url} alt='' />
                <div className='name'>
                    {repo.name}
                </div>
                <div className='stars'>
                    {repo.stargazers_count}
                </div>
            </div>
            {contributors.map((c, index) =>
                <div>{index + 1}. {c.login}</div>
            )}
        </div> */}