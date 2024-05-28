import { createStore } from 'vuex';

export default createStore({
    state: {
        card: [],
    },
    mutations: {
        addToCard(state, flower) {
            state.card.push(flower);
        },
        removeFromCard(state, index) {
            state.card.splice(index, 1);
        }
    },
    actions: {
        addToCard({ commit }, flowers) {
            commit('addToCard', flowers);
        },
        removeFromCard({ commit }, index) {
            commit('removeFromCard', index);
        },
    },
    getters: {
        card: state => state.card,
    }
});
