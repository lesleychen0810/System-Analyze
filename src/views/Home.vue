<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="住民子系統介面" />

     <div
      v-for="(data, index) in peopleData"
      :key="index"
      style="margin-bottom： 5%"
      @click="goToPeoplePage(data.pId)"
    >
      {{ data }}
      {{ index }}
    </div> 
  </div>

  
</template> 

<script>



// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";


import { useRouter } from "vue-router";
import { getPeopleList } from "../model/people.js";
import { onMounted, ref } from "vue";
export default {
  name: "Home",
  // components: {
  //   HelloWorld,
  // },
  setup() {
    onMounted(async () => {
      await getPeopleList().then((res) => {
        console.log(27, res);
        Object.assign(peopleData.value, res);
      });
    });
    const peopleData = ref([]);
    const Router = useRouter();
    async function goToPeoplePage(pId) {
      console.log(41, pId);
      Router.push({ path: `/people/${pId}` });
      //PEOPLE.VUE
      //  await getpeople(pId).then((res) => {
      //    console.log(44, res);
      //  });
    }
    return { peopleData, goToPeoplePage };
  },
};
</script>



