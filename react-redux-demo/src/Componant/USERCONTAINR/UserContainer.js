import React, { useEffect } from 'react'
import { fetchUser } from '../../redux/user/userAction'
import { connect } from 'react-redux'

const UserContainer = ({ userData, fetchUser }) => {
    useEffect(() => {
        fetchUser()

    }, [])
    return (userData.loading ? (
        <h2>Loading...</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>User List</h2>
            {
                userData && userData.users && userData.users.map(user => <p>{user.name}</p>)
            }
        </div>
    )
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapReducerToProps = dispatch => {
    return {
        fetchUser: () => dispatch(fetchUser())
    }
}

export default connect(mapStateToProps, mapReducerToProps)(UserContainer)