export default function Page({ params }: { params: { id: string } }) {
  return <div>Blog ID : {params.id}</div>;
}
