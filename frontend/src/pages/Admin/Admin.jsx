// import React, { useState, useMemo, useEffect } from 'react';
// import AddUser  from './Adduser';
// import Globalmanagement from './GlobalSeoSettings'
// import Advancemanagement from './Advancemanagement'
// import { LayoutDashboard, Users, Settings, LogOut, Search, Clock, Shield, BarChart3, ChevronDown, CheckCircle, XCircle, Bell } from 'lucide-react';
// import { useNavigate } from "react-router-dom";

// // --- Mock Data ---
// const initialUsers = [
//   { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-07-25 10:30 AM' },
//   { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Inactive', lastLogin: '2024-07-24 03:15 PM' },
//   { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Member', status: 'Active', lastLogin: '2024-07-25 11:00 AM' },
//   { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'Member', status: 'Active', lastLogin: '2023-09-01 09:00 AM' },
// ];

// const dashboardStats = [
//   { title: 'Total Users', value: '4,102', icon: Users, color: 'bg-indigo-500' },
//   { title: 'Active Sessions', value: '547', icon: Clock, color: 'bg-green-500' },
//   { title: 'New Signups (24h)', value: '34', icon: CheckCircle, color: 'bg-yellow-500' },
//   { title: 'System Health', value: '99.9%', icon: Shield, color: 'bg-red-500' },
// ];

// // Placeholder for the external image import
// const DEFAULT_HERO_IMAGE = 'https://placehold.co/1200x400/364F6B/FFFFFF?text=Default+Hero+Background';
// const DEFAULT_OG_IMAGE = 'https://placehold.co/600x315/6366F1/FFFFFF?text=Social+Share+Image';

// // --- Mock/Helper Components (replacing external imports) ---

// // Mock Component: Headline (replaces import from '@/custom/Typography')
// const Headline = ({ title, description }) => (
//     <div className="text-center space-y-1">
//         <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
//         {description && <p className="text-sm text-gray-500">{description}</p>}
//     </div>
// );

// // Mock Component: HeroSection (replaces import from '@/components/HeroSection')
// const HeroSection = ({ backgroundImage, title, description, buttonText, buttonLink, overlayOpacity }) => {
//     // Clamp opacity value and map to a tailwind-like scale for background color,
//     const clampedOpacity = Math.min(1, Math.max(0, parseFloat(overlayOpacity) || 0));
//     const heroBg = backgroundImage || DEFAULT_HERO_IMAGE;

//     return (
//         <div
//             className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl transition-all duration-500"
//             style={{ 
//                 backgroundImage: `url(${heroBg})`, 
//                 backgroundSize: 'cover', 
//                 backgroundPosition: 'center',
//                 // Fallback for image loading failure
//                 backgroundColor: heroBg.includes('placehold.co') ? '#364F6B' : 'none' 
//             }}
//         >
//             {/* Overlay for text readability */}
//             <div 
//                 className="absolute inset-0 transition-opacity duration-500" 
//                 style={{ backgroundColor: `rgba(0, 0, 0, ${clampedOpacity})` }}
//             ></div>
//             <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-6">
//                 <h2 className="text-4xl md:text-5xl font-extrabold mb-4">{title || "Your Hero Title Preview"}</h2>
//                 <p className="text-xl mb-8 max-w-2xl">{description || "Your compelling description preview goes here."}</p>
//                 {(buttonText && buttonLink) && (
//                     <a
//                         href={buttonLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
//                         onClick={(e) => {e.preventDefault(); console.log(`Button clicked: ${buttonLink}`);}}
//                     >
//                         {buttonText}
//                     </a>
//                 )}
//             </div>
//         </div>
//     );
// };

// // --- Standard Components ---

// const Sidebar = ({ activeTab, setActiveTab }) => {
//  const navItems = [
//   { name: 'Dashboard', icon: LayoutDashboard, tab: 'dashboard' },
//   { name: 'User Management', icon: Users, tab: 'users' },
//   { name: 'Advanced Settings', icon: BarChart3, tab: 'advancemanagement' },
// { name: 'System Settings', icon: Settings, tab: 'globalmanagement' },

// ];


//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Example: Clear any authentication tokens or user data
//     localStorage.removeItem("token"); 
//     localStorage.removeItem("user");

//     // Navigate to login page
//     navigate("/login");
//   };

//   return (
//     <div className="w-full lg:w-64 bg-gray-800 text-white flex flex-col p-4 space-y-4 rounded-xl shadow-2xl lg:h-full lg:sticky lg:top-0">
//       <div className="text-2xl font-bold text-indigo-400 border-b border-gray-700 pb-4 mb-4">
//         Admin Panel
//       </div>
//       <nav className="flex flex-col space-y-2">
//         {navItems.map((item) => (
//           <button
//             key={item.tab}
//             onClick={() => setActiveTab(item.tab)}
//             className={`flex items-center p-3 rounded-lg transition-all duration-200 font-medium ${
//               activeTab === item.tab
//                 ? 'bg-indigo-600 text-white shadow-lg'
//                 : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//             }`}
//           >
//             <item.icon className="w-5 h-5 mr-3" />
//             {item.name}
//           </button>
//         ))}
//       </nav>
//       <div className="mt-auto pt-4 border-t border-gray-700">
//         <button className="flex items-center p-3 w-full text-red-400 hover:bg-gray-700 rounded-lg transition-colors"
//           onClick={handleLogout}>
//           <LogOut className="w-5 h-5 mr-3"
//           onClick={() => console.log('Logging out...') }
//           />
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };


// // --- Dashboard View Component ---
// const DashboardView = () => {
//   const [showAddUser, setShowAddUser] = useState(false);
//   const [notifications, setNotifications] = useState([]);
//   const [showNotifications, setShowNotifications] = useState(false);

//   // Example stats data
//   const dashboardStats = [
//     { title: "Total Users", value: 120, icon: BarChart3, color: "bg-indigo-500" },
//     { title: "New Leads", value: 35, icon: BarChart3, color: "bg-green-500" },
//     { title: "Projects", value: 12, icon: BarChart3, color: "bg-yellow-500" },
//     { title: "Revenue", value: "₹15cr", icon: BarChart3, color: "bg-red-500" },
//   ];

//   // Fetch notifications (contact form submissions)
//   const fetchNotifications = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/contact/all");
//       if (res.data.success) {
//         setNotifications(res.data.data); // Assuming data is an array of submissions
//       }
//     } catch (err) {
//       console.error("Failed to fetch notifications:", err);
//     }
//   };

//   useEffect(() => {
//     fetchNotifications();

//     // Optional: poll every 30 seconds for new notifications
//     const interval = setInterval(fetchNotifications, 30000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="p-6 space-y-8 relative">
//       <div className="flex items-center justify-between">
//         <h1 className="text-3xl font-extrabold text-gray-800">Dashboard Overview</h1>
        
//         {/* Notification Bell */}
//         <div className="relative">
//           <button
//             onClick={() => setShowNotifications(!showNotifications)}
//             className="relative p-2 rounded-full hover:bg-gray-200 transition"
//           >
//             <Bell className="w-6 h-6 text-gray-600" />
//             {notifications.length > 0 && (
//               <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full">
//                 {notifications.length}
//               </span>
//             )}
//           </button>

//           {showNotifications && (
//             <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg border overflow-hidden z-50">
//               <div className="p-3 font-semibold border-b">Notifications</div>
//               <ul className="max-h-64 overflow-y-auto">
//                 {notifications.length === 0 ? (
//                   <li className="p-3 text-sm text-gray-500">No notifications</li>
//                 ) : (
//                   notifications.map((n, idx) => (
//                     <li
//                       key={idx}
//                       className="p-3 border-b hover:bg-gray-50 transition cursor-pointer"
//                     >
//                       <p className="font-medium">{n.name}</p>
//                       <p className="text-xs text-gray-500">{n.email}</p>
//                       <p className="text-xs text-gray-500">{n.phone}</p>
//                     </li>
//                   ))
//                 )}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {dashboardStats.map((stat, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 rounded-xl shadow-lg transition-transform hover:scale-[1.02] duration-300 border-t-4 border-indigo-500"
//           >
//             <div className="flex items-center justify-between">
//               <div className="text-sm font-medium text-gray-500">{stat.title}</div>
//               <stat.icon
//                 className={`w-6 h-6 p-1 rounded-full text-white ${stat.color}`}
//               />
//             </div>
//             <div className="text-4xl font-bold text-gray-900 mt-2">{stat.value}</div>
//             <p className="text-xs text-green-500 mt-1 flex items-center">
//               <BarChart3 className="w-3 h-3 mr-1" />
//               +12% vs last week
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Recent Activity & Quick Actions */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
//           <ul className="space-y-3 text-sm text-gray-600">
//             <li className="p-3 bg-gray-50 rounded-lg">User Alice Johnson updated profile settings.</li>
//             <li className="p-3 bg-gray-50 rounded-lg">New member Bob Smith registered.</li>
//             <li className="p-3 bg-gray-50 rounded-lg">Content item 'Pricing Model' was published.</li>
//             <li className="p-3 bg-gray-50 rounded-lg">System backup initiated.</li>
//           </ul>
//         </div>
//         <div className="bg-white p-6 rounded-xl shadow-lg">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
//           <div className="space-y-3">
//             <button
//               onClick={() => setShowAddUser(true)}
//               className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition-colors shadow-md"
//             >
//               Create New User
//             </button>
//             <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors shadow-md">
//               View Analytics Report
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Popup Modal */}
//       {showAddUser && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
//           <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
//             <button
//               onClick={() => setShowAddUser(false)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
//             >
//               ✕
//             </button>
//             <AddUser />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // --- User Management Component ---
// const UserManagementView = () => {
//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:5000/api/users")
//       .then((res) => res.json())
//       .then(setUsers)
//       .catch(console.error);
//   }, []);

//   const filteredUsers = useMemo(() => {
//     const lower = searchTerm.toLowerCase();
//     return users.filter(
//       (u) =>
//         u.name.toLowerCase().includes(lower) ||
//         u.email.toLowerCase().includes(lower) ||
//         u.role.toLowerCase().includes(lower)
//     );
//   }, [users, searchTerm]);

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-3xl font-extrabold text-gray-800">User Management</h1>
//       <div className="bg-white p-6 rounded-xl shadow-lg">
//         <div className="flex justify-between mb-4">
//           <div className="relative w-80">
//             <Search className="absolute left-3 top-2.5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search users..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10 pr-4 py-2 border rounded-lg w-full"
//             />
//           </div>
//           <button
//             onClick={() => navigate("/add-user")}
//             className="bg-indigo-600 text-white py-2 px-4 rounded-lg"
//           >
//             + Add User
//           </button>
//         </div>

//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Name</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Role</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Status</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Last Login</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {filteredUsers.map((user) => (
//               <tr key={user._id}>
//                 <td className="px-6 py-4">{user.name}</td>
//                 <td className="px-6 py-4">{user.role}</td>
//                 <td className="px-6 py-4">{user.status}</td>
//                 <td className="px-6 py-4">{user.lastLogin}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


// // --- Main App Component ---
// const App = () => {
//   const [activeTab, setActiveTab] = useState('dashboard'); // Default to SEO view for demonstration

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'dashboard':
//         return <DashboardView />;
//       case 'users':
//         return <UserManagementView />;
//       case 'advancemanagement':
//         return <Advancemanagement />;
//       case 'globalmanagement':
//         return <Globalmanagement />;
//       default:
//         return <DashboardView />;
//     }
//   };

//   return (
//     // UPDATED: Use h-screen and remove padding to take up full viewport height
//     <div className="h-screen bg-gray-100 font-sans overflow-hidden">
//       <script src="https://cdn.tailwindcss.com"></script>
//       <style>{`
//         /* Import Inter Font */
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
//         * { font-family: 'Inter', sans-serif; }
//       `}</style>
      
//       {/* Mobile Header for Navigation */}
//       <div className="lg:hidden p-4 mb-4">
//         <div className="relative rounded-xl shadow-lg">
//           <select
//             value={activeTab}
//             onChange={(e) => setActiveTab(e.target.value)}
//             className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors appearance-none"
//           >
//             <option value="dashboard">Dashboard</option>
//             <option value="users">User Management</option>
//             <option value="advancemanagement">Advanced Settings</option>
//             <option value="globalmanagement">System Settings</option>

//           </select>
//           <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
//         </div>
//       </div>

//       {/* Main Layout Container - Adds back necessary internal spacing */}
//       <div className="lg:flex lg:space-x-8 h-full p-4 lg:p-6">
//         {/* Sidebar (Full height on Desktop, hidden on mobile) */}
//         <div className="hidden lg:block lg:h-full">
//           <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
//         </div>

//         {/* Content Area - Uses flex-1 and overflow to scroll content if necessary */}
//         <div className="flex-1 bg-white rounded-xl shadow-2xl overflow-y-auto h-full">
//           {renderContent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect, useMemo } from "react";
import AddUser from "./Adduser";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react"; // optional icon

const Dashboard = () => {
  const [role, setRole] = useState("admin");
  const [activeView, setActiveView] = useState("dashboard");

  // ---------------- SEO USER PANEL ----------------
  const SEOUserPanel = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">SEO User Panel</h2>
      <p className="text-gray-700 mb-4">
        Access your assigned platforms, add keywords, and publish content.
      </p>
      <div className="p-4 border rounded">
        <h3 className="font-semibold mb-2">Platform Folders</h3>
        <div className="flex flex-wrap gap-2">
          {["Facebook", "Instagram", "YouTube", "Google Ads"].map((platform) => (
            <button
              key={platform}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              {platform}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // ---------------- CREATE USER FORM ----------------
  const CreateUserForm = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New User</h2>
      <AddUser />
    </div>
  );

  // ---------------- USER MANAGEMENT TABLE ----------------
  const UserManagementView = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      fetch("http://localhost:5000/api/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch(console.error);
    }, []);

    const filteredUsers = useMemo(() => {
      const lower = searchTerm.toLowerCase();
      return users.filter(
        (u) =>
          u.name.toLowerCase().includes(lower) ||
          u.email.toLowerCase().includes(lower) ||
          u.role.toLowerCase().includes(lower)
      );
    }, [users, searchTerm]);

    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between mb-4">
          <div className="relative w-80">
            <Search className="absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg w-full"
            />
          </div>
          <button
            onClick={() => navigate("/add-user")}
            className="bg-indigo-600 text-white py-2 px-4 rounded-lg"
          >
            + Add User
          </button>
        </div>

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                Last Login
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredUsers.map((user) => (
              <tr key={user._id}>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">{user.status}</td>
                <td className="px-6 py-4">{user.lastLogin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // ---------------- MAIN RENDER CONTENT ----------------
  const renderContent = () => {
    if (role === "admin") {
      if (activeView === "dashboard") return <UserManagementView />;
      if (activeView === "dev-settings") return <CreateUserForm />;
      if (activeView === "seo-settings")
        return <div className="text-xl font-semibold">SEO Settings Page</div>;
    }

    if (role === "seo_user") return <SEOUserPanel />;

    if (role === "editor")
      return <div className="bg-white p-6 rounded-lg shadow-md">Editor Panel</div>;

    return <div>Select a role to see content.</div>;
  };

  // ---------------- SIDEBAR LINKS ----------------
  const SidebarLinks = () => (
    <>
      {role === "admin" && (
        <>
          <button
            onClick={() => setActiveView("dashboard")}
            className={`block w-full text-left py-2.5 px-4 rounded hover:bg-gray-700 ${
              activeView === "dashboard" ? "bg-gray-700" : ""
            }`}
          >
            Admin Home
          </button>
          <button
            onClick={() => setActiveView("dev-settings")}
            className={`block w-full text-left py-2.5 px-4 rounded hover:bg-gray-700 ${
              activeView === "dev-settings" ? "bg-gray-700" : ""
            }`}
          >
            Advanced Settings
          </button>
          <button
            onClick={() => setActiveView("seo-settings")}
            className={`block w-full text-left py-2.5 px-4 rounded hover:bg-gray-700 ${
              activeView === "seo-settings" ? "bg-gray-700" : ""
            }`}
          >
            SEO Settings
          </button>
        </>
      )}
      {role === "editor" && (
        <button
          onClick={() => setActiveView("editor-panel")}
          className="block w-full text-left py-2.5 px-4 rounded hover:bg-gray-700"
        >
          Editor Panel
        </button>
      )}
      {role === "seo_user" && (
        <button
          onClick={() => setActiveView("seo-panel")}
          className="block w-full text-left py-2.5 px-4 rounded hover:bg-gray-700"
        >
          SEO User Panel
        </button>
      )}
    </>
  );

  // ---------------- MAIN RETURN ----------------
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col">
        <div className="text-2xl font-bold mb-8">My Dashboard</div>
        <nav className="flex-grow space-y-2">
          <SidebarLinks />
        </nav>
        <div className="mt-auto">
          <button
            onClick={() => alert("Logged out")}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-6">
        <header className="flex justify-between items-center mb-6 pb-4 border-b border-gray-300">
          <h1 className="text-3xl font-semibold text-gray-800">
            Welcome, {role.toUpperCase()}!
          </h1>
          <div>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border rounded px-3 py-1"
            >
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="seo_user">SEO User</option>
            </select>
          </div>
        </header>
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;
