import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/user';
import { Dispatch } from 'redux';
import { useActions } from '../hooks/useAction';

const UserList: React.FC = () => {
    const { users, error, loading } = useTypedSelector(state => state.user)
    // const dispatch: Dispatch<any> = useDispatch()
    const { fetchUsers } = useActions()

    useEffect(() => {
        // dispatch(fetchUsers()) //or add "as any" above the "Dispatch<any>" statement
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Loading ...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }



    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    );
};

export default UserList;