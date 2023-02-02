import { StorefrontModule } from '@vue-storefront/core/lib/modules';
import { extendStore } from '@vue-storefront/core/helpers';

const FloorCalculatorModule = {

}


export const FloorCalculator: StorefrontModule = function ({app, store, router, moduleConfig, appConfig}) {
    extendStore('product', FloorCalculatorModule);
}
