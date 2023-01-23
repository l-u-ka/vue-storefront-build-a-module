import { StorefrontModule } from '@vue-storefront/core/lib/modules';
import { extendStore, isServer } from '@vue-storefront/core/helpers';
import LikedPage from './components/LikedPage.vue'
//import { router } from '@vue-storefront/core';



const likedRoute = [{ name: 'liked', path: '/liked/:id', component: LikedPage, alias: '/liked.html' }]; // compose the router we will use

const LikeButtonModule = {
  state: {
    liked: false,
    product: {}
  },
  getters: {
    getIsLiked(state) {
        return state.liked
    }
  },
  mutations: {
    changeLike(state, payload) {
      state.liked = !state.liked
      
      if (!isServer) {
        if (!localStorage.getItem(`isLiked${payload.id}`)) {
          localStorage.setItem(`isLiked${payload.id}`, 'liked');
        } else {
          let likeState = '';
          if (localStorage.getItem(`isLiked${payload.id}`)==='liked') {
            likeState = 'notliked'
          } else if (localStorage.getItem(`isLiked${payload.id}`)==='notliked') {
            likeState = 'liked'
          }
  
          localStorage.setItem(`isLiked${payload.id}`, likeState);
          
        }
      }
    }
  },
  actions: {
    changeLike(context, payload) {
        context.commit('changeLike', {id: payload.product.id})
        this.product = payload.product
    }
  }
}



export const LikeButton: StorefrontModule = function ({app, store, router, moduleConfig, appConfig}) {
    //console.log('Like button is up!');
    extendStore('product', LikeButtonModule);
    router.addRoutes(likedRoute)
}