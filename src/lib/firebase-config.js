import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { browser } from '$app/env';
//import authStore from '$app/routes/stores.js';  
//console.log(authStore)

const config = {
  apiKey: "AIzaSyCiHKGFtCEBLTK8nUtUXedXE_unHL6vwkk",
  authDomain: "placea-a1487.firebaseapp.com",
  projectId: "placea-a1487",
  storageBucket: "placea-a1487.appspot.com",
  messagingSenderId: "550842418859",
  appId: "1:550842418859:web:ce96de73b457d9966459ee",
  measurementId: "G-D9TF6LHZWW"
}

let firebaseApp;
let auth;
let unsubOnAuthStateChangedHandler;

export function getFirebaseAuth() {
	auth = getAuth(getFirebaseApp());
	auth.useDeviceLanguage(); // applies the default browser language or use auth.languageCode = "fr";

	if (browser) {
		unsubOnAuthStateChangedHandler = onAuthStateChanged(auth, onAuthStateChangedHandler);
	}
	return auth;
}

function onAuthStateChangedHandler(user) {
	if (user) {
		console.log('user is logged in');
   // authStore.set({});
	} else {
		unsubOnAuthStateChangedHandler();
		console.log('user is logged out');
	}
}

// firebaseApp
export function getFirebaseApp() {
	const firebaseAppConfig = getFirebaseConfig();
	if (getApps.length === 0) {
		firebaseApp = initializeApp(firebaseAppConfig);
	} else {
		firebaseApp = getApp();
	}
	return firebaseApp;
}

function getFirebaseConfig() {
	if (!config || !config.apiKey) {
		throw new Error(
			'No Firebase configuration object provided.' +
				'\n' +
				"Add your web app's configuration object to firebase-config.js"
		);
	} else {
		return config;
	}
}
