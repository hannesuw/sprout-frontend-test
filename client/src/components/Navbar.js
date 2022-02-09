import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
      {pathname === "/" && (
        <div className="flex-1 px-2 mx-2 flex justify-center">
          <span className="font-bold text-2xl">Pokedex</span>
        </div>
      )}

      {pathname !== "/" && (
        <div>
          <div className="flex-none">
            <button
              className="btn btn-square btn-ghost"
              onClick={() => navigate("/")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current text-success"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex-1 px-2 mx-2">
            <span className="text-lg font-bold">Back</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
