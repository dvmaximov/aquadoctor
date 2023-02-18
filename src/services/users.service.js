// import { getAll, insert } from './api/rest.api';

//import { Users } from 'src/models/users.model';
// import { ipcRenderer } from "electron";

class UserService {
  async getAll() {
    const users = window.DB.getTable("users");

    // const users = await getAll('users');
    //    const users = responce as Users;
    // const users = ipcRenderer.handle("DB:getTable", "users");
    return users;
  }

  async insert(users) {
    await window.DB.insert("users", users);
  }
}

export default new UserService();
