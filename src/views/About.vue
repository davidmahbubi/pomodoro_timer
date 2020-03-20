<template>
  <div class="about">
    <pomodoro-article></pomodoro-article>
  </div>
</template>

<script>

  import PomodoroArticle from '@/components/PomodoroArticle.vue';

  export default {
    name: 'Home',
    components: {
      PomodoroArticle
    }
  }
</script>