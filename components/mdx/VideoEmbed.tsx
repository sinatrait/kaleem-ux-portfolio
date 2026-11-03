type VideoEmbedProps = {
  url: string;
  title: string;
};

function getEmbedUrl(url: string) {
  const parsedUrl = new URL(url);
  const host = parsedUrl.hostname.replace(/^www\./, "");

  if (host === "youtu.be") {
    const videoId = parsedUrl.pathname.slice(1);
    if (/^[\w-]+$/.test(videoId)) {
      return `https://www.youtube-nocookie.com/embed/${videoId}`;
    }
  }

  if (
    host === "youtube.com" ||
    host === "m.youtube.com" ||
    host === "youtube-nocookie.com"
  ) {
    const videoId =
      parsedUrl.pathname === "/watch"
        ? parsedUrl.searchParams.get("v")
        : parsedUrl.pathname.split("/").filter(Boolean).at(-1);
    if (videoId && /^[\w-]+$/.test(videoId)) {
      return `https://www.youtube-nocookie.com/embed/${videoId}`;
    }
  }

  if (host === "vimeo.com" || host === "player.vimeo.com") {
    const videoId = parsedUrl.pathname
      .split("/")
      .filter(Boolean)
      .find((part) => /^\d+$/.test(part));
    if (videoId) {
      return `https://player.vimeo.com/video/${videoId}`;
    }
  }

  throw new Error(
    `Unsupported video URL "${url}". Use a valid YouTube or Vimeo URL.`,
  );
}

export default function VideoEmbed({ url, title }: VideoEmbedProps) {
  return (
    <figure className="my-section">
      <div className="relative aspect-video overflow-hidden rounded-card bg-surface-raised">
        <iframe
          src={getEmbedUrl(url)}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      </div>
      <figcaption className="sr-only">{title}</figcaption>
    </figure>
  );
}
