import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import {
//     firebaseConfig
// } from "./util/dbConfig";
// import {
//     initializeApp
// } from "firebase/app";
// import {
//     getFirestore,
//     doc,
//     getDoc,
// } from "firebase/firestore";
// import liff from "@line/liff";

// liff
//     .init({
//         liffId: "1656800924-qWWNAjn8",
//     })
//     .then(async () => {
//         console.log(51, "liff init susscess");
//     });
    
// const firebaseApp = initializeApp(firebaseConfig);
// const dbFirestore = getFirestore(firebaseApp);

// async function getDocument() {
//     const docRef = doc(dbFirestore, "peoples") // 問題出在這
//     const docSnap = await getDoc(docRef);
//     console.log(docSnap.data())
// }
// getDocument()

// 88
createApp(App).use(store).use(router).mount('#app')