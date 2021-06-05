export default {
  changePageLoading(state) {
    state.page_loading = !state.page_loading
  },
  changePageTitle(state, payload) {
    state.page_title = payload
  },
}
