<template>
	<div>
		<section class="contatos">
			<div class="container">
        <div id="map"></div>
        <div>
          <ul>
            <li>
              <md-icon>local_phone</md-icon> 
              <p>
                <a :href="'tel:' + vm._data.contatos.telefone">{{vm._data.contatos.telefone}}</a>
              </p>
            </li>
            <li>
              <i class="socicon-whatsapp"></i> 
              <p>
                <a :href="'tel:' + vm._data.contatos.whatsapp">{{vm._data.contatos.whatsapp}}</a>
              </p>
            </li>
            <li>
              <md-icon>email</md-icon>
              <p>
                <a :href="'mailto:' + vm._data.contatos.email">{{vm._data.contatos.email}}</a>
              </p>
            </li>
            <li>
              <md-icon>my_location</md-icon>
              <p v-html="vm._data.contatos.endereco"></p>
            </li>
            <li>
              <i class="socicon-facebook"></i> 
              <p>
                <a target="_blank" :href="'http://www.facebook.com' + vm._data.contatos.facebook">{{vm._data.contatos.facebook}}</a>
              </p>
            </li>
            <li>
              <i class="socicon-instagram"></i> 
              <p>
                <a target="_blank" :href="'http://www.instagram.com' + vm._data.contatos.instagram">{{vm._data.contatos.instagram}}</a>
              </p>
            </li>
          </ul>
        </div>
			</div>
		</section>
    <section class="contate-o-studio">
      <div class="container">
          <section-header 
            :header="'Contate o Studio'" 
          />
          <form class="contact-form">
            <div>
              <span>
                <label>Nome</label>
                <input required="required" v-model="nome" type="text">
              </span>
              <span>
                <label>Celular</label>
                <input v-mask="['(##) ####-####', '(##) #####-####']" v-model="celular" type="text">
              </span>
              <span>
                <label>E-mail</label>
                <input required="required" v-model="email" type="email">
              </span>
            </div>
            <div>
              <span>
                <label>Endereço</label>
                <input required="required" v-model="endereco" type="text">
              </span>
              <span>
                <label>Cidade</label>
                <input required="required" v-model="cidade" type="text">
              </span>
              <span>
                <label>Estado</label>
                <input required="required" v-model="estado" type="text">
              </span>
            </div>
            <div>
              <span>
                <label>Mensagem</label>
                <textarea required="required" v-model="mensagem"></textarea>
              </span>
            </div>
            <div>
              <span>
                <button class="btn btn-1">Enviar</button>
              </span>
            </div>
          </form>
      </div>
    </section>
	</div>
</template>

<script>
import Vue from 'vue';
import sectionHeader from "@/components/sectionHeader/sectionHeader.vue";
import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask);
var vm = new Vue({
  data: {
    contatos: {
      telefone: '21 2137.7077',
      whatsapp: '21 96405.9257',
      email: 'contato@studiosensorial.com.br',
      endereco: 'Av. Embaixador Abelardo Bueno 1<br/>Condomínio Dimension Office<br/>Edifício Ayrton Senna 2 - sala 601<br/>Barra da Tijuca - RJ',
      facebook: '/studiosensorial',
      instagram: '/studiosensorial'
    }
  }
});
export default {
	computed: {
		vm() {
			return vm;
		}
	},
  name: 'contato',
  components: {
    sectionHeader
  }, 
  mounted() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat:this.LatLng.lat, 
        lng: this.LatLng.lng
      },
      scrollwheel: false,
      disableDefaultUI: this.disableDefaultUI,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: this.zoom
    });

    this.marker = new google.maps.Marker({
      position: this.LatLng, 
      map: this.map, 
      title: this.title
    });        
  },
  data () {
    return {
    	nome: '',
    	celular: '',
    	email: '',
    	endereco: '',
    	cidade: '',
    	estado: '',
    	mensagem: '',
      zoom:15, 
      title:"'Studio Sensorial'",
      disableDefaultUI: true,
      LatLng: {lat: -22.8794026, lng: -43.4548475}    
    }
  }
};
</script>

<style lang="sass">
@import './sass/_contato'
</style>