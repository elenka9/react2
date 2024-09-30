export function PostList({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body} </p>
        </li>
      ))}
    </ul>
  );
}
