import type { ProjectDetail } from "@/types/resume";

export const clientPerformanceDetail: ProjectDetail = {
  sections: [
    {
      title: "셰이더 병목을 찾은 과정",
      bullets: [
        "**iOS OOM**을 계기로 프로파일링해 Asset Bundle 간 **중복 셰이더 로딩**을 원인으로 특정",
        "**번들 구성 정리**와 **미사용 variant 정리**로 중복을 제거",
        "측정 조건은 아바타 2명 로드이며, Shader 메모리 ==0.83GB → 약 1MB==, 셰이더 수 ==47개 → 6개==",
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
      title: "직렬화 포맷 전환",
      bullets: [
        "역직렬화 GC 스파이크의 원인을 **데이터 포맷**으로 판단하고 JSON에서 Protobuf로 전환",
        "결과는 GC 스파이크 제거와 에셋 용량 ==70%== 절감",
      ],
    },
  ],
};
