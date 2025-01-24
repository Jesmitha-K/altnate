import React, { useEffect, useState }  from 'react';
import { UserForm } from './UserForm';
import { UserDetailsDisplay } from './UserDetails';
import { UserDetails } from './type';
import { BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';
import { LayoutDashboard, User, Info, FileText } from 'lucide-react';
import About from './Aboutus';
import Policy from './policy';
 export default function Profile() {
  const [userDetails, setUserDetails] = React.useState<UserDetails | null>(null);
  const [isEditing, setIsEditing] = React.useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (data: UserDetails) => {
    setUserDetails(data);
    setIsEditing(false);
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <nav className="bg-green-100 p-4 relative shadow-sm">
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-green-200 rounded-lg transition-colors duration-200 ease-in-out"
        >
          <LayoutDashboard className="h-6 w-6 text-green-700" />
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-3 z-10 transform transition-all duration-200 ease-in-out">
            <div className="px-4 py-3 border-b border-gray-100">
              <h3 className="text-sm font-semibold text-gray-500 uppercase">Dashboard Menu</h3>
            </div>
            
            <Link
              to="/profile"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-green-50 transition-colors duration-200 gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium">User Profile Details</p>
                <p className="text-sm text-gray-500">View and edit your profile</p>
              </div>
            </Link>
            
            <Link
              to="/about"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-green-50 transition-colors duration-200 gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <Info className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium">About Us</p>
                <p className="text-sm text-gray-500">Learn more about our company</p>
              </div>
            </Link>
            
            <Link
              to="/policy"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-green-50 transition-colors duration-200 gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <FileText className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium">Our Policy</p>
                <p className="text-sm text-gray-500">Review our terms and policies</p>
              </div>
            </Link>
          </div>
        )}
      </nav>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-emerald-800 text-center mb-8">
            User Profile Management
          </h1>
          
          <div className="flex justify-center">
            {!userDetails || isEditing ? (
              <UserForm 
                onSubmit={handleSubmit}
                initialData={userDetails || undefined}
                isUpdate={!!userDetails}
              />
            ) : (
              <UserDetailsDisplay
                user={userDetails}
                onEdit={() => setIsEditing(true)}
              />
            )}
          </div>
        </div>
      </div>
      <main>
        <Routes>
          <Route path="/profile" element={<Profile />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/policy" element={<Policy />} />
        </Routes>
      </main>
      
    </div>
  );
}

