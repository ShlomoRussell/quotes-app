import axios from "axios";
import { createContext } from "react"

let authorContext = createContext('');

  axios
    .get("http://localhost:3031/db.json")
    .then((res) => (authorContext = createContext(res.data)));


 

export default authorContext;