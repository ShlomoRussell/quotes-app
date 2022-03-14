import { createRef } from "react";
import { Button, Card } from "react-bootstrap";

type mainProps={
  data:any[] 
 click:Function 
}

function Main(props: mainProps) {
  
  return (
    <div className="row">
      {props.data.map((q, i) => (
        <Card key={i} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={q.by.picUrl || "placeholder.png"} />
          <Card.Body>
            <Card.Title>{q.by.name}</Card.Title>
            <Card.Text>{q.quote}</Card.Text>
            <Button variant="primary" onClick={() =>props.click(q.by.name.replaceAll(' ','-'))}>
              Go to {q.by.name || "Author"}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Main
export type {mainProps}