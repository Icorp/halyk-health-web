<script setup>
    const data = {
        "brain": "врача невролога",
        "bud": "врача нефролога",
        "colon": "врача проктолога",
        "gallbladder": "врача гастроэнтеролог-гепатолога",
        "heart": "врача кардиолога",
        "liver": "врача гепатолога",
        "lung": "врача пульмонолога",
        "stomach": "врачагастроэнтеролог",
    };
</script>

<template>
    <div class="main">
        <div>
                <img src="/src/assets/cardio1.jpeg">
                <div class="heart-status">
                    <p>
                        Общее состояние сердца
                    </p>
                    <div class="progressbar">
  <span style="width: 30%"></span>
</div>

                </div>
                <div v-for="item in items[$route.params.id]">
                    <ButtonComponent
                        v-bind:title="item.title"
                        v-bind:btnText="item.btnText"
                        v-bind:dateTime="item.dateTime"
                        v-bind:status="item.status"
                        v-bind:btnColor="item.btnColor"
                        v-bind:btnLink="item.btnLink"
                    />
                </div>

        </div>

       
        <div>

        <div style="height: fit-content;" class="low-btn">
            <a href="/report/1">
                <p class="low-p">
                    История посещения у {{ data[$route.params.id]}}
                </p>
            </a>
        </div>
    </div>

    </div>


</template>
  
<style>



.progressbar { 
	height: 20px;
	position: relative;
	background: #555;
	padding: 3px;
	box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
}
.progressbar > span {
  display: block;
  height: 100%;
  background-color: rgb(43,194,83);
  background-image: linear-gradient(
    center bottom,
    rgb(43,194,83) 37%,
    rgb(84,240,84) 69%
  );
  box-shadow: 
    inset 0 2px 9px  rgba(255,255,255,0.3),
    inset 0 -2px 6px rgba(0,0,0,0.4);
  position: relative;
  overflow: hidden;
}
.orange > span {
  background-color: #f1a165;
  background-image: linear-gradient(to bottom, #f1a165, #f36d0a);
}

.red > span {
  background-color: #f0a3a3;
  background-image: linear-gradient(to bottom, #f0a3a3, #f42323);
} 
.progressbar > span:after {
  content: "";
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  background-image: linear-gradient(
    -45deg, 
    rgba(255, 255, 255, .2) 25%, 
    transparent 25%, 
    transparent 50%, 
    rgba(255, 255, 255, .2) 50%, 
    rgba(255, 255, 255, .2) 75%, 
    transparent 75%, 
    transparent
  );
  z-index: 1;
  background-size: 50px 50px;
  animation: move 2s linear infinite;
  overflow: hidden;
}
@keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
}



.heart-status {
    width: 100%;
    height: auto;
    padding: 12px 16px;
    margin: auto;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    background: white;
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    margin-top: 5%;
}
img {
    width: 100%;
    border-radius: 20px;
}
.main{
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.low-p{
    width: 100%;
    height: 100%;
    text-align: center;
    color: white;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    word-wrap: break-word;
}
.low-btn {
    width: 100%;

    padding-left: 16px;
    padding-right: 16px;
    padding-top: 14px;
    padding-bottom: 14px;
    background: #2AA65C;
    box-shadow: 0px 0px 0px rgba(42, 166, 92, 0.40);
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    display: inline-flex;
}
p {
    margin: 0;
    padding: 0;
}
</style>

<script>

import { ref } from 'vue';
import ButtonComponent from './ButtonComponent.vue';



export default {
    components: {
        ButtonComponent
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    },
    data () {
        return {
            items: 
                {
                    "heart":[
                        {
                            "title": "Кардиограмма",
                            "btnText": "PDF",
                            "dateTime": "27 апр. 2023",
                            "status": "Пройдено",
                            "btnColor": "#2AA65C",
                            "btnLink": "https://api15.ilovepdf.com/v1/download/q36trk51vgts6y51p09hccq7krkd2p1lh425Akq50xxq606f70kwc0nkdhAhjqcw4hv5kpmchq2t0wv3vn095ngyk7ky3k2yfgjks11zzp2lk5nf1n6r8vh1krky7tjbz1jvb7qmrAyw6by66d8lAAg8pjp0zdrr73kbzkq0dh6vyAjrfb9q"
                        },
                        {
                            "title": "Сдать анализы",
                            "btnText": "Вызвать",
                            "dateTime": "30 апр. 2023",
                            "status": "Доступная дата",
                            "btnColor": "#FF0101",
                            "btnLink": "/search-doctor"
                        },
                        {
                            "title": "Прием у кардиолога",
                            "btnText": "Подробнее",
                            "dateTime": "04 мая 2023",
                            "status": "Запись",
                            "btnColor": "#FF9901",
                            "btnLink": ""
                        },
                    ]
                }
            
        }
    }
}
</script>
