<template>
    <section>
        <h1 class="font-weight-bold title">What is Pomodoro ?</h1>
        <p>The Pomodoro Technique is a time management method developed by Francesco 'Pomodoro' Cirillo in the late
            1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length,
            separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after
            the
            tomato-shaped kitchen timer that Cirillo used as a university student.
        </p>
        <p>
            The technique has been widely popularized by dozens of apps and websites providing timers and instructions.
            Closely related to concepts such as timeboxing and iterative and incremental development used in software
            design,
            the method has been adopted in pair programming contexts
        </p>
        <p>
            Source : <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">Wikipedia</a>
        </p>
        <p>Copyright &copy;<span v-text="year"></span> <a href="https://mhbproject.com">MHB Project</a></p>
    </section>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>

<style scoped>

.title {
    margin-bottom: 23px;
}

</style>