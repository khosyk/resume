import {
	BarChart3,
	Globe,
	Smartphone,
	Terminal,
	Zap,
} from "lucide-react";
import type { ResumeProject } from "./types";

/** 포트폴리오에 노출할 프로젝트 카드 데이터 (언어별 카피·아이콘 포함) */
export function buildPortfolioProjects(lang: "ko" | "en"): ResumeProject[] {
	return [
		{
			id: "yeoldal",
			title:
				lang === "ko"
					? "열달후에 (Global & Domestic)"
					: "Yeoldal (Global & Domestic)",
			category: "App",
			subtitle:
				lang === "ko"
					? "임신·출산·육아 통합 관리 서비스 (누적 가입자 55만)"
					: "Pregnancy & Parenting Management Service (550K Users)",
			tags: ["React Native", "Reanimated 3", "eCharts", "Android 15 SDK"],
			link: "https://apps.apple.com/kr/app/%EC%97%B4%EB%8B%AC%ED%9B%84%EC%97%90-%EC%9E%84%EC%8B%A0-%EC%B6%9C%EC%82%B0-%EC%9C%A1%EC%95%84-%ED%95%84%EC%88%98-%EC%95%B1/id1491862784",
			images: [
				"https://picsum.photos/seed/yeoldal1/800/1200",
				"https://picsum.photos/seed/yeoldal2/800/1200",
			],
			achievements:
				lang === "ko"
					? [
							{
								problem:
									"Android 15 업데이트 이후 16KB 페이지 사이즈 메모리 할당 이슈로 인한 앱 실행 불안정성 발생 가능성 감지.",
								thinking:
									"네이티브 메모리 관리 정책 변화를 정밀 분석하고, 하위 호환성을 유지하면서 신규 OS의 메모리 정렬 기준에 맞춘 바이너리 최적화 수행.",
								result:
									"Android 15 환경에서의 앱 실행 안정성을 100% 확보하고 예기치 못한 비정상 종료를 사전에 차단.",
							},
							{
								problem:
									"복잡한 스크롤 인터랙션 시 헤더 레이아웃이 미세하게 떨리거나 깨지는 Glitch 현상 발생.",
								thinking:
									"JS 스레드 부하를 줄이기 위해 Reanimated의 Worklet을 활용, UI 스레드에서 직접 계산되는 고성능 헤더 엔진 설계.",
								result:
									"모든 디바이스에서 끊김 없는 60fps 스크롤 인터랙션을 구현하여 사용자 몰입감 극대화.",
							},
						]
					: [
							{
								problem:
									"Detected potential app instability due to Android 15's 16KB page size memory allocation changes.",
								thinking:
									"Analyzed native memory management shifts and executed binary optimizations aligned with new OS alignment standards while maintaining backward compatibility.",
								result:
									"Secured 100% execution stability on Android 15 and proactively prevented unexpected crashes.",
							},
							{
								problem:
									"Experienced layout glitches and flickering in headers during complex scroll interactions.",
								thinking:
									"Designed a high-performance header engine calculated directly on the UI thread using Reanimated Worklets to offload the JS thread.",
								result:
									"Achieved seamless 60fps scroll interactions across all devices, maximizing user immersion.",
							},
						],
			icon: <Smartphone className="text-brand-accent" />,
			color: "bg-blue-50/50",
		},
		{
			id: "pethroom-app",
			title: lang === "ko" ? "페스룸 케어 App" : "Pethroom Care App",
			category: "App",
			subtitle:
				lang === "ko"
					? "반려동물 IoT 생태계 통합 플랫폼 (Biskit IoT 하드웨어 연동)"
					: "Pet IoT Ecosystem Platform (Biskit IoT Integration)",
			tags: ["React Native", "WebSocket", "Bluetooth Low Energy", "TDD"],
			link: "https://apps.apple.com/kr/app/%ED%8E%98%EC%8A%A4%EB%A3%B8-%EC%BC%80%EC%96%B4-pethroom-care/id1634567890",
			images: [
				"https://picsum.photos/seed/pethroom1/800/1200",
				"https://picsum.photos/seed/pethroom2/800/1200",
			],
			achievements:
				lang === "ko"
					? [
							{
								problem:
									"초기 서비스 가동 시 비정상 종료율이 3.89%에 달해 사용자 UX와 브랜드 신뢰도 하락.",
								thinking:
									"Firebase Crashlytics 데이터 패턴을 분석하여 빈번한 스레드 경합 지점을 파악, Atomic Design 기반의 견고한 컴포넌트 아키텍처로 리팩토링 결정.",
								result:
									"비정상 종료율을 0.02%로 획기적으로 개선하며 상용 수준의 서비스 품질(SLO) 달성.",
							},
							{
								problem:
									"IoT 기기 상태 변경 시 클라이언트와 서버 간의 상태 동기화 지연으로 인한 사용자 피드백 저하.",
								thinking:
									"실시간성 확보를 위해 WebSocket 프로토콜 기반의 전역 싱크 매니저를 도입하고, 네트워크 불안정 시 재연결 전략 최적화.",
								result:
									"기기 제어 반응 속도를 200ms 이내로 단축하여 즉각적인 사용자 경험 제공.",
							},
						]
					: [
							{
								problem:
									"Initial crash rate reached 3.89%, degrading user experience and brand trust.",
								thinking:
									"Analyzed Crashlytics data patterns to identify thread contention points and refactored into a robust architecture based on Atomic Design.",
								result:
									"Improved crash rate to 0.02%, achieving commercial-grade Service Level Objectives (SLO).",
							},
							{
								problem:
									"Latency in state synchronization between client and server during IoT device state changes.",
								thinking:
									"Introduced a global sync manager based on WebSocket and optimized reconnection strategies for network instability.",
								result:
									"Reduced device control response time to under 200ms, providing near-instant user feedback.",
							},
						],
			icon: <Zap className="text-brand-accent" />,
			color: "bg-orange-50/50",
		},
		{
			id: "pethroom-admin",
			title: lang === "ko" ? "페스룸 케어 Admin" : "Pethroom Care Admin",
			category: "Web",
			subtitle:
				lang === "ko"
					? "글로벌 IoT 서비스 통합 관제 및 운영 시스템"
					: "Global IoT Service Integrated Control & Ops System",
			tags: ["React", "MUI DataGrid", "RBAC", "Automated QA"],
			images: [
				"https://picsum.photos/seed/admin1/1200/800",
				"https://picsum.photos/seed/admin2/1200/800",
				"https://picsum.photos/seed/admin3/1200/800",
			],
			achievements:
				lang === "ko"
					? [
							{
								problem:
									"다국어 서비스 및 IoT 기기 급증으로 관리 권한 체계가 복잡해지며 보안 사고 위험과 운영 비효율 증대.",
								thinking:
									"확장성과 보안을 동시에 확보하기 위해 역할 기반 권한 제어(RBAC) 시스템을 도입하고, 반복되는 인증 로직을 API 인터셉터로 표준화.",
								result:
									"권한 관리 프로세스 자동화로 운영 리소스를 50% 절감하고 보안 규정 준수 강화.",
							},
						]
					: [
							{
								problem:
									"Growing complexity in global services and IoT devices led to increased security risks and operational inefficiency.",
								thinking:
									"Implemented a Role-Based Access Control (RBAC) system for scalability and security, standardizing authentication logic through API interceptors.",
								result:
									"Reduced operational overhead by 50% via automated permission management and enhanced security compliance.",
							},
						],
			icon: <BarChart3 className="text-brand-accent" />,
			color: "bg-amber-50/50",
		},
		{
			id: "findirect",
			title:
				lang === "ko"
					? "핀다이렉트 중고폰 진단"
					: "Findirect Device Check",
			category: "Native/PWA",
			subtitle:
				lang === "ko"
					? "플랫폼 경계를 넘는 하드웨어 정밀 검사 프레임워크"
					: "Cross-Platform Hardware Precision Framework",
			tags: ["Swift", "Native Modules", "Blob manipulation", "PWA"],
			images: [
				"https://picsum.photos/seed/findirect1/800/1200",
				"https://picsum.photos/seed/findirect2/1200/800",
			],
			achievements:
				lang === "ko"
					? [
							{
								problem:
									"중고폰 진단 시 PWA 환경의 브라우저 샌드박스 제약으로 인해 FaceID 및 정밀 센서 데이터 접근의 기술적 한계 직면.",
								thinking:
									"브라우저의 한계를 극복하기 위해 Swift로 네이티브 진단 모듈을 개발하고, JS 브릿지를 통해 데이터 손실 없는 하이브리드 구조 설계.",
								result:
									"네이티브 수준의 정밀 진단 프레임워크를 구축하여 검사 정확도 99.9% 달성 및 사용자 편의성 확보.",
							},
						]
					: [
							{
								problem:
									"Faced technical limits in accessing FaceID and precision sensor data due to PWA browser sandbox constraints.",
								thinking:
									"Developed native diagnostic modules in Swift and designed a hybrid bridge structure to bypass browser limitations without data loss.",
								result:
									"Successfully built a native-grade precision diagnostic framework, achieving 99.9% accuracy.",
							},
						],
			icon: <Terminal className="text-brand-accent" />,
			color: "bg-purple-50/50",
		},
		{
			id: "wnms",
			title:
				lang === "ko"
					? "WNMS (Network Management)"
					: "WNMS (Network Management)",
			category: "Web",
			subtitle:
				lang === "ko"
					? "대규모 무선 네트워크 장비 관제 및 지능형 모니터링"
					: "Large-scale Wireless Network Device Management & Intelligent Monitoring",
			tags: ["React", "Kakao Map API", "ECharts", "State Orchestration"],
			images: [
				"https://picsum.photos/seed/wnms1/1200/800",
				"https://picsum.photos/seed/wnms2/1200/800",
			],
			achievements:
				lang === "ko"
					? [
							{
								problem:
									"전국 단위 수만 개의 네트워크 장비 상태를 한눈에 파악하기 어렵고, 실시간 트래픽 데이터 시각화 시 렌더링 부하 발생.",
								thinking:
									"Kakao Map의 클러스터링 알고리즘을 도입해 시각적 노이즈를 제어하고, ECharts의 렌더링 파티셔닝 기술로 대용량 데이터 처리 최적화.",
								result:
									"장비 관제 효율 40% 개선 및 대용량 데이터 환경에서도 끊김 없는 실시간 모니터링 대시보드 구현.",
							},
						]
					: [
							{
								problem:
									"Difficulty in overseeing tens of thousands of devices nationwide and rendering bottlenecks during real-time traffic visualization.",
								thinking:
									"Applied Kakao Map clustering algorithms to reduce visual noise and optimized large-scale data processing via ECharts rendering partitions.",
								result:
									"Improved monitoring efficiency by 40% and delivered a lag-free real-time dashboard for massive data environments.",
							},
						],
			icon: <Globe className="text-brand-accent" />,
			color: "bg-emerald-50/50",
		},
	];
}
