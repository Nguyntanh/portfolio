import { useState, type ReactNode } from "react";
import {
  CheckCircle2,
  ExternalLink,
  FileText,
  Mail,
  Phone,
  Workflow,
  Download,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Database,
  Calendar,
  Users,
  Briefcase,
  Copy,
  Check,
  MapPin,
} from "lucide-react";

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.32a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
    </svg>
  );
}

// --- DATA TYPES ---
interface ProjectActionItem {
  title: string;
  detail: ReactNode;
}

interface ProjectMetric {
  value: string;
  label: string;
  sub: string;
}

interface ProjectLink {
  label: string;
  href: string;
  isPrimary?: boolean;
}

interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  role: string;
  context: string;
  actions: ProjectActionItem[];
  metrics: ProjectMetric[];
  results: ReactNode[];
  artifacts: string[];
  techStack: string[];
  links: ProjectLink[];
}

// --- CASE STUDIES DATA ---
const CASE_STUDIES: CaseStudy[] = [
  {
    id: "smart-wms",
    tag: "Kho vận & Chuỗi cung ứng",
    title: "Hệ thống Quản lý Kho hàng Thông minh (Smart WMS)",
    role: "Technical Business Analyst (Core System Modeler)",
    context:
      "Nền tảng quản trị kho hàng đa chi nhánh giải quyết bài toán lãng phí thể tích lưu trữ (25–40%), rút ngắn thời gian gom hàng (từ 15–30 phút/đơn) và loại bỏ nguy cơ xuất âm kho do tranh chấp dữ liệu khi nhiều nhân viên cùng xử lý một mã hàng (SKU).",
    actions: [
      {
        title: "Quy chuẩn hóa nghiệp vụ",
        detail: (
          <span>
            Xây dựng tài liệu SRS và chuẩn hóa 10 quy tắc nghiệp vụ bất biến cho 4 luồng vận hành:{" "}
            <strong>Inbound, Put-away, Picking, Outbound</strong> qua 12+ sơ đồ Use Case và Sequence Diagrams.
          </span>
        ),
      },
      {
        title: "Mô hình hóa không gian 3D",
        detail: (
          <span>
            Chuyển hóa bài toán xếp dỡ thành tập ràng buộc kỹ thuật (tải trọng, thể tích 3 chiều, tần suất quay vòng SKU theo{" "}
            <strong>ma trận ABC</strong>) và đặc tả logic định tuyến <strong>S-Shape</strong> cho đội ngũ backend.
          </span>
        ),
      },
      {
        title: "Toàn vẹn dữ liệu & Concurrency",
        detail: (
          <span>
            Thiết kế Data Dictionary cho 18 bảng chuẩn 3NF, xác lập công thức Tồn khả dụng bất biến (
            <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded font-mono text-xs">
              Available = OnHand - Reserved - Frozen
            </code>
            ) và đặc tả khóa bi quan (
            <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded font-mono text-xs">
              SELECT ... FOR UPDATE
            </code>
            ) ngăn chặn triệt để Race Condition.
          </span>
        ),
      },
    ],
    metrics: [
      {
        value: "0%",
        label: "Bất nhất dữ liệu",
        sub: "Triệt tiêu Race Condition & xuất âm kho",
      },
      {
        value: "412 TPS",
        label: "Thông lượng tải (P95 < 380ms)",
        sub: "Kiểm thử 500 Virtual Users đồng thời",
      },
      {
        value: "-58.5%",
        label: "Quãng đường nhặt hàng",
        sub: "Tăng tỷ lệ lấp đầy thể tích từ 58.4% lên 81.2%",
      },
    ],
    results: [
      (
        <p key="r1" className="text-slate-600 leading-relaxed text-sm">
          <strong className="text-slate-900 font-semibold">Toàn vẹn tồn kho:</strong> Loại bỏ hoàn toàn rủi ro xuất âm kho và sai lệch tồn khả dụng trên môi trường thực nghiệm; nghiệm thu đạt tỷ lệ bất nhất dữ liệu bằng 0 qua 1.000 test case đồng thời (500 Virtual Users, 412 TPS, P95 &lt; 380ms) nhờ công thức tồn khả dụng thời gian thực kết hợp Row-level Pessimistic Locking trên MySQL InnoDB.
        </p>
      ),
      (
        <p key="r2" className="text-slate-600 leading-relaxed text-sm">
          <strong className="text-slate-900 font-semibold">Hiệu suất vận hành:</strong> Cắt giảm 58.5% quãng đường di chuyển (từ 1.842m xuống 765m/đợt) và nâng tỷ lệ lấp đầy thể tích từ 58.4% lên 81.2% (tăng 22.8% dung tích khai thác) qua mô hình mô phỏng 1.000 vị trí ô chứa (Bins) với thuật toán định tuyến S-Shape và ma trận ABC.
        </p>
      ),
    ],
    artifacts: [
      "BRD / SRS Document",
      "Data Dictionary (18 bảng 3NF)",
      "Use Case & Sequence Diagrams",
      "NFRs Verification Report",
    ],
    techStack: ["MySQL 8.0 (InnoDB)", "TypeORM", "Redis", "NestJS", "React", "Docker"],
    links: [
      {
        label: "Xem Báo cáo Đặc tả & ERD (BRD)",
        href: "/docs/SmartWMS_Final_Report.pdf#page=23",
        isPrimary: true,
      },
      {
        label: "Đặc tả Thuật toán & Kiến trúc",
        href: "/docs/SmartWMS_Final_Report.pdf#page=17",
      },
      {
        label: "Báo cáo Nghiệm thu Tải",
        href: "/docs/SmartWMS_Final_Report.pdf#page=79",
      },
    ],
  },
  {
    id: "internhub",
    tag: "Quản trị Nhân tài Doanh nghiệp",
    title: "Nền tảng Quản lý Thực tập sinh Tập trung (InternHub)",
    role: "Technical Business Analyst (Workflows & Architecture)",
    context:
      "Số hóa toàn diện vòng đời thực tập sinh thay thế quy trình thủ công qua Excel/Zalo; tự động hóa cấp và thu hồi quyền truy cập, giảm tải tác vụ hành chính và chuẩn hóa thang đo thẩm định năng lực đa chiều.",
    actions: [
      {
        title: "Chuẩn hóa luồng & API Contracts",
        detail: (
          <span>
            Phân rã 33 INVEST User Stories, quản trị Sprint Backlog, chuẩn hóa 38 RESTful API Contracts (OpenAPI kèm Error Catalog chi tiết) giúp đội ngũ bàn giao 100% phạm vi MVP đúng hạn qua 5 Sprints.
          </span>
        ),
      },
      {
        title: "Bảo vệ dữ liệu lịch sử",
        detail: (
          <span>
            Thiết kế Data Dictionary cho 26 bảng, đặc tả cấu trúc JSONB Snapshots đóng băng tiêu chí chấm Rubric tại thời điểm đánh giá và cơ chế Append-Only Audit Trail nhằm bảo toàn dữ liệu.
          </span>
        ),
      },
      {
        title: "Xử lý nền & Chống Deadlock",
        detail: (
          <span>
            Đặc tả hàng đợi BullMQ/Redis để import streaming file dữ liệu &gt; 1.000 dòng trong 30 giây, quy định cơ chế khóa tuần tự (
            <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded font-mono text-xs">
              ORDER BY mentor_id ASC
            </code>
            ) chống Deadlock khi gán Mentor hàng loạt.
          </span>
        ),
      },
    ],
    metrics: [
      {
        value: "> 70%",
        label: "Thời gian xử lý thủ công",
        sub: "Cắt giảm trong toàn bộ vòng đời thực tập sinh",
      },
      {
        value: "< 500ms",
        label: "Thu hồi quyền truy cập",
        sub: "Độ trễ API Dashboard P95 < 300ms",
      },
      {
        value: "100%",
        label: "Kiểm toán phiếu chấm",
        sub: "Cảnh báo độ lệch điểm và đóng băng Rubric",
      },
    ],
    results: [
      (
        <p key="r1" className="text-slate-600 leading-relaxed text-sm">
          <strong className="text-slate-900 font-semibold">Hiệu quả vận hành:</strong> Cắt giảm hơn 70% thời gian xử lý thủ công trong toàn bộ vòng đời thực tập sinh; tốc độ thu hồi phiên truy cập dưới 500ms và độ trễ API Dashboard đạt P95 &lt; 300ms nhờ thiết lập máy trạng thái (FSM) 8 phân hệ kết hợp Redis Blacklist phân tán và hàng đợi BullMQ.
        </p>
      ),
      (
        <p key="r2" className="text-slate-600 leading-relaxed text-sm">
          <strong className="text-slate-900 font-semibold">Tính khách quan dữ liệu:</strong> Loại bỏ hoàn toàn rủi ro sai lệch dữ liệu đánh giá và kiểm soát độ lệch điểm cảm tính; 100% phiếu chấm được kiểm toán toàn vẹn kèm cờ cảnh báo biên độ lệch |S_self - S_mentor| &gt; 3.0 thông qua cơ chế Blind Review song song và Immutable JSONB Snapshots.
        </p>
      ),
    ],
    artifacts: [
      "BRD / SRS Document",
      "User Stories & INVEST Backlog",
      "API Contracts Master (OpenAPI)",
      "Edge Cases & Concurrency Risk Matrix",
    ],
    techStack: ["PostgreSQL 16 (JSONB & GIN)", "Redis", "BullMQ", "NestJS", "React", "Docker"],
    links: [
      {
        label: "Tài liệu Đặc tả & FSM (BRD)",
        href: "https://drive.google.com/file/d/1b_7t6mWdC27bUutBzp_BymuW5kNYZM7t/view?usp=sharing",
        isPrimary: true,
      },
      {
        label: "API Contracts & Error Catalog",
        href: "https://docs.google.com/spreadsheets/d/1uRIa9cqvaWmvsLtL5lNIetPz_nX8Z6-G8MXU-r7NcBY/edit?usp=sharing",
      },
      {
        label: "Ma trận Concurrency & Rủi ro",
        href: "https://docs.google.com/spreadsheets/d/1ePRmhHBshXBfGFiMU9lLguxIRUIyRa8goj6EFtPVnv0/edit?usp=sharing",
      },
    ],
  },
];

// --- SKILL PILLARS ---
interface SkillCategory {
  title: string;
  desc: string;
  groups: { name: string; items: string[] }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Phân tích Nghiệp vụ & Quy trình",
    desc: "Khảo sát, phân rã yêu cầu và mô hình hóa trực quan luồng nghiệp vụ.",
    groups: [
      {
        name: "Tài liệu hóa yêu cầu",
        items: ["SRS", "BRD", "INVEST User Stories", "Acceptance Criteria (Given-When-Then)", "Gherkin"],
      },
      {
        name: "Sơ đồ hóa hệ thống",
        items: ["UML 2.0 (Use Case, Sequence, Activity)", "BPMN 2.0"],
      },
      {
        name: "Mô hình hóa logic",
        items: ["Finite State Machine (FSM)", "Business Invariants", "Ma trận phân loại ABC", "Định tuyến S-Shape"],
      },
    ],
  },
  {
    title: "Dữ liệu & Xử lý Giao dịch",
    desc: "Thiết kế cơ sở dữ liệu quan hệ, bảo đảm toàn vẹn và kiểm soát đồng thời.",
    groups: [
      {
        name: "Mô hình dữ liệu",
        items: ["Conceptual/Logical Data Modeling", "Chuẩn hóa 3NF", "Data Dictionary"],
      },
      {
        name: "Toàn vẹn & Đồng thời",
        items: ["Row-level Pessimistic Locking", "Chống Deadlock (ORDER BY id ASC)", "ACID Transactions"],
      },
      {
        name: "Kiểm toán & Lưu trữ",
        items: ["Immutable JSONB Snapshots", "Append-Only Audit Logging", "Check Constraints (CHECK >= 0)"],
      },
    ],
  },
  {
    title: "Tích hợp API & Hiệu năng",
    desc: "Đặc tả giao tiếp dịch vụ và nghiệm thu chỉ số phi chức năng.",
    groups: [
      {
        name: "Chuẩn hóa API",
        items: ["RESTful API Contracts", "OpenAPI 3.0 / Swagger", "Error Catalog", "Idempotency Pattern"],
      },
      {
        name: "Xử lý nền & Streaming",
        items: ["BullMQ / Redis", "Xử lý streaming bất đồng bộ", "Retry & Exponential Backoff"],
      },
      {
        name: "Kiểm soát NFRs",
        items: ["Đo lường độ trễ P95 (< 300ms / 380ms)", "Throughput (TPS)", "Session Invalidation (< 500ms)"],
      },
    ],
  },
  {
    title: "Agile & Quản trị Dự án",
    desc: "Điều phối Sprint, kiểm soát phạm vi MVP và cầu nối kỹ thuật Ops - Dev.",
    groups: [
      {
        name: "Quy trình chuyển giao",
        items: ["Agile/Scrum", "Phân rã User Story", "Quản trị Sprint Backlog", "Kiểm soát Scope Creep (MVP)"],
      },
      {
        name: "Công cụ & Hợp tác",
        items: ["Jira", "Confluence", "Postman", "Draw.io", "Git", "Mock API"],
      },
      {
        name: "Phân tích tác động",
        items: ["Cầu nối Ops-to-Dev", "Đàm phán kỹ thuật với Lead Engineer", "Phân tích trường hợp biên (Edge Cases)"],
      },
    ],
  },
];

// --- MILESTONES DATA ---
interface MilestoneItem {
  period: string;
  project: string;
  affiliation: string;
  role: string;
  team: string;
  highlights: { title: string; content: string }[];
}

const MILESTONES: MilestoneItem[] = [
  {
    period: "06/2026 – 09/2026",
    project: "Hệ thống Quản lý Kho hàng Thông minh (Smart WMS)",
    affiliation: "Đồ án Kỹ thuật Phần mềm Xuất sắc – Đại học CMC",
    role: "Technical Business Analyst (Core System Modeler)",
    team: "Nhóm 5 thành viên (Full-stack) · Agile/Scrum",
    highlights: [
      {
        title: "Đặc tả luồng kho & Kiến trúc dữ liệu",
        content:
          "Xây dựng SRS và 10 quy tắc nghiệp vụ bất biến cho 4 luồng vận hành cốt lõi (Inbound, Outbound, Put-away, Picking) qua 12+ sơ đồ Use Case & Sequence; thiết kế Data Dictionary cho 18 bảng chuẩn 3NF triệt tiêu sai lệch logic giữa Vận hành và Dev.",
      },
      {
        title: "Mô hình hóa không gian kho",
        content:
          "Quy chuẩn hóa logic gợi ý vị trí kho theo thể tích 3D kết hợp phân loại ABC và định tuyến nhặt hàng S-Shape, hỗ trợ đội ngũ dev kiểm chứng thực tế tối ưu 22.8% dung tích và giảm 58.5% quãng đường nhặt hàng.",
      },
      {
        title: "Kiểm soát đồng thời & Nghiệm thu NFRs",
        content:
          "Đặc tả cơ chế khóa bi quan cấp dòng xử lý Race Condition, loại bỏ rủi ro xuất âm kho và cùng đội ngũ nghiệm thu hệ thống đạt 412 TPS với độ trễ P95 < 380ms dưới tải 500 VUs.",
      },
    ],
  },
  {
    period: "01/2026 – 04/2026",
    project: "Nền tảng Quản lý Thực tập sinh Tập trung (InternHub)",
    affiliation: "Enterprise Web Platform",
    role: "Technical Business Analyst (Workflows & Architecture)",
    team: "Nhóm 5 thành viên · 5 Sprints",
    highlights: [
      {
        title: "Chuẩn hóa Backlog & API Contracts",
        content:
          "Phân rã 33 INVEST User Stories, quản trị Sprint Backlog, chuẩn hóa 38 API Contracts (OpenAPI) kèm Error Catalog, bàn giao 100% phạm vi MVP đúng hạn qua 5 Sprints.",
      },
      {
        title: "Bảo vệ toàn vẹn dữ liệu & Chống Deadlock",
        content:
          "Xây dựng Data Dictionary cho 26 bảng; ứng dụng Finite State Machine (FSM), Immutable JSONB Snapshots và Append-Only Audit Trail bảo toàn toàn vẹn dữ liệu đánh giá lịch sử.",
      },
      {
        title: "Tối ưu hóa quy trình & Xử lý bất đồng bộ",
        content:
          "Đặc tả kiến trúc hàng đợi BullMQ xử lý streaming file > 1.000 dòng trong 30 giây, nghiệm thu tiêu chuẩn NFRs độ trễ P95 < 300ms và thu hồi phiên < 500ms, cắt giảm > 70% thao tác thủ công.",
      },
    ],
  },
];

export default function Portfolio() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("nguyntanh2k5@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-bold text-slate-900 text-base sm:text-lg tracking-tight group-hover:text-blue-600 transition-colors">
              Nguyễn Tuấn Anh
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
              Technical BA
            </span>
          </a>

          <div className="flex items-center gap-1 sm:gap-6 text-xs sm:text-sm font-medium text-slate-600">
            <a href="#projects" className="hidden sm:inline-block hover:text-blue-600 transition-colors py-1 px-2">
              Dự án
            </a>
            <a href="#skills" className="hidden sm:inline-block hover:text-blue-600 transition-colors py-1 px-2">
              Kỹ năng
            </a>
            <a href="#experience" className="hidden sm:inline-block hover:text-blue-600 transition-colors py-1 px-2">
              Kinh nghiệm
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-blue-600 text-white font-medium text-xs sm:text-sm transition-all shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Liên hệ</span>
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* 2. HERO SECTION */}
        <section className="py-16 sm:py-24 border-b border-slate-200/70 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            {/* Status chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Sẵn sàng cho vị trí Technical BA / Systems Analyst</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.25] mb-6 max-w-4xl">
              Chuyển hóa bài toán vận hành phức tạp thành{" "}
              <span className="text-blue-600">đặc tả kiến trúc dữ liệu chuẩn xác</span>, API Contracts nhất quán và logic giao dịch bền vững.
            </h1>

            {/* Paragraph / Intro */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
              Kỹ sư phần mềm định hướng <strong>Technical Business Analyst</strong> chuyên sâu phân tích luồng nghiệp vụ end-to-end, mô hình hóa dữ liệu quan hệ (chuẩn 3NF), thiết lập máy trạng thái (FSM) và kiểm soát giao dịch đồng thời (Concurrency Control). Đóng vai trò cầu nối kỹ thuật vững chắc giữa Vận hành và Đội ngũ Phát triển, bảo đảm tính toàn vẹn dữ liệu qua hệ thống tài liệu <strong>BRD/SRS, Data Dictionary</strong> và <strong>OpenAPI</strong> chuẩn mực.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-12">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-xs"
              >
                <span>Khám phá Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/docs/Nguyen-Tuan-Anh-Technical-BA.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-800 font-medium text-sm border border-slate-200 hover:border-slate-300 transition-all shadow-2xs"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Tải Technical BA Resume (PDF)</span>
              </a>

              <div className="flex items-center gap-2 sm:ml-2 pt-2 sm:pt-0">
                <a
                  href="https://www.linkedin.com/in/nguyntanh2k5/"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  className="p-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-600 hover:text-blue-600 border border-slate-200 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:nguyntanh2k5@gmail.com"
                  title="Email"
                  className="p-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-600 hover:text-blue-600 border border-slate-200 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/70">
                <div className="text-2xl font-bold text-slate-900 mb-0.5">0% Data Drift</div>
                <div className="text-xs font-semibold text-slate-700 mb-1">Toàn vẹn dữ liệu tuyệt đối</div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Kiểm soát triệt để Race Condition khi phát sinh tranh chấp giao dịch qua kịch bản kiểm thử tải.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/70">
                <div className="text-2xl font-bold text-blue-600 mb-0.5">2 Nền tảng</div>
                <div className="text-xs font-semibold text-slate-700 mb-1">Enterprise Systems</div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Đặc tả toàn diện vòng đời hệ thống Smart WMS (Kho vận) và InternHub (Quản trị nhân tài).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/70">
                <div className="text-2xl font-bold text-emerald-600 mb-0.5">-58.5%</div>
                <div className="text-xs font-semibold text-slate-700 mb-1">Quãng đường nhặt hàng</div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Mô hình hóa tập ràng buộc không gian 3D kết hợp ma trận ABC và định tuyến S-Shape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CASE STUDIES */}
        <section id="projects" className="py-16 sm:py-24 border-b border-slate-200/70 scroll-mt-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
                Dự án Thực tế
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                Featured Technical Case Studies
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                Đặc tả hệ thống, mô hình hóa dữ liệu 3NF, kiểm soát giao dịch đồng thời và tối ưu hóa luồng nghiệp vụ với số liệu kiểm chứng thực tế.
              </p>
            </div>

            <div className="space-y-12">
              {CASE_STUDIES.map((project) => (
                <article
                  key={project.id}
                  className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-all"
                >
                  {/* Top Header */}
                  <div className="mb-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                        {project.tag}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        Vai trò: <strong className="text-slate-800 font-semibold">{project.role}</strong>
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed bg-slate-50/70 p-4 rounded-xl border border-slate-100">
                      <strong className="text-slate-900 font-medium">Bối cảnh &amp; Vấn đề:</strong> {project.context}
                    </p>
                  </div>

                  {/* Actions Taken (3 key points) */}
                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                      <Workflow className="w-4 h-4 text-blue-600" />
                      <span>Thách thức Vận hành &amp; Phân tích Kỹ thuật</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                      {project.actions.map((act, aIdx) => (
                        <div
                          key={aIdx}
                          className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-colors"
                        >
                          <div className="text-xs font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 font-mono text-xs flex items-center justify-center font-bold">
                              {aIdx + 1}
                            </span>
                            <span>{act.title}</span>
                          </div>
                          <div className="text-xs text-slate-600 leading-relaxed">
                            {act.detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact Metrics (3 chips) */}
                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                      <span>Kết quả &amp; Tác động đo lường</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3.5">
                      {project.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-100"
                        >
                          <div className="text-xl font-bold text-slate-900">{m.value}</div>
                          <div className="text-xs font-semibold text-slate-700 mt-0.5">{m.label}</div>
                          <div className="text-[11px] text-slate-500 mt-0.5">{m.sub}</div>
                        </div>
                      ))}
                    </div>

                    {/* Results Narrative */}
                    <div className="p-4 rounded-xl bg-slate-50/60 border border-slate-200/70 space-y-2.5">
                      {project.results.map((r, rIdx) => (
                        <div key={rIdx}>{r}</div>
                      ))}
                    </div>
                  </div>

                  {/* Artifacts & Tech Stack */}
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-semibold text-slate-700 mr-1 flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5 text-blue-600" />
                        Sản phẩm bàn giao:
                      </span>
                      {project.artifacts.map((art, artIdx) => (
                        <span
                          key={artIdx}
                          className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium"
                        >
                          {art}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-semibold text-slate-700 mr-1 flex items-center gap-1">
                        <Database className="w-3.5 h-3.5 text-slate-500" />
                        Công nghệ phân tích:
                      </span>
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 font-mono text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex flex-wrap items-center gap-2.5">
                    {project.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          link.isPrimary
                            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-2xs"
                            : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. TECHNICAL COMPETENCIES */}
        <section id="skills" className="py-16 sm:py-24 border-b border-slate-200/70 bg-white scroll-mt-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
                Năng lực Kỹ thuật
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                Technical BA Competencies
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                Hệ thống kỹ năng được xây dựng nhằm kết nối chặt chẽ giữa bài toán vận hành của doanh nghiệp và kiến trúc triển khai kỹ thuật.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SKILL_CATEGORIES.map((cat, cIdx) => (
                <div
                  key={cIdx}
                  className="p-6 rounded-2xl bg-slate-50/60 border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      <h3 className="text-base font-bold text-slate-900 tracking-tight">
                        {cat.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                      {cat.desc}
                    </p>

                    <div className="space-y-4">
                      {cat.groups.map((grp, gIdx) => (
                        <div key={gIdx}>
                          <div className="text-xs font-semibold text-slate-700 mb-1.5">
                            {grp.name}
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {grp.items.map((item, iIdx) => (
                              <span
                                key={iIdx}
                                className="text-xs px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-medium"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. EXPERIENCE & MILESTONES */}
        <section id="experience" className="py-16 sm:py-24 border-b border-slate-200/70 scroll-mt-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
                Hành trình Chuyển giao
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                Kinh nghiệm Thực chiến &amp; Cột mốc
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                Đúc kết từ quá trình khảo sát nghiệp vụ thực tế, mô hình hóa giải thuật, kiểm soát giao dịch đồng thời đến nghiệm thu chất lượng hệ thống.
              </p>
            </div>

            <div className="space-y-8">
              {MILESTONES.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
                    <div>
                      <div className="text-xs font-medium text-blue-600 mb-1 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{m.period}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500">{m.affiliation}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                        {m.project}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                        <span className="font-semibold text-slate-900">{m.role}</span>
                      </div>
                      <span className="text-slate-300">•</span>
                      <div className="flex items-center gap-1 text-slate-500">
                        <Users className="w-3.5 h-3.5" />
                        <span>{m.team}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {m.highlights.map((h, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-4 rounded-xl bg-slate-50/70 border border-slate-100 flex flex-col justify-between"
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>{h.title}</span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {h.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CONTACT & FOOTER */}
        <section id="contact" className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Kết nối trực tiếp</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                Sẵn sàng đồng hành cùng doanh nghiệp của bạn
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Nếu đội ngũ của bạn đang tìm kiếm một Technical BA sở hữu tư duy hệ thống vững vàng, thấu hiểu quy trình vận hành và có khả năng trao đổi trực tiếp cùng các kỹ sư phát triển — hãy liên hệ với mình ngay hôm nay.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {/* Email */}
              <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-lg bg-blue-50 text-blue-600">
                      <Mail className="w-4 h-4" />
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">Email</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Hộp thư liên hệ
                  </div>
                  <div className="text-sm font-bold text-slate-900 font-mono break-all mb-4">
                    nguyntanh2k5@gmail.com
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-slate-200/60">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex-1 py-1.5 px-2.5 rounded-lg text-xs font-medium bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center gap-1 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Đã sao chép</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Sao chép</span>
                      </>
                    )}
                  </button>
                  <a
                    href="mailto:nguyntanh2k5@gmail.com"
                    className="py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Gửi thư</span>
                  </a>
                </div>
              </div>

              {/* Phone / Zalo */}
              <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                      <Phone className="w-4 h-4" />
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">Điện thoại / Zalo</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Hotline &amp; Zalo
                  </div>
                  <div className="text-base font-bold text-slate-900 font-mono mb-4">
                    0969 236 054
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-slate-200/60">
                  <a
                    href="tel:0969236054"
                    className="flex-1 py-1.5 px-2.5 rounded-lg text-xs font-medium bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center gap-1 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    <span>Gọi điện</span>
                  </a>
                  <a
                    href="https://zalo.me/0969236054"
                    target="_blank"
                    rel="noreferrer"
                    className="py-1.5 px-3 rounded-lg text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Chat Zalo</span>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-lg bg-slate-100 text-slate-700">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">Địa bàn làm việc</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Khu vực
                  </div>
                  <div className="text-sm font-bold text-slate-900 mb-2">
                    Vạn Phúc, Hà Đông, Hà Nội
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/60 text-xs text-slate-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Onboard tại HN hoặc Hybrid / Remote</span>
                </div>
              </div>
            </div>

            {/* Quick Resume Download Banner */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
              <div>
                <h3 className="text-base sm:text-lg font-bold">
                  Hồ sơ Năng lực Technical Business Analyst
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Tải bản Resume đầy đủ cập nhật các dự án, kỹ năng phân tích và công nghệ.
                </p>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <a
                  href="/docs/Nguyen-Tuan-Anh-Technical-BA.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Tải Resume (PDF)</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/nguyntanh2k5/"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Thiết kế với định hướng kỹ thuật chuẩn mực và bảo đảm tính toàn vẹn dữ liệu.</span>
              </div>

              <div>
                © 2026 Nguyễn Tuấn Anh · Technical BA Portfolio
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
