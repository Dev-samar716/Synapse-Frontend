
import useAuth from "../hooks/features/auth/useAuth";

const Navbar = () => {

  const { userInfo } = useAuth();

  if(!userInfo) return;
  const username = userInfo.username
  return (
    <header className="w-full h-[70px] border-b border-zinc-800 bg-zinc-950 px-6 flex items-center justify-end">
      <div className="flex items-end">
        <h2 className="font-poppins text-white text-sm">
          {username}
        </h2>
        <i className="fa-solid fa-user text-white text-2xl"></i>
      </div>
    </header>
  );
};

export default Navbar;