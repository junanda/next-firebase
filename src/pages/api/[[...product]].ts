import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    status: boolean;
    message: string;
    data: any;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    let data: any
    let pesan: string = "success"
    if(req.query.product![1]) {
        data = await retrieveDataById("products", req.query.product![1])
        // res.status(200).json({ status: true, data});
    } else {
        data = await retrieveData("products")    
    }

    if(data === undefined) {
        pesan = "product not found"
    }
     
    res.status(200).json({ status: true, message: pesan, data});
}