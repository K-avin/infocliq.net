import ApiService from "@/common/api.service";

import { SET_CUSTOMERS, SET_CUSTOMER } from "../mutations.type";
import { FETCH_CUSTOMERS, FETCH_CUSTOMER, ADD_CUSTOMER, DELETE_CUSTOMER, EDIT_CUSTOMER } from "../actions.type";

const state = {
    customers: [],
    customers_meta: {},
    customer: {},
};

const actions = {

    async [ADD_CUSTOMER](context, credentials) {
        ApiService.setHeader();
        const { data } = await ApiService.post("customers/create", credentials);
        context.commit(SET_CUSTOMER, data.data);
    },

    async [FETCH_CUSTOMERS](context, params) {
        ApiService.setHeader();
        const { data } = await ApiService.query("customers", { params: params });
        context.commit(SET_CUSTOMERS, data);
    },

    async [FETCH_CUSTOMER](context, id) {
        ApiService.setHeader();
        const { data } = await ApiService.get("customers/" + id);
        context.commit(SET_CUSTOMER, data.data);
    },

    async [DELETE_CUSTOMER](context, id) {
        ApiService.setHeader();
        await ApiService.delete("customers/" + id);
        context.dispatch(FETCH_CUSTOMERS);
    },

    async [EDIT_CUSTOMER](context) {
        const { state } = context;
        ApiService.setHeader();
        const { data } = await ApiService.update("customers/" + state.customer.id, state.customer);
        context.commit(SET_CUSTOMER, data.data);
    },

};

const mutations = {
    [SET_CUSTOMERS](state, { data, meta }) {
        state.customers = data;
        state.customers_meta = meta;
    },

    [SET_CUSTOMER](state, customer) {
        state.customer = customer;
      },

};

const getters = {
    customers_meta(state) {
        return state.customers_meta;
    },

    customers(state) {
        return state.customers;
    },

    customer(state) {
        return state.customer;
    },

};

export default {
    state,
    actions,
    mutations,
    getters,
};