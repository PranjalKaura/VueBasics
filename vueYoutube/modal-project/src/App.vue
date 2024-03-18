<template>
  <h1>{{title}}</h1>
  <div v-if="showModal">
    <Modal  theme="saleoff" @close="toggleModal">
      <template v-slot:links>
        <a href="">sign up now!</a>
        <a href="">FAQ</a>
      </template>
      <h1>Heavy discount!</h1>
      <p>Grab your Barca hoodies at 50% off!!</p>

    </Modal>
  </div>
  <button @click.alt="toggleModal">open modal (alt)</button>

  <!-- my modal -->
  <teleport to=".modals" v-if="showModal2">
    <Modal userName='Pranjal' @close2="toggleModal2">
      <template v-slot:authorise>
        <h1>Authorised access!!</h1>
        <p>Hello Mr Kaura!!!</p>
      </template>
      <h1>Unauthorized access!!</h1>
      <p>Unfortunately, this modal is only for selective users!</p>
    </Modal>
  </teleport>
  <button @click="toggleModal2">open second modal</button>

</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {Modal},
  data() {
    return {
      title: 'My first Vue App :)',
      header: 'Sign up for the giveaway!',
      text: "Buy Barca tshirt for 50% off",
      showModal: false,
      showModal2: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    }, 
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
