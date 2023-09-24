<script setup>
</script>

<template>
    <div>
        <p class="p-comment">
            {{ title }}
        </p>

        <div v-if="text" class="text-div">
            <p class="p-date">
                {{ date }}
            </p>
            <p>
                {{ text }}
            </p>
        </div>
        <div v-else v-for="url in img_urls" style="display: flex; align-items: center;
    justify-content: center;" class="files">
            <img :src=url alt="" class="img-bottom">
        </div>

    </div>
</template>

<style>
.files {
    width: 100%;
    height: auto;
    padding: 12px 16px;
    margin: auto;
    border-radius: 12px;
    display: flex;
    background: white;
    flex-direction: column;
    justify-content: space-between;
    align-items: baseline;
    line-height: normal;
    margin-top: 10px;
    font-weight: 300;
    margin-bottom: 5%;
}
.img-bottom{
    width: 90%;
    height: auto;
    margin-top: 10px;
    border-radius: 12px;
}
.p-date{

    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    word-wrap: break-word;
    margin: 0 !important;
    padding: 0;
    color: #BDBDBD;
}
.text-div{
    width: 100%;
    height: auto;
    padding: 12px 16px;
    margin: auto;
    border-radius: 12px;
    display: flex;
    background: white;
    flex-direction: column;
    justify-content: space-between;
    align-items: baseline;
    line-height: normal;
    margin-top: 10px;
    font-weight: 300;
    margin-bottom: 5%;

}

.p-comment{
    font-size: 13px;
    font-weight: 500;
    line-height: 10px;
    word-wrap: break-word;
    margin: 0 ;
    padding: 0;


}
</style>
<script>
import DoctorComponent from "./DoctorComponent.vue";

export default {
    name: "FileView",
    components: {
      DoctorComponent,
    },
    props: [
        'title',
        'date',
        'text',
        'img_urls'
    ],
    computed: {
    btnStyle() {
      return {
        "background-color": this.btnColor
      };
    }
  }
}</script>