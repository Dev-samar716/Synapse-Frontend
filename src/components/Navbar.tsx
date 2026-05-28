const Navbar = () => {
  return (
    <header className="w-full h-[70px] border-b border-zinc-800 bg-zinc-950 px-6 flex items-center justify-between">
      <div>
        <h2 className="text-white text-lg font-semibold">
          New Chat
        </h2>

        <p className="text-zinc-500 text-sm">
          Start an intelligent conversation
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-zinc-800" />
      </div>
    </header>
  );
};

export default Navbar;