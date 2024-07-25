import { useEffect, useState } from "react";

type ProfileData = {
  name: string;
  age: number;
  email: string;
}

export default function ClientSideDataFetching() {
  const [data, setData] = useState<ProfileData | null>(null)
  const [isLoading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch('/api/profile-data')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  //if (isLoading) return <p>Loading...</p>
  //if (!data) return <p>No profile data</p>

  return (
    <main>
      {isLoading ? (
        <p>Loading...</p>
      ) : !data ? (
        <p>No profile data</p>
      ) : (
        <div>
          <h1>{data.name}</h1>
          <p>{data.age}</p>
          <p>{data.email}</p>
        </div>
      )}
    </main>
  )
}
