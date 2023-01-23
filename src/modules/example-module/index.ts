import { StorefrontModule } from '@vue-storefront/core/lib/modules';
import { extendStore, isServer } from '@vue-storefront/core/helpers';
import Liked from './components/Liked.vue';
import { coreHooks  } from '@vue-storefront/core/hooks';

const examplePlugin = store => {
    store.subscribe((mutation, state) => {
      if (mutation.type === 'PRESSED_LIKE') {
        console.log('Customer pressed LIKE button on the product');
      }
    })
}

const newProductModule = {
    state: {
      liked: false
    }
}

const exampleModuleStore = {
    namespaced: true,
    state: {
      key: null
    },
    plugins: ['examplePlugin']
}

const exampleRoutes = [{ name: 'liked', path: '/liked', component: Liked, alias: '/liked.html' }]; // compose the router we will use
//const exampleRoutes = [{ name: 'liked', path: '/', component: Liked, alias: '/' }];

export const ExampleModule: StorefrontModule = function ({app, store, router, moduleConfig, appConfig}) {
    console.log('Hello World and VSF!');

    console.log(appConfig.products.defaultFilters);

    store.registerModule('example-module', exampleModuleStore);
    extendStore('product', newProductModule);
    //extendStore('product', Liked);
    
    if (moduleConfig.apiKey) {
      const apiKey = moduleConfig.apiKey;
      console.log(apiKey);
    } else {
      // raise an error related to failure for sign-in to 3rd party service due to lack of apiKey
    }

    
    router.addRoutes(exampleRoutes) // adding routes here
    router.beforeEach((to, from, next) => { next() })

    coreHooks.afterAppInit(() => { // 
      console.log('App has just been initialized')
    })

}