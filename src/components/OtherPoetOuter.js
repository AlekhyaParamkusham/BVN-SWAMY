import React, { useEffect, useState } from "react";
import OtherPoets from "./OtherPoets";
import "../styles/OtherPoets.css";
import { db } from "./../firebase";
import { collection, getDocs } from "firebase/firestore";

function OtherPoetOuter() {
  const [values, setValues] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "appreciations"));
      const arr = [];
      querySnapshot.forEach((doc) => {
        const vals = doc.data();
        arr.push({
          name: vals.name,
          appreciation: vals.appreciation,
          id: doc.id,
        });
      });
      setValues(arr);
    };
    fetchData();
  }, []);

  return (
    <div className="container otherOuter">
      <div className="row">
        <h2>స్వామి గారి గురించి ఇతర పెద్దల మాటల్లో...</h2>
        {values.map((item) => (
          <OtherPoets
            poet={item.name}
            appreciation={item.appreciation}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default OtherPoetOuter;
