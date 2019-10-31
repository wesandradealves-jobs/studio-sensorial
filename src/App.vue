<template>
  <div
    id="wrap"
    :class="[
      ($route.meta.slug !== undefined) ? 'pg-' + $route.meta.slug : '',
      this.$route.meta.slug && this.$route.meta.slug !== 'home' ? 'pg-interna' : ''
    ]"
  >
    <scroll-area @handle-scroll="handleScroll" ref="vs">
      <app-header :sticky="sticky" />
      <main class="main">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </main>
      <app-footer />
    </scroll-area>
  </div>
</template>

<script>
import Vue from 'vue';
import appHeader from "@/components/header/header.vue";
import appFooter from "@/components/footer/footer.vue";
import NProgress from "nprogress";
import "@/../node_modules/nprogress/nprogress.css";
import vuescroll from 'vuescroll';
import router from "@/router";
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

Vue.use(VueMaterial);

Vue.use(vuescroll, {
  ops: {
    vuescroll: {
      wheelScrollDuration: 500,
      detectResize: true
    },
    scrollPanel: {
      scrollingX: false,
      scrollingY: true,
      speed: 1500,
      easing: 'easeInOutCubic'
    },
    rail: {
      keepShow: true,
      specifyBorderRadius: '0px'
    },
    bar: {
      onlyShowBarOnScroll: false,
      keepShow: true,
      background: '#599bb3',
      specifyBorderRadius: '0px'
    }
  },
  name: 'scrollArea' // customize component name, default -> vueScroll
});

export default {
  name: "App",
  data() {
    return {
      navigation: [],
      isSticky: false
    };
  }, 
  methods: {
    fetchData() {
    },    
    handleScroll(vertical, horizontal, nativeEvent) {
      this.isSticky = (vertical.scrollTop > 0) ? true : false;
      this.scrollPos = vertical.scrollTop;

      const sections = document.querySelectorAll("section");

      for (var i = 0; i < sections.length; i++) {
        if (sections[i]) {
          if (vertical.scrollTop > sections[i].offsetTop) {
            sections[i].classList.add('animated');
            if (vertical.scrollTop > sections[i].offsetTop + sections[i].offsetHeight) {
              sections[i].classList.remove('animated');
            }
          } else {
            sections[i].classList.remove('animated');
          }
        }
      }
    } 
  },
  watch: {
    isLoading(value) {
      if (value) {
        NProgress.start();
      } else {
        NProgress.done();
      }
    }
  },
  computed: {
    sticky() {
      return this.isSticky;
    }
  },
  mounted() {
    this.$store.state.routes = this.$router.options.routes;

    router.afterEach((to, from) => {
      this.$refs['vs'].scrollTo(
        {
          y: 0
        },
        1500
      );
    });  
  },
  components: {
    appHeader,
    appFooter
  }
};
</script>

<style lang="sass">
@import './_style'
</style>
