import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

const firebaseApp = initializeApp ({
  apiKey: "AIzaSyCD88TVgaeBwBJ_Hf8Agi56HgkyFL9730g",
  authDomain: "psycexpt.firebaseapp.com",
  projectId: "psycexpt",
  storageBucket: "psycexpt.appspot.com",
  messagingSenderId: "286312452215",
  appId: "1:286312452215:web:73465f1e9c9559164c7672"
});
let storage = undefined;

function saveData(successCallback, failureCallback, narrativeData, picData)
{
  if(!storage)
    storage = getStorage(firebaseApp);

  const userDetails = JSON.parse(sessionStorage.getItem("demoDetails"));
  
  const demoDetailsRef = ref(storage, `/${userDetails.initials}/DemographicDetails.txt`);
  uploadBytesResumable(demoDetailsRef, (new TextEncoder()).encode(sessionStorage.getItem("demoDetails"))).on("state_changed", 
  (snapshot) => {}, (err) => {
    console.log(err);
    failureCallback()
  },
  () => {
    const narrativeRef = ref(storage, `/${userDetails.initials}/Narrative.txt`);
    uploadBytesResumable(narrativeRef, (new TextEncoder()).encode(JSON.stringify(narrativeData))).on("state_changed",(sn) => {},
    (err) => {
      console.log(err);
      failureCallback()
    },
    () => {
      const picRef = ref(storage, `/${userDetails.initials}/Pictures.txt`);
      uploadBytesResumable(picRef, (new TextEncoder()).encode(JSON.stringify(picData))).on("state_changed",(sn) => {},
      (err) => {
        console.log(err);
        failureCallback()
      },
      () => {successCallback()})
    })
  })
}

export {saveData};

