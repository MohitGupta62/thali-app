import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import PopupIconBox from "./PopupIconBox";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
const Navbar = () => {
  return (
    <div
      className="w-fit h-[72px]  flex items-center justify-between gap-[430px]"
      style={{
        borderBottom: "1px solid #676767",
        boxShadow: "6px 4px 15px rgba(0, 0, 0, 0.08)",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        className="flex items-center"
        style={{ padding: "15.78px 20px", gap: "50px" }}
      >
        <MenuIcon
          className="text-gray-700 cursor-pointer"
          style={{ fontSize: "18px" }}
        />

        <input
          type="text"
          placeholder="Search anything here..."
          className="w-[388px] h-[39.45px]  rounded border border-gray-300 focus:outline-none  text-sm"
          style={{
            borderRadius: "6px",
            padding: "0 15px",
            backgroundColor: "#F8FAFD",
          }}
        />
      </div>

      <div
        className="flex items-center gap-[30px] "
        style={{ paddingRight: "30px" }}
      >
        <div className="relative">
          <PopupIconBox icon={MessageIcon} count={5} title="Chat">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex items-start gap-3 border border-gray-200 p-3 rounded-lg"
              >
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <div className="text-sm">
                  <p className="font-medium text-gray-800">New Message</p>
                  <p className="text-gray-500">
                    You have a new message from [user_name]
                  </p>
                  <p className="text-xs text-gray-400 mt-1">10 mins ago</p>
                </div>
              </div>
            ))}
          </PopupIconBox>
        </div>

        <div className="relative">
          <PopupIconBox
            icon={NotificationsIcon}
            count={5}
            title="Notifications"
          >
            <div className="flex items-start gap-3 border p-3 rounded-lg">
              <img
                src="https://i.pravatar.cc/40?img=5"
                alt="avatar"
                className="w-8 h-8 rounded-full"
              />
              <div className="text-sm">
                <p className="font-medium text-gray-800">Task Completed</p>
                <p className="text-gray-500">
                  [task_name] marked as completed..
                </p>
                <p className="text-xs text-gray-400 mt-1">10 mins ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3 border p-3 rounded-lg">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 text-lg">
                📅
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-800">Meeting Created</p>
                <p className="text-gray-500">
                  New meeting [meeting_title] is created for [date_time]
                </p>
                <p className="text-xs text-gray-400 mt-1">5 mins ago</p>
              </div>
            </div>
          </PopupIconBox>
        </div>

        <PopupIconBox
          customTrigger={
            <div className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded-md">
              <img
                src="https://i.pravatar.cc/40?img=12"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <h4
                  className="font-medium"
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#676767",
                  }}
                >
                  Mohd Saleem
                </h4>
                <p
                  className="text-xs text-gray-500"
                  style={{ fontSize: "12px" }}
                >
                  Admin
                </p>
              </div>
            </div>
          }
          showHeader={false}
          showFooter={false}
          width="w-[180px]"
        >
          <ul className="text-sm text-gray-700 border border-gray-200 rounded-md divide-y divide-gray-100">
            <li className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer">
              <PersonIcon fontSize="small" />
              Profile
            </li>
            <li className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer">
              <SettingsIcon fontSize="small" />
              Settings
            </li>
            <li className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer">
              <LogoutIcon fontSize="small" />
              Log Out
            </li>
          </ul>
        </PopupIconBox>
      </div>
    </div>
  );
};

export default Navbar;
