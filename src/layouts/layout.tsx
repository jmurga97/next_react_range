import Head from "next/head";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
interface Props {
    children: React.ReactNode,
    title: string,
    description: string
}

const poppins = Poppins({
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
            <main className={`${poppins.className} text-black`}>
                <Navbar />
                {children}
                <Footer/>
            </main>
        </>
    );
};

export default Layout;
