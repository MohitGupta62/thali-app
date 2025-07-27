import { useState, useRef, useEffect } from "react";

export default function PopupIconBox({
  icon: Icon,
  count = 0,
  title = "",
  showHeader = true,
  showFooter = true,
  children,
  width = "w-[330px]",
  customTrigger = null,
}) {
  const [open, setOpen] = useState(false);
  const popupRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative inline-block" ref={popupRef}>
      <div onClick={() => setOpen((prev) => !prev)} className="cursor-pointer">
        {customTrigger ? (
          customTrigger
        ) : (
          <div className="relative">
            <Icon className="text-purple-600" style={{ fontSize: "24px" }} />
            {count > 0 && (
              <span className="absolute -top-1 -right-2 bg-purple-600 text-white text-[10px] w-[11px] h-[14px] flex justify-center items-center rounded-full p-2.5">
                {count}
              </span>
            )}
          </div>
        )}
      </div>

      {open && (
        <div
          className={`absolute right-0 mt-3 ${width} bg-white border border-gray-200 shadow-xl rounded-xl p-4 z-50`}
        >
          {showHeader && (
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-md">{title}</h3>
              {count > 0 && (
                <span className="bg-green-100 text-green-700 text-xs px-2 py-[2px] rounded">
                  {count} new
                </span>
              )}
            </div>
          )}

          <div
            className={`space-y-2 ${
              showFooter ? "max-h-64 overflow-y-auto pr-1" : ""
            }`}
          >
            {children}
          </div>

          {showFooter && (
            <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 text-sm font-medium">
              View All
            </button>
          )}
        </div>
      )}
    </div>
  );
}
