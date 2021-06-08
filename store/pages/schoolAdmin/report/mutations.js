export default {
  changeIsLoading(state) {
    state.isLoading = !state.isLoading
  },
  changeTransactionType(state, payload) {
    state.transactionType = payload
  },
}
