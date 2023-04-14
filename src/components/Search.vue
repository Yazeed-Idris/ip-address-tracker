<script setup>
import { ref, defineEmits } from "vue";
const emits = defineEmits(["ipChanged"]);
const searchQuery = ref("");
const ipValidationRegex = new RegExp(
  "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
);
const domainValidationRegex = new RegExp(
  "^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\\.)+[A-Za-z]{2,6}$"
);

function search() {
    if (ipValidationRegex.test(searchQuery.value)) {
       emits("ipChanged", { address: searchQuery.value, type: "ip" });
       return;
    }
    if (domainValidationRegex.test(searchQuery.value)) {
       emits("ipChanged", { address: searchQuery.value, type: "domain" });
    }
}

</script>

<template>
  <div class="flex justify-between items-center h-14 w-full max-w-xl">
    <input type="text" class="h-full grow rounded-l-2xl px-4 lg:px-6 placeholder:font-[500] focus:outline-none" placeholder="Search for any IP or domain" v-model="searchQuery" />
    <button @click="search" class="bg-black grid place-items-center rounded-r-2xl w-16 h-full">
        <img src="/icon-arrow.svg"  alt="arrow right icon">
    </button>
  </div>
</template>
