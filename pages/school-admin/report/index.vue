<template>
  <client-only>
    <section class="section section-content">
      <card-component>
        <div class="columns">
          <b-loading
            :active.sync="isLoading"
            :is-full-page="false"
            :can-cancel="false"
          ></b-loading>
          <!-- column -->
          <div class="column">
            <b-field label="Jenis Transaksi">
              <b-select
                v-model="transactionType"
                placeholder="Pilih jenis transaksi"
                expanded
                @input="changeFilter"
              >
                <option
                  v-for="option in options"
                  :key="option.id"
                  :value="option.id"
                >
                  {{ option.text }}
                </option>
              </b-select>
            </b-field>
          </div>
          <!-- column -->
          <div class="column">
            <b-field label="Tanggal Awal">
              <b-datepicker
                v-model="dateStart"
                placeholder="Tanggal awal"
                icon="calendar-today"
                locale="id-ID"
                :max-date="today"
                editable
                @input="changeFilter"
              >
              </b-datepicker>
            </b-field>
          </div>
          <!-- column -->
          <div class="column">
            <b-field label="Tanggal Akhir">
              <b-datepicker
                v-model="dateEnd"
                placeholder="Tanggal akhir"
                icon="calendar-today"
                locale="id-ID"
                :min-date="dateStart"
                :max-date="today"
                editable
                @input="changeFilter"
              >
              </b-datepicker>
            </b-field>
          </div>
        </div>
      </card-component>
      <!-- end filter card -->

      <!-- select scope -->
      <div class="level">
        <div class="level-left"></div>
        <div class="level-right">
          <div class="level-item">
            <div class="buttons is-right">
              <b-button
                class="button is-primary"
                to="/"
                icon-left="download"
                :disabled.sync="isLoading"
                >Unduh Laporan</b-button
              >
            </div>
          </div>
        </div>
      </div>
      <!-- end select scope -->

      <!-- payout history -->
      <card-component
        class="has-table has-mobile-sort-spaced"
        title="Riwayat Transaksi"
        icon="credit-card"
      >
        <transaction-report-table
          :data.sync="reports"
          :paginated.sync="paginated"
          :per-page.sync="perPage"
        />
      </card-component>
      <!-- end payout history -->
    </section>
  </client-only>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      options: [
        { id: 1, text: 'Semua' },
        { id: 2, text: 'Online' },
        { id: 3, text: 'Offline' },
      ],
      today: new Date(),
      reports: [],
      paginated: false,
      perPage: 0,
    }
  },
  computed: {
    isLoading: {
      get() {
        return this.$store.state.pages.schoolAdmin.report.isLoading
      },
      set(value) {
        this.$store.commit('pages/schoolAdmin/report/changeIsLoading', value)
      },
    },
    dateStart: {
      get() {
        return this.$store.state.pages.schoolAdmin.report.dateStart
      },
      set(value) {
        this.$store.commit('pages/schoolAdmin/report/changeDateStart', value)
      },
    },
    dateEnd: {
      get() {
        return this.$store.state.pages.schoolAdmin.report.dateEnd
      },
      set(value) {
        this.$store.commit('pages/schoolAdmin/report/changeDateEnd', value)
      },
    },
    transactionType: {
      get() {
        return this.$store.state.pages.schoolAdmin.report.transactionType
      },
      set(value) {
        this.$store.commit(
          'pages/schoolAdmin/report/changeTransactionType',
          value
        )
      },
    },
  },
  mounted() {
    this.today = new Date()
    this.getReportData()
  },
  methods: {
    getReportData() {
      this.$store.commit('pages/schoolAdmin/report/changeIsLoading')
      axios
        .get('http://localhost:3000/data-sources/school-admin/report.json', {
          transactionType: this.transactionType,
          dateStart: this.dateStart,
          dateEnd: this.dateEnd,
          userId: 1,
        })
        .then((r) => {
          if (r.data) {
            if (r.data.length > this.perPage) {
              this.paginated = true
            }
            this.reports = r.data.data
          }
          this.$store.commit('pages/schoolAdmin/report/changeIsLoading')
        })
        .catch((e) => {
          this.$store.commit('pages/schoolAdmin/report/changeIsLoading')
          this.$buefy.toast.open({
            message: `Error: ${e.message}`,
            type: 'is-danger',
          })
        })
    },
    changeFilter() {
      this.getReportData()
    },
  },
}
</script>
