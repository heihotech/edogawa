<template>
  <!-- <div> -->
  <client-only>
    <b-table
      :loading.sync="isLoading"
      :paginated="paginated"
      :per-page="perPage"
      :striped="true"
      :hoverable="true"
      default-sort="id"
      default-sort-direction="desc"
      :data="data"
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
          <small class="has-text-grey is-abbr-like">
            {{ props.row.invoice.createdFormatedText }}
          </small>
        </b-table-column>
        <b-table-column custom-key="actions" class="is-actions-cell">
          <div class="buttons is-right">
            <nuxt-link
              :to="{ name: 'client-id', params: { id: props.row.id } }"
              class="button is-small is-primary"
            >
              <b-icon icon="account-edit" size="is-small"></b-icon>
            </nuxt-link>
          </div>
        </b-table-column>
      </template>

      <section slot="empty" class="section">
        <div class="content has-text-grey has-text-centered">
          <template v-if="isLoading">
            <p>
              <b-icon icon="dots-horizontal" size="is-large"></b-icon>
            </p>
            <p>Memuat data&hellip;</p>
          </template>
          <template v-else>
            <p>
              <b-icon icon="emoticon-sad" size="is-large"></b-icon>
            </p>
            <p>Tidak ada data&hellip;</p>
          </template>
        </div>
      </section>
    </b-table>
  </client-only>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'TransactionReportTable',
  props: {
    data: {
      type: Array,
      default: null,
    },
    paginated: {
      type: Boolean,
      default: false,
    },
    perPage: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    isLoading() {
      return this.$store.state.pages.schoolAdmin.report.isLoading
    },
  },
  mounted() {},
  methods: {},
}
</script>
