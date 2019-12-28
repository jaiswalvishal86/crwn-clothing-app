import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyD64nHW6kH93yM-UVrxK8QHUWU0CKY3a-0',
	authDomain: 'crwn-data-base.firebaseapp.com',
	databaseURL: 'https://crwn-data-base.firebaseio.com',
	projectId: 'crwn-data-base',
	storageBucket: 'crwn-data-base.appspot.com',
	messagingSenderId: '759294575912',
	appId: '1:759294575912:web:5452a805c94c6bdcae3c1d',
	measurementId: 'G-3HMRKRQW83'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
