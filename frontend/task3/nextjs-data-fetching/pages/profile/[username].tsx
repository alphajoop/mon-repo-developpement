import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

type Profile = {
  repos_url: string;
  name: string;
  location: string;
  email: string | null;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export const getServerSideProps: GetServerSideProps<{ profile: Profile }> = async (context) => {
  const { username } = context.params as { username: string };
  // Fetch data from external API
  const res = await fetch(`https://api.github.com/users/${username}`);
  const profile: Profile = await res.json();

  // Pass data to the page via props
  return { props: { profile } }
}

export default function Page({
  profile,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <div>
        <h1>{profile.name}</h1>
        <p>Location: {profile.location}</p>
        <p>Bio: {profile.bio}</p>
        <p>Public Repos: {profile.public_repos}</p>
        <p>Followers: {profile.followers}</p>
        <p>Following: {profile.following}</p>
        <p>Account Created: {new Date(profile.created_at).toLocaleDateString()}</p>
        <p>Last Updated: {new Date(profile.updated_at).toLocaleDateString()}</p>
      </div>
    </main>
  )
}
