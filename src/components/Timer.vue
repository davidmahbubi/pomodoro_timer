<template>

<b-row class="text-white">
    <b-col class="timer-container text-center">
        <b-progress :value="getSession" :max="getSessionLim" class="top-progress" variant="danger"></b-progress>
        <h1 class="timer-text mb-0"><strong>{{ showTimer }}</strong></h1>
        <h5>
            {{ getSession }} session(s) finished of {{ getSessionLim }}
        </h5>
        <ul class="control-container mt-3 mb-0">
            <li>
                <b-button class="mx-2 p-0" variant="transparent">
                    <b-icon-play-fill class="control-icon" @click="startInterval"></b-icon-play-fill>
                </b-button>
            </li>
            <li>
                <b-button class="mx-2 p-0" variant="transparent">
                    <b-icon-pause-fill class="control-icon" @click="pauseTimer"></b-icon-pause-fill>
                </b-button>
            </li>
            <li>
                <b-button class="mx-2 p-0" variant="transparent">
                    <b-icon-arrow-repeat class="control-icon" @click="resetTimer"></b-icon-arrow-repeat>
                </b-button>
            </li>
        </ul>
    </b-col>
</b-row>

</template>

<script>

export default {

    data() {
        return {
            counterTimer: null
        }
    },

    methods: {

        startInterval(){

            const dataEl = this;

            if ((this.$store.state.session - 1) == this.$store.state.sessionLimit) {
                return;
            }

            this.counterTimer = setInterval(function(){

                dataEl.$store.commit('decreaseTime')

                if ( dataEl.$store.state.time <= 0) dataEl.timeUp()

            }, 1000);

        },

        pauseTimer() {
            clearInterval(this.counterTimer);
        },

        resetTimer() {
            clearInterval(this.counterTimer);
            this.$store.state.time = this.$store.state.timeLimit
            this.$store.state.session = 1;
        },

        timeUp() {

            this.$emit('fire-notify');

            this.$emit('show-toast', {
                title: `Session ${this.$store.state.session} end`,
                message: 'Its time to break :)',
                variant: 'primary',
                solid: true
            })

            clearInterval(this.counterTimer);
            
            if (this.$store.state.session > this.$store.state.sessionLimit) {
                return;
            }

            this.$store.commit('increaseSession');
            
            this.$store.state.time = this.$store.state.timeLimit;

            if (this.$store.state.session % 2 == 1) this.$store.state.time += this.$store.state.interval

        },
    },

    computed: {

        showTimer() {
            let minute = Math.floor(this.$store.state.time / 60);
            let second = this.$store.state.time % 60;
            return `${minute < 10 ? String('0').concat(minute) : minute}:${second < 10 ? String('0').concat(second) : second}`;
        },

        getSessionLim() {
            return this.$store.state.sessionLimit;
        },

        getSession() {
            return this.$store.state.session - 1;
        },

        getInterval() {
            return this.$store.state.interval;
        },
    }
}

</script>

<style scoped>

@media(max-width: 575px) {
    .timer-container {
        border-radius: 0px !important;    
    }    
}

.timer-container {
    background: url(../assets/flat-bg.jpg);
    border-radius: 8px;
    padding: 0 0 35px 0;
    background-position: center;
    background-size: cover;
}

.control-icon {
    font-size: 40px !important;
    color: white !important;
    transition: .2s;
}

.control-icon:hover {
    transform: scale(1.2);
    color: rgb(211, 211, 211) !important;
}

h1.timer-text {
    margin-top: 50px;
    font-size: 4em !important;
}

.control-container {
    list-style-type: none;
    padding: 0;
}

.control-container li{
    display: inline-block;
}

.top-progress {
    border-radius: 0;
}

.editable-icon {
    cursor: pointer;
}

</style>