import React, { useEffect, useState } from "react";
import NewsFeatures from "./NewsFeatures";
import { db } from "./../firebase";
import { collection, getDocs } from "firebase/firestore";
import "../styles/NewsFeatures.css";

function NewsOuter() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "newsfeatures"));
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
    <div className="container newsOuter">
      <div className="row">
        {values.map((item) => (
          <NewsFeatures src={item.img} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default NewsOuter;
