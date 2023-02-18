import { defineStore } from "pinia";
import { liteCopy } from "src/services/tools";
import { useUsersStore } from "src/stores/users.store";

export const useProgramsStore = defineStore("programs", {
  state: () => ({
    programs: [],
  }),
  getters: {
    defaultPrograms: (state) => {
      return state.programs.filter((program) => program.defaultProgram);
    },
    notDefaultPrograms: (state) => {
      return state.programs.filter((program) => !program.defaultProgram);
    },
    allPrograms: (state) => {
      return state.programs;
    },
    programByID: (state) => {
      return (programID) =>
        state.programs.find((program) => program.id === programID);
    },
    circleById: (state) => (id) =>
      Object.values(state.circles).find((circle) => circle.id === id),
    flickDuration: (state) => (id) => {
      const circle = this.circleById(id);
      return (
        Number(circle.upTime) +
        Number(circle.constTime) +
        Number(circle.downTime)
      );
    },
  },
  actions: {
    requestPrograms() {
      const programs = liteCopy(window.DB.getAll("programs"));

      this.programs = programs;
    },
    addProgramToUser(userID, program) {
      const usersStore = useUsersStore();
      usersStore.addProgram(userID, program);
    },
  },
});
