import Vue from 'vue';
import Router from 'vue-router';
import NProgress from "nprogress";
import "../../node_modules/nprogress/nprogress.css";

const home = resolve => require(["@/views/home/home.vue"], resolve);
const o_studio = resolve => require(["@/views/o-studio/o-studio.vue"], resolve);
const programas = resolve => require(["@/views/programas/programas.vue"], resolve);
const equipe = resolve => require(["@/views/equipe/equipe.vue"], resolve);
const curso = resolve => require(["@/views/curso/curso.vue"], resolve);
const galeria = resolve => require(["@/views/galeria/galeria.vue"], resolve);
const consultorias = resolve => require(["@/views/consultorias/consultorias.vue"], resolve);
const contato = resolve => require(["@/views/contato/contato.vue"], resolve);
const servicos = resolve => require(["@/views/servicos/servicos.vue"], resolve);
const PageNotFound = resolve => require(["@/views/PageNotFound/PageNotFound.vue"], resolve);

Vue.use(Router);

const router = new Router({
  mode: "history",
  linkActiveClass: "current",
  routes: [
    {
      path: "*",
      name: "PageNotFound",
      component: PageNotFound,
      meta: {
        slug: "page-not-found",
        title: "Estúdio Sensorial - 404 | Página não encontrada"
      }
    },
    {
      path: "/",
      name: "Home",
      component: home,
      meta: {
        slug: "home",
        title: "Estúdio Sensorial - Página Inicial"
      },
      props: true
    },
    {
      path: "/o-studio",
      name: "O Studio",
      component: o_studio,
      meta: {
        slug: "o-studio",
        title: "Estúdio Sensorial - O Studio"
      },
      props: true
    },
    {
      path: "/servicos",
      name: "Serviços",
      component: servicos,
      meta: {
        slug: "servicos",
        title: "Estúdio Sensorial - O Studio"
      },
      props: true
    },    
    // {
    //   path: "/programas",
    //   name: "Programas",
    //   component: programas,
    //   meta: {
    //     slug: "programas",
    //     title: "Estúdio Sensorial - Programas"
    //   },
    //   props: true
    // },
    // {
    //   path: "/equipe",
    //   name: "Equipe",
    //   component: equipe,
    //   meta: {
    //     slug: "equipe",
    //     title: "Estúdio Sensorial - Equipe"
    //   },
    //   props: true
    // },
    // {
    //   path: "/curso",
    //   name: "Curso",
    //   component: curso,
    //   meta: {
    //     slug: "curso",
    //     title: "Estúdio Sensorial - Curso"
    //   },
    //   props: true
    // },
    {
      path: "/galeria",
      name: "Galeria",
      component: galeria,
      meta: {
        slug: "galeria",
        title: "Estúdio Sensorial - Galeria"
      },
      props: true
    },
    {
      path: "/consultorias",
      name: "Consultorias",
      component: consultorias,
      meta: {
        slug: "consultorias",
        title: "Estúdio Sensorial - Consultorias"
      },
      props: true
    },
    {
      path: "/contato",
      name: "Contato",
      component: contato,   
      meta: {
        slug: "contato",
        title: "Estúdio Sensorial - Contato"
      },
      props: true
    }
  ]
});

router.beforeResolve((to, from, next) => {
  if(to.name) {
    NProgress.start()
  }

  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);

  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    el => el.parentNode.removeChild(el)
  );

  if (!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });
      tag.setAttribute("data-vue-router-controlled", "");
      return tag;
    })
    .forEach(tag => document.head.appendChild(tag));

    next();
});

router.afterEach((to, from) => {
    NProgress.done()
});

export default router;