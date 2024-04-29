import Image from "next/image";
import supabase from '../utils/supabase';

export default async function Home() {
  const { data: tweets } = await supabase.from('tweets').select();

  if (!tweets) {
    return <p>No tweets found.</p>
  }

  return <pre>{JSON.stringify(tweets, null, 2)}</pre>
}