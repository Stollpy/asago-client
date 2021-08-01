import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({

    theme: {
        themes:{
            light: {
                primary: '#D49C98',
                secondary: '#FFE16E',
                info: '#343333'
            }
        }
    }

});
