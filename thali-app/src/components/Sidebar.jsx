import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaidIcon from "@mui/icons-material/Paid";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SettingsIcon from "@mui/icons-material/Settings";
import StorageIcon from "@mui/icons-material/Storage";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import DataExplorationIcon from "@mui/icons-material/DataExploration";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import WebhookOutlinedIcon from "@mui/icons-material/WebhookOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
const Sidebar = () => {
  return (
    <div
      style={{
        minWidth: "315px",
        width: "315px",
        paddingTop: "10px",
        paddingLeft: "10px",
        paddingRight: "10px",
        display: "flex",
        cursor: "pointer",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        gap: "5px",
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: "120px",
          height: "45px",
          border: "2px solid #2B2B2B",
          borderRadius: "10px",
          overflow: "hidden",
          marginLeft: "5px",
        }}
      >
        <div
          style={{
            backgroundColor: "#2B2B2B",
            color: "white",
            width: "45%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{ fontSize: "16px", letterSpacing: "2px", fontWeight: 300 }}
          >
            A E
          </span>
        </div>

        <div
          style={{
            backgroundColor: "white",
            width: "55%",
            height: "100%",
            display: "flex",
            letterSpacing: "2px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingLeft: "4px",
            fontSize: "10px",
            fontWeight: 600,
            color: "#2B2B2B",
          }}
        >
          <div>ADAM</div>
          <div>EXPORTS</div>
        </div>
      </div>
      <div
        style={{
          height: "45px",
          marginTop: "14px",
          padding: "8px 20px 8px 10px",
          gap: "20px",
          backgroundColor: "#ffffff",
          display: "flex",
        }}
      >
        <HomeIcon style={{ fontSize: "20px", color: "#676767" }} />
        <h3 style={{ fontSize: "14px", color: "#676767", fontWeight: 500 }}>
          Dashboard
        </h3>
      </div>
      <div
        style={{
          height: "45px",
          padding: "8px 20px 8px 10px",
          gap: "20px",
          backgroundColor: "#EAD9FF",
          borderRadius: "15px",
          display: "flex",
        }}
      >
        <CalendarMonthIcon style={{ fontSize: "20px", color: "#676767" }} />
        <h3 style={{ fontSize: "14px", color: "#676767", fontWeight: 500 }}>
          Buyer Meeting
        </h3>
      </div>
      <div
        style={{
          height: "45px",
          padding: "8px 20px 8px 10px",
          gap: "20px",
          backgroundColor: "#ffffff",
          display: "flex",
        }}
      >
        <PaidIcon style={{ fontSize: "20px", color: "#676767" }} />
        <h3 style={{ fontSize: "14px", color: "#676767", fontWeight: 500 }}>
          Quick Costing
        </h3>
      </div>
      <div
        style={{
          height: "45px",
          padding: "8px 20px 8px 10px",
          gap: "20px",
          backgroundColor: "#ffffff",
          display: "flex",
        }}
      >
        <PaidIcon style={{ fontSize: "20px", color: "#676767" }} />
        <h3 style={{ fontSize: "14px", color: "#676767", fontWeight: 500 }}>
          Pre Order Costing
        </h3>
      </div>
      <div
        style={{
          height: "45px",
          padding: "8px 20px 8px 10px",
          gap: "20px",
          backgroundColor: "#ffffff",
          display: "flex",
        }}
      >
        <GroupWorkIcon style={{ fontSize: "20px", color: "#676767" }} />
        <h3 style={{ fontSize: "14px", color: "#676767", fontWeight: 500 }}>
          Style Library
        </h3>
      </div>
      <div
        style={{
          height: "45px",
          padding: "8px 20px 8px 10px",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <ReceiptLongIcon style={{ fontSize: "20px", color: "#676767" }} />
          <h3 style={{ fontSize: "14px", color: "#676767", fontWeight: 500 }}>
            Requisitions
          </h3>
        </div>
        <NavigateNextOutlinedIcon style={{ color: "#676767" }} />
      </div>
      <div
        style={{
          height: "45px",
          padding: "8px 20px 8px 10px",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <ShoppingCartOutlinedIcon
            style={{ fontSize: "20px", color: "#676767" }}
          />
          <h3 style={{ fontSize: "14px", color: "#676767", fontWeight: 500 }}>
            Buyer Purchase
          </h3>
        </div>
        <NavigateNextOutlinedIcon style={{ color: "#676767" }} />
      </div>
      <div
        style={{
          height: "45px",
          padding: "8px 20px 8px 10px",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Inventory2OutlinedIcon
            style={{ fontSize: "20px", color: "#676767" }}
          />
          <h3 style={{ fontSize: "14px", color: "#676767", fontWeight: 500 }}>
            Inventory
          </h3>
        </div>
        <NavigateNextOutlinedIcon style={{ color: "#676767" }} />
      </div>
      <div
        style={{
          height: "45px",
          padding: "8px 20px 8px 10px",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <WebhookOutlinedIcon style={{ fontSize: "20px", color: "#676767" }} />
          <h3 style={{ fontSize: "14px", color: "#676767", fontWeight: 500 }}>
            Sample Development
          </h3>
        </div>
        <NavigateNextOutlinedIcon style={{ color: "#676767" }} />
      </div>
      <div
        style={{
          height: "45px",
          padding: "8px 20px 8px 10px",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <WebhookOutlinedIcon style={{ fontSize: "20px", color: "#676767" }} />
          <h3 style={{ fontSize: "14px", color: "#676767", fontWeight: 500 }}>
            Production
          </h3>
        </div>
        <NavigateNextOutlinedIcon style={{ color: "#676767" }} />
      </div>
      <div
        style={{
          height: "45px",
          padding: "8px 20px 8px 10px",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <PersonOutlineIcon style={{ fontSize: "20px", color: "#676767" }} />
          <h3 style={{ fontSize: "14px", color: "#676767", fontWeight: 500 }}>
            Master Admin
          </h3>
        </div>
        <NavigateNextOutlinedIcon style={{ color: "#676767" }} />
      </div>
      <div
        style={{
          height: "45px",
          padding: "8px 20px 8px 10px",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <PersonIcon style={{ fontSize: "20px", color: "#676767" }} />
          <h3 style={{ fontSize: "14px", color: "#676767", fontWeight: 500 }}>
            User
          </h3>
        </div>
        <NavigateNextOutlinedIcon style={{ color: "#676767" }} />
      </div>
      <div
        style={{
          height: "45px",
          padding: "8px 20px 8px 10px",
          gap: "20px",
          backgroundColor: "#ffffff",
          display: "flex",
        }}
      >
        <PersonIcon style={{ fontSize: "20px", color: "#676767" }} />
        <h3 style={{ fontSize: "14px", color: "#676767", fontWeight: 500 }}>
          Suppliers
        </h3>
      </div>
      <div
        style={{
          height: "45px",
          padding: "8px 20px 8px 10px",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <StorefrontIcon style={{ fontSize: "20px", color: "#676767" }} />
          <h3 style={{ fontSize: "14px", color: "#676767", fontWeight: 500 }}>
            Showroom
          </h3>
        </div>
        <NavigateNextOutlinedIcon style={{ color: "#676767" }} />
      </div>
      <div
        style={{
          height: "45px",
          padding: "8px 20px 8px 10px",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <LocalShippingIcon style={{ fontSize: "20px", color: "#676767" }} />
          <h3 style={{ fontSize: "14px", color: "#676767", fontWeight: 500 }}>
            Shippmet
          </h3>
        </div>
        <NavigateNextOutlinedIcon style={{ color: "#676767" }} />
      </div>
      <div
        style={{
          height: "45px",
          padding: "8px 20px 8px 10px",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <DataExplorationIcon style={{ fontSize: "20px", color: "#676767" }} />
          <h3 style={{ fontSize: "14px", color: "#676767", fontWeight: 500 }}>
            KPI's
          </h3>
        </div>
        <NavigateNextOutlinedIcon style={{ color: "#676767" }} />
      </div>
      <div
        style={{
          height: "45px",
          padding: "8px 20px 8px 10px",
          gap: "20px",
          backgroundColor: "#ffffff",
          display: "flex",
        }}
      >
        <BookmarksIcon style={{ fontSize: "20px", color: "#676767" }} />
        <h3 style={{ fontSize: "14px", color: "#676767", fontWeight: 500 }}>
          E-invoice / E-Way Bill
        </h3>
      </div>
      <div
        style={{
          height: "45px",
          padding: "8px 20px 8px 10px",
          gap: "20px",
          backgroundColor: "#ffffff",
          display: "flex",
        }}
      >
        <InsertChartIcon style={{ fontSize: "20px", color: "#676767" }} />
        <h3 style={{ fontSize: "14px", color: "#676767", fontWeight: 500 }}>
          Reports
        </h3>
      </div>
      <div
        style={{
          height: "45px",
          padding: "8px 20px 8px 10px",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <StorageIcon style={{ fontSize: "20px", color: "#676767" }} />
          <h3 style={{ fontSize: "14px", color: "#676767", fontWeight: 500 }}>
            Master Data
          </h3>
        </div>
        <NavigateNextOutlinedIcon style={{ color: "#676767" }} />
      </div>
      <div
        style={{
          height: "45px",
          padding: "8px 20px 8px 10px",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <SettingsIcon style={{ fontSize: "20px", color: "#676767" }} />
          <h3 style={{ fontSize: "14px", color: "#676767", fontWeight: 500 }}>
            Setting
          </h3>
        </div>
        <NavigateNextOutlinedIcon style={{ color: "#676767" }} />
      </div>
    </div>
    // <aside className="w-64 h-screen bg-gray-100 p-4 border-r">
    //   <h2 className="text-xl font-bold mb-4">Thali App</h2>
    //   <ul className="space-y-3">
    //     <li className="text-gray-700 hover:text-purple-600 cursor-pointer">
    //       Dashboard
    //     </li>
    //     <li className="text-gray-700 hover:text-purple-600 cursor-pointer">
    //       Meetings
    //     </li>
    //     <li className="text-gray-700 hover:text-purple-600 cursor-pointer">
    //       Followups
    //     </li>
    //     <li className="text-gray-700 hover:text-purple-600 cursor-pointer">
    //       Notifications
    //     </li>
    //   </ul>
    // </aside>
  );
};

export default Sidebar;
