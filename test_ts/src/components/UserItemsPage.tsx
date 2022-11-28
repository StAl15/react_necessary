import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../types/types';
import { useParams, useHistory } from 'react-router-dom';

interface UserItemPageParams {
    id: string;

}

const UserItemsPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()
    const history = useHistory()

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const res = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/'+params)
            setUser(res.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={() => history.push('/users')}>
                Back
            </button>
            <h1>Page user {user?.name}</h1>
            <div>

            </div>

        </div>
    );
};

export default UserItemsPage;