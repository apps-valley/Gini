<template>
  <div class="subscribe-content">
    <h5 class="text-uppercase">
      Subscribe
    </h5>
    <p class="mb-4">
      A free resource, made for creators of all types, who want to build a brand known by the world around them.
    </p>
    <div class="mb-5">
      <b-form inline>
        <b-form-input
          id="subscribe"
          v-model="email"
          class="subscribe-input"
          placeholder="Enter your email"
        />
        <b-button class="subscribe-button" @click="emailSubmit()">
          Subscribe
        </b-button>
        <b-alert
          v-if="isSuccess"
          :show="dismissCountDown"
          dismissible
          variant="success"
          class="email-alert"
          @dismissed="dismissCountDown=0"
          @dismiss-count-down="countDownChanged"
        >
          Added Email successfully!
        </b-alert>
      </b-form>
    </div>
    <p class="form-footer">
      By providing your email, you indicate you have read and understood our
      <a href="#" class="text-black">
        Privacy Policy
      </a>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SubscriptForm',
  data () {
    return {
      email: '',
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },
  computed: {
    ...mapGetters({
      isSuccess: 'blog/getIsSuccessEmail'
    })
  },
  methods: {
    emailSubmit () {
      this.$store.dispatch('blog/insertEmail', {
        email: this.email
      }).then(() => {
        if (this.isSuccess) {
          this.showAlert()
          this.email = ''
        }
      })
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>

<style lang="scss" scoped>
    .subscribe-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #F0EEF5;
        border-radius: 6px;
        padding: 32px 96px 24px 96px;
        margin-bottom: 32px;
        p {
            font-size: 1em !important;
        }
        .subscribe-input {
            background: #FFFFFF;
            border-radius: 12px;
            font-size: 0.93em;
            width: 290px;
            height: 56px;
            margin-right: 16px;
        }
        .subscribe-button {
            background: linear-gradient(94.94deg, #7A6EF9 2.35%, #A04BCA 100%);
            border-radius: 50px;
            color: #fff;
            font-size: 1.14em;
            line-height: 16px;
            padding: 20px 48px;
        }
        .form-footer, a {
            font-size: 0.857em !important;
            color: #808B95;
        }
        .email-alert {
            position: fixed;
            top: 0;
            right: 0;
        }
    }
</style>
