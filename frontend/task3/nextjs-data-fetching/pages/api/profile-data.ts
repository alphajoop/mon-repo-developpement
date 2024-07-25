import type { NextApiRequest, NextApiResponse } from "next";

type ProfileData = {
  name: string;
  age: number;
  email: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProfileData | { error: string }>
) {
  try {
    const profileData: ProfileData = {
      name: "John Doe",
      age: 30,
      email: "johndoe@example.com"
    }

    res.status(200).json(profileData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
