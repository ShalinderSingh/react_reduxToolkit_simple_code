import React from 'react'

const Display = ({ user }) => {
    const { id, email, first_name, last_name, avatar } = user

    return (
        <div>
            <span> {id} </span>
            <span> {email} </span>
            <h4>{first_name}</h4>
            <h4>{last_name}</h4>
            <img src={avatar} alt={`Avatar for ${first_name} ${last_name}`} style={{ width: "20%", height: "200px" }} />
        </div>
    )
}

export default Display