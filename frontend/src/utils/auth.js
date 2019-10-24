import Axios from "axios";
import axios from "axios";
import qs from "qs"
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

// const axios = Axios.create({
//     withCredentials: true,
//     baseURL: process.env.REACT_APP_API
// });

export const setUser = function (user) {
    localStorage.setItem('user', JSON.stringify(user))
}

export const getUser = function () {
    return JSON.parse(localStorage.getItem("user"))
}

export const logout = function () {
    return axios.get("http://localhost:5000/api/logout")
        .then((res) => {
            localStorage.removeItem("user")
            console.log("logged out")
        })
        .catch((err) => {
            console.log(err)
        })
}