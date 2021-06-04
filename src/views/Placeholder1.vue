<template lang="html">
  <Header/>
  <div class="placeholder">
    <h3>Some content</h3>
  </div>
  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Placeholder1',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
</style>
