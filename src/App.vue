<template>
  <router-view/>
</template>



<style lang="scss">

// Colors and basic styling
$oliveshadow: #222518;
$dkolive: #323624;
$nickel: #53584b;
$silver: #777578;
$dklavender:#90869b;
$ltlavender: #c2bdcd;
$ltblue: #dff2fd;
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
@import url("https://use.typekit.net/vzh1goo.css");

// Mixin for making box shadows

@mixin textShadow {
  text-shadow: .3rem .3rem .2rem $oliveshadow;
}

body {
  background-color: $oliveshadow;
  color: white;
  font-family: 'Architects Daughter', cursive;
  font-size: 1.1rem;
  box-sizing: border-box;
  margin: 0;
  border: 0;
  padding: 0;
}

h1 {
  font-family: blambot-pro, sans-serif;
  font-style: italic;
  font-weight: 400;
  padding: 1rem;
  font-size: 3.5rem;
}
h2 {
  @extend h1;
  font-size: 2rem;
}
h3 {
  font-family: 'Architects Daughter', cursive;
  font-size: 2.8rem;
  margin: 1rem;
}
h4 {
  font-family: 'Architects Daughter', cursive;
  font-size: 2rem;
  margin: 1rem;
}

p {
  display: block;
  padding: .2rem;
}

a {
  text-decoration: none;
  color: $ltblue;
  display: block;
  padding: .2rem;
  &:visited {color: $ltblue;}
  &:hover {color: white;}
  &:active {font-weight: bold;}
}

.placeholder {
  padding: 2rem 3rem;
}
</style>
