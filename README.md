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

## ✨ 주요 기능 (Key Features)

- **Responsive Design**: 모바일, 태블릿, 데스크탑을 아우르는 최적화된 레이아웃
- **Multi-language Support**: 한국어 및 영어 지원 (i18n 직접 구현)
- **Interactive Gallery**: 프로젝트 상세 정보 및 성과를 확인할 수 있는 인터랙티브 갤러리
- **Performance Optimized**: 이미지 최적화 및 효율적인 렌더링 전략 적용
- **Scroll Interactions**: 사용자 경험을 풍부하게 하는 스크롤 기반 시각 효과

## 📂 주요 프로젝트 (Key Projects)

### 1. 열달후에 (Yeoldal) - App
**임신·출산·육아 통합 관리 앱 (가입자 55만)**
- **기술 스택**: React Native, Reanimated, eCharts, Android 15
- **핵심 성과**:
  - Android 15 대응: 16KB 페이지 사이즈 메모리 이슈 선제적 분석 및 해결
  - UI 안정성: Reanimated 기반 신규 컴포넌트로 헤더 깜빡임(Glitch) 현상 제거
  - 차트 최적화: ScrollView 기반 커스텀 차트 설계로 네이티브 수준 스크롤 구현
  - 아키텍처: 클래스형 컴포넌트의 함수형(Hooks) 전면 리팩토링으로 기술 부채 절감

### 2. 페스룸 케어 (Pethroom Care) - App
**반려동물 IoT 서비스 전용 앱**
- **기술 스택**: React Native, WebSocket, Bluetooth, Atomic Design
- **핵심 성과**:
  - 안정성 혁신: Crashlytics 기반 에러 추적 및 리팩토링으로 비정상 종료율 3.89% → 0.02% 개선
  - 실시간 통신: WebSocket 기반 기기 상태 동기화 및 푸시 알림 시스템 구축
  - UX 퍼포먼스: Reanimated 기반 인터랙션 최적화로 렌더링 성능 향상 (40fps → 60fps)
  - 생산성 향상: Atomic Design 시스템 도입으로 개발 공수 20% 절감

### 3. 페스룸 케어 Admin - Web
**IoT 서비스 통합 관리 시스템**
- **기술 스택**: React, MUI DataGrid, RBAC, Axios Interceptor
- **핵심 성과**:
  - 운영 효율화: RBAC(역할 기반 권한 제어) 시스템 구축으로 운영 효율 100% 달성
  - 보안 인증: Axios Interceptor 기반 JWT 인증 로직 전역화 및 소셜 로그인 추상화
  - 데이터 시각화: 대규모 기기 상태 및 사용자 데이터를 실시간 그리드와 차트로 구현
  - 운영 자동화: 엑셀 커스텀 연동 및 대량 데이터 처리 로직 구축으로 운영 시간 단축

### 4. 핀다이렉트 중고폰 검사 - Native/PWA
**네이티브 진단 프레임워크 & PWA**
- **기술 스택**: Swift, Native Module, Blob API, PWA
- **핵심 성과**:
  - Native 융합: Swift 단기 습득으로 카메라, 센서, FaceID 등 하드웨어 진단 모듈 개발
  - 심층 디버깅: SSL 인증서 이슈 우회 및 Network Reachability 실시간 판단 로직 구축
  - PWA 미디어: Blob/MediaDevices API 활용 영상 서버 전송 및 스트림 제어 최적화

### 5. WNMS - Web
**네트워크 장비(AP) 관제 대시보드**
- **기술 스택**: React, Redux-Toolkit, MUI, ECharts, Kakao Map API
- **핵심 성과**:
  - 지도 기반 관제: Kakao Map API 연동 및 마커 커스터마이징으로 장비 상태 시각화
  - 데이터 시각화: ECharts 활용 트래픽 통계 및 MUI DataGrid 활용 대용량 리스트 최적화
  - 보안 및 세션: Axios Interceptor와 sessionStorage를 결합한 안정적인 인증 체계 구축

## 🛠 설치 및 실행 (Setup & Run)

```bash
# 의존성 설치
npm install

# 로컬 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

---
© 2026 Lee Hee-un. All rights reserved.
