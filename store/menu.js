export const state = () => ({
  menu: []
});

export const mutations = {
  storePageMenu(state, listMenu) {
    state.menu = listMenu;
  }
};

export const getters = {
  getMenu(state) {
    return state.menu;
  }
};
