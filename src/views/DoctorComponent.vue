<template>
    <div class="b">
        <div class="b-left">
            <img src="/src/assets/doctor.png">
        </div>
        <div class="b-right">
            <p class="name">{{ name }}</p>
            <p class="speciality">{{ speciality }}</p>
            <div v-if="education.trim().length === 0">
                <p class="state">{{ time }}</p>
                <p class="education">{{ date }}</p>
            </div>
            <div v-else class="education">{{ education}}</div>
        </div>
    </div>
</template>

<style>
.state {
    font-size: 12px;
    color: #BDBDBD;
}
.name {
    font-size: 14px;
    color: #000000;
    font-family: 'Manrope Regular', sans-serif;
}

.speciality {
    font-size: 12px;
    color: #000000;
    font-family: 'Manrope Extralight', sans-serif;
}

.education {
    font-size: 12px;
    color: #BDBDBD;
}

.b-left {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    width: 20%;
}

.b-right {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    padding-left: 20px;
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
    margin-bottom: 5%;

}
</style>
<script>
export default {
    name: "DoctorComponent",
    props: [
        'image',
        'name',
        'speciality',
        'education',
        'time',
        'date',
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
