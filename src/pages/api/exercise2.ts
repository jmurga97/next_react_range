import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  range?: Array<number> ;
  message?: string
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
    if(req.method === 'GET'){
        res.status(200).json({ range: [1.99,5.99,10.99,30.99,50.99,70.99] });
    }else{
        res.status(405).json({message: 'Method not Allowed'})
    }

}
