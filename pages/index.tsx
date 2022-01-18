// import React from "react";
import Container from "../components/Container";
import Users from "../components/Users";

export default function index({ users }) {
  return (
    <Container title="Next.js Project - Home">
      <h1>Next</h1>
      <Users users={users} />
    </Container>
  );
}
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users);
  return {
    props: { users },
  };
}
