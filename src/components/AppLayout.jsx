import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";

const AppLayout = () => {
  return (
    <div className="h-screen bg-white text-neutral-900 overflow-hidden">
      <Sidebar />
      <div className="flex h-screen w-full flex-1 flex-col lg:ml-72">
        <header className="flex shrink-0 items-center justify-between border-b border-neutral-200 px-6 py-4 lg:hidden">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src="/JB-Glasses.svg"
              alt="Justin Badua mark"
              className="h-10 w-auto"
              draggable={false}
            />
            <div className="text-sm text-neutral-500">
              <p className="font-medium text-neutral-900">Justin Badua</p>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Portfolio</p>
            </div>
          </NavLink>

          <nav className="flex items-center gap-6 text-sm text-neutral-500">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive ? "text-neutral-900" : "hover:text-neutral-900"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/cv"
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive ? "text-neutral-900" : "hover:text-neutral-900"
                }`
              }
            >
              CV
            </NavLink>
          </nav>
        </header>

        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;

