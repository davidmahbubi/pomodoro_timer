<template>
    <form @submit.prevent="commitData">
        <b-row>
            <b-col md="4">
                <div class="spinner mb-3">
                    <label class="d-block">Time (min then sec)</label>
                    <b-form-spinbutton vertical max="59" min="0" v-model="minute" class="mr-2"></b-form-spinbutton>
                    <b-form-spinbutton vertical max="59" min="0" v-model="second" class="mr-2"></b-form-spinbutton>
                </div>
            </b-col>
            <b-col md="4">
                <b-form-group>
                    <label for="sessionTotalInput" class="d-block">Session Total</label>
                    <b-form-spinbutton id="sessionTotalInput" vertical max="100" min="1" v-model="session" class="mr-2">
                    </b-form-spinbutton>
                </b-form-group>
            </b-col>
            <b-col md="4">
                <b-form-group>
                    <label for="additionInterval">Interval of addition in secs (0 to neutral)</label>
                    <input id="additionInterval" type="text" class="form-control" v-model="interval">
                </b-form-group>
            </b-col>
        </b-row>
        <div class="text-right">
            <b-button variant="primary" type="submit">Save Changes</b-button>
        </div>
    </form>
</template>

<script>
    import Picker from 'pickerjs';

    export default {
        data() {
            return {
                timeLimit: this.$store.state.timeLimit,
                session: this.$store.state.sessionLimit,
                interval: this.$store.state.interval,
                minute: Math.floor(this.$store.state.time / 60),
                second: this.$store.state.time % 60,
            }
        },
        methods: {
            commitData() {
                this.$store.commit('changeData', {
                    timeLimit: this.processTime,
                    session: this.session,
                    interval: this.interval,
                })
            },
        },
        computed: {
            processTime() {
                return (parseInt(this.minute) * 60) + parseInt(this.second)
            },
        }
    }
</script>