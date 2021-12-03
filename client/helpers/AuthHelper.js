export default class ApiHelper {
    static isLogged () {
        return (this.getUser());
    }

    static saveUser (user) {
        // User is an object
        localStorage.setItem("user", JSON.stringify(user))
    }

    static getUser () {
        return JSON.parse(localStorage.getItem("user"));
    }
}