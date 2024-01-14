<template>
    <footer class="mainFooter">
        <div class="container">
            <div class="mainFooter__social">
                <img :src="logoIMG" alt="PanOps">
                <ul>
                    <li><a href=""><i class="pi pi-envelope"></i></a></li>
                    <li><a href=""><i class="pi pi-linkedin"></i></a></li>
                </ul>
            </div>
        </div>

        <div class="container">
            <ul>
                <li><a href="">Início</a></li>
                <li><a href="">Contato</a></li>
                <li><a href="">Consultoria</a></li>
                <li><a href="">Portal do Cliente</a></li>
            </ul>

            <ul>
                <li><a href="">PanOps Terminal_</a></li>
                <li><a href="">Funcionalidades</a></li>
                <li><a href="">Quanto Custa</a></li>
                <li><a href="">Perguntas Frequentes</a></li>
                <li><a href="">Documentação</a></li>
            </ul>

            <ul>
                <li><a href="">Política de Privacidade</a></li>
                <li><a href="">Política de Cookies</a></li>
            </ul>
        </div>

        <div class="container">
            <p>PanOps Solutions Licensed | Copyright @2024</p>
        </div>
    </footer>
</template>

<script>
    import logoIMG from '@/assets/logo-panops-solutions.png'
    export default {

        data(){
            return {
                logoIMG
            }
        }

    }

</script>

<style scoped>
    .mainFooter {
        padding: 30px 24px;
        background-color: #000;
    }

    .mainFooter .mainFooter__social {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .mainFooter .mainFooter__social ul {
        display: flex;
        gap: 20px;
    }

    .mainFooter .mainFooter__social i {
        font-size: 3rem;
        color: #FFF;
        transition: all ease 0.3s;
    }

    .mainFooter__social img {
        max-width: 150px;
    }

    .mainFooter .container:not(:nth-of-type(1)) ul {
        margin: 25px 0;
        padding: 0;
    }

    .mainFooter .container:not(:nth-of-type(1)) li {
        margin: 0 0 5px;
        padding: 0;
    }

    .mainFooter .container:not(:nth-of-type(1)) a {
        font-family: 'Open Sans', serif;
        text-decoration: none;
        color: #FFF;
        font-size: 2rem;
        transition: all ease 0.3s;
    }

    .mainFooter .container:nth-of-type(3) p {
        margin-bottom: 0!important;
        color: #FFF;
        font-size: 2rem;
        font-family: 'Open Sans', serif;
        text-align: center;
    }

    .mainFooter .container:nth-of-type(3) p::before {
        content: '';
        display: block;
        margin: 20px 0 10px;
        width: 100%;
        height: 2px;
        background-color: #FFF;
    }

    .mainFooter .container li:hover a,
    .mainFooter .mainFooter__social li:hover i{
        color: var(--q-color-primary);
    }

    @media (min-width: 1024px) {
        .mainFooter .container:nth-of-type(2){
            display: flex;
            gap: 100px;
        }
    }
</style>