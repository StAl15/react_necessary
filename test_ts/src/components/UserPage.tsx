import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { usenavigate } from 'react-router-dom';
import { ITodo, IUser } from '../types/types';
import List from './List';
import UserItem from './UserItem';

const UserPage = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const navigate = usenavigate()

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users/')
            setUsers(res.data)
        } catch (e) {
            alert(e)
        }
    }


    return (
        <div>
            <List
                items={users}
                renderItem={(user: IUser) =>
                     <UserItem 
                    onClick={(user) => navigate('/users/'+user.id)}
                    user={user} 
                    key={user.id} />}
            />

        </div>
    );
};

export default UserPage;