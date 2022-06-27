import { getFirebaseAuth } from '$lib/firebase-config.js';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

let auth = getFirebaseAuth();
//let isUserLoggedIn = Boolean(auth.currentUser);

export async function loginWithGoogle() {
	try {
		console.log('trying to login with Google...');
		const provider = new GoogleAuthProvider();
		provider.addScope('email');
		await signInWithPopup(auth, provider);
    console.log(auth.currentUser,"auth.currentUser");
	} catch (error) {
		console.error(error);
	}
}