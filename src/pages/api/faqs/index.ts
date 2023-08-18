import faqs from "@/data/faqs";
import { Faq } from "@/interface/faqs";
import { NextApiRequest, NextApiResponse } from "next";

type Data = Faq[] | { message: string }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>){
     // Consultar el method de la petición si es get enviamos los datos de lo contrario enviamos un mensaje de error
  if (req.method === "GET") {
    res.status(200).json(faqs)
  } else {
    res.status(400).json({ message: "Método no permitido" })
  }
}