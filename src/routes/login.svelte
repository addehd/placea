<script context="module">
import { isUserLoggedIn } from '../lib/stores.js'
import {loginWithGoogle} from '$lib/loginGoogle.js';

let isLogged;

isUserLoggedIn.subscribe(value => {
  isLogged = value;
});

</script>

<h1>{isLogged}</h1>
<button on:click={() => loginWithGoogle()}>Login</button>
<h1>loginWithGoogle</h1>