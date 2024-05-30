import { createStore } from 'vuex';

export default createStore({
    state: {
        card: [], // { flower, count }
        user: null, // { name, email, password }
    },
    mutations: {
        addToCard(state, flower) {
            const cardItem = state.card.find(f => f.flower.id === flower.id);
            if (cardItem) cardItem.count++;
            else state.card.push({ flower, count: 1 })
        },
        removeFromCard(state, id) {
            const flower = state.card.find(f => f.flower.id === id);
            if (flower) flower.count--;
            if (flower.count === 0) state.card.splice(state.card.indexOf(flower), 1);
        },
        saveUser(state, user) { state.user = user; },
        deleteUser(state) { state.user = null; },
    },
    actions: {
        addToCard({ commit }, flowers) { commit('addToCard', flowers); },
        removeFromCard({ commit }, index) { commit('removeFromCard', index); },
        saveUser({ commit }, user) { commit('saveUser', user); },
        deleteUser({ commit }) { commit('deleteUser'); },
    },
    getters: {
        card: state => state.card,
        user: state => state.user
    }
});
