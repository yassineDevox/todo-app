export class UserModel {
    constructor(
        id = 0,
        firstname = "",
        lastname = "",
        email = "",
        avatarURL = "",
        role = "") {

        this.id = id
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.avatarURL = avatarURL
        this.role=role
    }
}