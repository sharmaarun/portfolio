// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import request from "request"
type Data = {
  ok: boolean
  json?: any
  message?: any
}


const botURL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { name, email, query } = req.body || {}
    const message = `Name: *${name}* \nEmail: *${email}* \nQuery: ${query}`
    const res_ = await new Promise((y, n) => request(botURL + message,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      },
      (err, res, body) => {
        if (err) {
          n(err)
        } else {
          y(res)
        }
      }
    ))
    res.status(200).json({ ok: true, message: "Query received!", json: req.body })
  } catch (e: any) {
    console.log("error", e)
    res.status(500).json({ ok: false, message: e.message, json: req.body })
  }
}
