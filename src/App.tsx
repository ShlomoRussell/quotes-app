import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Authors from "./components/pages/Authors";
import Main from "./components/pages/Main";
import NavHeader from "./components/NavHeader";
import Author from "./components/pages/Author";

function App() {
  const [home, setHome] = useState([]);
  const [authorNames, setAuthorNames] = useState([]);
  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then(
        (jRes) => (
          setHome(jRes),
          setAuthorNames(
            Array.from(
              new Set(
                jRes
                  .map((a: any) => a.by.name)
                  .filter((a: string) => a)
              )
            )
          )
        )
      );
  }, []);
  const navigate=useNavigate()

  const clickHandle = (author:string) => {
  navigate('/'+author);
}

  return (
    <div>
      <NavHeader />
      <Routes>
        <Route path="/" element={<Main click={clickHandle} data={home} />} />
        <Route path="Authors" element={<Authors data={authorNames} />} />

        {authorNames.map((a: string, i) => (
          <Route
            key={i}
            path={a.replaceAll(" ", "-")}
            element={<Author name={a} quotes={Array.from(new Set(home.filter((o:any) => o.by.name == a).map((q:any)=>q.quote)))} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
