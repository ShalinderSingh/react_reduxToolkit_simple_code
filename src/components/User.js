import React from 'react'
import { Link } from 'react-router-dom';

const User = ({ user, id }) => {
    const { email, first_name, last_name } = user;

    return (
        <div>
            <span><strong>{id} -  </strong> </span>
            <span> {email}</span>
            <h4>{first_name}</h4>
            <h4>{last_name}</h4>
            <Link to={`/users/${user.id}`}>User Details</Link>
        </div>
    )
}

export default User