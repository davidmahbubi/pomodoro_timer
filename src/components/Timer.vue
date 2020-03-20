<template>

<b-row class="text-white">
    <b-col class="timer-container text-center">
        <b-progress :value="session" :max="totalSession" class="top-progress" variant="danger"></b-progress>
        <h1 class="timer-text mb-0"><strong>{{ showTimer }}</strong></h1>
        <h5>
            {{ session }} session(s) finished of {{ totalSession }}
        </h5>
        <ul class="control-container mt-3 mb-0">
            <li>
                <b-button class="mx-2 p-0" variant="transparent">
                    <b-icon-play-fill class="control-icon" @click="startInterval"></b-icon-play-fill>
                </b-button>
            </li>
            <li>
                <b-button class="mx-2 p-0" variant="transparent">
                    <b-icon-pause-fill class="control-icon" @click="stopInterval"></b-icon-pause-fill>
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

let time = 5;
let interval = 10;

export default {
    data() {
        return {
            dataTime: time,
            counterTimer: null,
            session: 0,
            totalSession: 2,
            interval: interval
        }
    },
    methods: {

        startInterval(){

            if (this.session === this.totalSession) {
                return;
            }

            const data = this;

            this.counterTimer = setInterval(function(){

                data.dataTime--

                if (data.dataTime <= 0) data.timeUp()

            }, 1000);

        },
        stopInterval() {
            clearInterval(this.counterTimer);
        },
        resetTimer() {
            clearInterval(this.counterTimer);
            this.dataTime = time;
            this.session = 0;
        },

        timeUp() {

            this.$emit('fire-notify');

            this.$emit('show-toast', {
                title: `Session ${this.session} end`,
                message: 'Its time to break :)',
                variant: 'primary',
                solid: true
            })

            clearInterval(this.counterTimer);

            this.session++
            
            if (this.session >= this.totalSession) {
                return;
            }
            
            this.dataTime = time

            if (this.session % 2 == 1) this.dataTime += this.interval

        },
        stopApp() {

        }
    },
    computed: {
        showTimer() {
            let minute = Math.floor(this.dataTime / 60);
            let second = this.dataTime % 60;
            return `${minute < 10 ? String('0').concat(minute) : minute}:${second < 10 ? String('0').concat(second) : second}`;
        }
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