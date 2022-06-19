<script context="module">
import { isUserLoggedIn } from './stores.js'
//use the browser router if it's available
//export const router = browser;
let isLogged;

isUserLoggedIn.subscribe(value => {
  isLogged = value;
});

</script>

<h1>{isLogged}</h1>