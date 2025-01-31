import React from "react";
import ProjectDetail from "./ProjectDetail";

function Details() {
  return (
    <>
      <div className="flex justify-center bg-gray-200 py-8">
        <div className="w-full max-w-6xl px-4">
          <div className="relative" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/jTDBljQ8e_8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <ProjectDetail />
    </>
  );
}

export default Details;
