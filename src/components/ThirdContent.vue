<template id="thirdojt">
  <div class="thirdojt">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <form @submit.prevent="validate">
            <div class="form-group row mb-3">
              <label class="col-sm-3" for="name">Name:</label>
              <div class="col-sm-9">
                <input
                  class="form-control"
                  type="text"
                  v-bind:class="{ 'is-invalid': nameError }"
                  id="name"
                  placeholder=""
                  v-model="name"
                  required
                />
                <div class="invalid-feedback" id="feedback-1" v-if="errors[0]">
                  {{ errors[0].message }}
                </div>
              </div>
            </div>
            <div class="form-group row mb-3">
              <label class="col-sm-3" for="email">Email:</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  v-bind:class="{ 'is-invalid': emailError }"
                  id="email"
                  placeholder=""
                  v-model="email"
                  required
                />
                <div class="invalid-feedback" id="feedback-2" v-if="errors[1]">
                  {{ errors[1].message }}
                </div>
              </div>
            </div>
            <div class="form-group row mb-3">
              <label class="col-sm-3" for="url">Url:</label>
              <div class="col-sm-9">
                <input
                  class="form-control"
                  type="url"
                  v-bind:class="{ 'is-invalid': urlError }"
                  id="url"
                  placeholder=""
                  v-model="url"
                  required
                />
                <div class="invalid-feedback" id="feedback-3" v-if="errors[2]">
                  {{ errors[2].message }}
                </div>
              </div>
            </div>
            <div class="form-group row mb-3">
              <label class="col-sm-3" for="phno">Phone Number:</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  v-bind:class="{ 'is-invalid': phnoError }"
                  id="phno"
                  placeholder=""
                  v-model="phno"
                  required
                />
                <div class="invalid-feedback" id="feedback-4" v-if="errors[3]">
                  {{ errors[3].message }}
                </div>
              </div>
            </div>
            <div class="row">
              <button class="btn btn-danger col-sm-2 m-3" type="cancel">
                Cancel
              </button>
              <button
                :disabled="btndisable"
                class="btn btn-danger col-sm-2 m-3"
                type="submit"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js"></script>
<script>
export default {
  name: "ThirdContent",
  template: "#thirdojt",
  data() {
    return {
      name: "",
      email: "",
      url: "",
      phno: "",
      nameError: false,
      emailError: false,
      urlError: false,
      phnoError: false,
      errors: [],
    };
  },
  computed: {
    btndisable() {
      return !this.name || !this.email || !this.url || !this.phno;
    },
  },
  methods: {
    validate() {
      this.errors = [];
      var regex = /^[a-zA-Z .-]+$/;
      if (this.name.match(regex) == null) {
        this.nameError = true;
        this.errors.push({
          message: "Name is required only a to z character",
        });
      } else {
        document.getElementById("name").className = "form-control is-valid";
        this.errors.push({
          message: "",
        });
        document.getElementById("feedback-1").className = "valid-feedback";
      }
      // email validate
      if (this.email.length < 10 || this.email.search("@") == -1) {
        this.emailError = true;
        this.errors.push({
          message: "Email is required(only email)",
        });
      } else {
        document.getElementById("email").className = "form-control is-valid";
        this.errors.push({
          message: "",
        });
        document.getElementById("feedback-2").className = "valid-feedback";
      }
      // url validate
      if (this.url.length < 10) {
        this.urlError = true;
        this.errors.push({
          message: "Url is required(only url)",
        });
      } else {
        document.getElementById("url").className = "form-control is-valid";
        this.errors.push({
          message: "",
        });
        document.getElementById("feedback-3").className = "valid-feedback";
      }
      // phno validate
      var phnoregex = /^[0-9]+$/;
      if (this.phno.match(phnoregex) == null) {
        this.phnoError = true;
        this.errors.push({
          message: "Phno is required(only number)",
        });
      } else {
        document.getElementById("phno").className = "form-control is-valid";
        this.errors.push({
          message: "",
        });
        document.getElementById("feedback-4").className = "valid-feedback";
      }
    },
  },
};
</script>
<style>
.thirdojt {
  padding: 20px 0 100px;
}
form {
  max-width: 600px;
  margin: 0 auto;
}
.invalid-feedback {
  margin-bottom: 10px;
  text-align: left;
}
</style>
