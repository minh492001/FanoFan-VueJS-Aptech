// import axiosClient from "../../services/user-api";

// const state = {
//   user: {
//     data: {},
//     token: sessionStorage.getItem('TOKEN'),
//   },
// };

// const mutations = {
//   logout: (state) => {
//     state.user.data = {};
//     state.user.token = null;
//   },
//   setNewUser: (state,res) => {
//     state.user.data = res.user;
//     state.user.token = res.token
//     sessionStorage.setItem('TOKEN',res.token)
//   },
//   //   login : (state) =>{

//   //   }
// };

// const actions = {
//   async register({ commit }, user) {
//     return await axiosClient.post("/register", user).then(({ data }) => {
//       commit("setNewUser", data);
//       console.log('actions');
//       return data;
//     });
//   },
// };

// const getters = {};
// export default {
//   namespaced: true,
//   state,
//   mutations,
//   getters,
//   actions,
// };
