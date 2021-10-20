import ApiService from "@/common/api.service";

import { SET_ROLES, SET_ROLE, SET_GROUP_PERMISSIONS } from "../mutations.type";
import {
  FETCH_ROLES,
  FETCH_ROLE,
  ADD_ROLE,
  DELETE_ROLE,
  EDIT_ROLE,
  FETCH_GROUP_PERMISSIONS,
} from "../actions.type";

const state = {
  roles: [],
  roles_meta: {},
  role: {},
  group_permissions: [],
};

const actions = {
  async [ADD_ROLE](context, formData) {
    ApiService.setHeader();
    const { data } = await ApiService.post("roles/create", formData);
    context.commit(SET_ROLE, data.data);
  },

  async [FETCH_ROLES](context, params) {
    ApiService.setHeader();
    const { data } = await ApiService.query("roles", { params: params });
    context.commit(SET_ROLES, data);
  },

  async [FETCH_ROLE](context, id) {
    ApiService.setHeader();
    const { data } = await ApiService.get("roles/" + id);
    context.commit(SET_ROLE, data.data);
  },

  async [DELETE_ROLE](context, id) {
    ApiService.setHeader();
    await ApiService.delete("roles/" + id);
    context.dispatch(FETCH_ROLES);
  },

  async [EDIT_ROLE](context, formData) {
    ApiService.setHeader();
    const { data } = await ApiService.update(
      "roles/" + state.role.id,
      formData
    );
    context.commit(SET_ROLE, data.data);
  },

  async [FETCH_GROUP_PERMISSIONS](context) {
    ApiService.setHeader();
    const { data } = await ApiService.get("permissions");
    context.commit(SET_GROUP_PERMISSIONS, data);
  },
};

const mutations = {
  [SET_ROLES](state, { data, meta }) {
    state.roles = data;
    state.roles_meta = meta;
  },

  [SET_ROLE](state, role) {
    state.role = role;
  },

  [SET_GROUP_PERMISSIONS](state, { data }) {
    state.group_permissions = data;
  },
};

const getters = {
  roles_meta(state) {
    return state.roles_meta;
  },

  roles(state) {
    return state.roles;
  },

  role(state) {
    return state.role;
  },

  group_permissions(state) {
    return state.group_permissions;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
