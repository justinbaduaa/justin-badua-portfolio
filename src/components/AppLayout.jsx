import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";

const AppLayout = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-neutral-900">
      <div className="mx-auto flex w-full max-w-7xl gap-12 px-4 sm:px-6 lg:px-8 xl:px-12">
        <Sidebar />
        <div className="flex min-h-screen w-full min-w-0 flex-1 flex-col py-6 sm:py-10 lg:py-14">
          <header className="flex min-w-0 shrink-0 items-center justify-between border-b border-neutral-200/80 px-4 py-4 sm:px-6 lg:hidden">
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

          <main className="min-w-0 flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;

