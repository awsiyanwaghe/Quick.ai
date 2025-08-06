import { Protect, useClerk, useUser } from '@clerk/clerk-react';
import { Eraser, FileText, Hash, House, Scissors, SquarePen, Users, Image, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/ai', lable: 'Dashboard', Icon: House },
  { to: '/ai/write-article', lable: 'Write Article', Icon: SquarePen },
  { to: '/ai/blog-titles', lable: 'Blog Titles', Icon: Hash },
  { to: '/ai/generate-images', lable: 'Generate Images', Icon: Image },
  { to: '/ai/remove-background', lable: 'Remove Background', Icon: Eraser },
  { to: '/ai/remove-object', lable: 'Remove Object', Icon: Scissors },
  { to: '/ai/review-resume', lable: 'Review Resume', Icon: FileText },
  { to: '/ai/community', lable: 'Community', Icon: Users },
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  console.log(user)
  console.log(user?.publicMetadata)     // OR
  console.log(user?.privateMetadata)    // See if subscription info is here
  const { signOut, openUserProfile } = useClerk();

  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col items-center 
        max-sm:fixed max-sm:top-14 max-sm:left-0 max-sm:h-[calc(100vh-56px)] 
        max-sm:z-50 ${sidebar ? 'max-sm:translate-x-0' : 'max-sm:-translate-x-full'} 
        transition-all duration-300 ease-in-out`}
    >
      <div className='my-7 w-full'>
        <img
          src={user?.imageUrl}
          alt="User Avatar"
          className='w-12  rounded-full mx-auto' />

        <h1 className='mt-2 text-center font-medium'>{user?.fullName}</h1>
        <div className='px-6 mt-5 text-sm to-gray-600 font-medium'>
          {navItems.map(({ to, lable, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/ai'}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded hover:bg-gray-100 transition 
                ${isActive ? 'bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white' : 'text-gray-800'}`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : ''}`} />
                  {lable}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>


      <div className='w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between'>
        <div className='flex gap-2 items-center cursor-pointer' onClick={openUserProfile}>
          <img src={user.imageUrl} className='w-8 rounded-full' alt="" />
          <div>
            <h1 className='text-sm font-medium'>{user.fullName}</h1>
            <p className='text-sm text-gray-500'>
              <Protect plan='premium' fallback='Free' >Premium </Protect> Plan
            </p>
          </div>

        </div>
        <LogOut onClick={signOut} className='w-5 to-gray-400 hover:text-gray-700 transition cursor-pointer' />
      </div>
    </div>
  );
};

export default Sidebar;
