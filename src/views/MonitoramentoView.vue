<template>
    <section class="monitorHeader">
        <div class="container">
            <h2>PanOps Monitor</h2>
            <p>Monitore seus equipamentos de onde você estiver com nosso sistema monitoramento</p>
        </div>
    </section>

    <section class="monitorFeatures">
        <article>
            <div class="container">
                <div class="monitorFeatures__content">
                    <h3>Dashboard</h3>
                    <p>Visualize em tempo real as informações de performance dos seus equipamentos que mantêm o seu negócio funcionando</p>
                </div>
                <div class="monitorFeatures__img">
                    <img :src="featureIMG" alt="Dashboard">
                </div>
            </div>
        </article>

        <article>
            <div class="container">
                <div class="monitorFeatures__img">
                    <img :src="sysAlertIMG" alt="">
                </div>
                <div class="monitorFeatures__content">
                    <h3>Sistema de Alertas</h3>
                    <p>Saiba tudo o que aconteceu com seus equipamentos e priorize sua atuação no momento de resolver incidentes</p>
                </div>
            </div>
        </article>

        <article>
            <div class="container">
                <div class="monitorFeatures__content">
                    <h3>Grupos e Organizações</h3>
                    <p>Agrupe seus equipamentos, apresente as informações e compartilhe a administração dos ambientes com outros usuários do PanOps Monitor</p>
                </div>
                <div class="monitorFeatures__img">
                    <img :src="groupIMG" alt="">
                </div>
            </div>
        </article>
    </section>

    <section class="monitorCall">
        <div class="container">
            <h2>Quer saber mais?</h2>
            <p>Entre em contato e tenha acesso ao nosso ambiente beta.</p>
        </div>
    </section>
</template>

<script>

    import featureIMG from '@/assets/img/feature.svg'
    import sysAlertIMG from '@/assets/img/sysalert.svg'
    import groupIMG from '@/assets/img/group.svg'

    export default {
        data(){
            return {
                featureIMG,
                sysAlertIMG,
                groupIMG
            }
        }
    }

</script>

<style scoped>

    .monitorHeader {
        padding: 30px 0;
        font-family: 'Open Sans', sans-serif;
        background-color: #262626;
        color: #FFF;
    }

    .monitorHeader .container {
        max-width: 800px;
    }

    .monitorHeader h2 {
        margin: 0 0 20px;
        font-size: 3.4rem;
        font-weight: 100;
    }

    .monitorHeader p {
        margin: 0;
        font-size: 2rem;
        font-weight: 400;
        line-height: 1.5;
    }

    .monitorFeatures article {
        padding: 24px 0;
        background-color: #212121;
        color: #FFF;
        font-family: 'Open Sans', sans-serif;
    }

    .monitorFeatures .container {
        display: flex;
        flex-direction: column;
        gap: 30px;
        max-width: 800px;
        align-items: center;
    }

    .monitorFeatures article:nth-of-type(even) .container {
        flex-direction: column-reverse;
    }

    .monitorFeatures article:nth-of-type(even) {
        background-color: #262626;
    }

    .monitorFeatures article h3,
    .monitorFeatures article p {
        margin: 0;
    }

    .monitorFeatures article h3 {
        margin-bottom: 20px;
        font-size: 2.4rem;
        font-weight: 100;
    }

    .monitorFeatures article p {
        font-size: 2rem;
        font-weight: 100;
    }

    .monitorCall {
        padding: 24px 0;
        background-color: #262626;
        color: #FFF;
        font-family: 'Open Sans', sans-serif;
    }

    .monitorCall .container {
        max-width: 550px;
    }

    .monitorCall h2,
    .monitorCall p {
        margin: 0;
    }

    .monitorCall h2 {
        margin-bottom: 20px;
        font-weight: 100;
        font-size: 3.4rem;
    }

    .monitorCall p {
        font-size: 2rem;
    }

    @media (min-width: 1024px){
        .monitorFeatures .container,
        .monitorFeatures article:nth-of-type(even) .container {
            flex-direction: row;
        }
    }

    @media (max-width: 1023px){
        .monitorHeader .container,
        .monitorCall .container,
        .monitorFeatures .container
        {
            padding-left: 10px;
            padding-right: 10px;
        }
    }

</style>