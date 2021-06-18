<template lang="html">
  
  <div class="maple-component">
    <h3>Maples</h3>
    <ul id="maple-list">
      <li v-for="maple in acer">{{ maple.primaryCommonName }} - {{ maple.scientificName}}</li>
    </ul>
  </div>
  
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Acer',
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
      acer: []
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
        "scientificTaxonomy" : "Acer",
        "kingdom" : "Plantae"
      }],
      "locationOptions" : {
        "origin" : "onlyNatives"
      },
      "pagingOptions" : {
        "recordsPerPage" : 30
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
      this.acer = json.results
     })
   },
   
}

</script>

<style lang="scss" scoped>

</style>

