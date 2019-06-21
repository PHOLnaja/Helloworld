import { Button } from 'ant-design-vue'

export default {
    data() {
        return {
            id: ''
        }
    },
    components: {
        Button
    },
    methods: {
        goBack() {
            // this.$router.push({ name: 'Hello' })
            this.$router.go(-1)
        }
    },
    mounted() {
        this.id = this.$route.params.id
    }
}