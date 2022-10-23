<template>
  <div>
    <input type="text" v-model="email"/>
    <button @click="sendData">SEND</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      errors: []
    }
  },

  // Gửi request lên server khi mà postPost() được gọi
  methods: {
    sendData(){
      axios.post(`http://192.168.1.11:5002/test`, {email: this.email})
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  },
  created(){
    
  }
}
</script>