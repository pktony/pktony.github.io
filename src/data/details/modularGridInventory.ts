import type { ProjectDetail } from "@/types/resume";

export const modularGridInventoryDetail: ProjectDetail = {
  sections: [
    {
      title: "데이터 모델: 중첩 가방과 독립 포켓",
      bullets: [
        "**문제:** Tarkov식 인벤토리는 가방 안에 가방이 들어가고, 조끼처럼 떨어져 있는 칸마다 크기와 규칙이 달라 하나의 큰 격자로는 표현이 안 됨",
        "**선택:** 가방 아이템이 자기 컨테이너 ID를 가진 별도 컨테이너를 소유하는 구조. 포켓은 각자 가로·세로를 가진 독립 격자이고, X/Y는 화면 배치 좌표로만 씀",
        "수납 허용·금지(카테고리·아이템 ID)를 컨테이너와 포켓 두 단계에 걸 수 있고, 아이템은 한 포켓 안에 완전히 들어가야 함",
        "**결과:** 가방을 옮겨도 내용물과 컨테이너 ID가 유지됨. 같은 정의의 가방 두 개는 서로 다른 창으로 열림",
      ],
      images: [
        {
          src: "/project-details/modular-grid-inventory/runtime-sample.webp",
          alt: "Unity 실행 화면. 왼쪽에 가방 창 두 개가 열려 있고 오른쪽 Storage 격자에 배낭, 탄약 케이스, 의료 케이스가 배치됨",
          width: 1200,
          height: 675,
          caption: "가방 창 여러 개를 동시에 연 실행 화면",
        },
      ],
    },
    {
      title: "정합성: 이동 실패와 순환 방지",
      bullets: [
        "**문제:** 드래그 이동이 중간에 거절되면 아이템이 사라지거나 두 곳에 존재할 수 있고, 가방을 자기 자손 가방에 넣으면 컨테이너 트리가 순환",
        "**선택:** 모든 변경을 하나의 파이프라인으로 통과. 현재 스냅샷을 복제한 초안에서 변경을 준비하고, 검증을 통과한 경우에만 새 스냅샷으로 교체",
        "**순환 방지:** 이동할 가방의 하위 컨테이너를 따라 내려가며 목적지와 만나는지 탐색해 거절. 방문 집합으로 이미 꼬인 데이터에서도 무한 루프를 막음",
        "**결과:** 거절되거나 예외가 나도 기존 스냅샷을 그대로 유지. 변경 후에는 아이템당 소유 컨테이너 1개, 고아 컨테이너 없음, 수량 범위를 매번 검증",
      ],
    },
    {
      title: "패키지 구조와 에디터 도구",
      bullets: [
        "**계층 분리:** Catalog, Domain, Presentation, Integration, Editor, Samples를 어셈블리로 나눔. Domain은 UnityEngine을 참조하지 않음",
        "**뷰 없이 사용:** Canvas나 EventSystem 없이 읽기·편집·전송 서비스만으로 모델 사용 가능. 입력은 인터페이스로 추상화하고 Input System 어댑터는 별도 어셈블리로 둠",
        "**설정과 상태 분리:** ScriptableObject 정의를 불변 스냅샷으로 변환해 쓰고, 세션의 가변 상태는 ScriptableObject에 두지 않음",
        "**제작 도구:** Custom Inspector에서 포켓을 추가·삭제하고 레이아웃 미리보기를 보며 편집. 편집 한 번을 Undo 한 단계로 묶음",
      ],
      images: [
        {
          src: "/project-details/modular-grid-inventory/custom-inspector.webp",
          alt: "Unity Inspector에서 조끼 아이템 정의를 선택한 화면. 포켓 3개와 8칸 레이아웃 미리보기, 포켓 ID와 가로·세로 입력란",
          width: 452,
          height: 650,
          caption: "Custom Inspector의 포켓 레이아웃 미리보기",
        },
      ],
    },
  ],
};
