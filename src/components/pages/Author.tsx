import { useParams } from "react-router-dom";

function Author(props: { data: any[] }) {
  console.log(props.data)
  const { name } = useParams();
 
  const quotesArray = props.data
    .filter((q: any) => q.by.name === name?.replaceAll("-", " "))
    .map((q: any) => q.quote);
  
  return (
    <>
      <h4>Quotes from {name?.replaceAll("-", " ")}</h4>
      <ul>
        {quotesArray.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ul>
    </>
  );
}

export default Author;
