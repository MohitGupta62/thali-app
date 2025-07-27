import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import UploadIcon from "@mui/icons-material/Upload";
import AddIcon from "@mui/icons-material/Add";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const Dashboard = () => {
  return (
    <div className="flex" style={{ backgroundColor: "#F8FAFD" , maxWidth:"100vw"}}>
      <Sidebar />
      <main className="flex-1">
        <Navbar />
        <div className="" style={{ marginTop: "21px", padding: "0px 15px" , width:"fit-content" }}>
          <div
            style={{
              display: "flex",
              gap:"637px",
              alignItems: "center",
            }}
          >
            <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#000000" }}>
              Buyer Meeting List View
            </h2>
            <div style={{ display: "flex", gap: "20px" }}>
              <button
                style={{
                  display: "flex",
                  height: "32px",
                  width: "112px",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#7f56d9",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "12px",
                  fontWeight: 500,
                  border: "none",
                  padding: "11px 26px",
                  borderRadius: "8px",
                }}
              >
                <UploadIcon style={{ fontSize: "10px" }} />
                Export
              </button>

              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#000000",
                  color: "white",
                  fontWeight: 500,
                  fontSize: "12px",
                  padding: "10px 24px",
                  borderRadius: "8px",
                  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.08)",
                  cursor: "pointer",
                  height: "32px",
                  width: "211px",
                }}
              >
                <AddIcon style={{ fontSize: "10px" }} />
                Create New Meeting
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "12px",
              fontWeight: "500",
              color: "#6941C6",
              padding: "4px 0px",
              width: "fit-content",
              borderRadius: "6px",
            }}
          >
            <span style={{ marginRight: "6px", color: "#6941C6" }}>
              Buyer Meeting
            </span>
            <DoubleArrowIcon
              style={{
                fontSize: "16px",
                color: "#6941C6",
                margin: "0 6px",
              }}
            />
            <span style={{ color: "#667085" }}>Buyer Meeting List View</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              height: "60px",
              width: "fit-content",
              alignItems: "center",
              border: "1px solid #D9D9D9",
              padding: "10px",
              marginTop: "15px",
              paddingRight:"930px",
              backgroundColor: "#ffffff",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#EAD9FF",
                padding: "8px",
                borderRadius: "8px",
                fontWeight: 500,
                height: "30px",
                width: "69px",
                fontSize: "12px",
                gap: "3px",
              }}
            >
              All
              <span
                style={{
                  backgroundColor: "#7F56D9",
                  color: "#ffffff",
                  marginLeft: "8px",
                  padding: "2px 6px",
                  borderRadius: "5px",
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                100
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px",
                borderRadius: "8px",
                fontWeight: 500,
                height: "30px",
                width: "69px",
                fontSize: "12px",
                gap: "3px",
                color: "#676767",
              }}
            >
              Draft
              <span
                style={{
                  backgroundColor: "#676767",
                  color: "#ffffff",
                  marginLeft: "8px",
                  padding: "2px 6px",
                  borderRadius: "5px",
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                50
              </span>
            </div>

            {/* Archive */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px",
                borderRadius: "8px",
                fontWeight: 500,
                height: "30px",
                width: "69px",
                fontSize: "12px",
                gap: "3px",
                color: "#676767",
              }}
            >
              Archive
              <span
                style={{
                  backgroundColor: "#676767",
                  color: "#ffffff",
                  marginLeft: "8px",
                  padding: "2px 6px",
                  borderRadius: "5px",
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                75
              </span>
            </div>
          </div>

          <Table />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
