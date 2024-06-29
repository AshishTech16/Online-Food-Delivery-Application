// Admin function is used for maintaing the state of the Admin.
import React from 'react'
import { useDispatch } from 'react-redux'
import { sendAdminAuthRequest } from '../../Api-helpers/api-helpers'
import { adminActions } from '../../store'
import AuthForm from '../Auth/AuthForm'

const Admin = () => {
    const dispatch = useDispatch();
    // onResReceived sends the state to reducer using dispatch hook that maintains the state of the Application in store. 
    const onResReceived = (data) => {
        console.log(data);
        dispatch(adminActions.login());
        localStorage.setItem("adminId",data.id);
        localStorage.setItem("token",data.token);
    }
    // on submitting it checks is admin login successful,if its then it invokes onResReceived.
    const getData = (data) => {
        console.log("Admin",data);
        sendAdminAuthRequest(data.inputs)
        .then(onResReceived)
        .catch((err)=> console.log(err));
    }

    return (
        <div><AuthForm onSubmit={getData} isAdmin={true}/></div>
    )
}

export default Admin;