import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Done,
  AccessTime,
  Replay,
  ReportProblem,
  HourglassEmpty,
  FiberManualRecord,
  Drafts,
  Archive,
  MoreVert,
} from "@mui/icons-material";

const Table = () => {
  const meetings = [
    {
      date: "01 May, 2025 at 2pm",
      status: "Completed",
      type: "Online",
      buyer: "Mango Private Limited",
      brand: "Mango",
      dept: "Design",
      title: "Costing Discussion with Zarq",
      icon: <Done className="text-green-600" />,
      bg: "bg-green-100 text-green-800",
      participants: (
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div className="">
            <h4
              className="font-medium"
              style={{ fontSize: "13px", fontWeight: 700, color: "#676767" }}
            >
              Mohd Saleem
            </h4>
            <p className="text-xs text-gray-500" style={{ fontSize: "12px" }}>
              Admin
            </p>
          </div>
        </div>
      ),
    },
    {
      date: "02 May, 2025 at 3pm",
      status: "Upcoming",
      type: "Offline",
      buyer: "Cherry Innovations",
      brand: "Cherry",
      dept: "Development",
      title: "UI/UX Review",
      icon: <AccessTime className="text-orange-500" />,
      bg: "bg-orange-100 text-orange-800",
      participants: (
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div className="">
            <h4
              className="font-medium"
              style={{ fontSize: "13px", fontWeight: 700, color: "#676767" }}
            >
              Mohd Saleem
            </h4>
            <p className="text-xs text-gray-500" style={{ fontSize: "12px" }}>
              Admin
            </p>
          </div>
        </div>
      ),
    },
    {
      date: "03 May, 2025 at 10am",
      status: "Follow-up",
      type: "Offline",
      buyer: "Pineapple Inc.",
      brand: "Pineapple",
      dept: "Marketing",
      title: "Campaign Strategy",
      icon: <Replay className="text-blue-600" />,
      bg: "bg-blue-100 text-blue-800",
      participants: (
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div className="">
            <h4
              className="font-medium"
              style={{ fontSize: "13px", fontWeight: 700, color: "#676767" }}
            >
              Mohd Saleem
            </h4>
            <p className="text-xs text-gray-500" style={{ fontSize: "12px" }}>
              Admin
            </p>
          </div>
        </div>
      ),
    },
    {
      date: "04 May, 2025 at 1pm",
      status: "Re-scheduled",
      type: "Offline",
      buyer: "Peach Corp.",
      brand: "Peach",
      dept: "Finance",
      title: "Budget Review",
      icon: <Replay className="text-purple-600" />,
      bg: "bg-purple-100 text-purple-800",
      participants: (
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div className="">
            <h4
              className="font-medium"
              style={{ fontSize: "13px", fontWeight: 700, color: "#676767" }}
            >
              Mohd Saleem
            </h4>
            <p className="text-xs text-gray-500" style={{ fontSize: "12px" }}>
              Admin
            </p>
          </div>
        </div>
      ),
    },
    {
      date: "05 May, 2025 at 4pm",
      status: "Overdue",
      type: "Online",
      buyer: "Banana Solutions",
      brand: "Banana",
      dept: "Product",
      title: "Feature Prioritization",
      icon: <ReportProblem className="text-red-600" />,
      bg: "bg-red-100 text-red-800",
      participants: (
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div className="">
            <h4
              className="font-medium"
              style={{ fontSize: "13px", fontWeight: 700, color: "#676767" }}
            >
              Mohd Saleem
            </h4>
            <p className="text-xs text-gray-500" style={{ fontSize: "12px" }}>
              Admin
            </p>
          </div>
        </div>
      ),
    },
    {
      date: "06 May, 2025 at 11am",
      status: "In Progress",
      type: "Online",
      buyer: "Coconut Group",
      brand: "Coconut",
      dept: "Support",
      title: "Customer Feedback",
      icon: <HourglassEmpty className="text-yellow-600" />,
      bg: "bg-yellow-100 text-yellow-800",
      participants: (
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div className="">
            <h4
              className="font-medium"
              style={{ fontSize: "13px", fontWeight: 700, color: "#676767" }}
            >
              Mohd Saleem
            </h4>
            <p className="text-xs text-gray-500" style={{ fontSize: "12px" }}>
              Admin
            </p>
          </div>
        </div>
      ),
    },
    {
      date: "07 May, 2025 at 2pm",
      status: "Ongoing",
      type: "Online",
      buyer: "Lemon Technologies",
      brand: "Lemon",
      dept: "Sales",
      title: "Sales Strategy",
      icon: <FiberManualRecord className="text-black" />,
      bg: "bg-gray-200 text-black",
      participants: (
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div className="">
            <h4
              className="font-medium"
              style={{ fontSize: "13px", fontWeight: 700, color: "#676767" }}
            >
              Mohd Saleem
            </h4>
            <p className="text-xs text-gray-500" style={{ fontSize: "12px" }}>
              Admin
            </p>
          </div>
        </div>
      ),
    },
    {
      date: "08 May, 2025 at 9am",
      status: "Completed",
      type: "Offline",
      buyer: "Grapefruit LLC",
      brand: "Grapefruit",
      dept: "Research",
      title: "Market Analysis",
      icon: <Done className="text-green-600" />,
      bg: "bg-green-100 text-green-800",
      participants: (
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div className="">
            <h4
              className="font-medium"
              style={{ fontSize: "13px", fontWeight: 700, color: "#676767" }}
            >
              Mohd Saleem
            </h4>
            <p className="text-xs text-gray-500" style={{ fontSize: "12px" }}>
              Admin
            </p>
          </div>
        </div>
      ),
    },
    {
      date: "09 May, 2025 at 3pm",
      status: "Draft",
      type: "Offline",
      buyer: "Kiwi Systems",
      brand: "Kiwi",
      dept: "HR",
      title: "Employee Engagement",
      icon: <Drafts className="text-gray-600" />,
      bg: "bg-gray-100 text-gray-700",
      participants: (
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div className="">
            <h4
              className="font-medium"
              style={{ fontSize: "13px", fontWeight: 700, color: "#676767" }}
            >
              Mohd Saleem
            </h4>
            <p className="text-xs text-gray-500" style={{ fontSize: "12px" }}>
              Admin
            </p>
          </div>
        </div>
      ),
    },
    {
      date: "10 May, 2025 at 5pm",
      status: "Archived",
      type: "Offline",
      buyer: "Orange Enterprises",
      brand: "Orange",
      dept: "Legal",
      title: "Contract Review",
      icon: <Archive className="text-pink-600" />,
      bg: "bg-pink-100 text-pink-800",
      participants: (
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div className="">
            <h4
              className="font-medium"
              style={{ fontSize: "13px", fontWeight: 700, color: "#676767" }}
            >
              Mohd Saleem
            </h4>
            <p className="text-xs text-gray-500" style={{ fontSize: "12px" }}>
              Admin
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid #ECECEC",
        borderLeft: "1px solid #ECECEC",
        borderRight: "1px solid #ECECEC",
        marginTop: "5px",
        maxWidth: "1173px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "22px 20px",
          backgroundColor: "#ffffff",
          borderRadius: "5px",
          width: "fit-content",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            alignItems: "center",
            flex: 1,
          }}
        >
          {/* Search Input */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#fff",
              padding: "10px 12px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              width: "210px",
              height: "40px",
              gap: "4px",
            }}
          >
            <SearchIcon
              style={{ marginRight: "8px", color: "#7A7A7A", fontSize: "16px" }}
            />
            <input
              type="text"
              placeholder="Search anything here..."
              style={{
                border: "none",
                outline: "none",
                fontSize: "12px",
                width: "100%",
                fontWeight: 400,
                background: "transparent",
              }}
            />
          </div>

          {[
            "Buyer Name",
            "Brand",
            "Dept",
            "Meeting Type",
            "Participants",
            "Meeting Date",
            "Status",
          ].map((label, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                background: "#fff",
                border: "1px solid #ddd",
                padding: "10px 11px",
                borderRadius: "6px",
                fontSize: "14px",
                color: "#959595",
                cursor: "pointer",
                justifyContent: "space-between",
                height: "40px",
                gap: "12px",
              }}
            >
              {label}
              <ArrowDropDownIcon style={{ fontSize: "20px", color: "#777" }} />
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto max-h-[500px] overflow-auto relative">
        <table className=" min-w-[1000px] w-full table-auto border-collapse text-sm overflow-x-auto overflow-y-auto">
          <thead>
            <tr
              className="bg-gray-100 text-left h-[44px] sticky top-0 z-11"
              style={{ backgroundColor: "#D9D9D9" }}
            >
              <th className="p-3 whitespace-nowrap">Date & Time</th>
              <th className="p-3">Status</th>
              <th className="p-3">Type</th>
              <th className="p-3 whitespace-nowrap">Buyer Name</th>
              <th className="p-3">Brand</th>
              <th className="p-3">Dept.</th>
              <th className="p-3">Title</th>
              <th className="p-3 whitespace-nowrap">Meeting Date</th>
              <th className="p-3">Participants</th>
              <th
                className="p-3 whitespace-nowrap"
                style={{
                  right: "0px",
                  zIndex: "10",
                  position: "sticky",
                  backgroundColor: "#D9D9D9",
                }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {meetings.map((meeting, i) => (
              <tr
                key={i}
                className=""
                style={{ maxHeight: "44px", borderBottom: "1px solid #ECECEC" }}
              >
                <td className="p-3 whitespace-nowrap">{meeting.date}</td>
                <td className="p-3 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${meeting.bg}`}
                  >
                    {meeting.icon}
                    {meeting.status}
                  </span>
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      meeting.type === "Online"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {meeting.type}
                  </span>
                </td>
                <td className="p-3 whitespace-nowrap">{meeting.buyer}</td>
                <td className="p-3">{meeting.brand}</td>
                <td className="p-3">{meeting.dept}</td>
                <td className="p-3 underline cursor-pointer whitespace-nowrap">
                  {meeting.title}
                </td>
                <td className="p-3 whitespace-nowrap ">{meeting.date}</td>
                <td
                  className="p-3 whitespace-nowrap"
                  style={{ paddingRight: "33px" }}
                >
                  {meeting.participants}
                </td>
                <td
                  className="p-3 whitespace-nowrap"
                  style={{
                    right: "0px",
                    zIndex: "10",
                    position: "sticky",
                    backgroundColor: "#ffffff",
                    height: "100%",
                  }}
                >
                  <MoreVert className="cursor-pointer text-gray-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "100px 20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <label>Items Per Page</label>
          <select
            style={{
              padding: "4px 8px",
              border: "1px solid gray",
              borderRadius: "5px",
            }}
          >
            <option>10</option>
            <option>25</option>
            <option selected>50</option>
            <option>100</option>
          </select>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
          <span>1–50 of 100</span>
          <button
            style={{
              padding: "4px",
              border: "1px solid lightgray",
              borderRadius: "5px",
            }}
          >
            <ChevronLeftIcon />
          </button>
          {[1, 2, 3, 4].map((page, i) => (
            <button
              key={i}
              style={{
                padding: "6px 10px",
                borderRadius: "5px",
                background: page === 1 ? "#7e22ce" : "#f3f4f6",
                color: page === 1 ? "white" : "black",
                border: "1px solid lightgray",
              }}
            >
              {page}
            </button>
          ))}
          <span>...</span>
          {[10, 11, 12].map((page, i) => (
            <button
              key={i + 4}
              style={{
                padding: "6px 10px",
                borderRadius: "5px",
                background: "#f3f4f6",
                border: "1px solid lightgray",
              }}
            >
              {page}
            </button>
          ))}
          <button
            style={{
              padding: "4px",
              border: "1px solid lightgray",
              borderRadius: "5px",
            }}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
