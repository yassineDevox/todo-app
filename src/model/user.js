export class UserModel {
  constructor(
    id = 0,
    firstname = "",
    lastname = "",
    email = "",
    avatarURL = "",
    role = "",
    password = "",
    rPassword = ""
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.avatarURL = avatarURL;
    this.role = role;
    this.password = password;
    this.rPassword = rPassword;
  }
}