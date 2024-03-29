import Layout from "@/layouts/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout title="Home" description="A technical test made for MCA">
      <main
        className={`flex h-[80dvh] flex-col items-center justify-center `}
      >
        <h2 className="mb-5 font-light text-lg">Look for the exercises at their respective options in the navbar</h2>
        <Image alt="Mango Logo" src="/mango.png" width={250} height={50} className="invert" />
      </main>
    </Layout>
  );
}
