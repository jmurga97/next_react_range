import Layout from "@/layouts/layout";
import RangeContainer from "@/layouts/RangeContainer";
import Range from "@/components/Range";
import { useState } from "react";
import type { InferGetServerSidePropsType } from 'next'
import type { FixedRange, RangeLimit } from "@/types";

interface Range {
    min:number,
    max:number,
    steps: FixedRange,
}


export default function Exercise2({ min,max, steps }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [input, setInput] = useState<RangeLimit>({min,max})
    const title = `2. Fixed Range: ${input.min} - ${input.max} $`
    return (
        <Layout title="Exercise 2" description="A technical test made for MCA">
            <main
                className={`flex h-[80dvh] flex-col items-center px-4 md:px-24`}
            >
                <RangeContainer title={title}>
                    <Range range={{min,max}} steps={steps} setInput={setInput} isFixed/>
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
