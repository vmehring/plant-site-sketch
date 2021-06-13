<template lang="html">
  <Header/>
  <div class="placeholder">
    <h3>Broadleaf trees and shrubs</h3>
    <ul id="broadleaf-list">
      <li v-for="tree in trees">{{ tree.primaryCommonName }} - {{ tree.scientificName}}</li>
    </ul>
  </div>
  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Broadleafs',
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
        "informalTaxonomy" : "Plants - Vascular Plants - Flowering Plants - Dicots"
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
      this.broadleafs = json.results
     })
   },
   // Take that huge array of dicots and break it up by genus
  computed: {
    acerFilter() {
      let acer = this.broadleafs.filter(broadleaf => 
        broadleaf.speciesGlobal.genus = 'Acer',
        trees.push[acer]
      )
    }
  }
}

</script>

<style lang="scss" scoped>

</style>

