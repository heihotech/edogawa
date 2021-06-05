<template>
  <div>
    <b-table
      :loading="isLoading"
      :paginated="paginated"
      :per-page="perPage"
      :striped="true"
      :hoverable="true"
      default-sort="id"
      default-sort-direction="desc"
      :data="histories"
    >
      <template slot-scope="props">
        <b-table-column label="Nominal" field="nominal_text">
          {{ props.row.nominal_text }}
        </b-table-column>
        <b-table-column label="Status" field="status_text">
          <span :class="`tag ${props.row.status_color}`">
            {{ props.row.status_text }}
          </span>
        </b-table-column>
        <b-table-column label="Tanggal">
          <small class="has-text-grey is-abbr-like">{{
            props.row.created_formated_text
          }}</small>
        </b-table-column>
        <b-table-column custom-key="actions" class="is-actions-cell">
          <div class="buttons is-right">
            <nuxt-link
              :to="{ name: 'client-id', params: { id: props.row.id } }"
              class="button is-small is-primary"
            >
              <b-icon icon="account-edit" size="is-small" />
            </nuxt-link>
          </div>
        </b-table-column>
      </template>

      <section slot="empty" class="section">
        <div class="content has-text-grey has-text-centered">
          <template v-if="isLoading">
            <p>
              <b-icon icon="dots-horizontal" size="is-large" />
            </p>
            <p>Memuat data&hellip;</p>
          </template>
          <template v-else>
            <p>
              <b-icon icon="emoticon-sad" size="is-large" />
            </p>
            <p>Tidak ada data&hellip;</p>
          </template>
        </div>
      </section>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PayoutHistoryTable',
  props: {
    dataUrl: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      histories: [],
      isLoading: false,
      paginated: false,
      perPage: 10,
    }
  },
  computed: {},
  mounted() {
    if (this.dataUrl) {
      this.isLoading = true
      setTimeout(() => {
        axios
          .get(this.dataUrl)
          .then((r) => {
            this.isLoading = false
            if (r.data && r.data.data) {
              if (r.data.data.length > this.perPage) {
                this.paginated = true
              }
              this.histories = r.data.data
            }
          })
          .catch((e) => {
            this.isLoading = false
            this.$buefy.toast.open({
              message: `Error: ${e.message}`,
              type: 'is-danger',
            })
          })
      }, 2000)
    }
  },
  methods: {},
}
</script>
