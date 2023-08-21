import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, getAllUsers } from '../features/Users'
import User from './User'

const Users = () => {
    const dispatch = useDispatch()
    const { loading, users, error } = useSelector(getAllUsers)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const renderUsers = () => {
        const fetchData = users[0]

        if (loading) {
            return <p>Loading posts...</p>
        }
        if (error) {
            return <p>{error}</p>
        }
        return fetchData
            ? fetchData.map((user, index) => (
                <User key={index} id={user.id} user={user} />
            )) :
            null
    }
    return (
        <>
            <h3>This shows list of users</h3>
            {renderUsers()}
        </>
    )
}

export default Users