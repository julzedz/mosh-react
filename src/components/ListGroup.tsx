function ListGroup() {
  const items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
  ]
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
