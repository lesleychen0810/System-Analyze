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
export async function addPeople(data) {
  var addStatus = false;
  var createTime = new Date();
  try {
    setDoc(doc(dbFirestore, "peoples", data.pId.toString()), {
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
export async function undarePeople(data) {
  var status = false;
  const people = await getPeople(data.pId);
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

export async function getPeopleList() {
  var PeopleList = [];
  const q = collection(dbFirestore, "peoples");
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    PeopleList.push(doc.data());
  });
  return PeopleList;
}

//取得住民資料

export async function getPeople(id) {
  var people = "";
  const docRef = doc(dbFirestore, "peoples", id.toString());
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    people = docSnap.data();

    //doc.data()will be undefined in this case
    // console.log();
  }
  return people;
}

//刪除住民（透過住民ID)

export async function deletePeople(id) {
  var status = false;
  const people = await getPeople(id);
  if (people != "") {
    deleteDoc(doc(dbFirestore, "peoples",
      id.toString()));
    status = true;
  }
  return status;
}