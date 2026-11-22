import type { ProjectDetail } from "@/types/resume";

export const matzipmapDetail: ProjectDetail = {
  id: "matzipmap",
  sections: [
    {
      title: "환각 차단 수집 & 자동 검수",
      bullets: [
        "**무과금 매일 수집:** GitHub Actions로 매일 실행해 서버 비용 없이 ==138회== 연속 성공, 맛집 ==3,554곳== 구축",
        "**원문 인용 검증:** 제목·설명 → 자막 2단계로 추출하고 원문에 없는 상호나 근거가 틀린 결과는 즉시 폐기",
        "**자동 검수 에이전트:** 매일 새벽 지도 좌표·영상 맥락을 대조해 자동 승인하고, 좌표가 불확실한 건만 어드민에 보류",
      ],
    },
    {
      title: "지도 조회 스냅샷 캐시",
      bullets: [
        "**DB 전송량 초과 해결:** 전체 장소 스냅샷을 1시간 공유 캐시에 올려 메모리 필터·격자 클러스터링으로 처리",
        "**선택적 캐시 갱신:** 캐시 날짜 직렬화를 단일 지점에서 통일하고, 지도 마커 집합이 바뀔 때만 캐시를 갱신",
      ],
      images: [
        {
          src: "/project-details/matzipmap/map-clusters.webp",
          alt: "맛집여지도 메인 지도 화면. 서울 전역에 허영만의 백반기행, 또간집, 김사원세끼, 쯔양, 비밀이야, 성시경의 먹을텐데 등 방송·유튜브별 맛집 클러스터가 표시됨",
          width: 1024,
          height: 542,
          caption: "방송·유튜브 맛집 3,554곳을 격자 클러스터링으로 보여주는 실제 서비스 화면",
        },
      ],
    },
  ],
};
