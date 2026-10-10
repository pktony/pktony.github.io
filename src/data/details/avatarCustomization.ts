import type { ProjectDetail } from "@/types/resume";

// 글 없이 앱 화면만 보여준다
export const avatarCustomizationDetail: ProjectDetail = {
  sections: [
    {
      title: "앱 내 커스터마이징 화면",
      bullets: [],
      images: [
        {
          src: "/project-details/moii/avatar-customization-outfit.webp",
          alt: "Moii 앱의 아바타 의상 선택 화면. 상의, 하의, 한 벌 등 탭과 의상 목록, 눈사람 의상을 입은 아바타 미리보기",
          width: 700,
          height: 815,
          caption: "의상 선택과 실시간 미리보기",
        },
        {
          src: "/project-details/moii/avatar-customization-color.webp",
          alt: "Moii 앱의 눈 색상 선택 화면. 색상 팔레트에서 고르면 아바타의 눈 색이 바뀜",
          width: 700,
          height: 815,
          caption: "파츠 색상 커스터마이즈",
        },
        {
          src: "/project-details/moii/avatar-customization-transform.webp",
          alt: "Moii 앱의 파츠 조절 화면. 가로 크기, 세로 크기, 거리, 높이, 각도 슬라이더",
          width: 700,
          height: 815,
          caption: "파츠 크기·위치·각도 조절",
        },
      ],
    },
  ],
};
