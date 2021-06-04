<template lang="html">
  <header>
    <h1>Title goes here</h1>
  <nav id="dropnav" class="menu">
      <ul >
        <li>Trees , large shrubs</li>
        <li>Small shrubs , woody perennials</li>
        <li>Herbaceous perennials , annuals</li>
        <li>Ferns</li>
        <li>Grasses, rushes, sedges</li>
      </ul>
  </nav>
</header>
</template>

<script>
export default {
  name: 'Header'
//  const dropDown = {
//    data() {
//      return {
//        show: false
//      }
//    }
//  }
}
//  Vue.createApp(dropDown).mount('#dropnav')

</script>

<style lang="scss" scoped>

$oliveshadow: #222518;
$dkolive: #323624;
$nickel: #53584b;
$silver: #777578;
$dklavender:#90869b;
$ltlavender: #c2bdcd;
$ltblue: #dff2fd;

header {
  background-image: url('../assets/1734header-img.png');
  background-position: left center;
  background-clip: border-box;
  text-align: center;
  padding: 2rem 2rem 0 2rem;
}

.menu {
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  border: 0;
  padding: .5rem;
  minwidth: 50%;
  height: auto;

  &__cover {
    width: 100%;
    margin: .5rem;
    border: .5rem ridge $nickel;
    border-radius: .25rem;
    padding: .5rem;
    text-align: center;
    background-color: $silver;
    color: $ltblue;
    font-size: 1.5rem;
    font-weight: bold;
    //@include shadow;
  }

  ul {
    list-style-type: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    li {
      @extend .menu__cover;
      width:auto;
      display: inline-block;
      font-size: 1.2rem;
    }
  }
}

  // Transition effects on hover

.dropdown-enter-active, .dropdown-leave-active {
  transform-origin: top;
  transform: scaleX(0);
}

</style>
