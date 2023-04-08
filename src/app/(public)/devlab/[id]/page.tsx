import { SingleDevProfile } from "@/components/SingleDevProfile";

const mockDev = {
  dev_id: "1",
  first_name: "John",
  last_name: "Doe",
  email: "john.doe@example.com",
  password: "hashedpassword1",
  gender: "male",
  date_of_birth: "1990-03-11T19:00:00.000Z",
  profile_title: "Full Stack Developer",
  about_me:
    "I am a passionate Full Stack Developer with over 5 years of experience.",
  image_url:
    "https://pbs.twimg.com/profile_images/1183639342956367877/71Sh5fhw_400x400.jpg",
  github_link: "https://github.com/johndoe",
  best_project_title: "E-Commerce Platform",
  best_project_description:
    "A feature-rich and scalable e-commerce platform for small and medium businesses.",
  skills: "React, Node.js, Express, MongoDB",
  personal_website: "https://www.johndoe.com",
  linkedin_url: "https://www.linkedin.com/in/johndoe",
  is_approved: true,
};

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

const DevelopersProfile = async ({ params }: { params: { id: any } }) => {
  const id = params.id;
  const alldevs: any = await allDevs();
  const thisdev = alldevs.find((dev: any) => dev.dev_id === id);
  console.log("FFFFDFEFAD", thisdev);

  return (
    <div className="min-h-screen my-32  ">
      DevelopersProfile {id}
      <div>
        <SingleDevProfile developer={thisdev} />
      </div>
    </div>
  );
};

export default DevelopersProfile;
