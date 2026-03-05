"use client"

import LayerCard from "./LayerCard"
import WebService from "../services/WebService"
import MobileService from "../services/MobileService"
import CloudService from "../services/CloudService"
import BackendService from "../services/BackendService"
import AIService from "../services/AIService"

interface StackSceneProps {
  activeId: string
}

const DEFAULT_LAYERS = [
  {
    id: "web",
    label: "Web",
    color: "#dbeafe",
    stroke: "#3b82f6",
    content: <WebService />
  },
  {
    id: "mobile",
    label: "Mobile",
    color: "#bfdbfe",
    stroke: "#3b82f6",
    content: <MobileService />
  },
  {
    id: "cloud",
    label: "Cloud",
    color: "#93c5fd",
    stroke: "#3b82f6",
    content: <CloudService />
  },
  {
    id: "api",
    label: "Backend",
    color: "#60a5fa",
    stroke: "#2563eb",
    content: <BackendService />
  },
  {
    id: "ai",
    label: "AI",
    color: "#3b82f6",
    stroke: "#1d4ed8",
    content: <AIService />
  }
]

export default function StackScene({ activeId }: StackSceneProps) {
  const activeIndex = DEFAULT_LAYERS.findIndex((l) => l.id === activeId);

  return (
    <div className="relative w-[320px] h-[320px] md:w-[460px] md:h-[470px] mx-auto">
      {DEFAULT_LAYERS.map((layer, index) => {
        const isActive = layer.id === activeId;

        // Base spacing between cards
        const baseOffset = index * 40;

        // Expansion logic: cards move away from the active one
        let yOffset = baseOffset;
        if (index < activeIndex) {
          yOffset -= 80; // Move up
        } else if (index > activeIndex) {
          yOffset += 80; // Move down
        }

        return (
          <div
            key={layer.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${isActive ? "opacity-100 scale-100 grayscale-0" : "opacity-40 scale-95 grayscale"
              }`}
            style={{
              transform: `translateY(${yOffset}px)`,
              zIndex: DEFAULT_LAYERS.length - index,
            }}
          >
            <LayerCard
              color={isActive ? layer.color : "#ffffff"}
              stroke={isActive ? layer.stroke : "#d1d5db"}
            >
              {layer.content}
            </LayerCard>
          </div>
        );
      })}
    </div>
  )
}