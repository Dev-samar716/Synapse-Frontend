import { Link } from 'react-router-dom';
import useAuth from '../hooks/features/auth/useAuth';
import logout from '../functions/features/auth/Logout';

const Sidebar = () => {

  const { setUserInfo } = useAuth();
  
  return (
    <aside className="w-[280px] min-h-screen bg-zinc-950 border-r border-zinc-800 flex flex-col justify-between px-4 py-5">
      {/* Top Section */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">

          <div>
            <h1 className="text-white text-lg font-semibold">
              Aegis AI
            </h1>

            <p className="text-zinc-400 text-sm">
              Intelligence Platform
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          <Link className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition text-zinc-200"
           to="/auth/login">
            Login
          </Link>

          <Link className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition text-zinc-200"
          to="/auth/register">
            Sign Up
          </Link>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900 hover:bg-red-500/10 transition text-red-400"
           onClick={() => logout({setUserInfo})}>
            Logout
          </button>
        </nav>
      </div>

      {/* Bottom */}
      <div className="border border-zinc-800 rounded-2xl p-4 bg-zinc-900">
        <p className="text-zinc-300 text-sm leading-relaxed">
          Your AI workspace for intelligent conversations,
          code generation, reasoning, and system analysis.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;