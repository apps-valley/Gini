<template>
  <div class="phone-card">
    <h3 class="mb-4 pb-2">
      {{ cardData.description }}
    </h3>
    <VuePhoneNumberInput v-model="phoneNumber" class="phone-input" />
    <b-button pill variant="primary" @click="phoneSubmit()">
      {{ buttonText }}
    </b-button>
    <b-alert
      v-if="isSuccess"
      :show="dismissCountDown"
      dismissible
      variant="success"
      class="phone-alert"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      Added phone number successfully!
    </b-alert>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VuePhoneNumberInput from 'vue-phone-number-input'

export default {
  name: 'PhoneCard',
  components: {
    VuePhoneNumberInput
  },
  props: {
    cardData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      buttonText: 'Sign up today!',
      phoneNumber: '',
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },
  computed: {
    ...mapGetters({
      isSuccess: 'blog/getIsSuccessPhone'
    })
  },
  methods: {
    phoneSubmit () {
      this.$store
        .dispatch('blog/insertPhoneNumber', {
          number: this.phoneNumber
        })
        .then(() => {
          if (this.isSuccess) {
            this.buttonText = 'Thank you'
            this.showAlert()
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

<style lang="scss">
.phone-card {
  display: inline-flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 80px rgba(171, 171, 171, 0.15);
  border-radius: 12px;
  padding: 32px;
  width: 407px;
  button {
    padding: 24px 107px;
    font-size: 1.286em;
    font-weight: 600;
    line-height: 16px;
  }
  .phone-input {
    height: 56px;
    margin-bottom: 24px;
    input {
      height: 56px;
      font-size: 1.286em;
      font-weight: 500;
      line-height: 16px;
      color: #1f1e1e;
    }
    .country-selector__country-flag {
      height: 30px;
    }
  }
  .phone-alert {
    position: fixed;
    top: 0;
    right: 0;
  }
}
</style>
