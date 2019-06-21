import { Button } from 'ant-design-vue'
export default {
  data () {
    return {
      user: '',
      pass: ''
    }
  },
  components: {
    Button
  },
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.user = values.user
          this.pass = values.pass
        }
      })
    },
    goBack () {
      // this.$router.push({ name: 'Hello' })
      this.$router.go(-1)
    }
  }
}
