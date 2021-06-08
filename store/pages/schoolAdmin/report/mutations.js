export default {
  changeIsLoading(state) {
    state.isLoading = !state.isLoading
  },
  changeTransactionType(state, payload) {
    state.transactionType = payload
  },
  changeDateStart(state, payload) {
    state.dateStart = payload
  },
  changeDateEnd(state, payload) {
    state.dateEnd = payload
  },
}
