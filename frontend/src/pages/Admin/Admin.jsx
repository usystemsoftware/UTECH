import React, { useState, useMemo, useEffect } from 'react';
import AddUser  from './Adduser';
import { LayoutDashboard, Users, Settings, LogOut, Search, Clock, Shield, BarChart3, ChevronDown, CheckCircle, XCircle, Bell } from 'lucide-react';
import { useNavigate } from "react-router-dom";

// --- Mock Data ---
const initialUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-07-25 10:30 AM' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Inactive', lastLogin: '2024-07-24 03:15 PM' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Member', status: 'Active', lastLogin: '2024-07-25 11:00 AM' },
  { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'Member', status: 'Active', lastLogin: '2023-09-01 09:00 AM' },
];

const dashboardStats = [
  { title: 'Total Users', value: '4,102', icon: Users, color: 'bg-indigo-500' },
  { title: 'Active Sessions', value: '547', icon: Clock, color: 'bg-green-500' },
  { title: 'New Signups (24h)', value: '34', icon: CheckCircle, color: 'bg-yellow-500' },
  { title: 'System Health', value: '99.9%', icon: Shield, color: 'bg-red-500' },
];

// Placeholder for the external image import
const DEFAULT_HERO_IMAGE = 'https://placehold.co/1200x400/364F6B/FFFFFF?text=Default+Hero+Background';
const DEFAULT_OG_IMAGE = 'https://placehold.co/600x315/6366F1/FFFFFF?text=Social+Share+Image';

// --- Mock/Helper Components (replacing external imports) ---

// Mock Component: Headline (replaces import from '@/custom/Typography')
const Headline = ({ title, description }) => (
    <div className="text-center space-y-1">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
);

// Mock Component: HeroSection (replaces import from '@/components/HeroSection')
const HeroSection = ({ backgroundImage, title, description, buttonText, buttonLink, overlayOpacity }) => {
    // Clamp opacity value and map to a tailwind-like scale for background color,
    const clampedOpacity = Math.min(1, Math.max(0, parseFloat(overlayOpacity) || 0));
    const heroBg = backgroundImage || DEFAULT_HERO_IMAGE;

    return (
        <div
            className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl transition-all duration-500"
            style={{ 
                backgroundImage: `url(${heroBg})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                // Fallback for image loading failure
                backgroundColor: heroBg.includes('placehold.co') ? '#364F6B' : 'none' 
            }}
        >
            {/* Overlay for text readability */}
            <div 
                className="absolute inset-0 transition-opacity duration-500" 
                style={{ backgroundColor: `rgba(0, 0, 0, ${clampedOpacity})` }}
            ></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-6">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">{title || "Your Hero Title Preview"}</h2>
                <p className="text-xl mb-8 max-w-2xl">{description || "Your compelling description preview goes here."}</p>
                {(buttonText && buttonLink) && (
                    <a
                        href={buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                        onClick={(e) => {e.preventDefault(); console.log(`Button clicked: ${buttonLink}`);}}
                    >
                        {buttonText}
                    </a>
                )}
            </div>
        </div>
    );
};

// --- Standard Components ---

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, tab: 'dashboard' },
    { name: 'User Management', icon: Users, tab: 'users' },
    { name: 'System Settings', icon: Settings, tab: 'settings' },
    { name: 'SEO Management', icon: BarChart3, tab: 'seo' },
  ];

  const navigate = useNavigate();

  const handleLogout = () => {
    // Example: Clear any authentication tokens or user data
    localStorage.removeItem("token"); 
    localStorage.removeItem("user");

    // Navigate to login page
    navigate("/login");
  };

  return (
    <div className="w-full lg:w-64 bg-gray-800 text-white flex flex-col p-4 space-y-4 rounded-xl shadow-2xl lg:h-full lg:sticky lg:top-0">
      <div className="text-2xl font-bold text-indigo-400 border-b border-gray-700 pb-4 mb-4">
        Admin Panel
      </div>
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <button
            key={item.tab}
            onClick={() => setActiveTab(item.tab)}
            className={`flex items-center p-3 rounded-lg transition-all duration-200 font-medium ${
              activeTab === item.tab
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </button>
        ))}
      </nav>
      <div className="mt-auto pt-4 border-t border-gray-700">
        <button className="flex items-center p-3 w-full text-red-400 hover:bg-gray-700 rounded-lg transition-colors"
          onClick={handleLogout}>
          <LogOut className="w-5 h-5 mr-3"
          onClick={() => console.log('Logging out...') }
          />
          Logout
        </button>
      </div>
    </div>
  );
};

// --- Dashboard View Component ---
const DashboardView = () => {
  const [showAddUser, setShowAddUser] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  // Example stats data
  const dashboardStats = [
    { title: "Total Users", value: 120, icon: BarChart3, color: "bg-indigo-500" },
    { title: "New Leads", value: 35, icon: BarChart3, color: "bg-green-500" },
    { title: "Projects", value: 12, icon: BarChart3, color: "bg-yellow-500" },
    { title: "Revenue", value: "$15k", icon: BarChart3, color: "bg-red-500" },
  ];

  // Fetch notifications (contact form submissions)
  const fetchNotifications = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/contact/all`);
      if (res.data.success) {
        setNotifications(res.data.data); // Assuming data is an array of submissions
      }
    } catch (err) {
      console.error("Failed to fetch notifications:", err);
    }
  };

  useEffect(() => {
    fetchNotifications();

    // Optional: poll every 30 seconds for new notifications
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 space-y-8 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold text-gray-800">Dashboard Overview</h1>
        
        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-full hover:bg-gray-200 transition"
          >
            <Bell className="w-6 h-6 text-gray-600" />
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full">
                {notifications.length}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg border overflow-hidden z-50">
              <div className="p-3 font-semibold border-b">Notifications</div>
              <ul className="max-h-64 overflow-y-auto">
                {notifications.length === 0 ? (
                  <li className="p-3 text-sm text-gray-500">No notifications</li>
                ) : (
                  notifications.map((n, idx) => (
                    <li
                      key={idx}
                      className="p-3 border-b hover:bg-gray-50 transition cursor-pointer"
                    >
                      <p className="font-medium">{n.name}</p>
                      <p className="text-xs text-gray-500">{n.email}</p>
                      <p className="text-xs text-gray-500">{n.phone}</p>
                    </li>
                  ))
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg transition-transform hover:scale-[1.02] duration-300 border-t-4 border-indigo-500"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-500">{stat.title}</div>
              <stat.icon
                className={`w-6 h-6 p-1 rounded-full text-white ${stat.color}`}
              />
            </div>
            <div className="text-4xl font-bold text-gray-900 mt-2">{stat.value}</div>
            <p className="text-xs text-green-500 mt-1 flex items-center">
              <BarChart3 className="w-3 h-3 mr-1" />
              +12% vs last week
            </p>
          </div>
        ))}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="p-3 bg-gray-50 rounded-lg">User Alice Johnson updated profile settings.</li>
            <li className="p-3 bg-gray-50 rounded-lg">New member Bob Smith registered.</li>
            <li className="p-3 bg-gray-50 rounded-lg">Content item 'Pricing Model' was published.</li>
            <li className="p-3 bg-gray-50 rounded-lg">System backup initiated.</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button
              onClick={() => setShowAddUser(true)}
              className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition-colors shadow-md"
            >
              Create New User
            </button>
            <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors shadow-md">
              View Analytics Report
            </button>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showAddUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowAddUser(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              ✕
            </button>
            <AddUser />
          </div>
        </div>
      )}
    </div>
  );
};

// --- User Management Component ---
const UserManagementView = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then(setUsers)
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
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-800">User Management</h1>
      <div className="bg-white p-6 rounded-xl shadow-lg">
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Last Login</th>
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
    </div>
  );
}

// --- Settings Component ---
const SettingsView = () => {
  const [siteName, setSiteName] = useState('My Awesome Admin Portal');
  const [allowRegistration, setAllowRegistration] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);

  const handleSave = (e) => {
    e.preventDefault();
    setSaveStatus('Saving...');
    // Simulate API call delay
    setTimeout(() => {
      console.log('Settings Saved:', { siteName, allowRegistration, notificationsEnabled });
      setSaveStatus('Saved!');
      setTimeout(() => setSaveStatus(null), 3000);
    }, 1500);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-800">System Settings</h1>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto">
        <form onSubmit={handleSave} className="space-y-6">
          {/* Site Name Setting */}
          <div>
            <label htmlFor="site-name" className="block text-sm font-medium text-gray-700 mb-1">
              Site Name
            </label>
            <input
              type="text"
              id="site-name"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              placeholder="Enter site name"
            />
            <p className="mt-1 text-xs text-gray-500">This name will appear in the page title and headers.</p>
          </div>

          <div className="border-t border-gray-200 pt-6 space-y-6">
            {/* Allow Registration Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700">Allow New User Registration</p>
                <p className="text-xs text-gray-500">When disabled, only existing users can log in.</p>
              </div>
              <button
                type="button"
                onClick={() => setAllowRegistration(!allowRegistration)}
                className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  allowRegistration ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
                    allowRegistration ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Notifications Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700">Enable Email Notifications</p>
                <p className="text-xs text-gray-500">Receive alerts for critical system events.</p>
              </div>
              <button
                type="button"
                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  notificationsEnabled ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
                    notificationsEnabled ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Submit Button and Status */}
          <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              {saveStatus === 'Saving...' ? 'Saving...' : 'Save Settings'}
            </button>
            {saveStatus === 'Saved!' && (
              <p className="text-sm text-green-600 font-medium flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" /> Settings saved successfully!
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

// --- SEO Management Component (UPDATED) ---
const SEOView = () => {
  const [seo, setSeo] = useState({
    title: "",
    description: "",
    image: "", // OG Image URL
    heroBackground: "", // Hero Image URL
    buttonText: "Explore Blogs",
    buttonLink: "https://example.com/hero-link", // Defaulted to match reference
    overlayOpacity: 0.3,
    schema:
      '{"@context": "https://schema.org", "@type": "WebPage", "name": "U Tech | Company Blog"}',
  });

  const [saveStatus, setSaveStatus] = useState(null);

  // ✅ Load saved data from localStorage
  useEffect(() => {
    const savedSeo = localStorage.getItem("seoSettings");
    if (savedSeo) {
      setSeo(JSON.parse(savedSeo));
    }
  }, []);

  // ✅ Handle input change
  const handleChange = (e) => {
    const value =
      e.target.type === "number" || e.target.type === "range"
        ? parseFloat(e.target.value)
        : e.target.value;

    setSeo({ ...seo, [e.target.name]: value });
  };

  // ✅ Save to localStorage
  const handleSave = () => {
    setSaveStatus("Saving...");
    setTimeout(() => {
      localStorage.setItem("seoSettings", JSON.stringify(seo));
      console.log("SEO + Hero settings saved locally:", seo);
      setSaveStatus("Saved!");
      setTimeout(() => setSaveStatus(null), 3000);
    }, 1000);
  };

  // ✅ Format schema JSON nicely
  const formattedSchema = useMemo(() => {
    if (!seo.schema) return "";
    try {
      return JSON.stringify(JSON.parse(seo.schema), null, 2);
    } catch (e) {
      return seo.schema; // If invalid JSON, just show raw input
    }
  }, [seo.schema]);

  return (
    <div className="p-4 lg:p-6 space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-800">
        SEO & Hero Editor
      </h1>

      {/* ===== Hero Preview ===== */}
      

      {/* ===== SEO + Hero Form ===== */}
      <div className="max-w-6xl mx-auto w-full">
        <div className="bg-white w-full p-6 shadow-lg rounded-lg space-y-6">
          <h1 className="text-2xl font-bold text-gray-800 text-center md:text-left">
            SEO Settings
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={seo.title}
                onChange={handleChange}
                placeholder="Enter page title"
                className="w-full p-3 border rounded"
              />

              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={seo.description}
                onChange={handleChange}
                rows={4}
                placeholder="Enter meta description"
                className="w-full p-3 border rounded"
              />

              <label className="block text-sm font-medium text-gray-700">
                Hero Background Image URL
              </label>
              <input
                type="text"
                name="heroBackground"
                value={seo.heroBackground}
                onChange={handleChange}
                placeholder="https://example.com/hero.jpg"
                className="w-full p-3 border rounded"
              />

              <label className="block text-sm font-medium text-gray-700">
                Hero Button Text
              </label>
              <input
                type="text"
                name="buttonText"
                value={seo.buttonText}
                onChange={handleChange}
                placeholder="Click Me"
                className="w-full p-3 border rounded"
              />

              <label className="block text-sm font-medium text-gray-700">
                Hero Button Link
              </label>
              <input
                type="text"
                name="buttonLink"
                value={seo.buttonLink}
                onChange={handleChange}
                placeholder="/example-link"
                className="w-full p-3 border rounded"
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              <label className="block text-sm font-medium text-gray-700">
                Overlay Opacity (0-1)
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="1"
                name="overlayOpacity"
                value={seo.overlayOpacity}
                onChange={handleChange}
                className="w-full p-3 border rounded"
              />

              <label className="block text-sm font-medium text-gray-700">
                JSON-LD Schema
              </label>
              <textarea
                name="schema"
                value={seo.schema}
                onChange={handleChange}
                placeholder='{"@context": "https://schema.org"}'
                rows={8}
                className="w-full p-3 border rounded font-mono"
              />
            </div>
          </div>

          <div className="w-full">
            <button
              onClick={handleSave}
              className="w-full bg-blue-600 text-white text-center py-3 rounded hover:bg-blue-700 transition mt-4"
            >
              Save SEO + Hero
            </button>
            {saveStatus && (
              <p className="text-center text-sm text-gray-600 mt-2">
                {saveStatus}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Main App Component ---
const App = () => {
  const [activeTab, setActiveTab] = useState('seo'); // Default to SEO view for demonstration

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'users':
        return <UserManagementView />;
      case 'settings':
        return <SettingsView />;
      case 'seo':
        return <SEOView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    // UPDATED: Use h-screen and remove padding to take up full viewport height
    <div className="h-screen bg-gray-100 font-sans overflow-hidden">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        /* Import Inter Font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        * { font-family: 'Inter', sans-serif; }
      `}</style>
      
      {/* Mobile Header for Navigation */}
      <div className="lg:hidden p-4 mb-4">
        <div className="relative rounded-xl shadow-lg">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors appearance-none"
          >
            <option value="dashboard">Dashboard</option>
            <option value="users">User Management</option>
            <option value="settings">System Settings</option>
            <option value="seo">SEO Management</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Main Layout Container - Adds back necessary internal spacing */}
      <div className="lg:flex lg:space-x-8 h-full p-4 lg:p-6">
        {/* Sidebar (Full height on Desktop, hidden on mobile) */}
        <div className="hidden lg:block lg:h-full">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Content Area - Uses flex-1 and overflow to scroll content if necessary */}
        <div className="flex-1 bg-white rounded-xl shadow-2xl overflow-y-auto h-full">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default App;
