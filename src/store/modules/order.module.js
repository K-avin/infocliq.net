import ApiService from "@/common/api.service";

import { SET_ORDERS, SET_ORDER } from "../mutations.type";
import {
  FETCH_ORDERS,
  FETCH_ORDER,
  ADD_ORDER,
  EDIT_ORDER,
  DELETE_ORDER,
  DELETE_ORDER_DOCUMENT
} from "../actions.type";

const state = {
  orders: [],
  orders_meta: {},
  order: {},
};

const actions = {
  async [ADD_ORDER](context, credentials) {
    ApiService.setHeader();
    await ApiService.post("orders/create", credentials);
  },

  async [FETCH_ORDERS](context, params) {
    ApiService.setHeader();
    const { data } = await ApiService.query("orders", { params: params });
    context.commit(SET_ORDERS, data);
  },

  async [FETCH_ORDER](context, id) {
    ApiService.setHeader();
    const { data } = await ApiService.get("orders/" + id);
    context.commit(SET_ORDER, data.data);
  },

  async [DELETE_ORDER](context, id) {
    ApiService.setHeader();
    await ApiService.delete("orders/" + id);
    context.dispatch(FETCH_ORDERS);
  },

  async [DELETE_ORDER_DOCUMENT](context, id) {
    ApiService.setHeader();
    await ApiService.delete("delete/file/" + id);
    context.dispatch(FETCH_ORDERS);
  },

  async [EDIT_ORDER](context, formData) {
    const { state } = context;
    ApiService.setHeader();
    const { data } = await ApiService.update(
      "orders/" + state.order.id,
      formData
    );
    context.commit(SET_ORDER, data.data);
  },
};

const mutations = {
  [SET_ORDERS](state, { data, meta }) {
    state.orders = data;
    state.orders_meta = meta;
  },

  [SET_ORDER](state, order) {
    state.order = order;
  },
};

const getters = {
  orders_meta(state) {
    return state.orders_meta;
  },

  orders(state) {
    return state.orders;
  },

  order(state) {
    return state.order;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
