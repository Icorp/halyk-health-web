<template>
    <div class="b">
        <div class="b-left">
            <img src="/src/assets/doctor.png">
        </div>
        <div class="b-right">
            <p class="title">{{ name }}</p>
            <p class="state">{{ specialty }}</p>
            
        </div>
    </div>
</template>

<style>
.state {
    font-size: 12px;
    color: #BDBDBD;
}
.title{
    font-size: 15px;
}
.p-btn {
    margin: 0;
    padding: 0;
    color: white;
    font-size: 12px;
}
.inner-btn {
    width: 100%;
    height: 70%;
    padding-top: 8px;
    padding-bottom: 7px;
    background: #2AA65C;
    box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    display: inline-flex
}

.b-left {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    width: 70%;
}

.b-right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
}

.b {
    width: 100%;
    height: 20%;
    padding: 12px 16px;
    margin: auto;
    border-radius: 12px;
    display: flex;
    background: white;
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    margin-top: 5%;

}
</style>
<script>
export default {
    name: "DoctorComponent",
    props: [
        'image',
        'name',
        'specialty',
        'education',
    ],
    computed: {
    btnStyle() {
      return {
        "background-color": this.btnColor
      };
    }
  }
}
</script>
