import type { NextApiRequest, NextApiResponse } from "next";
import type { RangeLimit } from "@/types";
type Data = {
    range?: RangeLimit
    message?: string
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    if (req.method === 'GET') {
        res.status(200).json({ range: { min: 20, max: 160 } });
    } else {
        res.status(405).json({ message: 'Method not Allowed' })
    }

}
