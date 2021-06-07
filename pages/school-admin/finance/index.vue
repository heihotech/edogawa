<template>
  <section class="section section-content">
    <tiles>
      <card-widget
        class="tile is-child"
        type="is-primary"
        :number="9999999999"
        prefix="Rp. "
        label="Dana Tersedia"
      />
      <card-widget
        class="tile is-child"
        type="is-primary"
        :number="9999999999"
        prefix="Rp. "
        label="Transaksi Online"
      />
      <card-widget
        class="tile is-child"
        type="is-primary"
        :number="0"
        prefix="Rp. "
        label="Transaksi Offline"
      />
    </tiles>

    <!-- button payout -->
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
              <b-icon icon="credit-card" custom-size="default" />
              <span>Tarik Dana</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- end button payout -->

    <!-- payout history -->
    <card-component
      class="has-table has-mobile-sort-spaced"
      title="Riwayat Penarikan"
      icon="credit-card"
    >
      <payout-history-table
        :data-url="`${$router.options.base}data-sources/school-admin/payout-history.json`"
      />
    </card-component>
    <!-- end payout history -->
  </section>
</template>
<script>
export default {
  computed: {
    pageLoading() {
      return this.$store.state.menu.pageLoading
    },
  },
  created() {
    this.$store.commit('page/changePageTitle', 'Keuangan')
  },
}
</script>
