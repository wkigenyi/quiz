import {initializeApp} from "firebase/app";
import {getDatabase,ref} from "firebase/database";

const firebaseConfig = {

  apiKey:process.env.API_KEY,

  authDomain:process.env.AUTH_DOMAIN,

  databaseURL:process.env.DATABASE_URL,

  projectId:process.env.PROJECT_ID,

  storageBucket: process.env.STORAGE_BUCKET,

  messagingSenderId: process.env.MESSAGING_SENDER_ID,

  appId: process.env.APP_ID,

  measurementId: process.env.MEASUREMENT_ID

};



export const firebaseApp = initializeApp(firebaseConfig);
export const db = getDatabase(firebaseApp);
export const quizReference = ref(db,"/quizzes")
export const questionsReference = ref(db,"/questions")
export const getSingleQuizRef = (key) => {
  return ref(db,"/quizzes/"+key)
}

export const getSingleQuestionRef = (key) => {
  return ref(db,"/questions/"+key)
}




