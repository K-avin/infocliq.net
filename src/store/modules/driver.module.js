import ApiService from "@/common/api.service";

import { SET_DRIVERS, SET_DRIVER } from "../mutations.type";
import {
    ADD_DRIVER,
    DELETE_DRIVER,
    FETCH_DRIVER,
    FETCH_DRIVERS,
    EDIT_DRIVER
} from "../actions.type";

const state = {
    drivers: [],
    drivers_meta: {},
    driver: {},
};

const actions = {
    async [ADD_DRIVER](context, credentials) {
        ApiService.setHeader();
        await ApiService.post("drivers/create", credentials);
    },

    async [FETCH_DRIVERS](context, params) {
        ApiService.setHeader();
        const { data } = await ApiService.query("drivers", { params: params });
        context.commit(SET_DRIVERS, data);
    },

    async [FETCH_DRIVER](context, id) {
        ApiService.setHeader();
        const { data } = await ApiService.get("drivers/" + id);
        context.commit(SET_DRIVER, data.data);
    },

    async [DELETE_DRIVER](context, id) {
        ApiService.setHeader();
        await ApiService.delete("drivers/" + id);
        context.dispatch(FETCH_DRIVERS);
    },

    async [EDIT_DRIVER]({ state }) {
        ApiService.setHeader();
        await ApiService.update("drivers/" + state.driver.id, state.driver);
    },
};

const mutations = {
    [SET_DRIVERS](state, { data, meta }) {
        state.drivers = data;
        state.drivers_meta = meta;
    },

    [SET_DRIVER](state, driver) {
        state.driver = driver;
      },
};

const getters = {
    drivers_meta(state) {
        return state.drivers_meta;
    },

    drivers(state) {
        return state.drivers;
    },

    driver(state) {
        return state.driver;
    },
};

export default {
    state,
    actions,
    mutations,
    getters,
};