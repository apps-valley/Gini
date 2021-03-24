<template>
  <transition name="modal">
    <div v-show="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <h3>Sending Email</h3>
        </div>
        <div class="modal-body">
          <label class="form-label">
            Your Email
            <input v-model="email" type="email" class="form-control">
          </label>
          <span v-if="error" class="form-error">Wrong email format!</span>
        </div>
        <div class="modal-footer text-right">
          <button class="modal-default-button" @click="savePost()">
            Send
          </button>
          <button class="modal-default-button cancel" @click="cancel()">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'EmailInputModal',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      email: null,
      error: false
    }
  },
  watch: {
    show (val) {
      this.email = null
      this.error = false
    }
  },
  methods: {
    savePost () {
      // Some save logic goes here...
      const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if (mailFormat.test(this.email)) {
        this.$emit('ok', this.email)
      } else {
        this.error = true
      }
    },
    cancel () {
      this.$emit('update:show', false)
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 400px;
  margin: 14% auto 0;
  padding: 20px 15px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #7d6af4 !important;
}

.modal-body {
  margin: 3px 0;
}

.modal-default-button {
  background: #7d6af4;
  padding: 13px 24px;
  font-size: 0.875rem;
  line-height: 16px;
  font-weight: 500;
  border: none;
  color: #fff;
  border-radius: 10px;
  text-decoration: none;
}

.text-right {
  text-align: right;
}

.form-label {
  display: block;
  margin-bottom: 1em;
  text-align: left;
  color: #606a73;
  font-size: 16px;
  .form-control {
    margin-top: 0.5em;
  }
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.5em 1em;
  line-height: 1.5;
  border: 1px solid #ddd;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.cancel {
  background: #6c757d !important;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.form-error {
  color: #dc3545;
}
</style>
