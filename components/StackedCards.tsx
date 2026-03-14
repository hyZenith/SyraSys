import React from "react";
import WebService from "./services/WebService";
import MobileService from "./services/MobileService";
import CloudService from "./services/CloudService";
import BackendService from "./services/BackendService";
import AIService from "./services/AIService";

interface StackedCardsProps {
  activeId: string;
}

const StackedCards = ({ activeId }: StackedCardsProps) => {
  const renderServiceContent = () => {
    switch (activeId) {
      case "web":
        return <WebService />;
      case "mobile":
        return <MobileService />;
      case "cloud":
        return <CloudService />;
      case "api":
        return <BackendService />;
      case "ai":
        return <AIService />;
      default:
        return <BackendService />;
    }
  };

  return (
    <div className="relative w-[320px] h-[320px] md:w-[460px] md:h-[470px]">
      <svg
        width="460"
        height="470"
        viewBox="0 0 460 470"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Ghost cards (static background) */}
        <g opacity="0.4">
          <rect
            x="-0.00285524"
            y="0.495269"
            width="319"
            height="207"
            rx="15.5"
            transform="matrix(0.865865 0.500278 -0.871576 0.490261 182.681 21.2223)"
            fill="#E4E4E7"
          />
          <rect
            x="-0.00285524"
            y="0.495269"
            width="319"
            height="207"
            rx="15.5"
            transform="matrix(0.865865 0.500278 -0.871576 0.490261 182.681 21.2223)"
            stroke="#A1A1AA"
          />
          <rect
            x="-0.00285524"
            y="0.495269"
            width="319"
            height="207"
            rx="15.5"
            transform="matrix(0.865865 0.500278 -0.871576 0.490261 182.393 17.2223)"
            fill="#FAFAFA"
          />
          <rect
            x="-0.00285524"
            y="0.495269"
            width="319"
            height="207"
            rx="15.5"
            transform="matrix(0.865865 0.500278 -0.871576 0.490261 182.393 17.2223)"
            stroke="#A1A1AA"
          />
        </g>
      </svg>

      {/* Dynamic Service Illustration Overlay */}
      <div className="absolute inset-0 top-[170px]">
        {renderServiceContent()}
      </div>
    </div>
  );
};

export default StackedCards;
