# Portfolio - Lee Hee-un (이희운)

프론트엔드 엔지니어 이희운의 포트폴리오 웹사이트입니다. 55만 유저 서비스의 안정성을 설계하고, AI 기반 워크플로우 혁신을 주도하는 전문성을 담고 있습니다.

## 🚀 기술 스펙 (Technical Stack)

### Core

- **React 19**
- **TypeScript**
- **Vite 6**

### Styling & Animation

- **Tailwind CSS 4.0**
- **Framer Motion (motion/react)**
- **Lucide React**

## 🧠 기술 스택 선택 이유 & 강조 포인트

이 포트폴리오의 기술 선택은 "화려한 도구 나열"보다, 실제 서비스에서 중요한 세 가지를 전달하기 위해 구성했습니다.

### React + Vite를 선택한 이유 (vs HTML/CSS only)

- **초기 제작 속도만** 보면 HTML/CSS가 더 빠를 수 있습니다.
- 하지만 이 포트폴리오는 언어 토글, 프로젝트 필터/모달, 스크롤 인터랙션처럼 **상태와 상호작용**이 많아 React가 유지보수에 유리합니다.
- 프로젝트/성과 콘텐츠를 데이터로 관리해 **반복 UI 수정 비용**을 낮추고, 컴포넌트 재사용성을 확보했습니다.
- Vite를 통해 빠른 dev server/HMR로 수정-검증 루프를 짧게 유지해 **지속 개선**에 최적화했습니다.

### 1) 왜 이 스택을 선택했는가 (Why This Stack)

- **React + TypeScript**  
  화면 구현 속도와 타입 안정성을 동시에 가져가기 위한 기본 축입니다.  
  이력서 성격상 잦은 콘텐츠 수정이 필요하므로, 변경 비용을 줄이는 타입 기반 구조를 우선했습니다.

- **Vite**  
  빠른 부팅/빌드로 수정-검증 루프를 짧게 유지하기 위해 선택했습니다.  
  "작게 자주 개선"하는 포트폴리오 운영 방식과 잘 맞습니다.

- **Tailwind CSS**  
  디자인 토큰을 빠르게 조합하고, 반응형 레이아웃을 일관되게 유지하기 위해 사용했습니다.  
  컴포넌트별 스타일 맥락이 코드에 바로 보이기 때문에 피드백 반영 속도가 빠릅니다.

- **Framer Motion (motion/react)**  
  과한 시각 효과보다, 정보 계층을 부드럽게 전달하는 데 초점을 맞췄습니다.  
  스크롤 기반 인터랙션을 통해 "정적 문서"가 아닌 "문맥이 있는 경험"을 만들고자 했습니다.

### 2) 이 포트폴리오에서 강조하고 싶은 역량 (What This Portfolio Signals)

- **성능 최적화 관점**: 단순 기능 구현이 아니라 스크롤, 렌더링, 상호작용 체감 품질까지 본다는 점
- **운영 가능성**: 반응형, 타입 안정성, 빌드 단순성 등 유지보수 가능한 구조를 만든다는 점
- **문제 해결 방식**: 기술 선택 이유를 수치/사례(안정성, FPS, 운영 효율)와 함께 설명할 수 있다는 점
- **플랫폼 확장성**: Web 중심 구현이라도 Native/PWA 경험과 연결되는 사고방식을 갖고 있다는 점

### 3) 리드미 작성 주안점

- **공부용**  
  "왜 이 기술을 골랐는지"를 코드와 문서로 함께 남겨, 기능보다 의사결정 과정을 복기할 수 있습니다.

- **피드백용**  
  리뷰어가 단순 UI보다 구조/성능/유지보수성 관점으로 코멘트하기 쉬운 형태입니다.  
  (예: 스크롤 UX, 스냅 전략, 컴포넌트 경계, 타입 모델링)

- **홍보용**  
  경력 소개를 스택-성과-문제해결 흐름으로 연결해, "무엇을 했는지"보다 "왜 잘하는지"가 보이도록 구성했습니다.

## 📐 아키텍처 개념 요약 & 폴더 구조 (학습용)

아래는 프론트/백엔드에서 자주 등장하는 **구조 설계 관점**을 한 줄씩만 정리한 것입니다. (공식 표준 폴더가 정해진 것은 아니며, 팀마다 변형합니다.)

### 개념별 한 줄 정리

| 개념 | 한 줄 |
|------|--------|
| **DDD** | 업무(도메인) 언어·규칙·경계(바운디드 컨텍스트)를 중심에 두고 모델링한다. 폴더는 팀이 정하며 DDD가 강제하지 않는다. |
| **Strategic DDD** | 시스템을 큰 맥락(컨텍스트)으로 나누는 설계. 폴더 최상위가 `order/`, `payment/`처럼 컨텍스트 단위가 되기 쉽다. |
| **Tactical DDD** | 엔티티·값 객체·애그리거트·리포지토리 등 구현 패턴. 보통 `domain/` 아래에 도메인별 폴더로 둔다. |
| **Clean / Hexagonal** | 비즈니스 코어를 안쪽에 두고 DB·HTTP는 바깥(어댑터). `domain` + `application` + `adapters` 형태가 흔하다. |
| **Layered** | presentation / application / domain / infrastructure 등 **역할(계층)**으로 나눈다. |
| **FSD** | 프론트 전용 슬라이스: `app` → `pages` → `widgets` → `features` → `entities` → `shared` + import 규칙. 대형 SPA·팀 규칙에 강하다. |
| **Atomic Design** | UI를 atom → molecule → organism → template → page 크기로 층 나눈다. 디자인 시스템·UI 키트에 잘 맞는다. |
| **Feature 폴더** | `features/cart`, `features/profile`처럼 **기능 단위**로만 나눈다. FSD보다 루스하고 도입 비용이 낮다. |
| **Route-based** | URL·라우트와 폴더가 1:1 (예: Next `app/dashboard/`). |
| **Colocation** | 컴포넌트 옆에 테스트·스타일을 두어 수정 단위를 한 폴더에 모은다. |

**FSD vs Atomic:** FSD는 **기능·도메인·의존 방향**이 축이고, Atomic은 **UI 조각 크기**가 충이다. 서로 배타가 아니라 `shared/ui` 안을 Atomic 규칙으로 쓰는 식으로 **병행**하기도 한다.

### 실제 소스 폴더 구조 (도메인 + shared)

FSD 전층 대신, **프로젝트 포트폴리오 도메인**과 **공용 UI·유틸**만 나눴다. 단일 페이지이므로 `App.tsx`는 언어·필터·모달 등 **페이지 단위 상태와 섹션 조립(오케스트레이터)** 역할을 유지한다.

```txt
src/
  App.tsx                          # 섹션 조립, i18n 객체(t), 페이지 상태
  domain/
    project/
      model/
        types.ts                   # ProjectAchievement, ResumeProject
        projects.tsx               # buildPortfolioProjects(lang) — 카드 데이터·아이콘
      ui/
        ProjectCard.tsx            # 프로젝트 도메인 UI
  shared/
    lib/
      motion.ts                    # fadeIn, staggerContainer (motion variants)
    ui/
      StatItem.tsx
      TechCategory.tsx
      MindsetItem.tsx
      ExperienceItem.tsx
      ContactModal.tsx             # 연락 모달 (Web3Forms)
  main.tsx
  index.css
```

- **`domain/project`**: 이력에 실린 **프로젝트 카드**에만 쓰이는 타입·데이터·`ProjectCard`. 다른 도메인이 생기면 `domain/<이름>/`을 같은 패턴으로 추가하면 된다.
- **`shared/ui`**: 여러 섹션에서 쓰는 **표현 위주 컴포넌트**와 연락 모달.
- **`shared/lib`**: 애니메이션 variant 등 **도메인과 무관한 작은 유틸**.

### 왜 이 분할 방식을 선택하는가

- **FSD 전체를 쓰지 않는 이유**  
  페이지가 하나이고 팀 규모가 작다. `widgets` / `pages` 레이어까지 두면 **규칙 비용**이 이득보다 클 수 있다.

- **도메인 폴더를 둔 이유**  
  프로젝트 성과·카피·카드 UI가 한 덩어리로 커졌을 때 **`domain/project`** 아래에서만 찾으면 되어 수정 경로가 짧다.

- **`shared`만 별도로 둔 이유**  
  스탯·기술 태그·경력 타임라인·연락 모달은 **포트폴리오 전역에서 재사용**되는 표현 컴포넌트로 묶었다.

- **`App.tsx`를 얇게 만들지 않은 이유 (현재)**  
  i18n 문자열 전체가 `App` 안에 있어 파일 길이는 남아 있다. 필요 시 `shared/i18n/ko.ts` · `en.ts`로만 추가 분리하면 된다.

## ✨ 주요 기능 (Key Features)

- **Responsive Design**: 모바일, 태블릿, 데스크탑을 아우르는 최적화된 레이아웃
- **Multi-language Support**: 한국어 및 영어 지원 (i18n 직접 구현)
- **Interactive Gallery**: 프로젝트 상세 정보 및 성과를 확인할 수 있는 인터랙티브 갤러리
- **Performance Optimized**: 이미지 최적화 및 효율적인 렌더링 전략 적용
- **Scroll Interactions**: 사용자 경험을 풍부하게 하는 스크롤 기반 시각 효과

## 📂 주요 프로젝트 (Key Projects)

### 1. 열달후에 (Yeoldal) - App

**임신·출산·육아 통합 관리 앱 (누적 가입자 약 55만)**

- **기술 스택 (칩과 동일)**: React Native, MobX, REST API, Firebase, WebView, Reanimated, eCharts, Android 15
- **핵심 성과**:
  - 안정성·구조: Crashlytics·Hooks 전환·Atomic Design 정리로 비정상 종료율 3.89% → 0.02%·40fps → 60fps 수준 개선
  - 인터랙션·차트: Reanimated 헤더, 디바운스, ScrollView 기반 커스텀 차트
  - OS 대응: Android 15·16KB 페이지 등 최신 환경 호환

### 2. 페스룸 케어 (Pethroom Care) - App

**강아지·고양이 IoT 화장실 관리 앱**

- **기술 스택 (칩과 동일)**: React Native, Redux Toolkit, JWT, Axios, Firebase, Lottie, styled-components
- **링크**: [Google Play](https://play.google.com/store/apps/details?id=com.pethroom)
- **핵심 성과**:
  - 인증: 이메일·SNS(카카오·구글·애플) 단일 진입점, JWT, Axios Interceptor로 중복 로그인 방어·토큰 만료 전역 처리
  - 성능: memo·useCallback·FlatList 최적화로 메모리 약 15% 절감, 네비게이션 전환 속도 향상
  - 출시: Firebase Dynamic Links, 푸시(Foreground/Background/Terminated), Lottie 스플래시·TestFlight, App/Play Store 런칭·운영

### 3. 페스룸 케어 Admin - Web

**반려동물 IoT 화장실 관리 앱 어드민**

- **기술 스택 (칩과 동일)**: React, Redux Toolkit, MUI, MUI DataGrid, Chart.js, AWS S3, Axios, RBAC
- **핵심 성과**:
  - 대시보드·DataGrid·Chart.js·Excel Bulk 업로드/다운로드로 데이터 관리 효율화
  - RBAC·Axios Interceptor·세션·S3 정적 호스팅으로 보안·접근 제어 및 배포
  - 레거시 미결 에러 정리 후 QA 성공률을 배포 가능 수준으로 회복

### 4. 핀다이렉트 중고폰 검사 - Native/PWA

**iOS 네이티브 진단 + PWA 외관검사 (하이브리드)**

- **기술 스택 (칩과 동일)**: Swift, React, PWA, Blob API, MediaDevices, REST API, Lottie, Storyboard
- **핵심 성과**:
  - Swift: 카메라·센서·생체인식 진단, Storyboard·SSL·Reachability
  - PWA: Blob·MediaDevices·반응형 검사 UI로 외관 촬영·전송

### 5. JEJU-WNMS - Web

**무선 네트워크 장비(WNMS) 관제 대시보드**

- **기술 스택 (칩과 동일)**: React, Redux Toolkit, MUI, ECharts, Kakao Map API, Axios
- **핵심 성과**:
  - 지도·마커·ECharts·DataGrid로 관제·대용량 리스트
  - Axios Interceptor·sessionStorage 기반 세션·인증 일원화

## 🛠 설치 및 실행 (Setup & Run)

```bash
# 의존성 설치
yarn install

# 로컬 개발 서버 실행
yarn dev

# 프로덕션 빌드
yarn build
```

### 연락 폼 (Web3Forms)

헤더 **연락하기**는 이메일 클라이언트 대신 모달 폼으로 메시지를 보냅니다. 백엔드 없이 동작하려면 [Web3Forms](https://web3forms.com) 무료 Access Key가 필요합니다.

1. [web3forms.com](https://web3forms.com)에서 Access Key 발급  
2. 프로젝트 루트에 `.env` 파일을 만들고 아래 추가 (`.env.example` 참고):

   ```bash
   VITE_WEB3FORMS_ACCESS_KEY=여기에_발급받은_키
   ```

3. `yarn dev` 재시작 후 연락하기 동작 확인  

수신 메일함은 Web3Forms 대시보드에서 연결한 주소로 전달됩니다.

---

© 2026 Lee Hee-un. All rights reserved.
