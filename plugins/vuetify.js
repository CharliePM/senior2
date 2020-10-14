import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import {firestorePlugin} from 'vuefire'
import {rtdbPlugin} from 'vuefire'

Vue.use(rtdbPlugin)
Vue.use(firestorePlugin);



Vue.use(Vuetify, {customProperties: true})
