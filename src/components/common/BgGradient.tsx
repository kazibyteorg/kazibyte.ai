import React from 'react'

const BgGradient = () => {
  return (
    <div>
      <div
        className="absolute inset-0 blur-[118px]  mx-auto"
        style={{
          background:
            "linear-gradient(1deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
    </div>
  );
}

export default BgGradient