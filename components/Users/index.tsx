export default function Users({ users }) {
  return (
    <ul className="list-group">
      {users.map(({ name, id, email }) => (
        <li className="list-group-item list-group-item-action" key={id}>
          <h5> {name}</h5>
          <p>Email: {email} </p>
        </li>
      ))}
    </ul>
  );
}
