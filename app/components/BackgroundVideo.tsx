// components/BackgroundVideo.tsx
export default function BackgroundVideo() {
  return (
    <video
      className="bg-video"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/videos/background.mp4" type="video/mp4" />
      Seu navegador não suporta vídeo em HTML5.
    </video>
  );
}
