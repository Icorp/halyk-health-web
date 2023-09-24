<script setup>

</script>

<template>
  <div class="container" style="background-color: #00b74a">
    <div class="row">
      <div class="col-9">
        <div class="col-6">
          Кардиограмма
        </div>
        <div class="col-6">
          Пройдено - 27 апр. 2023
        </div>
      </div>
      <div class="col-3">
        <img src="/src/assets/success.png" class="img-fluid" alt="Wild Landscape" />
      </div>
    </div>
  </div>
</template>


<script>

import {ref} from 'vue';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImg, MDBCardText, MDBCardTitle} from "mdb-vue-ui-kit";


export default {
  components: {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImg,
    MDBBtn
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>
