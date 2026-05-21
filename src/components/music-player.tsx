export function MusicPlayer() {
  return (
    <div className="w-full">
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Flofi-hip-hop-music&color=%2322d3ee&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
        className="rounded-lg"
      />
    </div>
  );
}
