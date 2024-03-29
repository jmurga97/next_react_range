import Layout from "@/layouts/layout";
import RangeContainer from "@/layouts/RangeContainer";
import Range from "@/components/Range";
import type { RangeLimit } from "@/types";


type Props<T> = {
    range: T
}

export default function Exercise1({ range }: Props<RangeLimit>) {
    const title = range ? `1. Continuos Range: ${range.min} - ${range.max} $` : 'Range missing'
    return (
        <Layout title="Exercise 1" description="A technical test made for MCA">
            <main className={`flex h-[80dvh] flex-col items-center px-24`}>
                <RangeContainer title={title}>
                    <Range range={range} steps={[]}/>
                </RangeContainer>
            </main>
        </Layout>
    );
}

export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:8080/api/exercise1", {
        method: "GET",
    });
    const {range}: Props<RangeLimit> = await res.json();

    return { props: { range } };
};
