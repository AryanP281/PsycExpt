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

const saveUserDetailsP = (userDetails) => {return new Promise((resolve,reject) => {
  const demoDetailsRef = ref(storage, `/${userDetails.initials}/DemographicDetails.txt`);
  uploadBytesResumable(demoDetailsRef, (new TextEncoder()).encode(sessionStorage.getItem("demoDetails"))).on("state_changed",
  (snapshot) => {}, (err) => reject(err), () => {resolve()})})};

const saveNarrativeDataP = (fldrName,narrativeData) => {return new Promise((resolve,reject) => {
  const narrativeRef = ref(storage, `/${fldrName}/Narrative.txt`);
  uploadBytesResumable(narrativeRef, (new TextEncoder()).encode(JSON.stringify(narrativeData))).on("state_changed",
  (snp) => {}, (err) => {reject(err)}, () => {resolve()})})};

const savePicDataP = (fldrName,picData) => {return new Promise((resolve,reject) => {
  const narrativeRef = ref(storage, `/${fldrName}/Pics.txt`);
  uploadBytesResumable(narrativeRef, (new TextEncoder()).encode(JSON.stringify(picData))).on("state_changed",
  (snp) => {}, (err) => {reject(err)}, () => {resolve()})})};

const saveP1DataP = (fldrName,p1Data) => {return new Promise((resolve,reject) => {
  const narrativeRef = ref(storage, `/${fldrName}/Part1.txt`);
  uploadBytesResumable(narrativeRef, (new TextEncoder()).encode(JSON.stringify(p1Data))).on("state_changed",
  (snp) => {}, (err) => {reject(err)}, () => {resolve()})})};

const saveP2DataP = (fldrName,p2Data) => {return new Promise((resolve,reject) => {
  const narrativeRef = ref(storage, `/${fldrName}/Part2.txt`);
  uploadBytesResumable(narrativeRef, (new TextEncoder()).encode(JSON.stringify(p2Data))).on("state_changed",
  (snp) => {}, (err) => {reject(err)}, () => {resolve()})})};

const saveP3DataP = (fldrName,p3Data) => {return new Promise((resolve,reject) => {
  const narrativeRef = ref(storage, `/${fldrName}/Part3.txt`);
  uploadBytesResumable(narrativeRef, (new TextEncoder()).encode(JSON.stringify(p3Data))).on("state_changed",
  (snp) => {}, (err) => {reject(err)}, () => {resolve()})})};

function saveData(successCallback, failureCallback, exptData, p1Data, p2Data, p3Data)
{
  console.log(exptData)
  
  if(!storage)
    storage = getStorage(firebaseApp);

  const userDetails = JSON.parse(sessionStorage.getItem("demoDetails"));

  saveUserDetailsP(userDetails).then(() => {
    if(sessionStorage.getItem("Tag") === "n")
      return saveNarrativeDataP(userDetails.initials,exptData);
    return savePicDataP(userDetails.initials,exptData); 
  })
  .then(() => saveP1DataP(userDetails.initials, p1Data))
  .then(() => saveP2DataP(userDetails.initials, p2Data))
  .then(() => saveP3DataP(userDetails.initials, p3Data))
  .then(() => successCallback())
  .catch((err) => {
    console.log(err);
    failureCallback();
  });
}

export {saveData};

/*
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
*/

