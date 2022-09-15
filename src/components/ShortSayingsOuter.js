import React, { useEffect, useState } from "react";
import ShortSayings from "./ShortSayings";
import { db } from "./../firebase";
import { collection, getDocs } from "firebase/firestore";

const ShortSayingsOuter = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "shortsayings"));
      const itemData = [];
      querySnapshot.forEach((doc) => {
        const vals = doc.data();
        itemData.push({
          img: vals.photoURL,
          id: doc.id,
        });
      });
      setValues(itemData);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container" style={{ marginBottom: "40px" }}>
        <div className="row">
          {values.map((item) => (
            <ShortSayings src={item.img} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShortSayingsOuter;
