import axios from "axios";

export default class UserData {
    static _axios = axios.create({
        baseURL: "http://localhost:4000/users"
    })

    // adding user to the json object
    static async postUser(body) {
        try {
            const response = await this._axios.post("", body)
            if (response)
                return response.data
        } catch (error) {
            this.handleErrors(error)
            Promise.reject(error)
        }
    }

    //getting user using email and password
    static async getUser(email, password) {
        try {
            const response = await this._axios.get(`/?email=${email}&password=${password}`)
            if (response)
                return response.data
        } catch (error) {
            this.handleErrors(error)
            Promise.reject(error)
        }
    }


    //handling the error
    static handleErrors(error) {
        if (error.response) {
            const message = error.response.data.message
            const errorMessage = message ? message : 'something went wrong'
            console.log(errorMessage);
        } else {
            console.log("error message");
        }
    }
}