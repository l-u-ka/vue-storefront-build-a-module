import { StorefrontModule } from '@vue-storefront/core/lib/modules';
import { extendStore, isServer } from '@vue-storefront/core/helpers';

const FloorCalculatorModule = {
  /*
  state: {
    is_flooring: '',
    flooring_area: ''
  },
  getters: {
    getIsFlooring(state) {
      return state.is_flooring
    },
    getFlooringArea(state) {
      return state.is_flooring
    }
  }
  */
}


export const FloorCalculator: StorefrontModule = function ({app, store, router, moduleConfig, appConfig}) {
    console.log('FLOORING MODULE IS ON')
    extendStore('product', FloorCalculatorModule);
}
