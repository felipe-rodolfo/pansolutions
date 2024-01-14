<template>
    <header class="mainHeader">
        <RouterLink to="/">
            <img v-if="shouldShowLogo" class="mainHeader__logo" :src="logoIMG" alt="Panops Solutions">
        </RouterLink>

        <nav class="mainHeader__menu" ref="menu">
            <span 
                class="mainHeader__menu__btn"
                @click="toggleMenuMobile"></span>
            <ul :class="{ 'active' : isMenuOpen}">
                
                <li><RouterLink to="/">Início</RouterLink></li>
                <li><RouterLink to="/terminal">Terminal</RouterLink></li>
                <li><RouterLink to="/monitor">Monitoramento</RouterLink></li>
                <li><RouterLink to="/case">Consultoria</RouterLink></li>
                <li><RouterLink to="/login">Portal do Cliente</RouterLink></li>
            </ul>
        </nav>
    </header>

</template>

<script>

    import logoIMG from '@/assets/logo-panops-solutions.png'
    import { RouterLink } from 'vue-router';

    export default {
        data(){
            return {
                logoIMG,
                isMenuOpen: false
            };
        },
        computed: {
            shouldShowLogo() {
                return this.$route.path !== '/';
            },
        },
        methods: {
            toggleMenuMobile(){
               this.isMenuOpen = !this.isMenuOpen;

               if (this.isMenuOpen) {
                    document.addEventListener('click', this.closeMenuOnClickOutside);
                } else {
                    document.removeEventListener('click', this.closeMenuOnClickOutside);
                }
            },
            closeMenuOnClickOutside(event) {
                const menuElement = this.$refs.menu;
                if (!menuElement.contains(event.target)) {
                    this.isMenuOpen = false;
                    document.removeEventListener('click', this.closeMenuOnClickOutside);
                }
            },
        },
    }
</script>

<style scoped>
    .mainHeader {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
        gap: 30px;
        padding: 20px;
        background-color: #000;
    }

    .mainHeader__logo {
        max-width: 145px;
    }
    
    .mainHeader__menu__btn {
        position: relative;
        display: block;
        width: 24px;
        height: 3px;
        background-color: #FFF;
        cursor: pointer;
    }

    .mainHeader__menu__btn::after {
        content: '';
        display: block;
        position: absolute;
        top: 8px;
        width: 24px;
        height: 3px;
        background-color: #FFF;
        
    }

    .mainHeader__menu__btn::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 8px;
        width: 24px;
        height: 3px;
        background-color: #FFF;
        
    }

    .mainHeader__menu ul.active {
        transform: translateX(300px);
    }

    .mainHeader__menu ul {
        position: fixed;
        left: -300px;
        top: 0;
        height: 100%;
        width: 300px;
        margin-top: 0;
        padding: 10px 0 0 0;
        z-index: 1;
        list-style: none;
        background-color: var(--q-color-dark);
        transition: all ease .3s;
    }

    .mainHeader__menu a {
        display: block;
        padding: 10px 16px;
        font-family: 'Open Sans', sans-serif;
        font-size: 2rem;
        color: #FFF;
        text-decoration: none;
        transition: all ease 0.3s;
    }

    .mainHeader__menu a:hover {
        position: relative;
        color: var(--q-color-separator);
        z-index: 3;
    }

    @media (min-width: 1024px){
        
        .mainHeader {
            flex-direction: row;
            justify-content: space-between;
            padding: 0;
            height: 60px;
        }

        .mainHeader__menu__btn {
            display: none;
        }

        .mainHeader__menu {
            display: flex;
            height: 100%;
           
        }

        .mainHeader__menu ul {
            position: static;
            display: flex;
            width: initial;
            margin: 0;
            padding: 0;
            transform: translateX(0);
            background-color: #000;
        }

        .mainHeader__menu ul.active {
            transform: translateX(0);
        }

        .mainHeader__menu a {
            font-size: 1.4rem;
            color: #FFF;
        }

        .mainHeader__menu li {
            display: flex;
            align-items: center;
        }

        .mainHeader__menu li:not(:last-of-type) {
            border-right: 1px solid var(--q-color-separator);
        }
    }

</style>