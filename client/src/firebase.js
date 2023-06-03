
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCtyJrL2ftntQAIQSCIatxRGM6963FdXNw",
  authDomain: "learn-together-db.firebaseapp.com",
  projectId: "learn-together-db",
  storageBucket: "learn-together-db.appspot.com",
  messagingSenderId: "360840667536",
  appId: "1:360840667536:web:c5e33fbe87b54504565315"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const metadata = {
    contentType: '*'
};
const storage = getStorage(app);
export default storage;