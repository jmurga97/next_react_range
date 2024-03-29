import Head from "next/head";
import { Ubuntu } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
interface Props {
    children: React.ReactNode,
    title: string,
    description: string
}

const ubuntu = Ubuntu({
    weight: ["300", "400", "500", "700"],
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
});

const Layout = ({ children, title, description }: Props) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* <meta name="robots" content="noindex"/> */}
            </Head>
            <main className={`${ubuntu.className} text-white`}>
                <div className="bg-[url('/background.svg')] bg-cover bg-center bg-fixed -z-10 fixed top-0 left-0 w-full h-full"></div>
                <Navbar />
                {children}
                <Footer/>
            </main>
        </>
    );
};

export default Layout;
