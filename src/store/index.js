import { createStore } from 'vuex';

import form from "./modules/form.module";
import auth from "./modules/auth.module";
import user from "./modules/user.module";
import role_and_permission from "./modules/role_and_permission.module";
import driver from "./modules/driver.module";
import customer from "./modules/customer.module";
import order from "./modules/order.module";
import provider from "./modules/provider.module";
import profit_loss from "./modules/profit_loss.module";

const store = createStore({
  modules: {
    form,
    auth,
    user,
    role_and_permission,
    driver,
    customer,
    order,
    provider,
    profit_loss,
  }
});

export default store;