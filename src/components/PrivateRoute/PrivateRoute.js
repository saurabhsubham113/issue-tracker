import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { toast } from 'react-toastify'

const PrivateRoute = ({ component: Component, ...rest }) => {

    const user = useSelector(state => state.users.user)
    const toastMessage = () => {
        toast("you need to sign in First",{
            type:"info"
        })
    }
    return (
        <Route 
            {...rest}
            render={props => (
                user ? <Component {...props} /> : (
                <>
                {toastMessage()}
                <Redirect to="/signin" />
                </>
                )
            )}
        ></Route>
    )
}

export default PrivateRoute
