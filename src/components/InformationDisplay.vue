<script setup>
import HorizontalLineSeparator from "./HorizontalLineSeparator.vue";

const props = defineProps(['ipAddress', 'location', 'timezone', 'isp']);
</script>

<template>
  <div class="rounded-2xl bg-white p-4 md:p-12 w-full grid place-items-center md:flex md:items-stretch text-center md:text-left">
      <div class="grow">
          <h2 class="text-Dark-Gray font-[700] text-xs md:text-sm scale-y-75">IP ADDRESS</h2>
          <h3 class="text-Very-Dark-Gray font-[700] text-xl md:text-2xl">{{ ipAddress }}</h3>
      </div>
      <HorizontalLineSeparator />
      <div class="grow">
      <h2 class="text-Dark-Gray font-[700] text-xs md:text-sm scale-y-75 mt-4 md:mt-0">LOCATION</h2>
      <h3 class="text-Very-Dark-Gray font-[700] text-xl md:text-2xl">{{ location }}</h3>
      </div>
      <HorizontalLineSeparator />
      <div class="grow">
          <h2 class="text-Dark-Gray font-[700] text-xs md-text-sm scale-y-75 mt-4 md:mt-0">TIMEZONE</h2>
          <h3 class="text-Very-Dark-Gray font-[700] text-xl md:text-2xl">{{ timezone }}</h3>
      </div>
      <HorizontalLineSeparator />
    <div class="grow">
        <h2 class="text-Dark-Gray font-[700] text-xs md:text-sm scale-y-75 mt-4 md:mt-0">ISP</h2>
        <h3 class="text-Very-Dark-Gray font-[700] text-xl md:text-2xl">{{ isp }}</h3>
    </div>

  </div>
</template>
