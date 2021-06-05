<template>
  <section class="section section-content">dashboard</section>
</template>
<script>
export default {
  created() {
    this.$store.commit('page/changePageTitle', 'Beranda')
  },
}
</script>
