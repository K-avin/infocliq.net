import ApiService from "@/common/api.service";
import { SET_USERS, SET_USER } from "../mutations.type";
import {
  FETCH_USERS,
  FETCH_USER,
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
} from "../actions.type";

const state = {
  users: [],
  users_meta: {},
  user: {},
};

const actions = {
  async [ADD_USER](context, credentials) {
    ApiService.setHeader();
    await ApiService.post("users/create", credentials);
  },

  async [FETCH_USERS](context, params) {
    ApiService.setHeader();
    const { data } = await ApiService.query("users", {params: params});
    context.commit(SET_USERS, data);
  },

  async [FETCH_USER](context, id) {
    ApiService.setHeader();
    const { data } = await ApiService.get("users/" + id);
    context.commit(SET_USER, data.data);
  },

  async [DELETE_USER](context, id) {
    ApiService.setHeader();
    await ApiService.delete("users/" + id);
    context.dispatch(FETCH_USERS);
  },

  async [EDIT_USER]({state}) {
    ApiService.setHeader();
    await ApiService.update("users/" + state.user.id, state.user);
  },
};

const mutations = {
  [SET_USERS](state, {data, meta}) {
    state.users = data;
    state.users_meta = meta;
  },

  [SET_USER](state, user) {
    state.user = user;
  },
};

const getters = {
  users_meta(state) {
    return state.users_meta;
  },

  users(state) {
    return state.users;
  },

  user(state) {
    return state.user;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
