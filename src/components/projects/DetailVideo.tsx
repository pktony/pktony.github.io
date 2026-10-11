"use client";

import { useState } from "react";
import { PlayIcon } from "@/components/icons/PlayIcon";
import type { DetailVideo as DetailVideoData } from "@/types/resume";

// 유튜브 영상. 처음에는 썸네일과 재생 버튼만 보여주고, 누르면 재생기를 불러온다(첫 화면과 모달 열기가 느려지지 않게).
// 쿠키를 쓰지 않는 youtube-nocookie 주소를 쓴다
export function DetailVideo({ video }: { video: DetailVideoData }) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure>
      <div className="relative aspect-video overflow-hidden rounded-xl border border-line bg-card">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`${video.title} 재생`}
            className="group absolute inset-0 grid place-items-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="relative grid h-14 w-14 place-items-center rounded-full bg-ink/80 text-canvas group-hover:bg-accent">
              <PlayIcon size={24} />
            </span>
          </button>
        )}
      </div>
      {video.caption && <figcaption className="mt-2 text-meta text-muted">{video.caption}</figcaption>}
    </figure>
  );
}
