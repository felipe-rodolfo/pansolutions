<template>
  <section class="welcomeHero">
    <div class="container">
      <img class="welcomeHero__logo" :src="logoIMG" alt="Panops solutions">
      <h1>Soluções em infraestrutura de TI</h1>
    </div>
  </section>

  <section class="homeSolutions">
      <div class="container">
        <article class="homeSolutions__card">
          <img :src="solutionMonitorIMG" alt="Monitoramento de infraestrutura">
          <h2> Monitoramento de infraestrutura </h2>
          <p>Visualize o estado dos seus equipamentos em tempo real diretamente do seu celular</p>
          <a href="" class="homeSolutions__card__btn">Conheça</a>
        </article>

        <article class="homeSolutions__card">
            <img :src="solutionTerminalIMG" alt="Monitoramento de infraestrutura">
            <h2> Automação de Acessos </h2>
            <p> Otimize o gerenciamento dos seus equipamentos através de uma interface Web </p>
            <a href="" class="homeSolutions__card__btn">Conheça</a>
        </article>

        <article class="homeSolutions__card">
            <img :src="solutionCloudIMG" alt="Monitoramento de infraestrutura">
            <h2> Consultoria e Desenvolvimento </h2>
            <p> Desenvolvemos soluções de TI customizadas para atender o negócio da sua empresa </p>
            <a href="" class="homeSolutions__card__btn">Conheça</a>
        </article>
      </div>
  </section>

  <section class="aboutUs">
      <h2>Conheça a PanOps</h2>   
      <p> Somos uma empresa de tecnologia que enxerga os clientes como parceiros e está sempre procurando oferecer soluções simples e eficientes. Nossos produtos utilizam tecnologias consolidadas no mercado e, com eles, oferecemos desde soluções escaláveis até demandas customizadas, sempre buscando atender de forma mais específica as necessidades dos nossos parceiros. </p>   
  </section>
</template>

<script>
  import logoIMG from '@/assets/logo-panops-solutions.png'
  import solutionMonitorIMG from '@/assets/img/dashboard.svg'
  import solutionTerminalIMG from '@/assets/img/terminal.svg'
  import solutionCloudIMG from '@/assets/img/cloud.svg'

  export default {
    data(){
      return {
        logoIMG,
        solutionMonitorIMG,
        solutionTerminalIMG,
        solutionCloudIMG
      }
    },
  }
</script>

<style scoped>

  .welcomeHero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    margin: 0;
    min-height: 500px;
    background-image: url('../assets/img/bg-welcome-hero.png'),linear-gradient(#000,#262626);
    background-position: top;
    background-repeat: no-repeat;
    background-size: auto 530px;
    padding: 0 20px;
  }

  .welcomeHero .container {
    max-width: var(--q-width-container);
    margin: 0 auto;
    width: 100%;
  }

  .welcomeHero__logo {
    margin-bottom: 15px;
    max-width: 300px;
  }

  .welcomeHero h1 {
    margin: 0;
    font-size: 4.8rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 100;
    max-width: 435px;
  }

   /* SECTION HOME SOLUTIONS
    ======================================*/

    .homeSolutions {
      margin-top: -60px;
      background: linear-gradient(0deg, rgba(38,38,38,1) 0%, rgba(38,38,38,1) 95%, rgba(0,212,255,0) 100%);
      padding: 0 24px;
    }

    .homeSolutions .container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }

    .homeSolutions__card {
      padding: 10px;
      background: transparent;
      background: #000;
      background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 67%, rgba(0,212,255,0) 100%);
      border-radius: 20px;
      text-align: center;
      flex: 1 1 min-content;
    }

    .homeSolutions__card img {
      width: 80px;
      height: 80px;
    }

    .homeSolutions__card h2 {
      font-size: 3.6rem;
      line-height: 1;
      font-family: 'Open Sans', sans-serif;
      font-weight: 100;
      color: #FFF;
    }

    .homeSolutions__card h2::after {
      content: '';
      display: block;
      margin: 20px 0 30px;
      width: 100%;
      height: 1px;
      background-color: var(--q-color-separator);
    }

    .homeSolutions__card p {
      font-size: 2rem;
      line-height: 1.5;
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
      color: #FFF;
    }

    .homeSolutions__card__btn {
      display: inline-block;
      width: 130px;
      height: 36px;
      padding: 5px 0;
      background-color: var(--q-color-primary);
      text-align: center;
      text-transform: uppercase;
      font-weight: 100;
      font-family: 'Open Sans', sans-serif;
      font-size: 1.4rem;
      text-decoration: none;
      color: #FFF;
      line-height: 2.5;
      border-radius: 3px;
      transition: all ease 0.3s;
    }

    .homeSolutions__card__btn:hover {
      background-color: var(--q-color-dark);
    }

    @media (min-width: 1024px){

      .homeSolutions {
        padding-bottom: 20px;
      }
      .homeSolutions__card {
        
        flex: 1 1 calc(33.333% - 600px);
      }

      .homeSolutions__card h2 {
        padding: 0 23px;
        font-size: 3rem;
        line-height: 1.1;
      }
    }

    .aboutUs {
      padding: 40px 24px;
      background-color: #212121;
      font-family: 'Opens Sans', sans-serif;
      color: #FFF;
    }

    .aboutUs h2 {
      margin: 0 auto 20px;
      font-size: 4.8rem;
      text-align: center;
      font-weight: 100;
      max-width: 418px;
    }

    .aboutUs p {
      max-width: 800px;
      margin: 0 auto;
      font-size: 2rem;
      font-weight: 400;
      line-height: 1.5;
    }

    @media (min-width: 1024px){
      .aboutUs h2 {
        max-width: initial;
      }
    }
</style>