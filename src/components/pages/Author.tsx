type authorProps = {
  quotes: string[] | never[]
  name:string
}


function Author(props: authorProps) {
  return (
    <>
      <h4>Quotes from {props.name}</h4>
      <ul>
        {props.quotes.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ul>
    </>
  );
}

export default Author