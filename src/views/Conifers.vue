<template lang="html">
  <Header/>
  <div class="placeholder">
    <h3>Conifers</h3>
    <ul id="conifer-list">
      <li v-for="conifer in conifers">{{ conifer.primaryCommonName }} - {{ conifer.scientificName}}</li>
    </ul>
  </div>
  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Conifers',
  components: {
    Header,
    Footer
  },
  props: {
    primaryCommonName: {
      type: String,
    },
    scientificName: {
      type: String,
    }
  },
  data(){
    return {
      conifers: []
    }
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
        "informalTaxonomy" : "Plants - Vascular Plants - Conifers and relatives - Conifers"
      }],
      "locationOptions" : {
        "origin" : "onlyNatives"
      },
      "pagingOptions" : {
        "recordsPerPage" : 38
      }
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
    .then(json => {
      console.log(json)
      this.conifers = json.results
     })
   }
}

</script>

<style lang="scss" scoped>
</style>
