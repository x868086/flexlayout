import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import absolute from '@/components/absolute.vue';
import responsive from '@/components/responsive.vue';
import media from '@/components/media.vue';
import three from '@/components/three.vue';
import grid from '@/components/grid.vue';

Vue.use(Router)

const router = new Router({
  routes: [
      {
      path: '/',
      name: 'absolute',
      component: absolute
    },

        {
      path: '/absolute',
      name: 'absolute',
      component: absolute
    },
    
      {
      path: '/responsive',
      name: 'responsive',
      component: responsive
    },

    {
      path: '/media',
      name: 'media',
      component: media
    },

    {
      path: '/three',
      name: 'three',
      component: three
    },
    
      {
      path: '/grid',
      name: 'grid',
      component: grid
    }

    
  ]
})

export default router
