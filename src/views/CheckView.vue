<script setup>

</script>

<template>
  <MDBCard>
    <MDBCardImg
        src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
        top
    />
    <MDBCardBody  class="mt-5 mb-5">
      <MDBCardTitle>Card title</MDBCardTitle>
      <MDBCardText>
        Some quick example text to build on the card title and make up the bulk of the
        card's content.
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  <MDBCard>
    <MDBCardBody>
      <MDBCardText>
        Some quick example text to build on the card title and make up the bulk of the
        card's content.
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
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
