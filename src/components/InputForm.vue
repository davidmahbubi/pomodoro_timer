<template>
    <form @submit.prevent="commitData">
        <b-form-group>
            <label for="timeLimitInput">Time Limit (Second)</label>
            <input id="timeLimitInput" type="text" class="form-control" v-model="timeLimit">
        </b-form-group>
        <b-form-group>
            <label for="sessionTotalInput">Session Total</label>
            <input id="sessionTotalInput" type="text" class="form-control" v-model="session">
        </b-form-group>
        <b-form-group>
            <label for="additionInterval">Addition Interval (0 to neutral)</label>
            <input id="additionInterval" type="text" class="form-control" v-model="interval">
        </b-form-group>
        <div class="text-right">
            <b-button variant="primary" type="submit">Save Changes</b-button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            timeLimit: this.$store.state.timeLimit,
            session: this.$store.state.sessionLimit,
            interval: this.$store.state.interval
        }
    },
    methods: {
        commitData() {
            this.$store.commit('changeData', {
                timeLimit: this.timeLimit,
                session: this.session,
                interval: this.interval,
            })
        },
    }
}
</script>