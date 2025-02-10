import { cn } from "@/lib/utils";

const VideoPlayer = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  return (
    <div className="h-full w-full">
      <video
        className={cn("w-full object-cover h-full", className)}
        src={src}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};
export default VideoPlayer;
