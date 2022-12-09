import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions/repos';
import Repo from './repo/Repo';
import './main.less'
import { setCurrentPage } from '../../reducers/reposReducer';
import { createPages } from '../../utils/pagesCreator';
import { useNavigate } from 'react-router-dom';

const Main = () => {

    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const currentPage = useSelector(state => state.repos.currentPage)
    const totalCount = useSelector(state => state.repos.totalCount)
    const perPage = useSelector(state => state.repos.perPage)
    const isFetchError = useSelector(state => state.repos.isFetchError)
    const [searchValue, setSearchValue] = useState("")
    const pagesCount = Math.ceil(totalCount / perPage)
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // createPages(pages, pagesCount, currentPage)

    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage))
    }, [currentPage])

    function searchHandler() {
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue, currentPage, perPage))
    }

    // const navigate = useNavigate()
    // if (isFetchError) {
    //     navigate('/error')
    // }

    return (
        <div>
            {
                isFetchError &&
                <div class="alert alert-danger" role="alert">
                    You have an error on page, please update your page!
                </div>

            }
            <div className='search'>
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Input repo name" className="search-input" />
                <button className='search-btn' onClick={() => searchHandler()}>search</button>

            </div>
            {
                isFetching === false
                    ?
                    repos.map(repo => <Repo repo={repo} />)
                    :
                    <div className='fetching'>

                    </div>
            }

            <div className="pages">
                {pages.map((page, index) =>
                    <span
                        key={index}
                        className={currentPage == page ? "current-page" : "page"}
                        onClick={() => dispatch(setCurrentPage(page))}
                    >
                        {page}
                    </span>)
                }
            </div>

        </div>
    );
}

export default Main;
