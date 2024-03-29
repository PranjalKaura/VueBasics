<template>
  <div class="home">
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <p ref = "p">Barcelona Fans?</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">add 1 to age</button>
    <br>
    <input type="text" v-model="name">
    <br>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update NINJA ONE</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>
    <br>

    <input type="text" v-model = "search">
    <p>Search Term: {{ search }}</p>
    <div v-for = "name in matchingNames" :key="name">
      {{ name }}
    </div>
    <button @click="handleClick2">stop watching</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue';

export default {
  name: 'HomeView',
  setup() {

    const p = ref(null)

    // let name = "Mario"; //definitions like these are not reactive
    // let age = 30;

    //reactive definitions
    const name = ref("Mario");
    const age = ref(30)

    const handleClick = () => {
      console.log(p, p.value);
      p.value.textContent = "hello, culers"

      name.value = "Pranjal"
    }

    const ninjaOne = ref({name: "Messi", age: 34});
    const ninjaTwo = reactive({name: "Xavi", age: 35})

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    }

    const updateNinjaTwo = () => {
      ninjaTwo.age = 40;
    }

    const names = ref(["Hari", "Krishna", "Mohan", "Anand", "Ghanta", "Akriti", "Varshika"]);
    const search = ref('');

    const matchingNames = computed(() => {
      return names.value.filter((name) =>name.includes(search.value))
    })

    const watchfnc = watch(search, () => {
      console.log("Search updated")
    })

    watchEffect(() => {

    })

    const handleClick2 = () => {
      watchfnc(); //stop watching
    }

    // return {name: name, age: age}
    return {name, age, handleClick, p, ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo, names, search, matchingNames, handleClick2}
  },
}
</script>
