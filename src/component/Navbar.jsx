import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiClothes } from "react-icons/gi";
import { useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";




const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const auth = getAuth();

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); 
      } else {
        setUser(null); 
      }
  })
  return () => unsubscribe();
  }, [auth]);
  

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success('Logged out successfully!', {
          position: 'top-center',
          autoClose: 2000,
        });
        setUser(null); // Clear user state
        navigate('/login'); // Redirect to login page
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`, {
          position: 'top-center',
        });
      });
  };

  return (
        <div className="flex justify-between py-6 items-center w-11/12 mx-auto">
            <div className="navbar bg-cyan-700">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/camp"}>All Campaigns</NavLink></li>
      <li><NavLink to={"/addcamp"}>Add Campaign</NavLink></li>
      <li><NavLink to={"/my-campaigns"}>My Campaign</NavLink></li>
      <li><NavLink to={"/my-donations"}>My Donation</NavLink></li>
      </ul>
    </div>
    <input type="checkbox" value="synthwave" className="toggle theme-controller" />
    <Link to={"/"} className="btn btn-ghost text-2xl font-bold">CrowdCube</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/camp"}>All Campaigns</NavLink></li>
      <li><NavLink to={"/addcamp"}>Add Campaign</NavLink></li>
      <li><NavLink to={"/my-campaigns"}>My Campaign</NavLink></li>
      <li><NavLink to={"/my-donations"}>My Donation</NavLink></li>

    </ul>
  </div>
  <div className="navbar-end gap-1">
          {user ? (
            <div className="flex items-center gap-2">
              <div className="relative group">
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border border-gray-300"
                  title={user.displayName} // Show name on hover
                />
                <div className="absolute hidden group-hover:block bg-gray-800 text-white text-sm p-2 rounded shadow-lg top-12">
                  {user.displayName}
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-primary bg-red-600 text-white px-4"
              >
                Log Out
              </button>
              </div>
          ) : (
            <div className="flex gap-3">
                <NavLink to="/login" className="btn bg-gray-800 text-white">
              Login
            </NavLink>
            <NavLink to="/register" className="btn bg-gray-800 text-white">
              Register
            </NavLink>
            </div>
        

            
          )}
        </div>
</div>
        </div>
    );
};

export default Navbar;