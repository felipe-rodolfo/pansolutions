<template>
    <section class="terminalIntro">
        <video ref="videoIntro" :poster="posterVideoTerminal" @click="setControlsOnClick">
            <source :src="videoTerminal" type="video/mp4">
        </video>
    </section>

    <section class="functions">
        <h2>Funções</h2>
        <div class="container">

            <FunctionCard
                
                v-for="(func, index) in functionsSection" :key="index"
                :title="func.title"
                :desc="func.desc"
                :link="func.link"
            />

        </div>
    </section>

    <section class="price">
        <h2>Quanto Custa?</h2>
        <div class="container">
            <div class="price__card">
                <h3>Plano<br> Mensal</h3>
                <i class="pi pi-calendar"></i>
                <hr>
                <p>R$29,90</p>
                <p>por usuário / mês</p>
                <a href="">Contrate</a>
            </div>
            <div class="price__card">
                <h3>Plano<br> Anual</h3>
                <div class="discount">
                    <p>16% OFF</p>
                </div>
                <i class="pi pi-users"></i>
                <hr>
                <p>R$299,90</p>
                <p>por usuário / mês</p>
                <a href="">Contrate</a>
            </div>
            <div class="price__card">
                <h3>Plano<br> Personalizado</h3>
                <i class="pi pi-clone"></i>
                <hr>
                <p></p>
                <p>Implementação da solução ou customizações para seu ambiente</p>
                <a href="">Contrate</a>
            </div>
        </div>
    </section>

    <section class="faq">
        <h2>Perguntas Frequentes</h2>

        <div class="container">
            <h3>Qual a quantidade minima de usuários?</h3>
            <p>Você pode começar a utilizar o sistema com apenas um usuário, não há pacote mínimo para contratação. Entretanto não é possível acessar o sistema com o mesmo usuário em computadores diferentes ao mesmo tempo.</p>

            <h3>A plataforma limita as sessões simultâneas?</h3>
            <p>A comunicação com seus equipamentos e servidores é gerenciada pelo servidor de acesso PanOps instalado na infraestrutura do contratante, por isso a quantidade de sessões depende dos recursos disponibilizados para esse servidor de acesso. Em caso de sobrecarga, novos servidores podem ser adicionados.</p>

            <h3>Posso salvar minhas sessões?</h3>
            <p>O PanOps Terminal armazena as informações salvas pelos usuários em uma base de dados em formato criptografado, dessa forma o usuário pode acessar todas os seus itens salvos de qualquer lugar. Não há limites de sessões ou credenciais que um usuário pode salvar.</p>

            <h3>Posso criar meus próprios scripts?</h3>
            <p>Os scripts são criados pelos usuários que possuem a permissão de administração na sua organização. O PanOps Terminal executa scripts com base na interpretação de saídas das sessões TELNET e SSH. Não há limite de Scripts por organização.</p>

            <h3>Posso ter mais de um servidor de acesso na minha infraestrutura?</h3>
            <p>Sim. Você pode cadastrar quantos servidores de acesso forem necessários para garantir a conectividade ou balanceamento de carga. O servidor de acesso correto deve ser relacionado pelos usuário no momento da conexão em uma nova sessão.</p>
        </div>
    </section>
</template>

<script>

import videoTerminal from '@/assets/media/videointro.mp4'
import posterVideoTerminal from '@/assets/img/poster.jpg'
import FunctionCard from "@/components/FunctionCard.vue";

const functionsSection = [
    {
        title: 'Acesso Remoto Centralizado',
        desc: 'Gerencie diversos equipamentos utilizando os principais protocolos (Telnet, SSH, VNC e RDP).'
    },
    {
        title: 'Múltiplas</br>Sessões',
        desc: 'Ganhe ainda mais tempo ao transformar seus procedimentos em script dentro da própria ferramenta.'
    },
    {
        title: 'Scripts Customizados',
        desc: 'Ganhe ainda mais tempo ao transformar seus procedimentos em script dentro da própria ferramenta.'
    },
    {
        title: 'Documentação em Português',
        desc: 'Material consultivo totalmente em português disponível em nosso site',
        link: 'https://docs.panops.com.br'
    },
    {
        title: 'Sessões Compatilhadas',
        desc: 'Trabalhe em conjunto com outros membros de sua organização através do compartilhamento de sessão'
    },
    {
        title: 'Acesso Supervisionado',
        desc: 'Oriente suas equipes e acompanhe as sessões ativas dos operadores conectados aos equipamentos'
    },
    {
        title: 'Configurações Sincronizadas',
        desc: 'Suas preferências de perfil estarão disponíveis em qualquer lugar que você utilizar o terminal'
    },
    {
        title: 'Todos os<br> Recursos',
        desc: 'Acesso a todas as funcionalidades da plataforma sem necessidade de contratação de pacotes adicionais'
    },
    {
        title: 'Integrações Customizadas',
        desc: 'Utilize seus sistemas internos de cadastros de equipamentos para agilizar seu acesso'
    },

]
    export default {
        data(){
            return {
                videoTerminal,
                posterVideoTerminal,
                functionsSection
            }
        },
        components: {
            FunctionCard
        },
        methods: {
            setControlsOnClick(){
                this.$refs.videoIntro.setAttribute("controls", "controls")
            }
        }
    }

</script>

<style scoped>

    .terminalIntro {
        display: flex;
        justify-content: center;
        background-color: #262626;
    }
    .terminalIntro video {
        max-height: 60vh;
        max-width: 100%;
        cursor: pointer;
    }

    .price {
        background-color: #262626;
        padding: 30px 0;
    }

    .price > h2 {
        margin: 0 0 20px;
        font-size: 4.8rem;
        color: #FFF;
        font-weight: 700;
        text-align: center;
        font-family: 'Open Sans', sans-serif;
    }

    .price .container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .price__card {
        position: relative;
        padding: 16px;
        width: calc(400px - 50px);
        background-color: #424242;
        color: #FFF;
        font-family: 'Open Sans', sans-serif;
        text-align: center;
    }

    .price__card h3 {
        margin: 0 0 10px;
        font-size: 3.4rem;
    }

    .price__card .discount {
        position: absolute;
        top: 0;
        right: 0;
        width: 150px;
        height: 120px;
        overflow: hidden;
    }

    .price__card div.discount p {
        display: block;
        position: absolute;
        margin: 0;
        left: 0;
        transform: rotate(35deg);
        transform-origin: 0 0;
        width: 164%;
        text-align: center;
        top: -39px;
        font-size: 2rem;
        font-weight: 100;
    }

    .price__card .discount::before {
        display: block;
        position: absolute;
        left: 0;
        transform: rotate(35deg);
        transform-origin: 0 0;
        content: "";
        width: 150%;
        height: 40px;
        background: #0073a0;
        top: -50px;
    }

    .price__card i {
        display: block;
        margin-bottom: 20px;
        font-size: 6rem;
    }

    .price__card hr {
        margin-bottom: 20px;
    }

    .price__card p:nth-of-type(1) {
        margin: 0 0 10px;
        font-size: 4.8rem;
        font-weight: 700;
    }

    .price__card p:nth-of-type(2) {
        margin: 0 0 15px;
        font-size: 2rem;
    }

    .price__card a {
        display: inline-block;
        padding: 10px 20px;
        background-color: #ff9800;
        font-size: 2rem;
        font-weight: 500;
        text-decoration: none;
        text-transform: uppercase;
        color: #FFF;
        transition: all ease 0.3s;
        border-radius: 3px;
    }

    .price__card a:hover {
        background-color: var(--q-color-primary);
    }

    .price__card:nth-of-type(3) p:nth-of-type(2) {
        margin: 38px 0;
    }

    .faq {
        padding: 40px 0;
        background-color: #212121;
        color: #FFF;
        font-family: 'Open Sans', sans-serif;
    }
    .faq > h2 {
        margin: 0 0 20px;
        text-align: center;
        font-size: 4.8rem;
        font-weight: 500;
    }

    .faq h3 {
        margin: 0 0 10px;
        font-size: 2.4rem;
        color: #ff9800;
        font-weight: 100;
    }

    .faq p {
        margin: 0 0 20px;
        font-size: 2rem;
        font-weight: 100;
        line-height: 1.5;
    }

</style>