<template>
    <div id="welcome-screen">
      <div id="welcome-screen__content1"><router-link to="/Conifers"><h3>Conifers</h3></router-link></div>
      <div id="welcome-screen__content2"><router-link to="/PlantListBuilder"><h2>Build Your Garden</h2></router-link></div>
      <div id="welcome-screen__content3"><h1>Native Plants</h1></div>
      <div id="welcome-screen__content4"><h1>of Washington</h1></div>
      <div id="welcome-screen__content5"><router-link to="/Broadleafs"><h3>Broadleafs</h3></router-link></div>
    </div>
</template>

<script>
export default {
  name: 'WelcomeScreen'
}
</script>

<style lang="scss">

$oliveshadow: #222518;
$dkolive: #323624;
$nickel: #53584b;
$silver: #777578;
$dklavender:#90869b;
$ltlavender: #c2bdcd;
$ltblue: #dff2fd;
@mixin textShadow {
  text-shadow: .5rem .5rem .5rem $oliveshadow;}

#welcome-screen {
  display: grid;
  grid-template-rows: repeat(40, 1.5rem);
  grid-template-columns: repeat(40, 1.5rem);
  margin: auto;
  border: 0;
  padding: 3rem;
  @include textShadow;
  h2, h3 {margin: auto;}

  &__content1 {
    background-color: $ltlavender;
    background-image: url('../assets/320px-Vine_circinatum.jpg');
    grid-column: 9 / 21;
    grid-row: 9 / 21;
    text-align: center;
  }
  &__content2 {
    background-color: $dklavender;
    background-image: url('../assets/285px-Thuja_plicata.jpg');
    grid-column: 21 / 33;
    grid-row: 1 / 17;
    text-align: center;
  }
  &__content3 {
    background-color: $silver;
    background-image: url('../assets/400garrya_eliptica.jpg');
    grid-column: 1 / 21;
    grid-row: 21 / 33;
    text-align: right;
    h1 {
      margin-top: 10%;
    }
  }
  &__content4 {
    background-color: $ltlavender;
    background-image: url('../assets/400polystichum_munitum.jpg');
    grid-column: 21 / 41;
    grid-row: 17 / 29;
    text-align: left;
    h1 {
      margin-top: 18%;
    }
  }
  &__content5 {
    background-image: url('../assets/ceanothus_thysiflorus_skylark.jpg');
    background-color: $dklavender;
    grid-column: 21 / 33;
    grid-row: 29 / 41;
    text-align: center;
  }
}
</style>
