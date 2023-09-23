<script setup>
const data = {
    "brain": "Мозг",
    "bud": "Почки",
    "colon": "Прямая кишка",
    "fat": "Жир",
    "heart": "Сердце",
    "liver": "Печень",
    "lung": "Легкие",
    "stomach": "Желудок"
};
</script>   

<template>
    <div class="nav sticky">
            <a @click="goBack">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>

         </a>

        <div>{{ data[$route.params.id] }}</div>
        <div>

        </div>
    </div>
    <div class="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, officiis? Asperiores, suscipit exercitationem modi vel nisi molestiae sequi eligendi enim nulla iusto ratione qui harum quasi sed laborum omnis voluptates?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, officiis? Asperiores, suscipit exercitationem modi vel nisi molestiae sequi eligendi enim nulla iusto ratione qui harum quasi sed laborum omnis voluptates?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, officiis? Asperiores, suscipit exercitationem modi vel nisi molestiae sequi eligendi enim nulla iusto ratione qui harum quasi sed laborum omnis voluptates?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, officiis? Asperiores, suscipit exercitationem modi vel nisi molestiae sequi eligendi enim nulla iusto ratione qui harum quasi sed laborum omnis voluptates?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, officiis? Asperiores, suscipit exercitationem modi vel nisi molestiae sequi eligendi enim nulla iusto ratione qui harum quasi sed laborum omnis voluptates?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, officiis? Asperiores, suscipit exercitationem modi vel nisi molestiae sequi eligendi enim nulla iusto ratione qui harum quasi sed laborum omnis voluptates?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, officiis? Asperiores, suscipit exercitationem modi vel nisi molestiae sequi eligendi enim nulla iusto ratione qui harum quasi sed laborum omnis voluptates?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, officiis? Asperiores, suscipit exercitationem modi vel nisi molestiae sequi eligendi enim nulla iusto ratione qui harum quasi sed laborum omnis voluptates?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, officiis? Asperiores, suscipit exercitationem modi vel nisi molestiae sequi eligendi enim nulla iusto ratione qui harum quasi sed laborum omnis voluptates?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, officiis? Asperiores, suscipit exercitationem modi vel nisi molestiae sequi eligendi enim nulla iusto ratione qui harum quasi sed laborum omnis voluptates?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, officiis? Asperiores, suscipit exercitationem modi vel nisi molestiae sequi eligendi enim nulla iusto ratione qui harum quasi sed laborum omnis voluptates?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, officiis? Asperiores, suscipit exercitationem modi vel nisi molestiae sequi eligendi enim nulla iusto ratione qui harum quasi sed laborum omnis voluptates?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, officiis? Asperiores, suscipit exercitationem modi vel nisi molestiae sequi eligendi enim nulla iusto ratione qui harum quasi sed laborum omnis voluptates?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, officiis? Asperiores, suscipit exercitationem modi vel nisi molestiae sequi eligendi enim nulla iusto ratione qui harum quasi sed laborum omnis voluptates?</p>
    </div>

</template>
  
<style>
.content{
    padding: 0 2rem;
}
.sticky + .content {
  padding-top: 60px;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 50px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
}

.nav a {
    color: #000;
    text-decoration: none;
    font-size: 20px;

}

.greeting {
    color: red;
    font-weight: bold;
}
</style>

<script>

import { ref } from 'vue';


export default {
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>
