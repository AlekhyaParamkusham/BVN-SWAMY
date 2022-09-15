import React, { useEffect, useState } from "react";
import ArticleItems from "./ArticleItems";
import { db } from "./../firebase";
import { collection, getDocs } from "firebase/firestore";

function Articles() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "articles"));
      const arr = [];
      querySnapshot.forEach((doc) => {
        const vals = doc.data();
        arr.push({
          title: vals.title,
          summary: vals.summary,
          date: vals.date,
          imageURL: vals.photoURL,
          id: doc.id,
        });
      });
      setValues(arr);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid" style={{ marginTop: "90px" }}>
        {values.map((item) => (
          <ArticleItems
            img={item.imageURL}
            title={item.title}
            summary={item.summary}
            date={item.date}
            key={item.id}
          />
        ))}
      </div>
    </>
  );
}

export default Articles;
