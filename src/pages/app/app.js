import Vue from 'vue';
import sync from 'vuex-router-sync';

import './module';
import store from './store';
import router from './router';

// sync(store, router);

new Vue({
    el: '#app',
    store,
    router,
    render(h) {
        return h('router-view', null, '');
    }
})