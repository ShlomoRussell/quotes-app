import { createRef } from "react";
import { Button, Form } from "react-bootstrap";
import { databaseOprations, QuoteInsertModel } from "../../firebase";

function AddQuotes() {
  const authorNameRef = createRef<HTMLInputElement>();
  const newQuoteRef = createRef<HTMLInputElement>();
  const picUrl = createRef<HTMLInputElement>();
  const newQuote: QuoteInsertModel = {
      quote: "",
      by: {
          name: "",
          picUrl: ""
      }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (authorNameRef!.current!.value)
      newQuote!.by!.name = authorNameRef!.current!.value;
    if (picUrl!.current!.value) newQuote!.by!.picUrl = picUrl!.current!.value;
    if (newQuoteRef!.current!.value)
      newQuote.quote = newQuoteRef!.current!.value;
    databaseOprations.addQuote(newQuote).then(res=>console.log(res));
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="Name">
        <Form.Label>Name of Author:</Form.Label>
        <Form.Control ref={authorNameRef} type="text" placeholder="John Doe" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Quote">
        <Form.Label>Quote</Form.Label>
        <Form.Control
          ref={newQuoteRef}
          type="text"
          placeholder="'Shine like the Sun'"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="UrlToPicOfAuthor">
        <Form.Label>Pic(URL)</Form.Label>
        <Form.Control
          ref={picUrl}
          type="text"
          placeholder="example.com/example.png"
        />
      </Form.Group>
      <div className="mx-auto">
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default AddQuotes;
