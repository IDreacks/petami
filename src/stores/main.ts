import { defineStore } from "pinia";

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    annonces: [
      {
        StartDate: "",
      },
    ],
    users: [],
    search_content: "",
    error_msg: "",
    response: "",
  }),
  persist: true,
  getters: {
    getAnnonces: (state) => state.annonces,
    getUsers: (state) => state.users,
  },
});
