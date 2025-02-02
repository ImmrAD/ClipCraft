import React from "react";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

const YoutubeVideos = () => {
  const videos = [
    {
      title: "10 Podcasts that can Change Your Life",
      videoUrl: "https://www.youtube.com/embed/pbmQoSELT0c?si=D1VGtPy3q0EMgA1I",
      link: "https://youtu.be/pbmQoSELT0c?si=Lf1uO_p1A3WcApkS",
    },
    {
      title: "EXPOSED - Balenciaga Controversy | Truth Behind the Satanic Conspiracy",
      videoUrl: "https://www.youtube.com/embed/s8MyWO-IjxM?si=HHzExk5pbzMeZqqK",
      link: "https://youtu.be/s8MyWO-IjxM?si=rveX556NMQdEOB2O",
    },
    {
      title: "Funds to Beat Market Volatility | Balanced Advantage Funds",
      videoUrl: "https://www.youtube.com/embed/uvgPRDY0EtU?si=Zq8-MttUpCh0GFu-",
      link: "https://youtu.be/uvgPRDY0EtU?si=VxYyKsCB-Tuy0kFc",
    },
    {
      title: "Shubman Gill - A Prince, but can he become the Next KING?",
      videoUrl: "https://www.youtube.com/embed/0RC1e3Z__Nw?si=MBZw4ld2CEp5QHPn",
      link: "https://youtu.be/0RC1e3Z__Nw?si=5Q6Kc7mS_jwkFhlb",
    },
    {
      title: "आखिर आसमान में कहाँ गायब हो गया वो ? Mystery of DB Cooper",
      videoUrl: "https://www.youtube.com/embed/OzhHU2CwhRM?si=HTvYUqg1Hyyl6hVg",
      link: "https://youtu.be/OzhHU2CwhRM?si=jrvusNxUr6Nqu1o0",
    },
    {
      title: "कहीं आपके शरीर में भी तो DEMON नहीं छुपा? Demonic Possession Story",
      videoUrl: "https://www.youtube.com/embed/xM4QPUBKvLE?si=CuiOGHMgkgXdOLdA",
      link: "https://youtu.be/xM4QPUBKvLE?si=8UYmeqNNLLUHKthW",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Trending YouTube Videos 🎥
        </h2>
        <p className="text-gray-600 mt-2">
          Discover captivating content and insightful stories from around the globe.
        </p>
      </div>

      {/* Video Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {videos.map((video, index) => (
          <Card
            shadow="shadow-xl"
            borderColor="border-indigo-300"
            hoverEffect={true}
            key={index}
            className="max-w-md mx-auto"
          >
            <iframe
              src={video.videoUrl}
              className="w-full h-48 rounded"
              title={video.title}
              allowFullScreen
            />
            <h3 className="text-lg font-bold mt-4">{video.title}</h3>
                <Button
                onClick={() => window.open(video.link, "_blank")}
                className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white"
                >
              Watch Full Video
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default YoutubeVideos;
