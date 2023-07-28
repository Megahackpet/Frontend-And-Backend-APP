<template>
    <div>
        <div class="text-center text-3xl font-bold my-4">Dashboard JADEN CORP</div>
        
        <div class="flex justify-center">
            <div class="bg-slate-300 p-6 shadow-xl rounded-md">
                <div>Cuenta de {{ data[5] }}</div>
                <div>Nro. {{ data[4] }}</div>
                <div>Saldo disponible</div>
                <div>${{ data[6] }}</div>
            </div>
        </div>

        <div class="flex justify-center space-x-2">
            <div class="flex justify-center my-4">
                <button class="bg-slate-400 p-6 shadow-xl rounded-md flex align-center" @click="flag_transferir = !flag_transferir; flag_account = false; flag_historial = false">
                    <img src="../assets/transfer-fee-svgrepo-com.svg" class="w-5 h-5 mr-2" alt="Transferir"><span>Transferir</span>
                </button>
            </div>
            <div class="flex justify-center my-4">
                <button class="bg-slate-400 p-6 shadow-xl rounded-md flex align-center" @click="flag_historial = !flag_historial; flag_account = false; flag_transferir = false; getHistorial()">
                    <img src="../assets/history-svgrepo-com.svg" class="w-5 h-5 mr-2" alt="Transferir"><span>Historial</span>
                </button>
            </div>
            <div class="flex justify-center my-4">
                <button class="bg-slate-400 p-6 shadow-xl rounded-md flex align-center" @click="flag_account = !flag_account; flag_transferir = false; flag_historial = false">
                    <img src="../assets/account-svgrepo-com.svg" class="w-5 h-5 mr-2" alt="Transferir"><span>Cuenta</span>
                </button>
            </div>
            <div class="flex justify-center my-4">
                <button class="bg-red-400 p-6 shadow-xl rounded-md flex align-center" @click="logout()">
                    <img src="../assets/logout-2-svgrepo-com.svg" class="w-5 h-5 mr-2" alt="Transferir"><span>Salir</span>
                </button>
            </div>
        </div>

        <div v-if="flag_transferir">
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div class="space-y-6">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Cuenta destino</label>
                        <div class="mt-2">
                            <input v-model="cuenta_dest" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
                
                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Monto</label>
                        </div>
                        <div class="mt-2">
                            <input v-model="monto" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
                
                    <div>
                        <button @click="transferir()" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Transferir</button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="flag_account">
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div>Nombre: {{ data[0] }} {{ data[1] }}</div>
                <div>Email: {{ data[2] }}</div>
                <div>Celular: {{ data[3] }}</div>
            </div>
        </div>

        <div v-if="flag_historial">
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <table>
                    <thead>
                        <tr>
                            <th>Cuenta destino</th>
                            <th>Monto(USD)</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in historial">
                            <td>{{ item[0] }}</td>
                            <td>{{ item[1] }}</td>
                            <td>{{ item[2] }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>
<script>
import axios from 'axios'
    export default{
        data(){
            return{
                cedula: localStorage.getItem('cedula'),
                data: [],
                historial: [],
                flag_transferir: false,
                flag_account: false,
                flag_historial: false,
                cuenta_dest: '',
                monto:''
            }
        },
        created(){
            this.valid(),
            this.getCuenta()
        },
        methods:{
            valid(){
                if(this.cedula == null){
                    this.$router.push('/')
                }
            },
            getCuenta(){
                axios.post("http://127.0.0.1:8000/api/get-cuenta/", {'cedula':this.cedula})
                .then(response => {
                    console.log(response.data[0])
                    this.data = response.data[0]
                })
            },
            transferir(){
                axios.post("http://127.0.0.1:8000/api/transacciones/", {'num_cuenta_ori':this.data[4], 'num_cuenta_dest':this.cuenta_dest, 'monto': this.monto})
                .then(response => {
                    console.log(response.data)
                    if(response.data == 'Realizada'){
                        this.getCuenta()
                        alert('Transferencia realizada a la cuenta: ' + this.cuenta_dest + ' un monto de $' + this.monto)
                        this.cuenta_dest = ''
                        this.monto = ''
                    }
                })
            },
            getHistorial(){
                axios.post("http://127.0.0.1:8000/api/historial/", {'num_cuenta_ori':this.data[4]})
                .then(response => {
                    console.log(response.data)
                    this.historial = response.data
                })
            },
            logout(){
                localStorage.removeItem("cedula")
                localStorage.clear()
                this.$router.push('/')
            }
        }
    }
</script>