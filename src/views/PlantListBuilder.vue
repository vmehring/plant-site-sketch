<template lang="html">
  <Header/>
  <div id="PlantListBuilder">
    <h3>Some content</h3>
    <p>I</p>
    <p>love</p>
    <p>plants</p>
    <p>almost</p>
    <p>as</p>
    <p>much</p>
    <p>as</p>
    <p>I</p>
    <p>hate</p>
    <p>Vue</p>
  </div>
  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'PlantListBuilder',
  components: {
    Header,
    Footer
  }

}

</script>

<style lang="scss" scoped>
  #PlantListBuilder {
    padding: 2rem 3rem;
  }
</style>
