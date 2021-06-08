export default {
  changePageLoading(state) {
    state.pageLoading = !state.pageLoading
  },
  changeIsLoading(state) {
    state.isLoading = !state.isLoading
  },
  changePageTitle(state, payload) {
    state.pageTitle = payload
  },
}
