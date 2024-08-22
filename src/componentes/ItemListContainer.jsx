/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import "./styleitemlistcontainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getFirestore, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

 useEffect(() => {
  const db = getFirestore();
  const itemRef = collection(db, "productos");
  const q = id ? query(itemRef, where("category", "==", id)) : itemRef;
  getDocs(q).then(docu =>{
    if(docu.size > 0){
      setItem(docu.docs.map(i => ({id:i.id, ...i.data()})))
    }
    });
  })

    return (
      <div className="container">
        <h1 className="title"> PRODUCTOS </h1>
        <div className="row">
          <ItemList items={item} />
        </div>
      </div>
    )

  }

export default ItemListContainer

