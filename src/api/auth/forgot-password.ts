// pages/api/auth/forgot-password.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  // TODO: call your backend or email service to send reset code
  console.log("Sending reset code to", email);

  return res.status(200).json({ ok: true, message: "Reset code sent" });
}
