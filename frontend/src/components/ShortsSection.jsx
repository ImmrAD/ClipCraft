import React from "react";

const videos = [
  {
    link: "https://player.vimeo.com/video/1052735398",
    caption: "Creative Short 1",
  },
  {
    link: "https://player.vimeo.com/video/1052735412",
    caption: "Creative Short 2",
  },
  {
    link: "https://player.vimeo.com/video/1052735517",
    caption: "Creative Short 3",
  },
  {
    link: "https://player.vimeo.com/video/1052735530",
    caption: "Creative Short 4",
  },
  {
    link: "https://player.vimeo.com/video/1052735608",
    caption: "Creative Short 5",
  },
  {
    link: "https://player.vimeo.com/video/1052735544",
    caption: "Creative Short 6",
  },
  {
    link: "https://player.vimeo.com/video/1052735575",
    caption: "Creative Short 7",
  },
  {
    link: "https://player.vimeo.com/video/1052735631",
    caption: "Creative Short 8",
  },
];

const getEmbedLink = (link) => {
  if (link.startsWith("http")) {
    return `${link}?autoplay=1&loop=1&muted=1&background=1`;
  } else {
    return `https://drive.google.com/file/d/${link}/preview?autoplay=1&mute=1&loop=1`;
  }
};

export default function ShortsSection() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Shorts Showcase</h2>
        <p className="text-gray-600 mt-2">
          Discover creative shorts by our talented creators
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex animate-marquee"
          style={{ width: `${300 * videos.concat(videos).length}px` }}
        >
          {videos.concat(videos).map((video, index) => (
            <div
              key={index}
              className="w-[300px] h-[80vh] cursor-pointer transition-transform m-0 p-0"
            >
              <div className="w-full h-full">
                <iframe
                  src={getEmbedLink(video.link)}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  title={`Video ${index + 1}`}
                ></iframe>
              </div>
              <p className="text-center mt-2 text-lg font-semibold text-gray-700">
                {video.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 30s linear infinite;
          }
          iframe {
            margin: 0;
            padding: 0;
            border: none;
          }
        `}
      </style>
    </div>
  );
}
