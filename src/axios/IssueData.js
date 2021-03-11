import axios from "axios"

export default class IssueData {
    static _axios = axios.create({
        baseURL: "http://localhost:4000/issues"
    })

    //getting the issue from json server
    static async getIssues() {
        try {
            const response = await this._axios.get();

            if (response)
                return response.data
        } catch (error) {
            this.handleErrors(error)
            return Promise.reject(error)
        }
    }

    //getting single issue
    static async getOneIssues(id) {
        try {
            const response = await this._axios.get(`/${id}`);

            if (response)
                return response.data
        } catch (error) {
            this.handleErrors(error)
            return Promise.reject(error)
        }
    }

    //adding issue to the json server
    static async postIssues(body) {
        try {
            const response = await this._axios.post("", body);

            if (response)
                return response.data
        } catch (error) {
            this.handleErrors(error)
            return Promise.reject(error)
        }
    }

    //updating the issue
    static async updateIssues(id, body) {
        try {
            const response = await this._axios.put(`/${id}`, body);

            if (response)
                return response.data
        } catch (error) {
            this.handleErrors(error)
            return Promise.reject(error)
        }
    }

    //deleting the issue
    static async deleteIssues(id) {
        try {
            const response = await this._axios.delete(`/${id}`);

            if (response)
                return response.data
        } catch (error) {
            this.handleErrors(error)
            return Promise.reject(error)
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