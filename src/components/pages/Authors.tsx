import {Table } from "react-bootstrap";
import { Link, } from "react-router-dom"


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
          {Array.from(
              new Set(
                props.data
                  .map((a: any) => a.by.name)
                  .filter((a: string) => a)
              )
            )
            .map((name, i) => 
            <tr key={i}>
              <td>
                <Link to={"/Authors/" + name.replaceAll(" ", "-")}>{name}</Link>
              </td>
            </tr>
          
          )
          }
        </tbody>
      </Table>
    </div>
  );
}

export default Authors