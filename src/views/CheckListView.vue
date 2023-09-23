<template>
    <div class="about a">

        <div style="width: 100%;
                display: flex;
                justify-content: space-between;">
            <div class="a-center">
                <RouterLink to="/check-list/1"><img src="/src/assets/1.png" alt="" width="75" height="75" style="border-radius: 1000px;"></RouterLink>
                <RouterLink to="/check-list/2"><img src="/src/assets/2.png" alt="" width="75" height="75" style="border-radius: 1000px;"></RouterLink>
                <RouterLink to="/check-list/3"><img src="/src/assets/3.png" alt="" width="75" height="75" style="border-radius: 1000px;"></RouterLink>
                <RouterLink to="/check-list/4"><img src="/src/assets/4.png" alt="" width="75" height="75" style="border-radius: 1000px;"></RouterLink>
            </div>
            <div class="a-center">

                <RouterLink to="/check-list/5"><img src="/src/assets/5.png" alt="" width="75" height="75" style="border-radius: 1000px;"></RouterLink>
                <RouterLink to="/check-list/6"><img src="/src/assets/6.png" alt="" width="75" height="75" style="border-radius: 1000px;"></RouterLink>
                <RouterLink to="/check-list/7"><img src="/src/assets/7.png" alt="" width="75" height="75" style="border-radius: 1000px;"></RouterLink>
                <RouterLink to="/check-list/8"><img src="/src/assets/8.png" alt="" width="75" height="75" style="border-radius: 1000px;"></RouterLink>
            </div>

        </div>


    </div>
</template>
  
<style>
.about {
    display: flex;
    flex-wrap: wrap;
}

.column {
    flex: 1;
    padding: 10px;
    text-align: center;
}

.column img {
    border-radius: 1000px;
}

.a-center {
    flex-direction: column;
    display: flex;
    justify-content: space-between;
}

.responsive {
    width: 100%;
    height: auto;
}

.a {
    background-image: url("/src/assets/crop.svg");
    background-position: center;
    width: 100%;
    height: auto;

    background-size: contain;
    background-repeat: no-repeat;
}

@media (min-width: 1024px) {

    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
  




