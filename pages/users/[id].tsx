import { useRouter } from "next/router";
import Container from "../../components/Container";

export default function UserProfile({
  user: { first_name, last_name, email, avatar, id },
}) {
  const fullName = `${first_name} ${last_name}`;
  return (
    <Container title={fullName}>
      <div className="row">
        <div className="col-md-6 offset-md3">
          <div className="card-header text-center">
            <img src={avatar} alt={fullName} style={{ borderRadius: "50%" }} />
          </div>
          <div className="card-body">
            <h3>
              {id}: {fullName}
            </h3>
            <p>Email: {email}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://reqres.in/api/users");
  const { data } = await response.json();
  // console.log(data);
  const paths = data.map((user) => ({
    params: { id: `${user.id}` },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { id } }) {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  const { data } = await response.json();
  console.log(data);
  return {
    props: { user: data },
  };
}
// UserProfile.getInitialProps = async (ctx) => {
//   const response = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
//   const { data } = await response.json();
//   console.log(data);
//   return {
//     props: { user: data },
//   };
// };
