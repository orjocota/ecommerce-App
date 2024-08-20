import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [objeto, setObjeto] = useState({});
    const {id} = useParams(); 
    
    useEffect(()=>{
      const db = getFirestore();
      const itemRef = doc(db, "Items", id);
      getDoc(itemRef).then(it =>{
        if (it.exists()) {
          setObjeto({id:it.id,...it.data()})
        }
      })
    },[id])
    return (  
      <ItemDetail props={objeto}/>
    );
}
export default ItemDetailContainer