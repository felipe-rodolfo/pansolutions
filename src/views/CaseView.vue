<template>
    <section class="caseIntro">
        <h1>Consultoria e Desenvolvimento</h1>
        <p>Ajudando nossos clientes e parceiros à usar a tecnologia para apoiar seus negócios.</p>
    </section>

    <section class="cases">
        <article class="cases__card">
            <img :src="provtelIMG" alt="provtel">
            <h1>Conteinerização</h1>
            <hr>
            <p>Migração de aplicação de monitoramento para infraestrutura em containers</p>
            <a href="">Saiba mais</a>
        </article>

        <article class="cases__card">
            <img :src="umTelecomIMG" alt="provtel">
            <h1>Autenticação</h1>
            <hr>
            <p>Sistema de autenticação para assinantes da Um Telecom em aplicações de terceiros</p>
            <a href="">Saiba mais</a>
        </article>

        <article class="cases__card">
            <img :src="suporteIMG" alt="provtel">
            <h1>Sistemas Internos</h1>
            <hr>
            <p>Desenvolvimento do sistema de controle de atividades e suporte a sistemas internos</p>
            <a href="">Saiba mais</a>
        </article>
    </section>

    <section class="stack">
        <h2>Com o que trabalhamos</h2>
        <p>Algumas tecnologias que usamos para apoiar nossos clientes</p>
        <div class="container">
            <ul>
                <li>
                    
                    <img :src="pythonIMG" alt="Pyhton">
                    <p>Python</p>
                </li>
                <li>
                    <img :src="djangoIMG" alt="Django">
                    <p>Django</p>
                </li>
                <li>
                    <img :src="vuejsIMG" alt="Vue.js">
                    <p>Vue.js</p>
                </li>
                <li>
                    <img :src="quasarIMG" alt="Quasar">
                    <p>Quasar</p>
                </li>
                <li>
                    <img :src="html5IMG" alt="HTML5">
                    <p>HTML5</p>
                </li>
                <li>
                    <img :src="css3IMG" alt="CSS3">
                    <p>CSS3</p>
                </li>
                <li>
                    <img :src="bootstrapIMG" alt="Bootstrap">
                    <p>Bootstrap</p>
                </li>
                <li>
                    <img :src="mongodbIMG" alt="MongoDB">
                    <p>MongoDB</p>
                </li>
                <li>
                    <img :src="dockerIMG" alt="Docker">
                    <p>Docker</p>
                </li>
                <li>
                    <img :src="zabbixIMG" alt="Zabbix">
                    <p>Zabbix</p>
                </li>
                <li>
                    <img :src="ciscoIMG" alt="Cisco">
                    <p>Cisco</p>
                </li>
                <li>
                    <img :src="gitlabIMG" alt="Gitlab">
                    <p>Gitlab</p>
                </li>

                <li>
                    <img :src="pwaIMG" alt="PWA">
                    <p>PWA</p>
                </li>

                <li>
                    <img :src="nginxIMG" alt="NGINX">
                    <p>Nginx</p>
                </li>

                <li>
                    <img :src="centosIMG" alt="Centos">
                    <p>CentOS</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>

    import provtelIMG from '@/assets/img/provtel.png'
    import umTelecomIMG from '@/assets/img/1telecom.png'
    import suporteIMG from '@/assets/img/suporte.png'

    import pythonIMG from '@/assets/img/python.png'
    import djangoIMG from '@/assets/img/django.png'
    import vuejsIMG from '@/assets/img/vuejs.png'
    import quasarIMG from '@/assets/img/quasar.png'
    import html5IMG from '@/assets/img/html5.png'
    import css3IMG from '@/assets/img/css3.png'
    import bootstrapIMG from '@/assets/img/bootstrap.png'
    import mongodbIMG from '@/assets/img/mongodb.png'
    import dockerIMG from '@/assets/img/docker.png'
    import zabbixIMG from '@/assets/img/zabbix.png'
    import ciscoIMG from '@/assets/img/cisco.png'
    import gitlabIMG from '@/assets/img/gitlab.png'
    import pwaIMG from '@/assets/img/pwa.png'
    import nginxIMG from '@/assets/img/nginx.png'
    import centosIMG from '@/assets/img/centos.png'

    export default {
        data(){
            return {
                provtelIMG,
                umTelecomIMG,
                suporteIMG,
                pythonIMG,
                djangoIMG,
                vuejsIMG,
                quasarIMG,
                html5IMG,
                css3IMG,
                bootstrapIMG,
                mongodbIMG,
                dockerIMG,
                zabbixIMG,
                ciscoIMG,
                gitlabIMG,
                pwaIMG,
                nginxIMG,
                centosIMG
            }
        }
    }
    
</script>

<style scoped>
    .caseIntro {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 90px 10px;
        background-color: #262626;
        color: #FFF;
    }

    .caseIntro h1,
    .caseIntro p {
        margin: 0;
    }

    .caseIntro h1 {
        margin-bottom: 20px;
        font-weight: 100;
        font-size: 4.8rem;
        font-family: 'Open Sans', sans-serif;
    }

    .caseIntro p {
        font-weight: 400;
        font-size: 2rem;
        font-family: 'Open Sans', sans-serif;
    }
    
    .cases {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
        gap: 20px;
        background-color: #262626;
        color: #FFF;
        font-family: 'Open Sans', sans-serif;
        justify-content: center;
    }

    .cases__card {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #191919;
        padding: 24px;
        width: 380px;
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 67%, rgba(0,212,255,0) 100%);
    }

    .cases__card img {
        max-width: 240px;
    }

    .cases__card h1,
    .cases__card p {
        margin: 0;
        padding: 0;
    }

    .cases__card h1 {
        margin: 20px 0;
        font-size: 2.4rem;
        font-weight: 100;
        font-family: 'Open Sans', sans-serif;
    }

    .cases__card hr {
        display: block;
        margin-bottom: 20px;
        width: 100%;
        border-color: var(--q-color-separator);
    }

    .cases__card p {
        margin-bottom: 20px;
        font-size: 2rem;
        text-align: center;
        line-height: 1.5;
    }

    .cases__card a {
        padding: 10px 15px;
        text-transform: uppercase;
        font-weight: 100;
        color: #FFF;
        text-decoration: none;
        font-size: 1.4rem;
        border-radius: 3px;
        background-color: var(--q-color-primary);
    }

    .cases__card a:hover {
        background-color: var(--q-color-secondary);
    }

    .stack {
        padding: 40px 0;
        background-color: #262626;
    }

    .stack h2 {
        text-align: center;
        color: #FFF;
        font-weight: 100;
        font-size: 4.8rem;
        font-family: 'Open Sans', sans-serif;
        margin: 0 0 20px;
    }

    .stack > p {
        text-align: center;
    }

    .stack ul {
        display: flex;
        flex-wrap: wrap;
        gap: 80px;
        list-style: none;
        margin-top: 30px;
        padding: 0 30px;
        justify-content: center;
    }

    .stack li {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 0 0 100px;
    }

    .stack img {
        width: 75px;
        height: 75px;
        object-fit: contain;
        filter: grayscale(1);
        transition: all ease 0.3s;
    }

    .stack li:hover img {
        filter: grayscale(0);
    }

    .stack p {
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 2rem;
        font-weight: 400;
        color: #FFF;
    }

</style>