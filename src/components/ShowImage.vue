<template>
  <div id="app">
    <b-form-file type="file" @change="onFileChange" ></b-form-file>

    <div id="preview">
      <img v-if="url" :src="url" />
    </div>
    <button @click="getData">SEND</button>
    <h1>{{bankName}}</h1>
    <h1>{{bankNumber}}</h1>
    <h1>{{userName}}</h1>
    <img width="416" height="350" v-bind:src="'data:image/jpeg;base64,'+imageBase64" alt="imageDetect"/>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      url: null,
      path:'',
      bankName: '',
      bankNumber: '',
      userName: '',
      imageBase64: ''
    }
  },
  methods: {
    onFileChange(e) {
      this.path = e.target.files[0];
      this.url = URL.createObjectURL(this.path);
      console.log(this.path);
    },
    getData(){
      let formData = new FormData();
      formData.append('image',this.path)
      const path = 'http://192.168.1.11:5001/detectObject'
      axios.post(path,formData)
      .then(res => {
        this.userName = res.data['data'].string_userName,
        this.bankName = res.data['data'].string_bankName,
        this.bankNumber = res.data['data'].string_bankNumber,
        this.imageBase64 = res.data['data'].img_base64.split('\'')[1]
      }).catch(err => console.error(err))
    }
  }
}
</script>
<style>

  #preview {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #preview img {
    max-width: 450px;
    max-height: 350px;
  }
</style>