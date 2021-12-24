import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, description: newDesc });
  };

  const updateUser = async (id, description) => {
    const userDoc = doc(db, "users", id);
    const newFields = { description: description + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="App">
      <div className="box">
        
      <input
        placeholder="Name"
        className="form"
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        className="form"
        placeholder="Description"
        onChange={(event) => {
          setNewDesc(event.target.value);
        }}
      />

      <button onClick={createUser} className="btn"> + </button>
      
      {users.map((user) => {
        return (
          <div className="flex2">
            {" "}
            <h1 className="text">{user.name}</h1>
            <h1 className="text1">{user.description}</h1>
            
            <button
            className="btn1"
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              {" "}
              Delete User
            </button>
            </div>
          
        );
      })}
      </div>
    </div>
  );
}

export default App;