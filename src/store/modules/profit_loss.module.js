import ApiService from "@/common/api.service";

import { SET_POFITANDLOSS_DAYS, SET_POFITANDLOSS_MONTHS, SET_POFITANDLOSS_YEARS } from "../mutations.type";
import { FETCH_POFITANDLOSS_DAYS, FETCH_POFITANDLOSS_MONTHS, FETCH_POFITANDLOSS_YEARS } from "../actions.type";

const state = {
    summary_data: {},

    profitandlossdays: [],
    profitandlossdays_meta: {},

    profitandlossmonths: [],
    profitandlossmonths_meta: {},

    profitandlossyears: [],
    profitandlossyears_meta: {},
};

const actions = {
    async [FETCH_POFITANDLOSS_DAYS](context, params) {
        ApiService.setHeader();
        const { data } = await ApiService.query("report/accounting/day",{ params: params });
        context.commit(SET_POFITANDLOSS_DAYS, data);
    },

    async [FETCH_POFITANDLOSS_MONTHS](context, params) {
        ApiService.setHeader();
        const { data } = await ApiService.query("report/accounting/monthly", { params: params });
        context.commit(SET_POFITANDLOSS_MONTHS, data);
    },

    async [FETCH_POFITANDLOSS_YEARS](context, params) {
        ApiService.setHeader();
        const { data } = await ApiService.query("report/accounting/yearly", { params: params });
        context.commit(SET_POFITANDLOSS_YEARS, data);
    },
};

const mutations = {
    [SET_POFITANDLOSS_DAYS](state, { data, meta, summary_data }) {
        state.profitandlossdays = data;
        state.profitandlossdays_meta = meta;
        state.summary_data = summary_data;
    },

    [SET_POFITANDLOSS_MONTHS](state, { data, meta, summary_data }) {
        state.profitandlossmonths = data;
        state.profitandlossmonths_meta = meta;
        state.summary_data = summary_data;
    },

    [SET_POFITANDLOSS_YEARS](state, { data, meta, summary_data }) {
        state.profitandlossyears = data;
        state.profitandlossyears_meta = meta;
        state.summary_data = summary_data;
    },
};

const getters = {    
    summary_data(state) {
        return state.summary_data;
    },

    profitandlossdays_meta(state) {
        return state.profitandlossdays_meta;
    },

    profitandlossdays(state) {
        return state.profitandlossdays;
    },

    profitandlossmonths_meta(state) {
        return state.profitandlossmonths_meta;
    },

    profitandlossmonths(state) {
        return state.profitandlossmonths;
    },

    profitandlossyears_meta(state) {
        return state.profitandlossyears_meta;
    },

    profitandlossyears(state) {
        return state.profitandlossyears;
    },

};

export default {
    state,
    actions,
    mutations,
    getters,
};