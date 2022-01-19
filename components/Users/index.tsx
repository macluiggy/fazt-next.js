import Router from "next/router";

export default function Users({ users }) {
  return (
    <ul className="list-group">
      {users.map(({ first_name, last_name, id, email, avatar }) => {
        const fullName = `${first_name} ${last_name}`;
        return (
          <li
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            key={id}
            onClick={() => Router.push("/users/[id]", `/users/${id}`)}
          >
            <div>
              <h5> {fullName}</h5>
              <p>Email: {email} </p>
            </div>
            <img src={avatar} alt={fullName} style={{ borderRadius: "50%" }} />
          </li>
        );
      })}
    </ul>
  );
}
