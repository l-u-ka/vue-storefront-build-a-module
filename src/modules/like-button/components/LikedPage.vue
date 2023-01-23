<template>
  <div>
    <p>id of the product is {{ id }} </p>
    <p>you liked the product {{ productName }} </p>
    <router-link :to="'/' + productLink">Product page link</router-link>
  </div>
  </template>
  
  <script>
  module.exports = {
    data: function () {
      return {
        id: this.$route.params.id,
        productName: this.$store.getters['product/getOriginalProduct'].name,
        productLink: this.$store.getters['product/getOriginalProduct'].url_path
      }
    }
  }
  </script>
  
  <style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
  a {
    font-size: 1.5em;
    text-align: center;
    margin: 0 42vw;
  }
  </style>