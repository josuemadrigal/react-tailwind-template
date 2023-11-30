import React, { useState } from "react";
import YouTube from "react-youtube";

interface Video {
  id: string;
  title: string;
}

const IniciativasVideos: React.FC = () => {
  const initialVideos: Video[] = [
    {
      id: "990mscRBfGs",
      title: "3er. Informe de gestión legislativa.",
    },
    {
      id: "ERB0VnVYB3c",
      title:
        "Solicitud de remozamiento del muelle público de nuestra provincia de La Romana.",
    },
    {
      id: "Ke8rgIejtkE",
      title:
        "Proyecto de Ley que crea un Edificio Gubernamental para la provincia de La Romana.",
    },
    {
      id: "tNmR3LAFyPY",
      title:
        "Llamado al Pdte. Luis Abinader para que investigue lo que está ocurriendo en Villa Caleta.",
    },
    {
      id: "_dVmCfjPvW4",
      title:
        "Llamado al director de EDEESTE para que se regularice la energia electrica en La Romana.",
    },
    {
      id: "vW91j4dNT5s",
      title: "Comisión de Diputados por un día.",
    },
  ];

  const [videos] = useState(initialVideos);
  const [selectedVideo, setSelectedVideo] = useState(
    initialVideos[0]?.id || null
  );

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const opts = {
    height: "420rem",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  justify-center px-9 lg:px-40">
        <div>
          <YouTube videoId={selectedVideo || ""} opts={opts} />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold uppercase  mb-4 text-green-950">
            CONOCE NUESTRAS INICIATIVAS
          </h2>
          <ul className="list-disc pl-4">
            {videos.map((video) => (
              <li key={video.id} className="mb-8 list-none">
                <span
                  className="cursor-pointer text-green-800 font-bold  hover:bg-greenEduard hover:text-amber-400 hover:p-2 "
                  onClick={() => handleVideoClick(video.id)}
                  role="button"
                >
                  {video.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href="https://www.youtube.com/@eduardespiritusanto1580/videos"
          target="_blank"
          className="flex justify-center w-72 mt-4 rounded-3xl px-5 py-2.5 text-sm font-bold bg-red-700 text-gray-100 border-2 border-red-100/50 shadow-md hover:bg-red-900 hover:text-gray-100 "
        >
          Ver más en YouTube
        </a>
      </div>
    </div>
  );
};

export default IniciativasVideos;
