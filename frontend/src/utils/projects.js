import axios from "axios";
import { logout, clearUser } from "./auth";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

export const getProjects = function () {
    return axios({
        method: "GET",
        url: "http://localhost:5000/api/projects"
    })
        .then((projects) => {
            return projects
        })
        .catch((err) => {
            if (err.status(403)) clearUser()
            throw new Error("unauthorized")
                .then((response) => {
                    history.push('/customer/login')
                })
                .catch((error) => {
                    console.log(error)
                })

        })
}

export const getSingleProject = function (projectId) {
    return axios({
        method: "GET",
        url: `http://localhost:5000/api/customer/projects/${projectId}`
    })
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.log(error)
        })
}


