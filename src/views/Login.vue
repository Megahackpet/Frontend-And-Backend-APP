<template>
    <div>
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <router-link to="/"><img class="mx-auto h-24 w-24" src="https://img.freepik.com/vector-gratis/gradiente-ilustracion-pajaro-colorido_343694-1741.jpg?w=2000" alt="Your Company"></router-link>
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Ingresa a tu cuenta</h2>
        </div>
        
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div class="space-y-6">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <div class="mt-2">
                    <input v-model="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
            
                <div>
                    <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                    </div>
                    <div class="mt-2">
                    <input v-model="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
            
                <div>
                    <button @click="login()" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Ingresar</button>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
    export default{
        data(){
            return{
                email: '',
                password: ''
            }
        },
        methods:{
            login(){
                axios.post("http://127.0.0.1:8000/api/login/", {'email':this.email, 'password':this.password})
                .then(response => {
                    console.log(response.data.msg)
                    if(response.data.msg == 'ok'){
                        localStorage.setItem("cedula", response.data.cedula)
                        this.$router.push('/dashboard')
                    }else{
                        alert("Email y/o contraseña incorrectas.")
                    }
                })
            }
        }
    }
</script>