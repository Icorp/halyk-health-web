<script setup>
import { ref } from 'vue'
const greeting = ref('Hello World!')

</script>

<template>
  <MDBCard text="center">
    <MDBCardBody>
      <MDBCardTitle>Подключите eGov</MDBCardTitle>
      <MDBCardText>
        With supporting text below as a natural lead-in to additional content.
      </MDBCardText>
      <MDBBtn tag="a" href="#!" color="primary">Подключить</MDBBtn>
    </MDBCardBody>
  </MDBCard>
  <MDBCard text="center">
    <MDBCardBody>
      <MDBCardTitle>Подключите iHealth</MDBCardTitle>
      <MDBCardText>
        With supporting text below as a natural lead-in to additional content.
      </MDBCardText>
      <MDBBtn tag="a" href="#!" color="primary">Подключить</MDBBtn>
    </MDBCardBody>
  </MDBCard>
</template>

<script>
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdb-vue-ui-kit";
export default {
  components: {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  }
};
</script>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>