import type { ProjectDetail } from "@/types/resume";

export const clientPerformanceDetail: ProjectDetail = {
  id: "client-performance",
  sections: [
    {
      title: "셰이더 중복 제거",
      bullets: [
        "**번들링 구조 원인:** 원인은 셰이더 자체가 아니라 파츠 번들마다 셰이더 참조가 공유되지 않아 사본을 각자 포함한 구조였고, 번들 간 variant 불일치로 런타임 크래시도 발생",
        "**공용 번들 통합 + variant 제거:** 공용 번들로 모으기만 하면 개수(==47개 → 6개==)만 줄고 사본 크기는 남으므로 통합과 미사용 variant 제거를 함께 적용해 메모리와 크래시를 동시에 해결",
        "**파츠 Addressable 배제 이유:** 아바타 파츠까지 Addressable로 전환하는 안은 자체 포맷 전면 재작업이 필요해 공수가 과도하다고 판단. 셰이더만 공용 번들로 분리하고 카탈로그는 리소스 성격별로 분할",
        "**셰이더 메모리 & 크래시 제거:** 아바타 2명 로드 기준 Shader 메모리 ==0.83GB → 약 1MB==, 런타임 셰이더 크래시 제거",
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
      title: "역직렬화 GC 스파이크 제거",
      bullets: [
        "**데이터 포맷 원인:** JSON 역직렬화마다 GC 스파이크가 생겨 프레임 드롭과 발열로 이어지는 문제를, 파싱 코드가 아니라 문자열을 파싱해 객체를 생성하는 데이터 포맷 문제로 판단",
        "**gzip·FlatBuffers 대신 Protobuf 선택:** gzip은 전송량만 줄고 역직렬화 할당은 그대로이며, FlatBuffers는 스키마 공유 도구가 빈약함. 서버·클라이언트가 같은 스키마에서 코드를 생성하고 성숙한 Protobuf를 선택",
        "**평면 스키마 최적화:** 중첩 컬렉션은 원소마다 객체가 생겨 할당이 폭증하므로 map과 packed 평면 배열로 펴 정점 데이터를 연속 메모리에 저장. 에셋 용량 ==70%== 절감, GC 스파이크 제거",
      ],
    },
    {
      title: "이미지 로드 프레임 드롭 해결",
      bullets: [
        "**디코딩·Rebuild 병목:** 이미지 대량 로드 시 원본 1.48MB가 텍스처로 16MB를 차지하고, 일부 UI 변경이 전체 Canvas Rebuild를 일으켜 프레임이 떨어짐",
        "**자체 비동기 로더 제작:** UnityWebRequestTexture는 mipmap과 포맷을 제어할 수 없고 LoadImage는 메인 스레드에서만 돌아 프레임이 멈추므로 비동기 이미지 로드 모듈을 직접 제작하고 알파 유무에 따라 RGB24와 RGBA32를 분리",
        "**Rebuild 분리 & 2단 캐시:** SubCanvas로 Rebuild 범위를 축소하고, 비동기 재활용 스크롤·워커 스레드 디코딩·메모리(LRU)와 디스크 2단 캐시·동일 URL 중복 요청 병합을 적용",
        "**프로파일러 검증:** Canvas 갱신 ==85.26ms → 36.05ms==(Deep Profiling 기준, 계측 오버헤드 포함), 텍스처 메모리 ==16MB → 약 1.5MB==",
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
