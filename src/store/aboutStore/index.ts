import aboutActions from './actions';
import aboutGetters from './getters';
import aboutMutations from './mutations';

const aboutStore = {
    namespaced: true,
    state() {
        return {
            countAbout: 1
        }
    },
    getters: aboutGetters,
    mutations: aboutMutations,
    actions: aboutActions
}

export default aboutStore;