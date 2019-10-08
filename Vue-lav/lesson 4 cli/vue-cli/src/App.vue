<template>
  <div class="wrapper">
    <div class="sample">
      <form @submit.prevent="formSubmited = true" v-if="!formSubmited">
        <div class="progress">
          <div class="progress-bar" :style="progressWidth"></div>
        </div>
        <div>
          <app-input
            v-for="(item,index) in info"
            :key="index"
            :name="item.name"
            :value="item.value"
            :pattern="item.pattern"
            @changedata="childOnInput(index, $event)"
          ></app-input>
        </div>
        <button class="btn btn-primary" :disabled="done < info.length">Send Data</button>
      </form>
      <div v-else>
        <table class="table table-bordered">
          <tr v-for="(item, index) in  info" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.value }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from "./components/Input";

export default {
  data() {
    return {
      info: [
        {
          name: "Name",
          value: "3223",
          pattern: /^[a-zA-Z ]{2,30}$/
        },
        {
          name: "Phone",
          value: "",
          pattern: /^[0-9]{7,14}$/
        },
        {
          name: "Email",
          value: "fsddsf",
          pattern: /.+/
        },
        {
          name: "Some Field 1",
          value: "",
          pattern: /.+/
        },
        {
          name: "Some Field 2",
          value: "",
          pattern: /.+/
        }
      ],
      controls: [],
      formSubmited: false,
      done: 0
    };
  },
  methods: {
    childOnInput(index, e) {
      this.info[index].value = e.value;
      this.controls[index] = e.valid;
      let validAmount = 0;

      for (let i = 0; i < this.controls.length; i++) {
        if (this.controls[i]) {
          validAmount++;
        }
      }

      this.done = validAmount;
    }
  },
  computed: {
    progressWidth() {
      return {
        width: (this.done / this.info.length) * 100 + "%"
      };
    }
  },
  components: {
    AppInput
  }
};
</script>

<style scoped>
.wrapper {
  max-width: 600px;
  margin: auto;
}
</style>