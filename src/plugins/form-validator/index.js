// import Validator from './Validator';
import axios from 'axios';

class FormValidator {
    install(Vue) {
        const Validator = Vue.config.globalProperties.$form;
        axios.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                const { status = 0, data = {} } = error.response;
                if (status === 422) {
                    Vue.config.globalProperties.$form.fill(data.errors);
                }
                return Promise.reject(error);
            }
        );

        Vue.mixin({
            beforeCreate() {
                // this.$options.$errors = Validator;
                if (!this.$options.computed) {
                    this.$options.computed = {};
                }
                this.$options.computed.$errors = function () {
                    return Validator;
                };
            },
        });
    }
}

// export { default as Validator } from './Validator';
// export { default as BaseProxy } from './BaseProxy';
// export { default as BaseTransformer } from './BaseTransformer';
// export { default as PaginationTransformer } from './PaginationTransformer';
export { sleep, cloneDeep, isFile, isArray, objectToFormData, merge } from './util';
export default new FormValidator();
