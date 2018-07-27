import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import absolute from '@/components/absolute.vue';
import flexgrid from '@/components/flexgrid.vue';
import media from '@/components/media.vue';
import three from '@/components/three.vue';

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
      path: '/flexgrid',
      name: 'flexgrid',
      component: flexgrid
    },
    
      {
      path: '/flexgrid',
      name: 'flexgrid',
      component: flexgrid
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
    }

    
  ]
})

export default router
