import type { ProjectDetail } from "@/types/resume";

export const clientPerformanceDetail: ProjectDetail = {
  sections: [
    {
      title: "셰이더: 원인을 구조에서 찾기",
      bullets: [
        "**진단:** 원인은 셰이더 자체가 아니라 번들링 구조. 파츠 번들마다 셰이더 참조가 공유되지 않아 사본을 각자 포함했고, 번들 간 variant가 달라 런타임 크래시도 발생",
        "**선택:** 공용 번들로 모으기만 하면 개수(==47개 → 6개==)만 줄고 사본 크기는 남으므로 **통합과 variant 제거를 함께** 적용. 메모리 감소는 대부분 variant 감축에서, 크래시 제거는 번들 통합에서 나옴",
        "**배제:** 아바타 파츠까지 Addressable로 전환하는 안은 파츠가 자체 포맷으로 관리돼 전면 재작업이 필요해 효과 대비 공수가 과도하다고 판단. 셰이더만 공용 번들로 분리하고 카탈로그는 리소스 성격별로 분할",
        "**결과:** 아바타 2명 로드 기준 Shader 메모리 ==0.83GB → 약 1MB==, 런타임 셰이더 크래시 제거",
      ],
      images: [
        {
          src: "/project-details/moii/shader-profiler.webp",
          alt: "Unity Memory Profiler 비교 화면. Shader 크기 0.83GB에서 1.0MB, 개수 47에서 6",
          width: 1200,
          height: 190,
          caption: "Memory Profiler 비교: Shader 0.83GB → 1.0MB, 47개 → 6개",
        },
      ],
    },
    {
      title: "직렬화: 파싱이 아니라 포맷을 바꾸기",
      bullets: [
        "**문제:** JSON 역직렬화마다 GC 스파이크가 생겨 프레임 드롭과 발열로 이어짐",
        "**판단:** 문자열을 파싱해 객체를 만드는 구조가 남는 한 할당량은 줄지 않으므로 파싱 코드가 아니라 **데이터 포맷**을 문제로 봄",
        "**검토:** gzip은 전송량만 줄고 역직렬화 할당은 그대로이고, FlatBuffers는 zero-copy 이점이 있으나 스키마 공유 도구가 빈약. 서버·클라이언트가 같은 스키마에서 코드를 생성하고 성숙한 **Protobuf**를 선택",
        "**스키마:** 중첩 컬렉션은 원소마다 객체가 생겨 할당이 폭증하므로 map과 packed 평면 배열로 펴 정점 데이터를 연속 메모리에 저장. 에셋 용량 ==70%== 절감, GC 스파이크 제거",
      ],
    },
    {
      title: "UI 렌더링: 기성 API의 한계를 모듈로 해결",
      bullets: [
        "**문제:** 이미지를 대량 로드하면 프레임이 떨어짐. 원본 1.48MB가 텍스처로 16MB를 차지하고, 일부 UI 변경이 전체 Canvas Rebuild를 일으킴",
        "**판단:** UnityWebRequestTexture는 mipmap과 포맷을 제어할 수 없고 LoadImage는 메인 스레드에서만 호출돼 디코딩 동안 프레임이 멈춤. 기성 API로는 해결이 안 돼 **비동기 이미지 로드 모듈을 자체 제작**하고, 알파 유무에 따라 RGB24와 RGBA32를 갈라 씀",
        "**실행:** SubCanvas로 Rebuild 범위 축소, 비동기 재활용 스크롤, 워커 스레드 디코딩, 메모리(LRU)와 디스크 2단 캐시, 같은 URL 중복 요청 병합",
        "**결과:** Canvas 갱신 ==85.26ms → 36.05ms==(Deep Profiling 기준, 계측 오버헤드 포함), 텍스처 메모리 ==16MB → 약 1.5MB==",
      ],
      images: [
        {
          src: "/project-details/moii/ui-profiler.webp",
          alt: "Unity Profiler Deep Profiling 비교. 개선 전 Canvas 갱신 85.26ms, GC 292.2KB. 개선 후 36.05ms, 120.4KB",
          width: 926,
          height: 368,
          caption: "Deep Profiling 비교: Canvas 갱신 85.26ms → 36.05ms",
        },
      ],
    },
  ],
};
