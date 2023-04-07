import { NUTSHELL } from "@/utlis/data";


const NutShell = () => {
  return (
    <div className="flex w-full items-center justify-between flex-col text-center px-6">
      <div className="flex flex-col space-y-2">
        <h2> {NUTSHELL.head} </h2>
        <h2>{NUTSHELL.subHead}</h2>
      </div>
      <div>
        {" "}
        <p>{NUTSHELL.description}</p>{" "}
      </div>
    </div>
  );
};

export default NutShell;
