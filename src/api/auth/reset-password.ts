// pages/api/auth/reset-password.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, code, newPassword } = req.body;

  if (!email || !code || !newPassword) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // TODO: verify code and update password in DB
  console.log("Resetting password for", email, "with code", code);

  return res.status(200).json({ ok: true, message: "Password reset successful" });
}
