export default {
  changePageLoading(state) {
    state.pageLoading = !state.pageLoading
  },
  changePageTitle(state, payload) {
    state.pageTitle = payload
  },
}
