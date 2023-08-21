import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchUser, getUser } from '../features/User'
import Display from './Display'

const UserDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { loading, user, error } = useSelector(getUser)
    useEffect(() => {
        dispatch(fetchUser(id))
    }, [dispatch, id])


    const renderDetails = () => {
        if (loading) {
            return <p>Loading user details...</p>;
        }
        if (error) {
            return <p>{error}</p>;
        }
        return user ? <Display id={user.id} user={user} /> : null
    }
    return (
        <div>
            {renderDetails()}
            <Link to="/users">Back to user</Link>
        </div>
    )
}

export default UserDetail