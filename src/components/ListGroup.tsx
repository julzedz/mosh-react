function ListGroup() {
  const items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris',
  ]
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((i, index) => (
          <li key={i} onClick={() => console.log(i, index)} className="list-group-item">{i}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
