<template>
  <div>
    <h1>你是小帥哥！！！</h1>
  </div>
</template>


<script>
import { getPeople } from "../model/people.js";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
export default {
  setup() {
    const Route = useRoute();
    onMounted(async () => {
      const id = Route.params.id;
      console.log(id);
      await getPeople(Number(id)).then((val) => {
        console.log(19, val);
      });
    });
  },
};
</script>
