import axios from "axios";
import qs from "qs";

// const axios = Axios.create({
//     withCredentials: true,
//     baseURL: process.env.REACT_APP_API
// });

export const setUser = function (user) {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = function () {
  return JSON.parse(localStorage.getItem("user"));
};

export const getCustomer = function () {
  // return setTimeout(function () { JSON.parse(localStorage.getItem("cus")) }, 1000)
  return JSON.parse(localStorage.getItem("customer"))
}

export const getProfessional = function () {
  return JSON.parse(localStorage.getItem("professional"))
}

export const clearUser = function () {
  localStorage.removeItem("professional");
  localStorage.removeItem("customer");
}

export const login = function (email, password) {
  return axios({
    url: "http://localhost:5000/api/customer/login",
    data: qs.stringify({ email, password }),
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" }
  })
    .then(customer => {
      localStorage.setItem("customer", JSON.stringify(customer.data));
    })
    .catch(err => {
      console.log(err);
    });
};

export const prologin = function (email, password) {
  return axios({
    url: "http://localhost:5000/api/professional/login",
    data: qs.stringify({ email, password }),
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" }
  })
    .then(pro => {
      localStorage.setItem("professional", JSON.stringify(pro.data));
    })
    .catch(err => {
      console.log(err)
    })
};

export const logout = function () {
  return axios
    .get("http://localhost:5000/api/logout")
    .then(res => {
      clearUser()
      console.log("logged out");
    })
    .catch(err => {
      console.log(err);
    });
};

