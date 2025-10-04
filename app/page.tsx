import { HELLO_ROUTE } from "../routeHelper";

export default async function Home() {
  const res = await fetch(HELLO_ROUTE);
  const { message } = await res.json();

  if (!message) return <p>Loading...</p>;

  return <p>{message}</p>;
}
