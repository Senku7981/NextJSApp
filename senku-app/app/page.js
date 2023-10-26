<<<<<<< HEAD
export default function Home() {
=======
import Link from "next/link";

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await res.json();
  return result
}

export default async function Home() {
  const posts = await fetchData();
>>>>>>> test1
  return (
    <div>
      <h1>Main page</h1>
      {posts.map(el => (
        <div key={el.id} className="post">
          <h2>{el.title}</h2>
          <p>{el.body}</p>
          <Link href={`/post/` + el.id}>Детальнее</Link>
        </div>
      ))}
    </div>
  )
}

