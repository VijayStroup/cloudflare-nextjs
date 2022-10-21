import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const Home: NextPage = () => {
  const [name, setName] = useState<null | string>(null);

  async function clicked() {
    if (name) setName(null);
    else {
      const res = await fetch("/api/hello");
      const data: { name: string } = await res.json();
      setName(data.name);
    }
  }

  return (
    <>
      <h1>Home Page</h1>
      <Link href="/ssr">ssr page</Link>
      <br />
      <button onClick={clicked}>Fetch from local api</button>
      {name && <p>{name}</p>}
    </>
  );
};

export default Home;
