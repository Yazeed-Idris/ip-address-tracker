<script setup>

import Search from "./components/Search.vue";
import InformationDisplay from "./components/InformationDisplay.vue";
</script>

<template>
    <div class="flex flex-col h-full w-full">
        <div class="bg-Mobile-Background sm:bg-Desktop-Background relative w-full bg-no-repeat bg-cover">
            <img src="/pattern-bg-mobile.png" alt="" class="invisible">
            <div class="absolute w-full h-full top-0 flex flex-col items-center px-6">
                <h1 class="text-white font-medium text-2xl my-6">IP Address Tracker</h1>
                <Search/>
                <div class="absolute bottom-0 translate-y-1/2 w-full px-6 lg:px-44">
                <InformationDisplay ip-address="192.212.174.101" location="Brooklyn, NY 10001" timezone="UTC-5:00" isp="SpaceX Starlink" />
                </div>
            </div>
        </div>
        <div class="grow bg-red-900 h-full">

        </div>
    </div>

</template>
