<template>
    <div class="about a content">

        <div style="width: 100%;
                display: flex;
                justify-content: space-between;">
            <div class="a-center">
                <RouterLink to="/check-list/lung"><img src="/src/assets/lung.png" alt="" width="75" height="75" style="border-radius: 1000px;"></RouterLink>
                <RouterLink to="/check-list/liver"><img src="/src/assets/liver.png" alt="" width="75" height="75" style="border-radius: 1000px;"></RouterLink>
                <RouterLink to="/check-list/fat"><img src="/src/assets/fat.png" alt="" width="75" height="75" style="border-radius: 1000px;"></RouterLink>
                <RouterLink to="/check-list/colon"><img src="/src/assets/colon.png" alt="" width="75" height="75" style="border-radius: 1000px;"></RouterLink>
            </div>
            <div class="a-center">

                <RouterLink to="/check-list/brain"><img src="/src/assets/brain.png" alt="" width="75" height="75" style="border-radius: 1000px;"></RouterLink>
                <RouterLink to="/check-list/heart"><img src="/src/assets/heart.png" alt="" width="75" height="75" style="border-radius: 1000px;"></RouterLink>
                <RouterLink to="/check-list/bud"><img src="/src/assets/bud.png" alt="" width="75" height="75" style="border-radius: 1000px;"></RouterLink>
                <RouterLink to="/check-list/stomach"><img src="/src/assets/stomach.png" alt="" width="75" height="75" style="border-radius: 1000px;"></RouterLink>
            </div>

        </div>


    </div>
</template>

<style>
.content{
    padding: 0 2rem;
}
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
  




