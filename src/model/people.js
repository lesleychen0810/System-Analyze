import {
    firebaseConfig
  } from "../util/dbConfig";
  import {
    initializeApp
  } from "firebase/app";
  import {
    getFirestore,
    getDocs,
    collection,
    doc,
    getDoc,
    setDoc,
    deleteDoc,
    updateDoc,
  } from "firebase/firestore";
  
  const firebaseApp = initializeApp(firebaseConfig);
  const dbFirestore = getFirestore(firebaseApp);
  
  
  //新增住民資料
  export async function addMember(data) {
    var addStatus = false;
    var createTime = new Date();
    try {
      setDoc(doc(dbFirestore, "member", data.pId.toString()), {
        pId: data.pId,
        type: data.type,
        name: data.name,
        indentifyId: data.identifyId,
        cellphone: data.cellphone,
        address: data.address,
        taxId: data.taxId,
        cotactAddress: data.cotactAddress,
        telephone: data.telephone,
        carId: data.carId,
        uId: data.uId,
        status: "審核通過",
        create_time: createTime.toISOString()
      });
      addStatus = true;
  
    } catch {
      addStatus = false;
  
    }
    return addStatus;
  }
  
  //更新住民資料
  export async function undarepeople(data) {
    var status = false;
    const people = await getpeople(data.pId);
    var updataTime = new Date();
    if (people != "") {
      await updateDoc(doc(dbFirestore, "peoples", data.pId.toString()), {
        pId: data.pId,
        type: data.type,
        name: data.name,
        indentifyId: data.identifyId,
        cellphone: data.cellphone,
        address: data.address,
        taxId: data.taxId,
        cotactAddress: data.cotactAddress,
        telephone: data.telephone,
        carId: data.carId,
        uId: data.uId,
        status: "審核通過",
        create_time: updataTime.toISOString()
  
      });
      status = true;
  
    }
    return status;
  
  }
  
  //取得所有住民資料清單
  
  export async function getpeopleList() {
    var peoplelist = [];
    const q = collection(dbFirestore, "people");
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      peoplelist.push(doc.data());
    });
    return peoplelist;
  }
  
  //取得住民資料
  
  export async function getpeople(id) {
    var people = "";
    const docRef = doc(dbFirestore, "people", id.toString());
    const docSnap = await getDoc(docRef);
    if (docSnap.exist()) {
      people = docSnap.data();
  
    } else {
      //doc.data()will be undefined in this case
      console.log("No such document!");
    }
    return people;
  }
  
  //刪除住民（透過住民ID)
  
  export async function deletepeople(id) {
    var status = false;
    const people = await getpeople(id);
    if (people != "") {
      deleteDoc(doc(dbFirestore, "people", id.toString()));
      status = true;
    }
    return status;
  }