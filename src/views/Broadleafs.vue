<template lang="html">
  <Header/>
  <div class="placeholder">
    <h2>Broadleaf trees and shrubs</h2>
    <Acer/>
    <Alnus/>
    <Arbutus/>
    <Betula/>
    <Crataegus/>
  </div>
  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Acer from '@/components/Acer.vue'
import Alnus from '@/components/Alnus.vue'
import Arbutus from '@/components/Arbutus.vue'
import Betula from '@/components/Betula.vue'
import Crataegus from '@/components/Crataegus.vue'

export default {
  name: 'Broadleafs',
  components: {
    Header,
    Footer,
    Acer,
    Alnus,
    Arbutus,
    Betula,
    Crataegus
  },
   props: {
    primaryCommonName: {
      type: String,
    },
    scientificName: {
      type: String,
    }, 
    speciesGlobal: {
      type: Object,
    },
    genus: {
      type: String,
    }
  },
  data(){
    return {
      broadleafs: [],
      trees: [], 
      test: this.testFunc()
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
      "speciesTaxonomyCriteria": [{ "paramType" : "scientificTaxonomy",
        "level" : "genus",
        "scientificTaxonomy" : ("Acer" , "Alnus"),
        "kingdom" : "Plantae"
      }],
      "locationOptions" : {
        "origin" : "onlyNatives"
      },
      "pagingOptions" : {
        "recordsPerPage" : 3000
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
      this.trees = json.results
     })
   },
   methods: {
     testFunc() {
       return "Happy trees"
     }
   },
   
}

</script>

<style lang="scss" scoped>

</style>

