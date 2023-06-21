import logo from "/images/coding--logo-removebg-preview.png";
export default function Header() {
  return (
    <div className="w-full bg-[#FF5E5E33] text-white p-2 flex justify-center items-center font-Rubik header">
      <img src={logo} alt="" className="w-24" />
      <h2 className="text-xl font-bold ml-[-1.3rem]">BotC - Your buddy for &apos;C&apos;</h2>
    </div>
  );
}
