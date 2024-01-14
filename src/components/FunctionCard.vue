<template>
    <div class="functions__card">
      <h3 v-html="title"></h3>
      <p>{{ desc }} <a v-if="link" target="_blank" :href="link">Documentação oficial</a> </p>
    </div>
</template>
  
<script>
  export default {
    props: {
      title: String,
      desc: String,
      link: String
    }
  };
</script>
  
<style>
    .functions {
        padding: 30px 0;
        background-color: #000;
        color: #FFF;
        font-family: 'Open Sans', sans-serif;
    }

    .functions > h2 {
        margin: 0 0 30px;
        text-align: center;
        font-size: 4.8rem;
    }

    .functions .container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        width: initial;
    }

    .functions__card {
        padding: 16px;
        background-color: #424242;
        flex: 0 0 320px;
    }

    .functions__card h3 {
        margin: 0;
        text-align: center;
        font-weight: 100;
        font-size: 3.4rem;
    }

    .functions__card h3::after {
        content: '';
        display: block;
        margin: 20px 0 15px;
        width: 100%;
        height: 1px;
        background-color: #FFF;
    }

    .functions__card p {
        text-align: center;
        font-size: 2rem;
        line-height: 1.5;
    }

    .functions__card a {
        color: #ff9800;
        font-size: 2rem;
        transition: all ease 0.3s;
    }

    .functions__card a:hover {
        color: var(--q-color-primary);
    }

    @media (min-width: 1024px){
        .functions__card {
            flex: 0 0 calc(33.333% - 46px);
        }
    }
</style>