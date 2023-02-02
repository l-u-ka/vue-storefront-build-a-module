<template>
    <div>
      <p>Price per m2 {{ getPricePerM2 }}</p>
    </div>
  </template>
  
  <script>
  module.exports = {
    props: ['product'],
    computed: {
        getPricePerM2() {
            return this.product.price / this.product.flooring_area
        }
    }
  }
  </script>
  
  <style scoped>
  p {
    font-size: 1em;
    text-align: center;
  }
  </style>