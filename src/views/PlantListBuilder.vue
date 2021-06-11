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
  },
  mounted(){
    const data = {
      "criteriaType" : "species",
      "locationCriteria" : [ {
        "paramType" : "subnation",
        "subnation" : "WA",
        "nation" : "US"
      }],
      "speciesTaxonomyCriteria": [{ "paramType" : "informalTaxonomy",
        "informalTaxonomy" : "Plants - Vascular Plants"
      }],
      "locationOptions" : {
        "origin" : "onlyNatives"
      },
    }
    fetch("https://explorer.natureserve.org/api/data/speciesSearch", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data)
    })
    .then(resp => {console.log(resp); return resp.json()
    })
    .then(json => console.log(json)
    )}
}

</script>

<style lang="scss" scoped>
  #PlantListBuilder {
    padding: 2rem 3rem;
  }
</style>
