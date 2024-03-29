import Layout from "@/layouts/layout";
import RangeContainer from "@/layouts/RangeContainer";
import Range from "@/components/Range";
import type { InferGetServerSidePropsType } from 'next'
import type { FixedRange } from "@/types";

interface Range {
    min:number,
    max:number,
    steps: FixedRange,
}


export default function Exercise2({ min,max, steps }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <Layout title="Exercise 2" description="A technical test made for MCA">
            <main
                className={`flex h-[80dvh] flex-col items-center px-24`}
            >
                <RangeContainer title={`2. Fixed Range: ${min} - ${max} $`}>
                    <Range range={{min,max}} steps={steps} isFixed/>
                </RangeContainer>
            </main>
        </Layout>
    );
}

export const getServerSideProps = (async () => {
    const res = await fetch('http://localhost:8080/api/exercise2', { method: 'GET' })

    const { range }: FixedRange = await res.json()
    let orderedRange = range.slice().sort((a, b) => a - b);
    const min = orderedRange[0];
    const max = orderedRange[orderedRange.length -1];

    return {
        props: {
            min,
            max,
            steps: orderedRange
        }
    }
})
