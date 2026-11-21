import type { ProjectDetail } from "@/types/resume";

export const multiplayerWorldDetail: ProjectDetail = {
  id: "multiplayer-world",
  sections: [
    {
      title: "끊김 없는 이동",
      bullets: [
        "**스냅샷 지연 병목:** TCP 재전송으로 위치 스냅샷이 늦게 몰려 도착하면 단순 보간만으로는 멈춤과 버벅임이 생김",
        "**Dead Reckoning 배제:** 속도·가속도 예측과 보정을 갖춘 Dead Reckoning은 파티 게임에 필요한 정확도 대비 구현·유지보수 복잡도가 과도해 제외",
        "**한 틱 뒤 보간 & 100ms 상한 외삽:** 렌더 시점을 최신 스냅샷보다 한 틱 뒤로 잡아 보간할 앞뒤 두 점을 항상 확보하고, 늦게 도착해 지나간 스냅샷은 폐기한 뒤 마지막 두 점의 변위를 연장하는 단순 선형 외삽(상한 ==100ms==)으로 메움. 서버 프로토콜 변경 없이 클라이언트 로직만으로 해결",
        "**저대역폭 검증:** Android 네트워크 제한 기능과 Clumsy로 대역폭을 200kb/s 수준으로 낮춘 환경에서 동작을 확인",
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
      title: "16명 동시 접속 검증",
      bullets: [
        "**실기기 정원 검증:** 라이브 정원 ==16명==(Android·iOS 실기기)에서 성능 저하와 OOM 없음을 확인하고, ==20명==까지 부하 테스트",
        "**키 차이 상호작용 보정:** Target Matching과 vertex 기반 offset 계산으로 키가 다른 아바타의 오브젝트 상호작용(의자 앉기)을 자연스럽게 맞춤",
      ],
    },
    {
      title: "자동 재연결 & 상태 동기화",
      bullets: [
        "**서버 틱 기반 FSM & 안전 재연결:** 서버 틱 기반 FSM으로 상태 동기화를 설계하고, WebSocket 비정상 종료 시 정의된 상태 코드로 안전하게 닫고 자동 재연결한 뒤 상태와 위치를 다시 동기화",
      ],
    },
  ],
};
