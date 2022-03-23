import { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Authors from "./components/pages/Authors";
import Main from "./components/pages/Main";
import NavHeader from "./components/NavHeader";
import Author from "./components/pages/Author";
import AddQuotes from "./components/pages/AddQuotes";
import { databaseOprations } from "./firebase";
import axios from "axios";


function App() {
  const [home, setHome] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3031/db.json")
      .then((jRes:any) => setHome(jRes.data));
  }, []);

  useEffect(() => {
    databaseOprations.getQuotes().then((res) => console.log(res))
  }, []);
  
  const navigate = useNavigate();

  const clickHandle = (author:string) => {
  navigate('/Authors/' + author);
}
  
 
  return (
    <div>
      <NavHeader />
      <Routes>
        <Route path="/" element={<Main click={clickHandle} data={home} />} />
        <Route path="Authors" element={<Authors data={home} />} />
        <Route path="AddQuote" element={<AddQuotes />} />
        <Route
          path="Authors/:name"
          element={
            <Author data={ home}/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
