"use client"

interface LayerCardProps {
  color: string
  stroke: string
  children?: React.ReactNode
}

export default function LayerCard({ color, stroke, children }: LayerCardProps) {
  return (
    <svg
      width="460"
      height="470"
      viewBox="0 0 460 470"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Isometric card */}
      <rect
        x="-0.00285524"
        y="0.495269"
        width="319"
        height="207"
        rx="15.5"
        transform="matrix(0.865865 0.500278 -0.871576 0.490261 182.681 21.2223)"
        fill={color}
        stroke={stroke}
        strokeWidth="1.5"
      />

      {children}
    </svg>
  )
}