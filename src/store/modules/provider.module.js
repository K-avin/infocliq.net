import ApiService from "@/common/api.service";

import { SET_PROVIDERS, SET_PROVIDER } from "../mutations.type";
import { DELETE_PROVIDER, FETCH_PROVIDERS, FETCH_PROVIDER, ADD_PROVIDER, EDIT_PROVIDER } from "../actions.type";

const state = {
    providers: [],
    providers_meta: {},
    provider: {},
};

const actions = {

    async [ADD_PROVIDER](context, credentials) {
        ApiService.setHeader();
        await ApiService.post("providers/create", credentials);
    },

    async [FETCH_PROVIDERS](context, params) {
        ApiService.setHeader();
        const { data } = await ApiService.query("providers", { params: params });
        context.commit(SET_PROVIDERS, data);
    },

    async [FETCH_PROVIDER](context, id) {
        ApiService.setHeader();
        const { data } = await ApiService.get("providers/" + id);
        context.commit(SET_PROVIDER, data.data);
    },

    async [DELETE_PROVIDER](context, id) {
        ApiService.setHeader();
        await ApiService.delete("providers/" + id);
        context.dispatch(FETCH_PROVIDERS);
    },

    async [EDIT_PROVIDER]({ state }) {
        ApiService.setHeader();
        await ApiService.update("providers/" + state.provider.id, state.provider);
    },


};

const mutations = {
    [SET_PROVIDERS](state, { data, meta }) {
        state.providers = data;
        state.providers_meta = meta;
    },

    [SET_PROVIDER](state, provider) {
        state.provider = provider;
    },

};

const getters = {
    providers_meta(state) {
        return state.providers_meta;
    },

    providers(state) {
        return state.providers;
    },

    provider(state) {
        return state.provider;
    },

};

export default {
    state,
    actions,
    mutations,
    getters,
};