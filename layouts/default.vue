<template>
  <div id="app">
    <nav-bar />
    <aside-menu :menu="menus" />
    <nuxt />
    <footer-bar />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar'
import AsideMenu from '@/components/AsideMenu'
import FooterBar from '@/components/FooterBar'

export default {
  name: 'Home',
  components: {
    FooterBar,
    AsideMenu,
    NavBar,
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    menus() {
      this.$store.commit('menu/setMenu', this.user.level)
      return this.$store.state.menu.menus
    },
  },
  created() {
    this.$store.commit('auth/setAdmin')
    this.$store.commit('user', {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg',
    })
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit('page/changePageLoading')
    }, 2000)
    document.documentElement.classList.add('has-aside-left')
    document.documentElement.classList.add('has-aside-mobile-transition')
    document.documentElement.classList.add('has-navbar-fixed-top')
    document.documentElement.classList.add('has-aside-expanded')
  },
}
</script>
