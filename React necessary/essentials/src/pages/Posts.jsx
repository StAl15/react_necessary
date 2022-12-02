
import { useState, useEffect, useRef } from "react"
import { usePosts } from "../hooks/usePosts"
import PostService from "../API/PostService"
import { getPageCount } from "../utils/pages"
import MyButton from "../Components/UI/button/MyButton"
import MyModal from "../Components/UI/MyModal/MyModal"
import PostFilter from "../Components/PostFilter"
import PostList from "../Components/PostList"
import Pagination from "../Components/UI/Pagination/Pagination"
import { Pagination as PaginationMaterial } from "@mui/material"
import PostForm from "../Components/PostForm"
import Loader from "../Components/UI/Loader/Loader"
import { useObserver } from "../hooks/useObserver"
import MySelect from "../Components/UI/select/MySelect"


function Posts() {

    const [posts, setPosts] = useState([])


    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const lastElement = useRef()

    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    // const observer = useRef()

    const [isPostLoading, setIsPostLoading] = useState(false)

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    async function fetchPosts(limit, page) {
        setIsPostLoading(true)
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
        setIsPostLoading(false)
    }

    useObserver(lastElement, page < totalPages, isPostLoading, () => {
        console.log('use observer')
        setPage(page + 1)
    })


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }



    return (
        <div className="App">
            <MyButton sx={{ mt: 3 }} variant="outlined" onClick={() => setModal(true)}>
                Create user
            </MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>

            <hr style={{ margin: '15px 0' }} />

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            <MySelect

                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Quantity elems on page"
                options={[
                    { value: 5, name: '5' },
                    { value: 10, name: '10' },
                    { value: 25, name: '25' },
                    { value: -1, name: 'Show all' },
                ]}
            />

            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="List posts 1" />

            <div ref={lastElement} />

            {isPostLoading &&
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}> <Loader /> </div>
            }

            {/* custom pagination */}
            {/* <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages} /> */}
            <PaginationMaterial sx={{ mt: 3, mb: 3 }} variant="outlined" color="primary" count={totalPages} page={page} onChange={changePage} />


        </div>
    );
}

export default Posts;
