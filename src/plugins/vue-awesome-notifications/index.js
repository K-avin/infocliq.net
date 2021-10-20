import AWN from "awesome-notifications";

export default function(Vue, options) {
    Vue.config.globalProperties.$awn = new AWN(options);
}
