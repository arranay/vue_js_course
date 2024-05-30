import { createStore } from 'vuex';
import {indexOf} from "core-js/internals/array-includes.js";

export default createStore({
    state: {
        card: [], // { flower, count }
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
