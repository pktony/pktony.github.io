import type { ProjectDetail } from "@/types/resume";

export const clientPerformanceDetail: ProjectDetail = {
  id: "client-performance",
  highlights: [
    { label: "Shader 메모리", value: "0.83GB → 1MB" },
    { label: "에셋 용량", value: "70% 절감" },
    { label: "Canvas 갱신", value: "58% 단축" },
    { label: "텍스처 메모리", value: "16 → 1.5MB" },
  ],
  sections: [
    {
      title: "셰이더 중복 제거",
      bullets: [
        "**번들 중복 원인:** 파츠 번들마다 셰이더 사본이 중복 포함돼 메모리 폭증과 variant 불일치 크래시가 발생",
        "**공용 번들 통합:** 파츠 전체를 바꾸는 대신 셰이더만 공용 번들로 통합하고 미사용 variant를 제거해 ==47개 → 6개==로 축소",
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
        "**포맷 전환 판단:** gzip은 할당량이 그대로고 FlatBuffers는 도구가 빈약해 서버·클라이언트 공용 스키마가 탄탄한 Protobuf를 채택",
        "**평면 스키마:** 중첩 객체 할당을 없애기 위해 평면 배열 구조로 스키마를 펴 용량 ==70%== 절감 및 GC 스파이크 제거",
      ],
    },
    {
      title: "이미지 로드 프레임 드롭 해결",
      bullets: [
        "**자체 비동기 로더:** 메인 스레드 디코딩 병목을 없애고 알파 유무별 포맷 분리로 텍스처 메모리 ==16MB → 1.5MB== 절감",
        "**Rebuild 최소화:** SubCanvas 분리, 재활용 스크롤, 메모리·디스크 2단 캐시와 중복 요청 병합을 적용",
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
