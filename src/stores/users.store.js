import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

import { liteCopy } from "src/services/tools";
import { useProgramsStore } from "src/stores/programs.store";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
  }),
  getters: {
    currentUser(state) {
      const user = state.users.find((user) => user.current);
      return user;
    },
    currentUserPrograms(state) {
      const user = state.users.find((user) => user.current);
      return user.programs;
    },
  },
  actions: {
    requestUsers() {
      const users = window.DB.getAll("users");
      this.users = users;
    },
    insertUser(name) {
      const newName = name.trim();
      if (newName === "") return;
      const newUser = {
        id: uuidv4(),
        name: newName,
        programs: [],
        current: false,
        image: null,
      };
      const programsStore = useProgramsStore();
      for (let program of liteCopy(programsStore.defaultPrograms)) {
        const { id, name, defaultProgram } = program;
        newUser.programs.push({ id, name, defaultProgram });
      }
      this.users.push(newUser);
      this.changeCurrentUser(newUser?.id);
    },
    deleteCurrentUser(id) {
      let users = liteCopy(this.users);
      users = users.filter((user) => user.id !== id);
      this.users = users;
      if (users.length > 0) {
        this.changeCurrentUser(users[0]["id"]);
      } else window.DB.saveTable("users", users);
    },
    changeCurrentUser(id) {
      if (!id) return null;
      const users = liteCopy(this.users);

      const indexNewCurrent = users.findIndex((item) => item.id === id);
      if (indexNewCurrent >= 0) {
        for (let user of users) user.current = false;
        users[indexNewCurrent].current = true;
      }
      this.users = users;
      window.DB.saveTable("users", users);
    },
    addProgram(userID, program) {
      const users = liteCopy(this.users);
      const userIndex = this.users.findIndex((item) => item.id === userID);
      const programIndex = users[userIndex].programs.findIndex(
        (item) => item.id === program.id
      );
      if (programIndex >= 0) return;
      users[userIndex].programs.push(liteCopy(program));
      this.users = users;
      window.DB.saveTable("users", users);
    },
    deleteUserProgram(userID, programID) {
      const users = liteCopy(this.users);
      const userIndex = this.users.findIndex((item) => item.id === userID);
      const newUserPrograms = users[userIndex].programs.filter(
        (item) => item.id !== programID
      );
      users[userIndex].programs = newUserPrograms;
      this.users = users;
      window.DB.saveTable("users", users);
    },
  },
});
