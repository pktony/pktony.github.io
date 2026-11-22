import type { ProjectDetail } from "@/types/resume";

export const multiplayerWorldDetail: ProjectDetail = {
  id: "multiplayer-world",
  highlights: [
    { label: "라이브 동시 정원", value: "16명" },
    { label: "부하 테스트", value: "20명" },
    { label: "선형 외삽 상한", value: "100ms" },
  ],
  sections: [
    {
      title: "끊김 없는 이동",
      bullets: [
        "**단순한 보간 선택:** 과하게 복잡한 Dead Reckoning 대신 한 틱 뒤 보간과 ==100ms== 상한 선형 외삽으로 지연 끊김 해결",
        "**서버 무변경 & 검증:** 서버 프로토콜을 건드리지 않고 클라이언트만으로 구현해 저대역폭(200kb/s) 환경에서 동작 검증",
      ],
      images: [
        {
          src: "/project-details/moii/sync-diagram.webp",
          alt: "스냅샷 버퍼 다이어그램. 서버가 100ms 간격으로 보내는 스냅샷 중 t=300, t=400이 늦게 도착해도 클라이언트는 보간과 외삽으로 끊김 없이 이동을 그림",
          width: 1200,
          height: 583,
          caption: "스냅샷이 늦게 도착한 구간(t=300, t=400)의 보간·외삽 처리",
        },
      ],
    },
    {
      title: "실기기 검증 & 재연결",
      bullets: [
        "**정원 검증 & 키 보정:** Android·iOS 실기기 ==16명==(최대 ==20명==)에서 OOM 없음, 정점 보정으로 키가 다른 아바타의 상호작용 정렬",
        "**자동 재동기화:** 네트워크 단절 시 안전하게 재연결하고 서버 틱 기반 FSM으로 상태와 위치를 즉시 복구",
      ],
    },
  ],
};
