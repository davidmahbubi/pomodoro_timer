<template>
  <div id="app">
    <audio src="./assets/alarm.wav" id="notificationSound"></audio>
    <b-toast id="timeUpAlert" title="Time Up" static no-auto-hide>
        Hello, world! This is a toast message.
    </b-toast>
    <b-row class="row shadow-sm bg-white sticky-top">
      <b-col class="col">
        <div class="header text-center">
          <a href="/" class="brand">
            <h3 class="mb-0"><strong>Pomodoro Timer</strong></h3>
          </a>
        </div>
      </b-col>
    </b-row>
    <b-row class="mb-5">
      <b-col md="8" class="px-0 mx-auto">
        <b-container class="px-0">
          <timer @fire-notify="fireNotify" @show-toast="showToast" class="mt-5"></timer>
        </b-container>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="8" class="mx-auto text-center px-0">
        <b-container class="px-0">
          <b-nav tabs justified>
            <b-nav-item>
              <router-link :to="{name: 'Home'}" class="nav-custom-item">Home</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link :to="{name: 'About'}" class="nav-custom-item">About</router-link>
            </b-nav-item>
          </b-nav>
        </b-container>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="8" class="mx-auto px-5 py-4">
        <router-view></router-view>
      </b-col>
    </b-row>
  </div>
</template>

<script>

  import Timer from '@/components/Timer.vue';

  export default {
    data() {
      return {
      }
    },
    components: {
      Timer
    },
    methods: {
      showToast({title, variant, solid, message}) {
        this.$bvToast.toast(message, {
          title,
          variant,
          solid
        });
      },
      fireNotify() {
        document.querySelector('#notificationSound').play()
      }
    },
  }
</script>

<style>

  * {
    font-family: 'Baloo Da 2', cursive;
  }

  .row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .header {
    padding: 20px 0;
  }

  .brand {
    text-decoration: none !important;
    color: rgb(54, 54, 54) !important;
  }

  .nav-custom-item {
    color: black;
    text-decoration: none;
  }

  .nav-custom-item:hover {
    text-decoration: none;
  }

</style>