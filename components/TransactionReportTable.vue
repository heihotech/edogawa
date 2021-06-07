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
      :data="reports"
    >
      <template slot-scope="props">
        <b-table-column label="Nama Tagihan" field="itemName">
          {{ props.row.itemName }}
        </b-table-column>
        <b-table-column label="Nama Siswa" field="fullName">
          {{ props.row.student.fullName }}
        </b-table-column>
        <b-table-column label="Nominal/Total">
          {{ props.row.itemPaidText }}/{{ props.row.itemPriceText }}
        </b-table-column>
        <b-table-column label="Channel Pembayaran" field="paymentChannel">
          {{ props.row.invoice.paymentChannel }}
        </b-table-column>
        <b-table-column label="Status" field="statusText">
          <span :class="`tag ${props.row.statusColor}`">
            {{ props.row.statusText }}
          </span>
        </b-table-column>
        <b-table-column label="Tanggal">
          <small class="has-text-grey is-abbr-like">{{
            props.row.invoice.createdFormatedText
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
  name: 'TransactionReportTable',
  props: {
    dataUrl: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      reports: [],
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
              this.reports = r.data.data
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
