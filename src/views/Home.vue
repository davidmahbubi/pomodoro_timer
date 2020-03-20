<template>
  <div class="home py-3">
    <b-row>
      <b-col md="6">
        <input-form></input-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>

  import InputForm from '@/components/InputForm.vue';

  export default {
    name: 'Home',
    components: {
      InputForm
    }
  }
  
</script>

<style scoped>

</style>