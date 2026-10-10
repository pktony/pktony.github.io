import type { ProjectDetail } from "@/types/resume";

export const textToAnimationDetail: ProjectDetail = {
  sections: [
    {
      title: "시맨틱 캐시 요청 흐름",
      bullets: [
        "정규화하고 임베딩한 입력으로 **Postgres에서 유사도 검색**을 하고, hit이면 캐시된 애니메이션을 바로 반환(구조도 기준 약 ==3초==)",
        "**miss**이면 Redis 생성 큐에 넣어 GPU 컴퓨터가 처리하고, 결과를 다시 저장(구조도 기준 약 ==15초==)",
        "캐시 임베딩 생성과 정규화는 별도 **Cache manager**가 담당",
        "cache builder와 threshold 조정 도구를 직접 구현",
      ],
      images: [
        {
          src: "/project-details/moii/text-to-animation-architecture.webp",
          alt: "Text to Animation 구조도. 사용자 요청이 TTA 서버에서 정규화·임베딩된 뒤 캐시 hit이면 결과 반환, miss이면 Redis 생성 큐와 GPU를 거쳐 결과 저장",
          width: 1200,
          height: 863,
          caption: "시맨틱 캐시 hit/miss 분기 구조",
        },
      ],
    },
  ],
};
