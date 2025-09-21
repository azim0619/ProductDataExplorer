'use client';
import useSWR from 'swr';
const fetcher = (url:string) => fetch(url).then(r=>r.json());

export default function Page() {
  const { data } = useSWR('/api/navigation', fetcher);
  if (!data) return <div>Loading...</div>;
  return (<div><h1>Navigation</h1><ul>{data.map((n:any)=><li key={n.id}>{n.title}</li>)}</ul></div>);
}
