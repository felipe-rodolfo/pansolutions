<template>
    <section class="loginForm">
        <form action="" @submit.prevent="submitForm">
            <p>Informa suas credenciais</p>
            <label for="">
                <p>Usuário *</p>
                <input type="text" name="username" v-model="username" @input="clearErrorMessage('username')" :class="{ 'error': !username && showErrorMessages }">
                <span v-if="!username && showErrorMessages">Campo obrigatório</span>
            </label>
            
            <label for="">
                <p>Senha *</p>
                <input  name="password" autocomplete="current-password" v-model="password" :type="showPassword ? 'text' : 'password'" @input="clearErrorMessage('password')" :class="{ 'error': !username && showErrorMessages }">
                <i class="pi" :class="{ 'pi-eye': !showPassword, 'pi-eye-slash': showPassword }" @click="togglePasswordVisibility"></i>
                <span v-if="!password && showErrorMessages">Campo obrigatório</span>
            </label>

            <button>Acessar</button>
            
        </form>
    </section>
</template>

<script>

    export default {
        data() {
            return {
                password: '',
                showPassword: false,
                showErrorMessages: false,
            }
        },
        methods: {
            togglePasswordVisibility() {
                this.showPassword = !this.showPassword;
            },
            clearErrorMessage(field) {
                if (field === 'username') {
                    this.$set(this, `${field}ErrorMessage`, false);
                } else if (field === 'password') {
                    this.$set(this, `${field}ErrorMessage`, false);
                }
            },
            submitForm() {
                if (!this.username || !this.password) {
                    this.showErrorMessages = true;
                    return;
                }
                console.log('Formulário enviado:', { username: this.username, password: this.password });
            },

        },
    }

</script>

<style scoped>
    .loginForm {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: #262626;
        height: 90vh;
        color: #FFF;
    }

    .loginForm form {
        width: 280px;
    }

    .loginForm input {
        height: 55px;
        width: 100%;
        background: transparent;
        border: 1px solid var(--q-color-separator);
        font-size: 1.8rem;
        color: #FFF;
        border-radius: 3px;
        font-family: 'Open Sans', sans-serif;
    }
    
    .loginForm form p {
        text-align: center;
        font-family: 'Open Sans', sans-serif;
        font-weight: 100;
        font-size: 2rem;
    }

    .loginForm label {
        display: block;
        position: relative;
        margin-bottom: 20px;
    }

    .loginForm label p {
        position: absolute;
        margin: 0;
        top: 5px;
        left: 5px;
        font-size: 1.4rem;
        color: 1px solid var(--q-color-separator);
    }

    .loginForm label span {
        display: block;
        margin-bottom: 20px;
        color: var(--q-color-negative);
    }

    .loginForm label i {
        position: absolute;
        top: 20px;
        right: 5px;
        font-size: 2rem;
        cursor: pointer;
    }

    .loginForm button {
        display: block;
        padding: 10px 20px;
        margin: 0 auto;
        border: none;
        background-color: var(--q-color-primary);
        cursor: pointer;
        border-radius: 3px;
        font-size: 1.4rem;
        text-transform: uppercase;
        color: #FFF;
        font-family: 'Open Sans', sans-serif;
    }

    .loginForm button:hover {
        background-color: var(--q-color-secondary);
    }
</style>