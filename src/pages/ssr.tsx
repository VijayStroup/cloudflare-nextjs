import type { NextPage, GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data: { message: string; status: string } = await res.json();

  return {
    props: {
      dog: data.message,
    },
  };
};

interface SsrProps {
  dog: string;
}

const Ssr: NextPage<SsrProps> = ({ dog }) => {
  return (
    <>
      <h1>This page is rendered with ssr</h1>
      <Link href="/">back home</Link>
      <br />
      <Image src={dog} width={250} height={250} />
    </>
  );
};

export default Ssr;
