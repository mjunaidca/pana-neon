import { Developer } from "@/types";

const allDevs = async () => {
  const res = await fetch("http://localhost:3000/api/getdev", {
    next: { revalidate: 3 },
  });

  if (!res.ok) {
    throw new Error("failed to get Developer Data");
  }

  const data = await res.json();

  return data;
};

const AdminDashboard = async () => {
  const profiles: Developer[] = await allDevs();
  return (
    <div className="container mx-auto py-8 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <h2 className="text-xl font-bold mb-4">All Profiles</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left whitespace-nowrap">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4">First Name</th>
              <th className="py-2 px-4">Last Name</th>
              <th className="py-2 px-4">Email</th>
              {/* Add other headers as needed */}
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile) => (
              <tr key={profile.dev_id} className="border-b border-gray-200">
                <td className="py-2 px-4">{profile.first_name}</td>
                <td className="py-2 px-4">{profile.last_name}</td>
                <td className="py-2 px-4">{profile.email}</td>
                {/* Add other cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
