<template>
  <div class='PlantListBuilder'>
  <MDBBtn @click="collapseCeanothus = !collapseCeanothus" aria-controls="collapsibleContentCeanothus" :aria-expanded="collapseCeanothus">
    <h4>Ceanothus</h4>
  </MDBBtn>
    <MDBCollapse id="collapsibleContentCeanothus" v-model="collapseCeanothus">
      <div>
        <MDBCheckbox img src="../assets/ceanothus_arboreus.jpg"
          label="Ceanothus arboreus - California lilac" v-model="checkboxArboreus" />
        <MDBCheckbox img src="../assets/ceanothus_sanguineus.jpg"
          label="Ceanothus sanguineus - Oregon Tea Tree" v-model="checkboxSanguineus" />
        <MDBCheckbox img src="../assets/ceanothus_thysiflorus_skylark.jpg"
          label="Ceanothus thysiflorus var. 'Skylark'" v-model="checkboxThysiflorus" />
        <MDBCheckbox img src="../assets/ceanothus_x_pallidus_Marie_Simon.jpg"
          label="Ceanothus x pallidus var. 'Marie Simon'" v-model="checkboxPallidus" />
      </div>
    </MDBCollapse>
  <MDBBtn @click="collapseGarrya = !collapseGarrya"
    aria-controls="collapsibleContentGarrya"
    :aria-expanded="collapseGarrya">
    <h4>Garrya</h4>
  </MDBBtn>
    <MDBCollapse id="collapsibleContentGarrya" v-model="collapseGarrya">
      <div>
        <MDBCheckbox img src="../assets/garrya_eliptica.jpg"
          label="Garrya eliptica - Coast Silktassel" v-model="checkboxEliptica" />
      </div>
    </MDBCollapse>
  <MDBBtn @click="collapseHippophae = !collapseHippophae"
    aria-controls="collapsibleContentHippophae"
    :aria-expanded="collapseHippophae">
    <h4>Hippophae</h4>
  </MDBBtn>
    <MDBCollapse id="collapsibleContentHippophae" v-model="collapseHippophae">
      <div>
        <MDBCheckbox img src="../assets/hippophae_rhamnoides.jpg"
          label="Hippophae rhamnoides - Sea Buckthorn" v-model="checkboxRhamnoides" />
      </div>
    </MDBCollapse>
    <MDBBtn @click="collapseHolodiscus = !collapseHolodiscus"
      aria-controls="collapsibleContentHolodiscus"
      :aria-expanded="collapseHolodiscus">
      <h4>Holodiscus</h4>
    </MDBBtn>
      <MDBCollapse id="collapsibleContentHolodiscus" v-model="collapseHolodiscus">
        <div>
          <MDBCheckbox img src="../assets/holodiscus_discolor.jpg"
            label="Holodiscus discolor - Oceanspray" v-model="checkboxDiscolor" />
        </div>
      </MDBCollapse>
  <MDBBtn @click="collapseMyrica = !collapseMyrica"
    aria-controls="collapsibleContentMyrica"
    :aria-expanded="collapseMyrica">
    <h4>Myrica</h4>
  </MDBBtn>
    <MDBCollapse id="collapsibleContentMyrica" v-model="collapseMyrica">
      <div>
        <MDBCheckbox img src="../assets/myrica_californica.jpg"
          label="Myrica californica - Pacific Wax Myrtle" v-model="checkboxCalifornica" />
      </div>
    </MDBCollapse>
  <MDBBtn @click="collapsePhiladelphus = !collapsePhiladelphus"
    aria-controls="collapsibleContentPhiladelphus"
    :aria-expanded="collapsePhiladelphus">
    <h4>Philadelphus</h4>
  </MDBBtn>
    <MDBCollapse id="collapsibleContentPhiladelphus" v-model="collapsePhiladelphus">
      <div>
        <MDBCheckbox img src="../assets/philadelphus_lewisii.jpg"
          label="Philadelphus lewisii - Mock Orange" v-model="checkboxLewisii" />
      </div>
    </MDBCollapse>
  </div>
</template>

<script>

  import { MDBCollapse, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBCheckbox } from "mdb-vue-ui-kit";
  import { ref } from 'vue';

  export default {
    name: 'PlantListBuilder',
    components: {
      MDBCollapse,
      MDBContainer,
      MDBRow,
      MDBCol,
      MDBBtn,
      MDBCard,
      MDBCardBody
      MDBCheckbox
    },
    setup() {
      const collapseCeanothus = ref(false);
      const collapseGarrya = ref(false);
      const collapseHippophae = ref(false);
      const collapseHolodiscus = ref(false);
      const collapseMyrica = ref(false);
      const collapsePhiladelphus = ref(false);
      const checkboxArboreus = ref(false);
      const checkboxSanguineus = ref(false);
      const checkboxThysiflorus = ref(false);
      const checkboxPallidus = ref(false);
      const checkboxEliptica = ref(false);
      const checkboxRhamnoides = ref(false);
      const checkboxDiscolor = ref(false);
      const checkboxCalifornica = ref(false);
      const checkboxLewisii = ref(false);

      return {
        collapseCeanothus,
        collapseGarrya,
        collapseHippophae,
        collapseHolodiscus,
        collapseMyrica,
        collapsePhiladelphus,
        checkboxArboreus,
        checkboxSanguineus,
        checkboxThysiflorus,
        checkboxPallidus,
        checkboxEliptica,
        checkboxRhamnoides,
        checkboxDiscolor,
        checkboxCalifornica,
        checkboxLewisii
      };
    }
};
</script>

<style lang="css" scoped>

MDBBtn {
  background-color: $nickel;
}
MDBCollapse {
  div {
    background-color: $ltlavender;
    color: black;
  }
  img {
    display: inline-block;
    width: 10rem;
    height: auto;
    object-fit: cover;
  }
}
</style>
