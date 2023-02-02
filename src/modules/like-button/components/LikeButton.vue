<template>
    <button class="sf-button" @click="changeAction">{{ buttonState }}</button>
  </template>
  
  <script>
  module.exports = {
    props: ['product'],
    data: function () {
      return {
        buttonState: null,
        productId: this.product.id
      }
    },
    mounted() {
        //localStorage.removeItem('isLiked')
        this.setLikeButton();
    },
    methods: {
      setLikeButton() {
        
        if (!localStorage.getItem(`isLiked${this.productId}`)) {
          this.buttonState = 'LIKE';
        } else if (localStorage.getItem(`isLiked${this.productId}`)==='liked') {
          this.buttonState = 'UNLIKE';
        } else if (localStorage.getItem(`isLiked${this.productId}`)==='notliked') {
          this.buttonState = 'LIKE';
        }
      },
      changeRoute() {
        if (localStorage.getItem(`isLiked${this.productId}`)==='liked') {
          this.$router.push(`/liked/${this.productId}`)
        }
    }, 
      changeAction() {
            this.$store.dispatch('product/changeLike', {product: this.product})
            this.setLikeButton()
            this.changeRoute()
    }
  },
  watch: {
    product(newProduct) {
      this.productId = newProduct.id;
      this.setLikeButton();
    }
  }
  }
  </script>
  
  <style scoped>
  
  </style>