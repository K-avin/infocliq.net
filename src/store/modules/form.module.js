import validator from "@/plugins/form-validator/Validator";
import { SET_ERROR } from "../mutations.type";
// import { ADD_USER } from "../actions.type";

const state = validator;

const actions = {};

const mutations = {
  [SET_ERROR](state, data) {
    state.fill(data.errors);
  },
};

const getters = {
  form_validator(state) {
    return state;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
