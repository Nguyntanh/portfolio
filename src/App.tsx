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
  Boxes,
  Server,
  Calendar,
  Users,
  Briefcase,
  Milestone,
  Copy,
  Check,
  MapPin,
  Sparkles,
} from "lucide-react";

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
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

// --- TYPES ---
interface AnalysisActionItem {
  title: string;
  detail: ReactNode;
}

interface ProjectImpactMetric {
  value: string;
  label: string;
  detail: string;
  color: "emerald" | "blue" | "indigo";
}

interface ProjectActionLink {
  label: string;
  href: string;
  isPrimary?: boolean;
}

interface FeaturedProject {
  id: string;
  badgeNumber: string;
  title: string;
  domain: string;
  role: string;
  context: string;
  analysisActions: AnalysisActionItem[];
  impactMetrics: ProjectImpactMetric[];
  googleXyzParagraphs: ReactNode[];
  deliverables: string[];
  techStack: string[];
  actionLinks: ProjectActionLink[];
}

// --- FEATURED PROJECTS DATA ---
const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "smart-wms",
    badgeNumber: "PROJECT 01",
    title: "HỆ THỐNG QUẢN LÝ KHO HÀNG THÔNG MINH (SMART WMS)",
    domain: "LOGISTICS & SUPPLY CHAIN AUTOMATION",
    role: "Technical Business Analyst (Core System Modeler)",
    context:
      "Nền tảng quản trị kho hàng đa chi nhánh nhằm giải quyết tình trạng lãng phí thể tích lưu trữ (25–40%), thời gian gom hàng kéo dài (15–30 phút/đơn) và nguy cơ xuất âm kho do tranh chấp dữ liệu khi nhiều nhân viên cùng nhặt một mã hàng (SKU).",
    analysisActions: [
      {
        title: "Quy chuẩn hóa nghiệp vụ",
        detail: (
          <span>
            Xây dựng tài liệu <strong className="text-slate-900 font-semibold">SRS</strong> và chuẩn hóa{" "}
            <strong className="text-slate-900 font-semibold">10 quy tắc nghiệp vụ bất biến</strong> cho 4 luồng vận hành cốt lõi:{" "}
            <span className="text-blue-700 font-medium">Inbound, Put-away, Picking, Outbound</span> qua 12+ sơ đồ Use Case và Sequence Diagrams.
          </span>
        ),
      },
      {
        title: "Mô hình hóa không gian",
        detail: (
          <span>
            Chuyển hóa bài toán xếp dỡ thành tập ràng buộc kỹ thuật (tải trọng kệ, thể tích 3 chiều, tần suất quay vòng SKU theo{" "}
            <strong className="text-slate-900 font-semibold">ma trận ABC</strong>) và đặc tả logic định tuyến{" "}
            <strong className="text-slate-900 font-semibold">S-Shape</strong> cho đội ngũ backend.
          </span>
        ),
      },
      {
        title: "Toàn vẹn dữ liệu",
        detail: (
          <span>
            Thiết kế Data Dictionary cho 18 bảng chuẩn <strong className="text-slate-900 font-semibold">3NF</strong>, xác lập công thức Tồn khả dụng bất biến (
            <code className="bg-slate-100 text-blue-800 px-1.5 py-0.5 rounded font-mono text-xs font-semibold border border-slate-200">
              Available = OnHand - Reserved - Frozen
            </code>
            ) và đặc tả cơ chế khóa bi quan cấp dòng (
            <code className="bg-slate-100 text-blue-800 px-1.5 py-0.5 rounded font-mono text-xs font-semibold border border-slate-200">
              SELECT ... FOR UPDATE
            </code>
            ) nhằm ngăn chặn triệt để Race Condition.
          </span>
        ),
      },
    ],
    impactMetrics: [
      {
        value: "0%",
        label: "Bất Nhất Dữ Liệu",
        detail: "Tỷ lệ bất nhất bằng 0 qua 1.000 test case đồng thời (500 Virtual Users)",
        color: "emerald",
      },
      {
        value: "412 TPS",
        label: "Thông Lượng P95 < 380ms",
        detail: "Khóa bi quan cấp dòng (Pessimistic Locking) trên MySQL InnoDB",
        color: "blue",
      },
      {
        value: "-58.5%",
        label: "Quãng Đường Nhặt Hàng",
        detail: "Giảm từ 1.842m xuống 765m/đợt; tăng tỷ lệ lấp đầy từ 58.4% lên 81.2%",
        color: "indigo",
      },
    ],
    googleXyzParagraphs: [
      (
        <p key="p1" className="text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Toàn vẹn tồn kho</strong>{" "}
          <span className="inline-block px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px] font-bold border border-blue-500/30">
            [X]
          </span>
          : Loại bỏ hoàn toàn rủi ro xuất âm kho và sai lệch tồn khả dụng trên môi trường thực nghiệm, đo lường bằng{" "}
          <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold border border-emerald-500/30">
            [Y]
          </span>
          :{" "}
          <span className="text-emerald-300 font-medium">
            Tỷ lệ bất nhất dữ liệu bằng 0 qua 1.000 kịch bản kiểm thử tải đồng thời (500 Virtual Users) đạt thông lượng 412 TPS (P95 &lt; 380ms)
          </span>
          , thông qua việc{" "}
          <span className="inline-block px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono text-[10px] font-bold border border-indigo-500/30">
            [Z]
          </span>
          : Đặc tả công thức tồn khả dụng thời gian thực kết hợp cơ chế Row-level Pessimistic Locking trên{" "}
          <span className="text-slate-200 font-medium">MySQL InnoDB</span>.
        </p>
      ),
      (
        <p key="p2" className="text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Hiệu suất nhặt hàng</strong>{" "}
          <span className="inline-block px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px] font-bold border border-blue-500/30">
            [X]
          </span>
          : Cắt giảm 58.5% quãng đường di chuyển (từ 1.842m xuống 765m/đợt) và nâng tỷ lệ lấp đầy thể tích từ 58.4% lên 81.2% (tăng 22.8% dung tích khai thác), đo lường bằng{" "}
          <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold border border-emerald-500/30">
            [Y]
          </span>
          :{" "}
          <span className="text-emerald-300 font-medium">
            Mô hình mô phỏng 1.000 vị trí ô chứa (Bins) tiêu chuẩn
          </span>
          , thông qua việc{" "}
          <span className="inline-block px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono text-[10px] font-bold border border-indigo-500/30">
            [Z]
          </span>
          : Đặc tả logic gợi ý vị trí kho theo ma trận ABC và thuật toán định tuyến nhặt hàng{" "}
          <span className="text-slate-200 font-medium">S-Shape</span>.
        </p>
      ),
    ],
    deliverables: [
      "BRD/SRS Document",
      "Data Dictionary 18 Entities (chuẩn 3NF)",
      "Use Case & Sequence Diagrams",
      "NFRs Verification Report",
    ],
    techStack: [
      "MySQL 8.0 (InnoDB)",
      "TypeORM",
      "Redis",
      "NestJS",
      "ReactJS",
      "Docker",
    ],
    actionLinks: [
      {
        label: "System Specification & ERD (BRD)",
        href: "/docs/SmartWMS_Final_Report.pdf#page=23",
        isPrimary: true,
      },
      {
        label: "Algorithm & Architecture Spec",
        href: "/docs/SmartWMS_Final_Report.pdf#page=17",
      },
      {
        label: "Verification & Benchmark Report",
        href: "/docs/SmartWMS_Final_Report.pdf#page=79",
      },
    ],
  },
  {
    id: "internhub",
    badgeNumber: "PROJECT 02",
    title: "NỀN TẢNG QUẢN LÝ THỰC TẬP SINH TẬP TRUNG (INTERNHUB)",
    domain: "ENTERPRISE TALENT & PERFORMANCE PLATFORM",
    role: "Technical Business Analyst (Workflows & Architecture)",
    context:
      "Số hóa toàn diện vòng đời thực tập sinh, thay thế quy trình phân mảnh qua Excel/Zalo; loại bỏ chậm trễ trong cấp/thu hồi quyền truy cập, giảm tải tác vụ hành chính và chuẩn hóa thang đo thẩm định Rubric đa chiều.",
    analysisActions: [
      {
        title: "Chuẩn hóa luồng & API",
        detail: (
          <span>
            Phân rã <strong className="text-slate-900 font-semibold">33 INVEST User Stories</strong>, quản trị Sprint Backlog, chuẩn hóa{" "}
            <strong className="text-slate-900 font-semibold">38 RESTful API Contracts</strong> (OpenAPI kèm Error Catalog chi tiết) giúp đội ngũ kỹ thuật bàn giao 100% phạm vi MVP qua 5 Sprints.
          </span>
        ),
      },
      {
        title: "Bảo vệ toàn vẹn dữ liệu",
        detail: (
          <span>
            Thiết kế Data Dictionary cho 26 bảng, đặc tả cấu trúc{" "}
            <strong className="text-slate-900 font-semibold">JSONB Snapshots</strong> đóng băng tiêu chí chấm Rubric tại thời điểm đánh giá và cơ chế Append-Only Audit Trail nhằm bảo toàn dữ liệu lịch sử.
          </span>
        ),
      },
      {
        title: "Xử lý nền & Chống Deadlock",
        detail: (
          <span>
            Đặc tả kiến trúc hàng đợi <strong className="text-slate-900 font-semibold">BullMQ/Redis</strong> để import streaming file dữ liệu &gt; 1.000 dòng trong 30 giây, quy định cơ chế khóa tuần tự (
            <code className="bg-slate-100 text-blue-800 px-1.5 py-0.5 rounded font-mono text-xs font-semibold border border-slate-200">
              ORDER BY mentor_id ASC
            </code>
            ) chống Deadlock khi gán Mentor hàng loạt.
          </span>
        ),
      },
    ],
    impactMetrics: [
      {
        value: "> 70%",
        label: "Tiết Kiệm Thời Gian",
        detail: "Cắt giảm tác vụ thủ công trong toàn bộ vòng đời thực tập sinh",
        color: "emerald",
      },
      {
        value: "< 500ms",
        label: "Thu Hồi Quyền Truy Cập",
        detail: "Session Revocation < 500ms; độ trễ API Dashboard nghiệm thu P95 < 300ms",
        color: "blue",
      },
      {
        value: "100%",
        label: "Kiểm Toán Phiếu Chấm",
        detail: "Phiếu chấm được kiểm toán toàn vẹn, cảnh báo biên độ lệch |S_self - S_mentor| > 3.0",
        color: "indigo",
      },
    ],
    googleXyzParagraphs: [
      (
        <p key="p1" className="text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Hiệu quả vận hành</strong>{" "}
          <span className="inline-block px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px] font-bold border border-blue-500/30">
            [X]
          </span>
          : Cắt giảm &gt; 70% thời gian xử lý thủ công trong toàn bộ vòng đời thực tập sinh, đo lường bằng{" "}
          <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold border border-emerald-500/30">
            [Y]
          </span>
          :{" "}
          <span className="text-emerald-300 font-medium">
            Tốc độ thu hồi phiên truy cập (Session Revocation) &lt; 500ms và độ trễ API Dashboard nghiệm thu đạt P95 &lt; 300ms
          </span>
          , thông qua việc{" "}
          <span className="inline-block px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono text-[10px] font-bold border border-indigo-500/30">
            [Z]
          </span>
          : Thiết lập máy trạng thái (<span className="text-slate-200 font-medium">FSM</span>) 8 phân hệ kết hợp cơ chế Blacklist phân tán trên{" "}
          <span className="text-slate-200 font-medium">Redis</span> và hàng đợi xử lý bất đồng bộ{" "}
          <span className="text-slate-200 font-medium">BullMQ</span>.
        </p>
      ),
      (
        <p key="p2" className="text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Tính khách quan dữ liệu</strong>{" "}
          <span className="inline-block px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px] font-bold border border-blue-500/30">
            [X]
          </span>
          : Loại bỏ hoàn toàn rủi ro sai lệch dữ liệu đánh giá và kiểm soát độ lệch điểm số cảm tính, đo lường bằng{" "}
          <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold border border-emerald-500/30">
            [Y]
          </span>
          :{" "}
          <span className="text-emerald-300 font-medium">
            100% phiếu chấm được kiểm toán toàn vẹn kèm cờ cảnh báo biên độ lệch |S_self - S_mentor| &gt; 3.0
          </span>
          , thông qua việc{" "}
          <span className="inline-block px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono text-[10px] font-bold border border-indigo-500/30">
            [Z]
          </span>
          : Đặc tả cơ chế{" "}
          <span className="text-slate-200 font-medium">Blind Review song song</span> và đóng băng biểu mẫu đánh giá bằng cấu trúc{" "}
          <span className="text-slate-200 font-medium">Immutable JSONB Snapshots</span>.
        </p>
      ),
    ],
    deliverables: [
      "BRD/SRS",
      "User Stories & INVEST Backlog",
      "API Contracts Master (OpenAPI)",
      "Edge Cases & Concurrency Risk Matrix",
    ],
    techStack: [
      "PostgreSQL 16 (JSONB & GIN)",
      "Redis",
      "BullMQ",
      "NestJS",
      "ReactJS",
      "Docker",
    ],
    actionLinks: [
      {
        label: "System Specification & FSM (BRD)",
        href: "https://drive.google.com/file/d/1b_7t6mWdC27bUutBzp_BymuW5kNYZM7t/view?usp=sharing",
        isPrimary: true,
      },
      {
        label: "API Contracts & Error Catalog",
        href: "https://docs.google.com/spreadsheets/d/1uRIa9cqvaWmvsLtL5lNIetPz_nX8Z6-G8MXU-r7NcBY/edit?usp=sharing",
      },
      {
        label: "Edge Cases & Concurrency Risk Matrix",
        href: "https://docs.google.com/spreadsheets/d/1ePRmhHBshXBfGFiMU9lLguxIRUIyRa8goj6EFtPVnv0/edit?usp=sharing",
      },
    ],
  },
];

// --- SKILL PILLARS DATA (Technical BA Competencies) ---
interface SkillSubCategory {
  title: string;
  items: string[];
}

interface SkillPillar {
  id: string;
  number: string;
  title: string;
  tier: string;
  color: "blue" | "emerald" | "purple" | "amber";
  iconName: "workflow" | "database" | "server" | "users";
  subCategories: SkillSubCategory[];
}

const SKILL_PILLARS: SkillPillar[] = [
  {
    id: "business-process-modeling",
    number: "01",
    title: "Phân tích Nghiệp vụ & Mô hình hóa Quy trình (Business & Process Modeling)",
    tier: "TẦNG NGHIỆP VỤ & QUY TRÌNH",
    color: "blue",
    iconName: "workflow",
    subCategories: [
      {
        title: "Tài liệu hóa yêu cầu",
        items: [
          "SRS",
          "BRD",
          "INVEST User Stories",
          "Acceptance Criteria (Given-When-Then)",
          "Gherkin",
        ],
      },
      {
        title: "Sơ đồ hóa trực quan",
        items: [
          "UML 2.0 (Use Case)",
          "Sequence Diagrams",
          "Activity Diagrams",
          "BPMN 2.0",
        ],
      },
      {
        title: "Mô hình hóa logic",
        items: [
          "Finite State Machine (FSM)",
          "Business Invariants Formulation",
          "Ma trận phân loại hàng hóa ABC",
          "Định tuyến kho S-Shape",
        ],
      },
    ],
  },
  {
    id: "data-architecture-concurrency",
    number: "02",
    title: "Dữ liệu & Xử lý Giao dịch (Data Architecture & Concurrency)",
    tier: "TẦNG DỮ LIỆU & TÍNH TOÀN VẸN",
    color: "emerald",
    iconName: "database",
    subCategories: [
      {
        title: "Thiết kế cơ sở dữ liệu",
        items: [
          "Conceptual/Logical Data Modeling",
          "Chuẩn hóa 3NF",
          "Xây dựng Data Dictionary",
        ],
      },
      {
        title: "Toàn vẹn & Đồng thời",
        items: [
          "Đặc tả khóa bi quan (Row-level Pessimistic Locking)",
          "Chiến lược ngăn ngừa Deadlock (ORDER BY id ASC)",
          "ACID Transactions",
        ],
      },
      {
        title: "Kiểm toán & Lưu trữ nâng cao",
        items: [
          "Immutable JSONB Snapshots",
          "Append-Only Audit Logging",
          "Hard Database Constraints (CHECK >= 0)",
        ],
      },
    ],
  },
  {
    id: "api-contracts-nfrs",
    number: "03",
    title: "Tích hợp API & Đặc tả NFRs (API Contracts & Performance)",
    tier: "TẦNG TÍCH HỢP & HIỆU NĂNG NFRs",
    color: "purple",
    iconName: "server",
    subCategories: [
      {
        title: "Chuẩn hóa giao tiếp",
        items: [
          "RESTful API Contracts (OpenAPI 3.0 / Swagger)",
          "Error Catalog mã lỗi HTTP",
          "Idempotency Pattern",
        ],
      },
      {
        title: "Xử lý nền",
        items: [
          "Message Queue (BullMQ/Redis) streaming bất đồng bộ",
          "Cơ chế Retry & Exponential Backoff",
        ],
      },
      {
        title: "Kiểm soát NFRs",
        items: [
          "Độ trễ P95 (< 300ms / 380ms)",
          "Throughput (TPS)",
          "Session Invalidation (< 500ms)",
        ],
      },
    ],
  },
  {
    id: "agile-collaboration",
    number: "04",
    title: "Quy trình Agile & Đàm phán Yêu cầu (Delivery & Collaboration)",
    tier: "TẦNG QUY TRÌNH & CHUYỂN GIAO",
    color: "amber",
    iconName: "users",
    subCategories: [
      {
        title: "Quản trị quy trình",
        items: [
          "Agile/Scrum",
          "Phân rã User Story",
          "Quản trị Sprint Backlog",
          "Kiểm soát Scope Creep (MVP)",
        ],
      },
      {
        title: "Công cụ hỗ trợ",
        items: [
          "Jira",
          "Confluence",
          "Postman",
          "Draw.io",
          "Git",
          "Mock API",
        ],
      },
      {
        title: "Cộng tác & Phân tích tác động",
        items: [
          "Cầu nối Ops-to-Dev",
          "Đàm phán logic kỹ thuật với Lead Engineer",
          "Phân tích trường hợp biên (Edge Cases)",
          "Giảm thiểu rủi ro vận hành",
        ],
      },
    ],
  },
];

// --- EXPERIENCE MILESTONES DATA ---
interface MilestoneContribution {
  title: string;
  description: ReactNode;
}

interface ExperienceMilestone {
  id: string;
  milestoneNumber: string;
  title: string;
  timeline: string;
  role: string;
  teamScale: string;
  accentColor: "blue" | "indigo";
  contributions: MilestoneContribution[];
}

const EXPERIENCE_MILESTONES: ExperienceMilestone[] = [
  {
    id: "smart-wms-milestone",
    milestoneNumber: "CỘT MỐC 01",
    title: "DỰ ÁN HỆ THỐNG QUẢN LÝ KHO HÀNG THÔNG MINH (SMART WMS)",
    timeline: "06/2026 – 09/2026 (Đồ án Kỹ thuật Phần mềm Xuất sắc – Đại học CMC)",
    role: "Technical Business Analyst (Core System Modeler)",
    teamScale: "Nhóm 5 thành viên (Full-stack Team) | Agile/Scrum",
    accentColor: "blue",
    contributions: [
      {
        title: "Đặc tả luồng kho & Kiến trúc dữ liệu",
        description: (
          <span>
            Xây dựng <strong className="text-slate-900 font-semibold">SRS</strong> và{" "}
            <strong className="text-slate-900 font-semibold">10 quy tắc nghiệp vụ bất biến</strong> cho 4 luồng vận hành cốt lõi (Inbound, Outbound, Put-away, Picking) qua 12+ sơ đồ Use Case &amp; Sequence; thiết kế Data Dictionary cho 18 bảng chuẩn{" "}
            <strong className="text-slate-900 font-semibold">3NF</strong> triệt tiêu sai lệch logic giữa Vận hành và Dev.
          </span>
        ),
      },
      {
        title: "Mô hình hóa bài toán không gian",
        description: (
          <span>
            Quy chuẩn hóa logic gợi ý vị trí kho theo thể tích 3D kết hợp phân loại ABC và định tuyến nhặt hàng{" "}
            <strong className="text-slate-900 font-semibold">S-Shape</strong>, hỗ trợ đội ngũ dev kiểm chứng thực tế{" "}
            <strong className="text-emerald-600 font-bold">tối ưu 22.8% dung tích</strong> và{" "}
            <strong className="text-emerald-600 font-bold">giảm 58.5% quãng đường nhặt hàng</strong>.
          </span>
        ),
      },
      {
        title: "Kiểm soát đồng thời & Nghiệm thu NFRs",
        description: (
          <span>
            Đặc tả cơ chế khóa bi quan cấp dòng xử lý Race Condition, loại bỏ rủi ro xuất âm kho và cùng đội ngũ nghiệm thu hệ thống đạt{" "}
            <strong className="text-blue-700 font-bold">412 TPS</strong> với độ trễ{" "}
            <strong className="text-blue-700 font-bold">P95 &lt; 380ms</strong> dưới tải 500 VUs.
          </span>
        ),
      },
    ],
  },
  {
    id: "internhub-milestone",
    milestoneNumber: "CỘT MỐC 02",
    title: "NỀN TẢNG QUẢN LÝ THỰC TẬP SINH TẬP TRUNG (INTERNHUB)",
    timeline: "01/2026 – 04/2026 (Enterprise Web Platform)",
    role: "Technical Business Analyst (Workflows & Architecture)",
    teamScale: "Nhóm 5 thành viên | 5 Sprints (Agile/Scrum khép kín)",
    accentColor: "indigo",
    contributions: [
      {
        title: "Chuẩn hóa Backlog & API Contracts",
        description: (
          <span>
            Phân rã <strong className="text-slate-900 font-semibold">33 INVEST User Stories</strong>, quản trị Sprint Backlog, chuẩn hóa{" "}
            <strong className="text-slate-900 font-semibold">38 API Contracts (OpenAPI)</strong> kèm Error Catalog, bàn giao{" "}
            <strong className="text-emerald-600 font-bold">100% phạm vi MVP đúng hạn</strong> qua 5 Sprints.
          </span>
        ),
      },
      {
        title: "Đặc tả toàn vẹn dữ liệu & Chống Deadlock",
        description: (
          <span>
            Xây dựng Data Dictionary cho 26 bảng; ứng dụng Finite State Machine (
            <strong className="text-slate-900 font-semibold">FSM</strong>),{" "}
            <strong className="text-slate-900 font-semibold">Immutable JSONB Snapshots</strong> và Append-Only Audit Trail bảo toàn toàn vẹn dữ liệu đánh giá lịch sử.
          </span>
        ),
      },
      {
        title: "Tối ưu hóa quy trình & Xử lý bất đồng bộ",
        description: (
          <span>
            Đặc tả kiến trúc hàng đợi <strong className="text-slate-900 font-semibold">BullMQ</strong> xử lý streaming file &gt; 1.000 dòng trong 30 giây, nghiệm thu tiêu chuẩn NFRs độ trễ{" "}
            <strong className="text-blue-700 font-bold">P95 &lt; 300ms</strong> và thu hồi phiên{" "}
            <strong className="text-blue-700 font-bold">&lt; 500ms</strong>, cắt giảm{" "}
            <strong className="text-emerald-600 font-bold">&gt; 70% thao tác thủ công</strong>.
          </span>
        ),
      },
    ],
  },
];

export default function Portfolio() {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("nguyntanh2k5@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/85 border-b border-slate-200/90 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-extrabold text-lg md:text-xl tracking-tight text-slate-900 hover:opacity-90 transition-opacity flex items-center gap-1.5"
          >
            <span>TUAN ANH</span>
            <span className="text-xs font-mono font-black px-1.5 py-0.5 rounded bg-blue-50 text-[#2563EB] border border-blue-200/80">
              .TECHNICAL_BA
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs lg:text-sm font-semibold text-slate-600">
            <a
              href="#projects"
              className="hover:text-[#2563EB] transition-colors py-1 px-2 rounded-md hover:bg-slate-50"
            >
              Case Studies
            </a>
            <a
              href="#skills"
              className="hover:text-[#2563EB] transition-colors py-1 px-2 rounded-md hover:bg-slate-50"
            >
              Năng Lực Kỹ Thuật
            </a>
            <a
              href="#experience"
              className="hover:text-[#2563EB] transition-colors py-1 px-2 rounded-md hover:bg-slate-50"
            >
              Cột Mốc Chuyển Giao
            </a>
            <a
              href="#contact"
              className="hover:text-[#2563EB] transition-colors py-1 px-2 rounded-md hover:bg-slate-50"
            >
              Liên Hệ
            </a>
          </nav>

          <a
            href="#contact"
            className="text-xs md:text-sm font-semibold bg-[#2563EB] hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all shadow-md shadow-blue-500/20 active:scale-95 flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Liên Hệ Ngay</span>
          </a>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="py-16 md:py-24 border-b border-slate-200 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>TECHNICAL BUSINESS ANALYST | SYSTEM ARCHITECTURE &amp; CONCURRENCY CONTROL</span>
          </div>

          {/* Headline & Value Proposition */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold text-slate-900 leading-[1.25] tracking-tight max-w-5xl mb-6">
            Chuyển hóa bài toán vận hành phức tạp thành{" "}
            <span className="text-blue-600">đặc tả kiến trúc dữ liệu chuẩn xác</span>, API Contracts nhất quán và logic giao dịch bền vững.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-4xl leading-relaxed mb-8">
            Kỹ sư phần mềm định hướng <strong className="text-slate-900 font-semibold">Technical Business Analyst</strong> chuyên sâu phân tích luồng nghiệp vụ end-to-end, mô hình hóa dữ liệu quan hệ (<span className="font-semibold text-slate-900">chuẩn 3NF</span>), thiết lập máy trạng thái (<span className="font-semibold text-slate-900">FSM</span>) và đặc tả kiểm soát giao dịch đồng thời (<span className="font-semibold text-slate-900">Concurrency Control</span>). Giữ vai trò cầu nối kỹ thuật vững chắc giữa Vận hành (Ops) và Đội ngũ Phát triển (Dev/QA), bảo đảm tính toàn vẹn dữ liệu và triệt tiêu sai lệch logic bằng hệ thống tài liệu <span className="font-semibold text-slate-900">BRD/SRS, Data Dictionary</span> và <span className="font-semibold text-slate-900">OpenAPI</span> chuẩn mực.
          </p>

          {/* Dual CTA & Quick Contact */}
          <div className="flex flex-wrap items-center gap-3.5 mb-12">
            {/* Primary CTA: Khám Phá Case Studies */}
            <a
              href="#projects"
              className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-xs active:scale-[0.98] flex items-center gap-2 text-sm md:text-base group"
            >
              <FileText className="w-4 h-4 text-blue-200 group-hover:scale-105 transition-transform" />
              <span>Khám Phá Case Studies</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary CTA: Tải Technical BA Resume (PDF) */}
            <a
              href="/docs/Nguyen-Tuan-Anh-Technical-BA.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold border border-slate-200 hover:border-slate-300 rounded-lg transition-all shadow-2xs active:scale-[0.98] flex items-center gap-2 text-sm md:text-base group"
            >
              <Download className="w-4 h-4 text-blue-600 group-hover:-translate-y-0.5 transition-transform" />
              <span>Tải Technical BA Resume (PDF)</span>
            </a>

            {/* LinkedIn / Email quick links */}
            <div className="flex items-center gap-2 sm:pl-2 sm:border-l sm:border-slate-200">
              <a
                href="https://www.linkedin.com/in/nguyntanh2k5/"
                target="_blank"
                rel="noreferrer"
                title="Kết nối qua LinkedIn"
                className="p-2.5 bg-white hover:bg-slate-50 text-slate-600 hover:text-[#0077B5] border border-slate-200 hover:border-slate-300 rounded-lg transition-all shadow-2xs active:scale-95 flex items-center justify-center group"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-600 group-hover:text-[#0077B5]" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:nguyntanh2k5@gmail.com"
                title="Gửi Email trực tiếp"
                className="p-2.5 bg-white hover:bg-slate-50 text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-slate-300 rounded-lg transition-all shadow-2xs active:scale-95 flex items-center justify-center group"
              >
                <Mail className="w-4 h-4 text-slate-600 group-hover:text-blue-600" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Social Proof & Key Metrics: Chỉ số đo lường năng lực phân tích & mô hình hóa hệ thống */}
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Chỉ số đo lường năng lực phân tích &amp; mô hình hóa hệ thống</span>
            </div>

            {/* Metric Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Metric 1 */}
              <div className="p-5 md:p-6 bg-slate-50/70 rounded-xl border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all group">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight">
                    0%
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-sm font-bold text-slate-900 tracking-tight mb-1">
                  Data Drift
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Bảo đảm tính toàn vẹn dữ liệu, kiểm soát triệt để Race Condition khi phát sinh tranh chấp giao dịch đồng thời qua kịch bản kiểm thử tải.
                </p>
              </div>

              {/* Metric 2 */}
              <div className="p-5 md:p-6 bg-slate-50/70 rounded-xl border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all group">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="text-2xl sm:text-3xl font-black text-blue-600 tracking-tight">
                    2
                  </div>
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                    <Database className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-sm font-bold text-slate-900 tracking-tight mb-1">
                  Enterprise Platforms
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Đặc tả toàn diện vòng đời hệ thống <span className="font-semibold text-slate-800">Smart WMS</span> (Kho vận thông minh) và <span className="font-semibold text-slate-800">InternHub</span> (Quản trị nhân tài khép kín).
                </p>
              </div>

              {/* Metric 3 */}
              <div className="p-5 md:p-6 bg-slate-50/70 rounded-xl border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all group">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    -58.5%
                  </div>
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-sm font-bold text-slate-900 tracking-tight mb-1">
                  Quãng đường nhặt hàng
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Mô hình hóa thành công tập ràng buộc nghiệp vụ không gian 3D kết hợp <span className="font-semibold text-slate-800">ma trận ABC</span> và <span className="font-semibold text-slate-800">định tuyến S-Shape</span>.
                </p>
              </div>
            </div>

            {/* Quick Connection Strip */}
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-2">
              <div className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Kênh kết nối &amp; kho tài liệu kỹ thuật:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <a
                  href="https://www.linkedin.com/in/nguyntanh2k5/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0077B5] text-xs font-medium border border-slate-200 hover:border-slate-300 rounded-lg shadow-2xs transition-all group"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#0077B5]" />
                  <span>LinkedIn <span className="text-slate-500 font-normal hidden lg:inline">(Chuyên môn &amp; Kết nối)</span></span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#0077B5]" />
                </a>
                <a
                  href="mailto:nguyntanh2k5@gmail.com"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-800 hover:text-blue-600 text-xs font-medium border border-slate-200 hover:border-slate-300 rounded-lg shadow-2xs transition-all group"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>Email Kỹ Thuật</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED TECHNICAL CASE STUDIES */}
      <section id="projects" className="py-16 md:py-24 border-b border-slate-200 bg-white scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <Boxes className="w-3.5 h-3.5 text-blue-600" />
                <span>Featured Technical Case Studies</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Featured Technical Case Studies
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed">
              Đặc tả hệ thống, mô hình hóa dữ liệu 3NF, kiểm soát đồng thời và tối ưu hóa luồng nghiệp vụ theo chuẩn đo lường tác động (Google XYZ).
            </p>
          </div>

          <div className="space-y-12">
            {FEATURED_PROJECTS.map((project) => (
              <article
                key={project.id}
                id={project.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 md:p-9 shadow-xs hover:border-slate-300 transition-all duration-200 relative group"
              >
                <div className="space-y-8">
                  {/* Top Metadata */}
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-slate-900 text-white tracking-wider">
                          {project.badgeNumber}
                        </span>
                        <span className="text-xs font-semibold px-3 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200/70 uppercase">
                          {project.domain}
                        </span>
                      </div>
                      <div className="text-xs font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200/80">
                        Vai trò: <span className="text-slate-900 font-bold">{project.role}</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                      {project.title}
                    </h3>
                    <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 text-sm sm:text-base text-slate-700 leading-relaxed">
                      <strong className="text-slate-900 font-bold">Bối cảnh &amp; Bài toán:</strong>{" "}
                      {project.context}
                    </div>
                  </div>

                  {/* Thách thức Vận hành & Phân tích Kỹ thuật (Analysis & Action) */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                      <Workflow className="w-4 h-4 text-blue-600" />
                      <span>Thách thức Vận hành &amp; Phân tích Kỹ thuật (Analysis &amp; Action)</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {project.analysisActions.map((action, aIdx) => (
                        <div
                          key={aIdx}
                          className="p-5 rounded-xl bg-slate-50/70 border border-slate-200/90 shadow-2xs hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="w-6 h-6 rounded-md bg-blue-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                                {aIdx + 1}
                              </span>
                              <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                                {action.title}
                              </h4>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                              {action.detail}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Google XYZ Impact Container */}
                  <div className="space-y-4">
                    {/* Quick KPI Stat Chips */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      {project.impactMetrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 transition-colors"
                        >
                          <div className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-900">
                            <span
                              className={
                                metric.color === "emerald"
                                  ? "text-emerald-600 font-extrabold"
                                  : metric.color === "blue"
                                  ? "text-blue-600 font-extrabold"
                                  : "text-slate-900 font-extrabold"
                              }
                            >
                              {metric.value}
                            </span>
                          </div>
                          <div className="text-xs font-bold text-slate-800 mt-1">
                            {metric.label}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            {metric.detail}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Deep-Dive Narrative with [X], [Y], [Z] */}
                    <div className="p-5 sm:p-6 bg-slate-950 rounded-xl text-white border border-slate-800 shadow-inner">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-800">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-800 text-slate-300 border border-slate-700 uppercase tracking-wider">
                            Tác động đo lường kiểm chứng (Google XYZ Metric)
                          </span>
                        </div>
                        <div className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800/60 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Đo lường kiểm chứng</span>
                        </div>
                      </div>

                      <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {project.googleXyzParagraphs.map((stmt, sIdx) => (
                          <div key={sIdx}>{stmt}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Artifacts & Tech Stack */}
                  <div className="pt-2 border-t border-slate-200/80 space-y-4">
                    {/* Deliverables (Artifacts) */}
                    <div>
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-blue-600" />
                        <span>Sản phẩm bàn giao (Artifacts):</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.deliverables.map((item, dIdx) => (
                          <span
                            key={dIdx}
                            className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs hover:bg-slate-100 transition-colors"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Context */}
                    <div>
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                        <Database className="w-4 h-4 text-slate-600" />
                        <span>Hệ thống phân tích (Tech Stack Context):</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-white text-slate-700 border border-slate-200 shadow-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-3">
                    {project.actionLinks.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.href}
                        target={link.href.startsWith("http") || link.href.includes(".pdf") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") || link.href.includes(".pdf") ? "noreferrer" : undefined}
                        className={`px-4 py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-xs active:scale-95 group/btn ${
                          link.isPrimary
                            ? "bg-blue-600 hover:bg-blue-700 text-white"
                            : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL BA COMPETENCIES (Năng lực Phân tích & Kỹ thuật Hệ thống) */}
      <section id="skills" className="py-16 md:py-24 border-b border-slate-200 bg-slate-50/50 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <Workflow className="w-3.5 h-3.5 text-blue-600" />
                <span>Technical BA Competencies</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Năng lực Phân tích &amp; Kỹ thuật Hệ thống
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed">
              Bộ kỹ năng chuẩn hóa 4 trụ cột kết nối chặt chẽ giữa Nghiệp vụ (Business) và Kiến trúc Kỹ thuật (Technical Architecture).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {SKILL_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-6 flex-1 flex flex-col justify-between">
                  {/* Header */}
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60">
                        {pillar.tier}
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {pillar.number}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/60 shrink-0">
                        {pillar.iconName === "workflow" && <Workflow className="w-5 h-5 text-blue-600" />}
                        {pillar.iconName === "database" && <Database className="w-5 h-5 text-emerald-600" />}
                        {pillar.iconName === "server" && <Server className="w-5 h-5 text-purple-600" />}
                        {pillar.iconName === "users" && <Users className="w-5 h-5 text-amber-600" />}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  {/* Sub-Categories */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    {pillar.subCategories.map((sub, sIdx) => (
                      <div key={sIdx} className="space-y-2">
                        <div className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          <span>{sub.title}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 pl-3.5">
                          {sub.items.map((item, iIdx) => {
                            const isKeyTechnical =
                              item.includes("3NF") ||
                              item.includes("FSM") ||
                              item.includes("SRS") ||
                              item.includes("BRD") ||
                              item.includes("UML") ||
                              item.includes("BPMN") ||
                              item.includes("Pessimistic") ||
                              item.includes("Deadlock") ||
                              item.includes("ACID") ||
                              item.includes("JSONB") ||
                              item.includes("BullMQ") ||
                              item.includes("OpenAPI") ||
                              item.includes("Agile") ||
                              item.includes("P95") ||
                              item.includes("TPS");

                            return (
                              <span
                                key={iIdx}
                                className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                                  isKeyTechnical
                                    ? "bg-blue-50/70 text-blue-800 font-medium border border-blue-200/70"
                                    : "bg-slate-50 text-slate-600 border border-slate-200/70 hover:bg-slate-100 hover:text-slate-900"
                                }`}
                              >
                                {item}
                              </span>
                            );
                          })}
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

      {/* 4. EXPERIENCES & DELIVERY MILESTONES (Cột mốc Chuyển giao & Kinh nghiệm Thực chiến) */}
      <section id="experience" className="py-16 md:py-24 border-b border-slate-200 bg-white scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <Milestone className="w-3.5 h-3.5 text-blue-600" />
                <span>Delivery Milestones</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Cột mốc Chuyển giao &amp; Kinh nghiệm Thực chiến
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed">
              Hành trình chuyển giao giá trị thực tế: Từ nghiên cứu mô hình hóa giải thuật, kiểm soát giao dịch đồng thời đến nghiệm thu tải k6 và bàn giao Sprints đúng hạn.
            </p>
          </div>

          <div className="space-y-10">
            {EXPERIENCE_MILESTONES.map((milestone) => (
              <div
                key={milestone.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 md:p-9 transition-all duration-200 shadow-xs hover:border-slate-300 relative"
              >
                {/* Header Information */}
                <div className="space-y-4 pb-6 border-b border-slate-200">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-slate-900 text-white tracking-wider">
                      {milestone.milestoneNumber}
                    </span>
                    <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-50 px-3 py-1 rounded-md border border-slate-200/80">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{milestone.timeline}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {milestone.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Briefcase className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="text-slate-500">Vai trò:</span>
                      <strong className="text-slate-900 font-semibold">{milestone.role}</strong>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">•</span>
                    <div className="flex items-center gap-1.5 font-medium">
                      <Users className="w-4 h-4 text-slate-600 shrink-0" />
                      <span className="text-slate-500">Mô hình triển khai:</span>
                      <strong className="text-slate-800 font-semibold">{milestone.teamScale}</strong>
                    </div>
                  </div>
                </div>

                {/* Dấu ấn thực hiện (Đóng góp & Dấu ấn đo lường) */}
                <div className="pt-6 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Dấu ấn thực hiện:</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {milestone.contributions.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-slate-50/70 border border-slate-200/80 shadow-2xs hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-2.5">
                            <span className="w-6 h-6 rounded-md bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {item.description}
                          </p>
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

      {/* 5. FOOTER & CONTACT SECTION */}
      <footer id="contact" className="pt-20 pb-12 bg-slate-50/60 border-t border-slate-200 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Availability Badge & Core CTA Headline */}
          <div className="flex flex-col items-center text-center mb-12">
            {/* Availability Badge */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-medium shadow-2xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open for Technical BA / Systems Analyst (Fresher / Associate / Full-time)</span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="text-slate-600 font-normal">Sẵn sàng onboard ngay tại Hà Nội hoặc Hybrid/Remote</span>
            </div>

            {/* Core Call-to-Action Headline */}
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug max-w-3xl mb-3">
              "Sẵn sàng chuyển hóa bài toán nghiệp vụ phức tạp thành kiến trúc hệ thống bền vững cùng doanh nghiệp của bạn."
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Nếu đội ngũ của bạn đang tìm kiếm một Technical BA sở hữu tư duy hệ thống vững chắc, có khả năng nói chuyện cùng Business Stakeholders và thiết kế logic dữ liệu chuẩn xác cho Engineering Team — hãy kết nối ngay hôm nay.
            </p>
          </div>

          {/* Direct Contact Hub */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {/* Email */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                    <Mail className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
                    Click-to-Copy
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Email Kỹ Thuật
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900 font-mono select-all break-all">
                  nguyntanh2k5@gmail.com
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 py-2 px-3 rounded-lg text-xs font-medium bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs flex items-center justify-center gap-1.5 transition-all active:scale-95"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Đã sao chép!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Sao chép email</span>
                    </>
                  )}
                </button>
                <a
                  href="mailto:nguyntanh2k5@gmail.com"
                  className="py-2 px-3 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-2xs flex items-center justify-center gap-1 transition-all active:scale-95"
                >
                  <span>Mở Mail</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Phone / Zalo */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="p-2 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <Phone className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                    Hotline &amp; Zalo
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Điện thoại / Zalo
                </div>
                <div className="text-lg font-bold text-slate-900 font-mono">
                  0969 236 054
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2">
                <a
                  href="tel:0969236054"
                  className="flex-1 py-2 px-3 rounded-lg text-xs font-medium bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs flex items-center justify-center gap-1.5 transition-all active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-600" />
                  <span>Gọi trực tiếp</span>
                </a>
                <a
                  href="https://zalo.me/0969236054"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-3 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs flex items-center justify-center gap-1 transition-all active:scale-95"
                >
                  <span>Chat Zalo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="p-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/60">
                    Địa Bàn
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Địa bàn làm việc
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900">
                  Vạn Phúc, Hà Đông, Hà Nội
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <div className="text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Sẵn sàng Onboard ngay tại HN hoặc Hybrid/Remote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Links & One-Click Asset Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded border border-slate-700">
                <span>Verified System Artifacts &amp; Credentials</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Download Technical BA Resume &amp; Review Schemas
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
                Truy cập hồ sơ năng lực, bảng đặc tả Data Dictionaries, API Specs &amp; Schema DDL trên LinkedIn.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="/docs/Nguyen-Tuan-Anh-Technical-BA.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-sm active:scale-95 transition-all flex items-center gap-2 text-sm sm:text-base group"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Technical BA Resume (PDF)</span>
              </a>

              <a
                href="https://www.linkedin.com/in/nguyntanh2k5/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg border border-slate-700 transition-all active:scale-95 flex items-center gap-2 text-sm"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                <span className="font-medium hidden sm:inline">LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Engineering Footer & Integrity Statement */}
          <div className="pt-8 border-t border-slate-200 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-white text-slate-700 text-xs font-mono font-medium border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>"Designed with strict architectural mindset. Verified for zero data drift &amp; high transactional reliability."</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 pt-2">
              <div>
                © 2026 <strong className="text-slate-800 font-semibold">Nguyễn Tuấn Anh</strong>. All rights reserved.
              </div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white text-slate-600 border border-slate-200 font-mono text-[11px]">
                <span>Built with React, Vite &amp; Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
