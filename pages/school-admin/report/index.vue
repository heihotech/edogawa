<template>
  <section class="section section-content">
    <b-loading
      :active.sync="isLoading"
      :is-full-page="true"
      :can-cancel="false"
    ></b-loading>
    <!-- filter card -->
    <card-component>
      <div class="columns">
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
            <a
              href="https://admin-one-nuxt.justboil.me/"
              target="_blank"
              class="button is-primary"
            >
              <b-icon icon="download" custom-size="default" />
              <span>Unduh Laporan</span>
            </a>
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
        :data-url="`${$router.options.base}data-sources/school-admin/report.json`"
      />
    </card-component>
    <!-- end payout history -->
  </section>
</template>
<script>
export default {
  data() {
    return {
      options: [
        { id: 1, text: 'Semua' },
        { id: 2, text: 'Online' },
        { id: 3, text: 'Offline' },
      ],
      dateStart: null,
      dateEnd: null,
      transactionType: 1,
      today: undefined,
      isLoading: false,
    }
  },
  mounted() {
    this.today = new Date()
  },
  methods: {
    changeFilter() {
      console.log(this.transactionType)
      console.log(this.dateStart)
      console.log(this.dateEnd)
      console.log(this.isLoading)
      this.isLoading = true
      console.log(this.isLoading)
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },
  },
}
</script>
