<template>
  <div>
    <form @submit.prevent="submitForm">
      <SfInput
        label="Area to be covered (m²)"
        type="number"
        valid
        value=""
        v-model.number="m2"
      />
      <SfCheckbox
        label="Wastage"
        name="wastage"
        valid
        value=""
        v-model="wastage"
      />
      <button class="sf-button">Calculate</button>
    </form>
    <div v-if="submitted && !error">
      <p class="sf-price__regular">Total area in m²: {{totalm2}}</p>
      <p class="sf-price__regular">Packages needed: {{packages}}</p>
      <p class="sf-price__regular">Total Price: ${{totalPrice}}</p>
    </div>
    <SfAlert 
      v-if="submitted && error" 
      :type="'danger'" 
      :message="'please input amount of area'"
    />
    <AAddToCart
      class="sf-add-to-cart__button"
      :qty="packages"
      :product="product"
      :disabled="packages===0"
    /> 

</div>

  </template>
  
  <script>
  import AAddToCart from 'theme/components/atoms/a-add-to-cart';
  import { SfInput, SfCheckbox, SfAlert } from '@storefront-ui/vue';

  export default {
    props: ['product'],
    components: {
      AAddToCart,
      SfInput, 
      SfCheckbox,
      SfAlert
    }
    ,
    data: function () {
      return {
        m2: null,
        wastage: false,
        submitted: false,
        totalm2: 0,
        packages: 0,
        totalPrice: 0,
        error: false
      }
    },
    methods: {
      calculate() {
        this.totalm2 = this.wastage ? (this.m2 * 1.1) : this.m2;
        this.packages = Math.ceil(this.totalm2 / this.product.flooring_area);
        this.totalPrice = this.product.price * this.packages;
        if (!this.m2) {
          this.error = true;
        } else this.error = false;
      },
      submitForm() {
        this.submitted = true;
        this.calculate();
      }
    }
 }
    
  </script>
  
  <style scoped>
  .sf-button {
    margin: 1rem 0;
  }
  </style>