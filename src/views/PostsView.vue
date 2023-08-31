<template>
    <div class="posts">
        <img src="../assets/img/jose.svg" alt="FaceJob" class="logo">
        <CardComp 
        class="mt-2 mx-auto single-post"
        picture="https://images.pexels.com/photos/886051/pexels-photo-886051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        parrafo="Hello!!" 
        :header="{ 
            name:'Jose Caceres',
            picture: 'https://randomuser.me/api/portraits/men/60.jpg'}"
            :likes="true"/>
        <CardComp
        class="mt-2 mx-auto single-post"
        picture="https://images.pexels.com/photos/1083515/pexels-photo-1083515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        parrafo="Hello!!" 
        :header="{ 
            name:'Susana Perez',
            picture: 'https://randomuser.me/api/portraits/women/3.jpg'}"
            :likes="true"/>
    </div>
</template>

<script>
    import CardComp from '@/components/CardComp.vue';
    export default {
        name: "PostsView",
        components: {
            CardComp
        }
    }
</script>
<style scoped>
    .posts {
        min-width: 60vh;
        max-width: 895px;
        margin: auto;
    }
    .logo {
        max-width: 115px;
        padding: 00.2rem;
    }
    .single-post{
        max-width: 550px;
    }
</style>