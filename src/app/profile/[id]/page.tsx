export default function UserProfile({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <br />
      <p>Profile page = {params.id}</p>
      <span className="p-2 rounded bg-orange-500">{params.id}</span>
    </div>
  );
}
