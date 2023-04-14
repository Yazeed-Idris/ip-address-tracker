<script setup>
import Search from "./components/Search.vue";
import {onMounted, ref, watch} from "vue";
import InformationDisplay from "./components/InformationDisplay.vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const apiKey = 'at_qQiXnY3DU4Hi5kB1ZJrAirzYiwAAc'
const searchQuery = ref({})
const ipAddress = ref(null)
const location = ref(null)
const timezone = ref(null)
const latitude = ref(null)
const longitude = ref(null)
const isp = ref(null)
let mapDiv;

async function getClientIP() {
    const response = await fetch('https://api.ipify.org?format=json')
        .then(response => response.json());
    searchQuery.value.type = 'ip'
    searchQuery.value.address = response.ip
}


async function getIPData() {

    let getURL = 'https://geo.ipify.org/api/v2/country,city,vpn?apiKey=' + apiKey + '&domain=' + searchQuery.value.address
    if (searchQuery.value.type === 'ip') {
        getURL = 'https://geo.ipify.org/api/v2/country,city,vpn?apiKey=' + apiKey + '&ipAddress=' + searchQuery.value.address
    }
    console.log('getURL is:', getURL)
    const response = await fetch(getURL)
        .then(response => response.json());
    console.log('response is:', response)
    location.value = response.location.city + ', ' + response.location.country;
    timezone.value = 'UTC ' + response.location.timezone;
    isp.value = response.isp;
    ipAddress.value = response.ip;
    latitude.value = response.location.lat;
    longitude.value = response.location.lng;
}

async function callAPIs() {
    await getClientIP()
    await getIPData()
}

callAPIs()

onMounted(() => {
    mapDiv = L.map('mapContainer').setView([24.7136, 46.6753], 13)
    const accessToken = 'pk.eyJ1IjoieWF6ZWVkLWlkcmlzIiwiYSI6ImNsZ2c3dHR2aDA5MWQzcm8wZnRodWJmYTgifQ.Svuo1STYnrpWpTZKombMdg'
    L.tileLayer(
        'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' + accessToken, {
            tileSize: 512,
            zoomOffset: -1,
            attribution: '© <a href="https://www.mapbox.com/contribute/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(mapDiv);

})

watch(location, () => {
    if (location.value) {
        mapDiv.setView([latitude.value, longitude.value], 13)
        L.marker([latitude.value, longitude.value]).addTo(mapDiv);
    }
})

function onIPChanged($event) {
    console.log('ip is:', $event.type, $event.address)
    searchQuery.value = $event
    getIPData()
}

</script>

<template>
    <div class="flex flex-col h-full w-full">
        <div class="bg-Mobile-Background sm:bg-Desktop-Background relative w-full bg-no-repeat bg-cover z-20">
            <img src="/pattern-bg-mobile.png" alt="" class="invisible">
            <div class="absolute w-full h-full top-0 flex flex-col items-center px-6">
                <h1 class="text-white font-medium text-2xl my-6">IP Address Tracker</h1>
                <Search @ip-changed="onIPChanged"/>
                <div class="absolute bottom-0 translate-y-1/2 w-full px-6 lg:px-44">
                <InformationDisplay v-if="location" :ip-address="ipAddress" :location="location" :timezone="timezone" :isp="isp" />
                </div>
            </div>
        </div>
        <div class="grow bg-red-900 h-full z-10"  id="mapContainer"></div>
    </div>

</template>
