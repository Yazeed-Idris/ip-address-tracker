<script setup>
import { ref } from "vue";

const searchIP = ref("");

function search() {
  console.log("search ip:", searchIP.value);
}

</script>

<template>
  <div class="flex justify-between items-center h-14 w-full max-w-xl">
    <input type="text" class="h-full grow rounded-l-2xl px-4 lg:px-6 placeholder:font-[500] focus:outline-none" placeholder="Search for any IP or domain" v-model="searchIP" />
    <button @click="search" class="bg-black grid place-items-center rounded-r-2xl w-16 h-full">
        <img src="/icon-arrow.svg"  alt="arrow right icon">
    </button>
  </div>
</template>
