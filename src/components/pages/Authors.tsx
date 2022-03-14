import { Button, Table } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom"
import Author from "./Author"
import {mainProps} from './Main'

type AuthorProps= {
  data:never[]|string[]
}

function Authors(props: AuthorProps) {
  return (
    <div className="h-100">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Click on an Author</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((a, i) => (
            <tr key={i}>
              <td>
                <Link to={"/"+a.replaceAll(" ", "-")}>{a}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Authors