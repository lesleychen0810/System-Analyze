import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import{ firebaseConfig } from "./util/dbConfig";
import{ initializeApp } from "firebase/app";
import{ getFirestore, doc, getDoc } from "firebase/firestore";
import liff from "@line/liff";

liff
  .init({
      liffId: "1656790909-OGWMoBeq",
  })
  .then(async () => {
      console.log(51, "liff init susscess");
  });


const firebaseApp = initializeApp(firebaseConfig);
const dbFirestore = getFirestore(firebaseApp);

async function getDocument(){
    const docRef = doc(dbFirestore , "youtest", "1")
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data())
}

getDocument()

createApp(App).use(store).use(router).mount('#app')
