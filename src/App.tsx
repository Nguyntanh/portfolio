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
  AlertTriangle,
  Cpu,
  Boxes,
  Server,
  Layout,
  Calendar,
  Users,
  Briefcase,
  Milestone,
  Copy,
  Check,
  MapPin,
} from "lucide-react";

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

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
  problem: string;
  solution: string;
  impactMetrics: ProjectImpactMetric[];
  googleXyzParagraphs: ReactNode[];
  deliverables: string[];
  techStack: string[];
  actionLinks: ProjectActionLink[];
}

interface ArtifactTab {
  id: string;
  label: string;
  items: { title: string; type: string; link: string }[];
}

// --- FEATURED PROJECTS DATA ---
const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "smart-wms",
    badgeNumber: "PROJECT 01",
    title: "SMART WMS (SMART WAREHOUSE MANAGEMENT SYSTEM)",
    domain: "Logistics & Supply Chain Automation",
    role: "Technical Business Analyst & System Modeler",
    context:
      "Nền tảng quản trị kho hàng thông minh đa chi nhánh, giải quyết bài toán lãng phí không gian lưu trữ và sai lệch tồn kho vật lý tại các doanh nghiệp phân phối vừa và nhỏ (SMEs).",
    problem:
      "Các kho truyền thống lãng phí 25–40% thể tích ô chứa, nhặt hàng mất 15–30 phút/đơn và đối mặt nguy cơ xuất âm kho do tranh chấp dữ liệu đồng thời.",
    solution:
      "Đặc tả mô hình dữ liệu quan hệ 18 thực thể chuẩn 3NF và kiến trúc Transactional Outbox Pattern qua BullMQ/Redis. Thiết kế thuật toán AI Slotting Heuristic (4 trọng số thích nghi) kết hợp định tuyến nhặt hàng S-Shape Routing và cơ chế khóa bi quan (SELECT ... FOR UPDATE) ở mức cô lập READ COMMITTED.",
    impactMetrics: [
      {
        value: "100%",
        label: "Zero Race Condition",
        detail: "Triệt tiêu hoàn toàn rủi ro xuất âm kho & tranh chấp giữ chỗ qua 1.000 test case đồng thời",
        color: "emerald",
      },
      {
        value: "412 TPS",
        label: "Thông Lượng P95 380ms",
        detail: "Đạt chuẩn tải 500 VUs qua kiểm soát khóa bi quan cấp dòng trên MySQL InnoDB",
        color: "blue",
      },
      {
        value: "-58.5%",
        label: "Quãng Đường Di Chuyển",
        detail: "Giảm từ 1.842m xuống 765m/đợt; tăng 22.8% dung tích khai thác (lấp đầy 58.4% → 81.2%)",
        color: "indigo",
      },
    ],
    googleXyzParagraphs: [
      (
        <p key="p1">
          Triệt tiêu{" "}
          <strong className="text-emerald-300 font-bold">
            100% rủi ro xuất âm kho và tranh chấp giữ chỗ (Race Condition) qua 1.000 test case đồng thời
          </strong>{" "}
          <span className="inline-block px-1.5 py-0.2 rounded bg-blue-500/30 text-blue-200 font-mono text-[10px] font-bold">
            [X]
          </span>
          , được đo lường bằng{" "}
          <span className="text-amber-300 font-semibold">
            thông lượng 412 TPS và độ trễ P95 đạt 380 ms dưới tải 500 VUs
          </span>{" "}
          <span className="inline-block px-1.5 py-0.2 rounded bg-amber-500/30 text-amber-200 font-mono text-[10px] font-bold">
            [Y]
          </span>
          , thông qua việc đặc tả công thức tồn kho khả dụng thời gian thực (
          <code className="bg-slate-800 px-1 py-0.5 rounded text-blue-300 font-mono text-xs">
            Available = Physical - Reserved - Frozen
          </code>
          ) kết hợp kiểm soát khóa bi quan cấp dòng trên{" "}
          <span className="text-blue-300 font-semibold">MySQL InnoDB</span>{" "}
          <span className="inline-block px-1.5 py-0.2 rounded bg-emerald-500/30 text-emerald-200 font-mono text-[10px] font-bold">
            [Z]
          </span>
          .
        </p>
      ),
      (
        <p key="p2">
          Đồng thời,{" "}
          <strong className="text-emerald-300 font-bold">
            cắt giảm 58.5% quãng đường di chuyển lấy hàng
          </strong>{" "}
          (từ 1.842m xuống 765m/đợt) và{" "}
          <strong className="text-emerald-300 font-bold">
            nâng tỷ lệ lấp đầy thể tích từ 58.4% lên 81.2%
          </strong>{" "}
          (tăng 22.8% dung tích khai thác){" "}
          <span className="inline-block px-1.5 py-0.2 rounded bg-blue-500/30 text-blue-200 font-mono text-[10px] font-bold">
            [X]
          </span>{" "}
          bằng cách mô hình hóa hàm thích nghi đa mục tiêu{" "}
          <code className="bg-slate-800 px-1 py-0.5 rounded text-cyan-300 font-mono text-xs">
            F(pᵢ, bⱼ)
          </code>{" "}
          và giải thuật định tuyến{" "}
          <span className="text-cyan-300 font-semibold">S-Shape</span> cho 1.000 ô bin chuẩn{" "}
          <span className="inline-block px-1.5 py-0.2 rounded bg-emerald-500/30 text-emerald-200 font-mono text-[10px] font-bold">
            [Z]
          </span>
          .
        </p>
      ),
    ],
    deliverables: [
      "BRD (Business Requirement Document)",
      "ERD 18 Entities (3NF)",
      "Sequence & Activity Diagrams",
      "Data Dictionary",
      "OpenAPI Spec 3.0",
    ],
    techStack: [
      "MySQL 8.0 (InnoDB)",
      "TypeORM",
      "Redis 7 (Distributed Lock)",
      "NestJS",
      "ReactJS",
      "BullMQ",
      "Docker",
    ],
    actionLinks: [
      {
        label: "Xem Đặc Tả Kỹ Thuật (BRD/ERD)",
        href: "https://drive.google.com/file/d/1P_q_Hx_45JcbDUd29pf-kJT2Ei4gstTT/view?usp=sharing",
        isPrimary: true,
      },
      {
        label: "Live Demo Web/PDA",
        href: "#system-specs",
      },
      {
        label: "System Architecture",
        href: "https://app.diagrams.net/#G1kQFuk7Wm2_ZUOKw4bIoYkpGTntvhFDeo#%7B%22pageId%22%3A%22HB_me9jukh97eeU58cv6%22%7D",
      },
    ],
  },
  {
    id: "internhub",
    badgeNumber: "PROJECT 02",
    title: "INTERNHUB – ENTERPRISE TALENT LIFECYCLE & PERFORMANCE PLATFORM",
    domain: "Enterprise HR Tech & Education Integration",
    role: "Lead Technical BA & Solution Architect",
    context:
      "Nền tảng điều phối vận hành và đánh giá năng lực thực tập sinh khép kín, số hóa toàn bộ chuỗi giá trị từ Onboarding, giao việc Kanban đến thẩm định Rubric đa chiều.",
    problem:
      "Quy trình vận hành thủ công gây chậm trễ bàn giao/thu hồi quyền truy cập, tốn 70% thời gian xử lý sự vụ và tồn tại thiên vị trong đánh giá năng lực cá nhân.",
    solution:
      "Đặc tả kiến trúc Modular Monolith phân tách 8 Bounded Contexts, quản lý vòng đời bằng Finite State Machine (FSM) khép kín. Thiết kế cơ chế chống Deadlock khi Bulk Assign (ORDER BY id ASC), mô hình kiểm soát truy cập PBAC/ABAC chặn triệt để lỗ hổng IDOR, và cấu trúc Immutable JSONB Snapshot cho biểu mẫu Rubric.",
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
        detail: "Session Revocation < 500ms; độ trễ phản hồi API Dashboard P95 < 300ms",
        color: "blue",
      },
      {
        value: "< 5%",
        label: "Đánh Giá Cảm Tính",
        detail: "Blind Review song song & cảnh báo điểm bất thường (|S_self - S_mentor| > 3.0)",
        color: "indigo",
      },
    ],
    googleXyzParagraphs: [
      (
        <p key="p1">
          <strong className="text-emerald-300 font-bold">
            Cắt giảm &gt; 70% thời gian xử lý tác vụ thủ công
          </strong>{" "}
          trong toàn bộ vòng đời thực tập sinh{" "}
          <span className="inline-block px-1.5 py-0.2 rounded bg-blue-500/30 text-blue-200 font-mono text-[10px] font-bold">
            [X]
          </span>
          , được đo lường bằng{" "}
          <span className="text-amber-300 font-semibold">
            thời gian thu hồi quyền truy cập (Session Revocation) &lt; 500 ms
          </span>{" "}
          và{" "}
          <span className="text-amber-300 font-semibold">
            độ trễ phản hồi API Dashboard P95 &lt; 300 ms
          </span>{" "}
          <span className="inline-block px-1.5 py-0.2 rounded bg-amber-500/30 text-amber-200 font-mono text-[10px] font-bold">
            [Y]
          </span>
          , thông qua việc thiết lập máy trạng thái hữu hạn{" "}
          <span className="text-cyan-300 font-semibold">
            FSM (Draft → Active → Evaluating → Completed → Archived)
          </span>{" "}
          kết hợp cơ chế Blacklist phân tán trên{" "}
          <span className="text-cyan-300 font-semibold">Redis Cluster</span>{" "}
          <span className="inline-block px-1.5 py-0.2 rounded bg-emerald-500/30 text-emerald-200 font-mono text-[10px] font-bold">
            [Z]
          </span>
          .
        </p>
      ),
      (
        <p key="p2">
          Đồng thời,{" "}
          <strong className="text-emerald-300 font-bold">
            hạ tỷ lệ đánh giá cảm tính xuống &lt; 5%
          </strong>{" "}
          <span className="inline-block px-1.5 py-0.2 rounded bg-blue-500/30 text-blue-200 font-mono text-[10px] font-bold">
            [X]
          </span>{" "}
          bằng cách thiết kế cơ chế{" "}
          <span className="text-indigo-300 font-semibold">Blind Review song song</span>, thuật toán
          cảnh báo bất thường điểm số (
          <code className="bg-slate-800 px-1 py-0.5 rounded text-pink-300 font-mono text-xs">
            |S_self - S_mentor| &gt; 3.0
          </code>
          ) và đóng băng cấu trúc đánh giá bằng{" "}
          <span className="text-indigo-300 font-semibold">Immutable JSONB Snapshot</span>{" "}
          <span className="inline-block px-1.5 py-0.2 rounded bg-emerald-500/30 text-emerald-200 font-mono text-[10px] font-bold">
            [Z]
          </span>
          .
        </p>
      ),
    ],
    deliverables: [
      "Business Requirement Document (BRD)",
      "User Stories & Epics Matrix",
      "API Contracts Master (Error Catalog)",
      "Edge Case & Impact Analysis Matrix",
    ],
    techStack: [
      "PostgreSQL 16 (JSONB & GIN Index)",
      "Redis 7",
      "BullMQ",
      "Node.js/NestJS",
      "Docker Compose",
      "AWS S3",
    ],
    actionLinks: [
      {
        label: "Xem Hồ Sơ BRD & User Stories",
        href: "https://docs.google.com/document/d/1U6ADSXSfRyiW42ywHLn82vSgylrpAGMT/edit?usp=sharing&ouid=114608328006379285745&rtpof=true&sd=true",
        isPrimary: true,
      },
      {
        label: "Interactive API Contract",
        href: "#system-specs",
      },
      {
        label: "Traceability Matrix",
        href: "https://docs.google.com/spreadsheets/d/1aPIpiZBx37L2-iXq7i_jC4ik8m0jS4QYfZ4oX9N9SM8/edit?usp=sharing",
      },
    ],
  },
];

// --- SKILL PILLARS DATA ---
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
  iconName: "server" | "database" | "layout" | "shield";
  subCategories: SkillSubCategory[];
}

const SKILL_PILLARS: SkillPillar[] = [
  {
    id: "backend-integration",
    number: "01",
    title: "Backend, APIs & System Integration",
    tier: "TẦNG NGHIỆP VỤ & GIAO DỊCH",
    color: "blue",
    iconName: "server",
    subCategories: [
      {
        title: "Core Frameworks & Architecture",
        items: [
          "NestJS (TypeScript)",
          "Modular Monolith",
          "Clean Architecture / DDD",
          "Transactional Outbox Pattern",
        ],
      },
      {
        title: "API Standards & Protocols",
        items: [
          "RESTful API Design (OpenAPI/Swagger)",
          "WebSocket (Real-time events)",
          "Scoped APIs",
          "Idempotency Pattern",
        ],
      },
      {
        title: "State & Concurrency Control",
        items: [
          "Finite State Machine (FSM)",
          "Distributed Queue (BullMQ/Redis)",
          "Deadlock Prevention (ORDER BY id ASC)",
          "Exponential Backoff & Dead-Letter Queue (DLQ)",
        ],
      },
      {
        title: "Algorithms & Logic Modeling",
        items: [
          "Heuristic Multi-objective Optimization (AI Slotting Engine)",
          "S-Shape Picking Routing",
          "NLP Intent/Entity Parsing (Levenshtein Distance)",
        ],
      },
    ],
  },
  {
    id: "database-governance",
    number: "02",
    title: "Database, Persistence & Data Governance",
    tier: "TẦNG DỮ LIỆU & TÍNH TOÀN VẸN",
    color: "emerald",
    iconName: "database",
    subCategories: [
      {
        title: "RDBMS & Data Modeling",
        items: [
          "PostgreSQL 16",
          "MySQL 8.0 (InnoDB)",
          "Data Modeling chuẩn hóa 3NF (18+ Entities)",
          "Database Migrations",
        ],
      },
      {
        title: "Concurrency & Locking Mechanics",
        items: [
          "Pessimistic Write Lock (SELECT ... FOR UPDATE)",
          "Read-Replica Routing",
          "ACID Transactions (READ COMMITTED)",
        ],
      },
      {
        title: "Advanced Storage & Formats",
        items: [
          "Immutable JSONB Snapshots (GIN Indexing)",
          "Redis In-Memory Caching (Cache-Aside, TTL Strategy)",
          "S3/MinIO Object Storage (Pre-signed URLs)",
        ],
      },
      {
        title: "Audit & Data Integrity",
        items: [
          "Append-Only Audit Logging (JSON Delta tracking)",
          "Hard Database Check Constraints (CHECK >= 0)",
          "Zero-Cascade Data Protection",
        ],
      },
    ],
  },
  {
    id: "frontend-presentation",
    number: "03",
    title: "Frontend & Presentation Engineering",
    tier: "TẦNG GIAO DIỆN & TƯƠNG TÁC",
    color: "purple",
    iconName: "layout",
    subCategories: [
      {
        title: "Frameworks & Core Tools",
        items: [
          "ReactJS 18+",
          "Vite",
          "TypeScript (Strict Mode)",
          "TailwindCSS",
          "Shadcn/ui",
        ],
      },
      {
        title: "State Management & Data Fetching",
        items: [
          "TanStack Query (Server State, Caching, Polling)",
          "Zustand",
          "Virtual DOM Optimization",
        ],
      },
      {
        title: "Hardware & Edge Interaction",
        items: [
          "Camera Barcode/QR Code Scanner (MediaDevices API)",
          "Blind Stocktake UI Pattern",
        ],
      },
      {
        title: "Security & Session Resilience",
        items: [
          "Silent Token Refresh (Axios Interceptors)",
          "Concurrent Request Queue",
          "JWT Rotation Grace Period (30s)",
        ],
      },
    ],
  },
  {
    id: "security-infra-agile",
    number: "04",
    title: "Security, Infrastructure & Engineering Process",
    tier: "TẦNG BẢO MẬT & QUY TRÌNH",
    color: "amber",
    iconName: "shield",
    subCategories: [
      {
        title: "Auth & Access Control",
        items: [
          "OAuth2/SSO",
          "JWT Rotation",
          "Argon2id/BCrypt",
          "RBAC kết hợp PBAC/ABAC (Object-Level Ownership / Anti-IDOR)",
        ],
      },
      {
        title: "Edge Security & Gateway",
        items: [
          "Nginx Reverse Proxy (SSL/TLS 1.3 Termination)",
          "Token Bucket Rate Limiting",
          "OWASP Top 10 Hardening (HSTS, CSP, X-Frame-Options: DENY)",
        ],
      },
      {
        title: "Containerization & Deployment",
        items: [
          "Docker",
          "Docker Compose (Multi-stage builds, DMZ/Private network isolation)",
          "Resource Limits (Memory/CPU cgroups)",
        ],
      },
      {
        title: "Business Analysis & Agile Delivery",
        items: [
          "BRD/SRS Authoring",
          "BPMN 2.0 / UML (Activity, Sequence, State Machine)",
          "Jira/Confluence (Epics, User Stories, Acceptance Criteria)",
          "Scrum/Agile Delivery",
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
    timeline: "06/2026 – 09/2026 (Đồ án Tốt nghiệp xuất sắc – CMC University)",
    role: "Technical Business Analyst (Core System Modeler)",
    teamScale: "Nhóm 5 thành viên (Full-stack Team) | Quy trình Agile/Scrum",
    accentColor: "blue",
    contributions: [
      {
        title: "Kiến trúc dữ liệu & Loại bỏ rủi ro đồng thời",
        description: (
          <span>
            Thiết kế mô hình dữ liệu quan hệ 18 bảng chuẩn{" "}
            <strong className="text-slate-900 font-semibold">3NF</strong>, đặc tả
            công thức tồn kho khả dụng thời gian thực (
            <code className="bg-slate-100 px-1 py-0.5 rounded text-blue-700 font-mono text-xs font-semibold">
              Available = Physical - Reserved - Frozen
            </code>
            ) kết hợp cơ chế khóa bi quan (
            <code className="bg-slate-100 px-1 py-0.5 rounded text-blue-700 font-mono text-xs font-semibold">
              SELECT ... FOR UPDATE
            </code>
            ), giúp đội ngũ 5 kỹ sư triệt tiêu{" "}
            <strong className="text-emerald-600 font-bold">100% rủi ro xuất âm kho</strong> và
            lỗi Race Condition qua 1.000 kịch bản kiểm thử.
          </span>
        ),
      },
      {
        title: "Mô hình hóa giải thuật không gian",
        description: (
          <span>
            Chuyển hóa bài toán vận hành thành tài liệu đặc tả thuật toán{" "}
            <strong className="text-slate-900 font-semibold">Heuristic 3D</strong> và định
            tuyến <strong className="text-slate-900 font-semibold">S-Shape</strong> cho lập
            trình viên, mang lại kết quả thực nghiệm{" "}
            <strong className="text-emerald-600 font-bold">
              tăng 22.8% dung tích kho khai thác
            </strong>{" "}
            và{" "}
            <strong className="text-emerald-600 font-bold">
              cắt giảm 58.5% quãng đường nhặt hàng
            </strong>
            .
          </span>
        ),
      },
      {
        title: "Đặc tả NFR & Đo lường chịu tải",
        description: (
          <span>
            Thiết lập bộ 8 chỉ số phi chức năng (NFRs) và trực tiếp nghiệm thu kịch bản kiểm thử tải
            với <strong className="text-slate-900 font-semibold">k6</strong>, chứng minh hệ thống đạt
            thông lượng <strong className="text-blue-700 font-bold">412 TPS</strong> với độ trễ P95
            đạt <strong className="text-blue-700 font-bold">380 ms</strong> dưới tải 500 VUs đồng
            thời.
          </span>
        ),
      },
    ],
  },
  {
    id: "internhub-milestone",
    milestoneNumber: "CỘT MỐC 02",
    title: "DỰ ÁN NỀN TẢNG QUẢN LÝ THỰC TẬP SINH TẬP TRUNG (INTERNHUB)",
    timeline: "01/2026 – 04/2026 (Enterprise Web Platform)",
    role: "Technical Business Analyst & Solution Architect",
    teamScale: "Nhóm 5 thành viên | 5 Sprints (Agile/Scrum khép kín)",
    accentColor: "indigo",
    contributions: [
      {
        title: "Chuẩn hóa yêu cầu kỹ thuật & API Contracts",
        description: (
          <span>
            Phân rã <strong className="text-slate-900 font-semibold">33 INVEST User Stories</strong>,
            đặc tả <strong className="text-slate-900 font-semibold">38 API Contracts</strong> chuẩn
            hóa (kèm Error Catalog mã lỗi HTTP) và mô hình hóa 26 bảng dữ liệu, giúp đội ngũ bàn giao{" "}
            <strong className="text-emerald-600 font-bold">100% phạm vi MVP đúng hạn</strong> qua 5
            Sprints mà không phát sinh sai lệch logic.
          </span>
        ),
      },
      {
        title: "Đặc tả cơ chế bảo vệ dữ liệu & Chống Deadlock",
        description: (
          <span>
            Thiết lập máy trạng thái (
            <strong className="text-slate-900 font-semibold">FSM</strong>) cho 8 phân hệ, đặc tả
            cơ chế khóa tuần tự hóa (
            <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-700 font-mono text-xs font-semibold">
              ORDER BY mentor_id ASC
            </code>
            ) chống Deadlock khi Bulk Assign, giải thuật cảnh báo lệch điểm (
            <code className="bg-slate-100 px-1 py-0.5 rounded text-pink-700 font-mono text-xs font-semibold">
              |S_self - S_mentor| &gt; 3.0
            </code>
            ) và bảo toàn dữ liệu đánh giá bằng{" "}
            <strong className="text-slate-900 font-semibold">Immutable JSONB Snapshot</strong>.
          </span>
        ),
      },
      {
        title: "Tối ưu hóa quy trình & Hiệu năng xử lý nền",
        description: (
          <span>
            Đặc tả kiến trúc bất đồng bộ{" "}
            <strong className="text-slate-900 font-semibold">BullMQ</strong> xử lý streaming file
            &gt; 1.000 dòng/30 giây và thu hồi phiên truy cập{" "}
            <strong className="text-blue-700 font-bold">dưới 500 ms trên Redis</strong>, cắt giảm{" "}
            <strong className="text-emerald-600 font-bold">&gt; 70% thời gian xử lý thủ công</strong>{" "}
            cho toàn bộ chu kỳ vận hành.
          </span>
        ),
      },
    ],
  },
];

const ARTIFACT_TABS: ArtifactTab[] = [
  {
    id: "diagrams",
    label: "System Diagrams & Modeling",
    items: [
      {
        title: "Sơ đồ ERD Kho hàng với Khóa BIGINT",
        type: "Png",
        link: "https://drive.google.com/file/d/1P_q_Hx_45JcbDUd29pf-kJT2Ei4gstTT/view?usp=sharing",
      },
      {
        title: "Sequence Diagram Luồng Nhập/Xuất kho Atomic Transaction",
        type: "Diagram",
        link: "https://app.diagrams.net/#G1kQFuk7Wm2_ZUOKw4bIoYkpGTntvhFDeo#%7B%22pageId%22%3A%22HB_me9jukh97eeU58cv6%22%7D",
      },
    ],
  },
  {
    id: "specs",
    label: "System Specifications & APIs",
    items: [
      {
        title: "Tài liệu SRS InternHub chuẩn IEEE 830",
        type: "Docx",
        link: "https://docs.google.com/document/d/1U6ADSXSfRyiW42ywHLn82vSgylrpAGMT/edit?usp=sharing&ouid=114608328006379285745&rtpof=true&sd=true",
      },
      {
        title: "Swagger RESTful API Docs & Payload Contracts",
        type: "OpenAPI",
        link: "#",
      },
    ],
  },
  {
    id: "agile",
    label: "Agile & Backlog Management",
    items: [
      {
        title: "Mẫu User Story & Acceptance Criteria (AC)",
        type: "Spreadsheet",
        link: "https://docs.google.com/spreadsheets/d/1zVIbDtfJkyEGt5okfbXjclGB__9PIiMGkb3hP8D4jTI/edit?usp=sharing",
      },
      {
        title: "Ma trận Phân quyền RBAC Matrix (5 Roles)",
        type: "Spreadsheet",
        link: "https://docs.google.com/spreadsheets/d/1aPIpiZBx37L2-iXq7i_jC4ik8m0jS4QYfZ4oX9N9SM8/edit?usp=sharing",
      },
    ],
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<string>("diagrams");
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("nguyentanh2k5@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <span className="font-extrabold text-lg md:text-xl tracking-tight text-slate-900">
            TUAN ANH <span className="text-[#2563EB]">.BA</span>
          </span>
          <a
            href="#contact"
            className="text-xs md:text-sm font-semibold bg-[#2563EB] hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all shadow-md shadow-blue-500/20 active:scale-95 flex items-center gap-2"
          >
            <Mail className="w-4 h-4" /> Liên Hệ Ngay
          </a>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="py-16 md:py-24 border-b border-slate-200 bg-gradient-to-b from-white via-slate-50/40 to-slate-50 relative overflow-hidden">
        {/* Glow & Grid Accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/60 blur-3xl rounded-full pointer-events-none -z-0" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-emerald-100/40 blur-3xl rounded-full pointer-events-none -z-0" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          {/* 1. EYEBROW TAG (Huy hiệu chuyên môn) */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#2563EB] text-xs sm:text-sm font-bold tracking-wide uppercase mb-6 shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2563EB]"></span>
            </span>
            <span>TECHNICAL BUSINESS ANALYST | SYSTEM ARCHITECTURE &amp; PROCESS OPTIMIZATION</span>
          </div>

          {/* 2. HEADLINE & VALUE PROPOSITION (Tuyên ngôn giá trị) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-slate-900 leading-[1.18] tracking-tight max-w-5xl mb-6">
            Chuyển hóa bài toán nghiệp vụ phức tạp thành{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
              kiến trúc hệ thống chuẩn xác
            </span>
            , có thể đo lường và sẵn sàng chịu tải.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-4xl leading-relaxed mb-8">
            <strong className="text-slate-900 font-semibold">Technical Business Analyst</strong> chuyên sâu thiết kế quy trình nghiệp vụ số hóa, mô hình hóa dữ liệu quan hệ (<span className="font-semibold text-slate-900">3NF</span>) và đặc tả logic giao dịch đồng thời (<span className="font-semibold text-slate-900">Concurrency &amp; Data Integrity</span>). Thu hẹp khoảng cách giữa mục tiêu kinh doanh và hiện thực kỹ thuật thông qua tài liệu <span className="font-semibold text-slate-900">BRD, FSM, và API Contracts</span> chuẩn công nghiệp – giúp triệt tiêu rủi ro sai lệch dữ liệu và tối ưu hóa <span className="font-bold text-[#059669]">60%+ hiệu suất vận hành</span>.
          </p>

          {/* 3. DUAL CALL-TO-ACTION (CTA kép) & QUICK CONTACT */}
          <div className="flex flex-wrap items-center gap-3.5 mb-12">
            {/* Primary CTA: Khám Phá Dự Án & Tài Liệu Kỹ Thuật (Anchor trỏ thẳng tới Section Featured Projects) */}
            <a
              href="#projects"
              className="px-6 py-3.5 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 active:scale-[0.98] flex items-center gap-2.5 text-sm md:text-base group"
            >
              <FileText className="w-4 h-4 text-blue-200 group-hover:scale-110 transition-transform" />
              <span>Khám Phá Dự Án &amp; Tài Liệu Kỹ Thuật</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary CTA: Tải Technical BA Resume */}
            <a
              href="https://drive.google.com/file/d/1X9OsToGuu4pKkUKXlLAWVZvsMTG7udd3/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold border border-slate-300 hover:border-slate-400 rounded-xl transition-all shadow-xs active:scale-[0.98] flex items-center gap-2 text-sm md:text-base group"
            >
              <Download className="w-4 h-4 text-[#2563EB] group-hover:-translate-y-0.5 transition-transform" />
              <span>Tải Technical BA Resume</span>
            </a>

            {/* Kèm nút liên hệ nhanh qua LinkedIn / Email / GitHub */}
            <div className="flex items-center gap-2 sm:pl-2 sm:border-l sm:border-slate-300">
              <a
                href="https://www.linkedin.com/in/nguyntanh2k5/"
                target="_blank"
                rel="noreferrer"
                title="Kết nối qua LinkedIn"
                className="p-3 bg-white hover:bg-blue-50 text-slate-700 hover:text-[#0077B5] border border-slate-200 hover:border-blue-200 rounded-xl transition-all shadow-xs active:scale-95 flex items-center justify-center group"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-600 group-hover:text-[#0077B5]" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:nguyentanh2k5@gmail.com"
                title="Gửi Email trực tiếp"
                className="p-3 bg-white hover:bg-blue-50 text-slate-700 hover:text-[#2563EB] border border-slate-200 hover:border-blue-200 rounded-xl transition-all shadow-xs active:scale-95 flex items-center justify-center group"
              >
                <Mail className="w-4 h-4 text-slate-600 group-hover:text-[#2563EB]" />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="https://github.com/Nguyntanh"
                target="_blank"
                rel="noreferrer"
                title="Xem Database Schema & System Spec trên GitHub"
                className="p-3 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200 hover:border-slate-300 rounded-xl transition-all shadow-xs active:scale-95 flex items-center justify-center group"
              >
                <GithubIcon className="w-4 h-4 text-slate-600 group-hover:text-black" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          {/* 4. SOCIAL PROOF & KEY METRICS NHANH */}
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Chỉ số đo lường năng lực thiết kế &amp; kiến trúc hệ thống</span>
            </div>

            {/* Metric Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Metric 1 */}
              <div className="p-5 md:p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight">
                    100%
                  </div>
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-sm font-bold text-slate-900 tracking-tight mb-1.5">
                  Data Integrity
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Triệt tiêu hoàn toàn rủi ro xuất âm kho &amp; xung đột trạng thái giao dịch (<span className="font-semibold text-slate-800">Concurrency Locking Spec</span>).
                </p>
              </div>

              {/* Metric 2 */}
              <div className="p-5 md:p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-500" />
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="text-2xl sm:text-3xl font-black text-[#2563EB] tracking-tight">
                    2+
                  </div>
                  <div className="p-2 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100 group-hover:scale-110 transition-transform">
                    <Database className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-sm font-bold text-slate-900 tracking-tight mb-1.5">
                  Enterprise Systems
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Thiết kế trọn vẹn đặc tả vòng đời <span className="font-semibold text-slate-800">Smart WMS</span> (Kho vận thông minh) &amp; <span className="font-semibold text-slate-800">InternHub</span> (Quản trị nhân tài khép kín).
                </p>
              </div>

              {/* Metric 3 */}
              <div className="p-5 md:p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="text-2xl sm:text-3xl font-black text-indigo-600 tracking-tight">
                    58.5%
                  </div>
                  <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-sm font-bold text-slate-900 tracking-tight mb-1.5">
                  Routing Optimization
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Mô hình hóa thành công bài toán <span className="font-semibold text-slate-800">Heuristic &amp; định tuyến S-Shape</span> cho vận hành thực tế.
                </p>
              </div>
            </div>

            {/* Kênh kết nối (GitHub, LinkedIn, Email) */}
            <div className="p-4 bg-slate-100/80 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-2">
              <div className="text-xs font-bold text-slate-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span>Kênh kết nối &amp; kho tài liệu kỹ thuật:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <a
                  href="https://github.com/Nguyntanh"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold border border-slate-200 rounded-lg shadow-2xs hover:border-slate-300 transition-all group"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-700 group-hover:text-black" />
                  <span>GitHub <span className="text-slate-500 font-normal hidden lg:inline">(Database Schema/Spec)</span></span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-slate-700" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nguyntanh2k5/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-white hover:bg-blue-50 text-slate-800 hover:text-[#0077B5] text-xs font-semibold border border-slate-200 hover:border-blue-200 rounded-lg shadow-2xs transition-all group"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#0077B5]" />
                  <span>LinkedIn <span className="text-slate-500 font-normal hidden lg:inline">(Chuyên môn &amp; Kết nối)</span></span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#0077B5]" />
                </a>
                <a
                  href="mailto:nguyentanh2k5@gmail.com"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-white hover:bg-blue-50 text-slate-800 hover:text-[#2563EB] text-xs font-semibold border border-slate-200 hover:border-blue-200 rounded-lg shadow-2xs transition-all group"
                >
                  <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Email Kỹ Thuật</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED TECHNICAL PROJECTS (Đặt ngay sau Hero Section) */}
      <section id="projects" className="py-16 md:py-24 border-b border-slate-200 bg-white scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
                <Boxes className="w-3.5 h-3.5" />
                <span>Enterprise Case Studies &amp; System Specs</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Featured Technical Projects
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-lg">
              Đặc tả kiến trúc hệ thống, xử lý đồng thời (Concurrency), mô hình hóa dữ liệu 3NF và tối ưu hóa quy trình vận hành đo lường chuẩn Google XYZ.
            </p>
          </div>

          <div className="space-y-12">
            {FEATURED_PROJECTS.map((project) => (
              <article
                key={project.id}
                id={project.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative group"
              >
                {/* Header Gradient Accent Strip */}
                <div
                  className={`h-1.5 w-full ${
                    project.id === "smart-wms"
                      ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500"
                      : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500"
                  }`}
                />

                <div className="p-6 sm:p-8 md:p-10 space-y-8">
                  {/* Top Metadata */}
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-mono text-xs font-black px-2.5 py-1 rounded-md bg-slate-900 text-white tracking-widest">
                          {project.badgeNumber}
                        </span>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] border border-blue-200/80">
                          {project.domain}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/80">
                        Vai trò: <span className="text-[#2563EB]">{project.role}</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-5xl">
                      <strong className="text-slate-800 font-semibold">Tên dự án &amp; Bối cảnh:</strong>{" "}
                      {project.context}
                    </p>
                  </div>

                  {/* Problem & Solution Dual Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {/* Vấn Đề */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-rose-50/60 border border-rose-200/80 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-700 mb-2.5">
                          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                          <span>Vấn Đề Vận Hành &amp; Thách Thức Kỹ Thuật</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                    </div>

                    {/* Giải Pháp (Action) */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/60 border border-blue-200/80 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2.5">
                          <Cpu className="w-4 h-4 text-[#2563EB] shrink-0" />
                          <span>Giải Pháp Đặc Tả &amp; Kiến Trúc BA (Action)</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Google XYZ Impact Container */}
                  <div className="space-y-4">
                    {/* Quick KPI Stat Chips */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      {project.impactMetrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 transition-colors"
                        >
                          <div className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                            <span
                              className={
                                metric.color === "emerald"
                                  ? "text-emerald-600"
                                  : metric.color === "blue"
                                  ? "text-[#2563EB]"
                                  : "text-indigo-600"
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
                    <div className="p-5 sm:p-6 bg-slate-900 rounded-2xl text-white border border-slate-800 shadow-inner">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-800">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 uppercase tracking-wider">
                            Kết Quả Đo Lường (Google XYZ Impact)
                          </span>
                          <span className="text-xs text-slate-400 hidden sm:inline">
                            Accomplished <strong>[X]</strong> as measured by <strong>[Y]</strong>, by doing <strong>[Z]</strong>
                          </span>
                        </div>
                        <div className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800/60 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Đo lường kiểm chứng</span>
                        </div>
                      </div>

                      <div className="space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {project.googleXyzParagraphs.map((stmt, sIdx) => (
                          <div key={sIdx}>{stmt}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Artifacts & Tech Stack */}
                  <div className="pt-2 border-t border-slate-200/80 space-y-4">
                    {/* Deliverables */}
                    <div>
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#2563EB]" />
                        <span>Artifacts &amp; Deliverables:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.deliverables.map((item, dIdx) => (
                          <span
                            key={dIdx}
                            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 shadow-2xs hover:bg-blue-50 hover:border-blue-200 hover:text-[#2563EB] transition-all"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Analyzed */}
                    <div>
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                        <Database className="w-4 h-4 text-[#059669]" />
                        <span>Tech Stack Analyzed:</span>
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
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-xs active:scale-95 group/btn ${
                          link.isPrimary
                            ? "bg-[#2563EB] hover:bg-blue-700 text-white shadow-blue-500/20"
                            : "bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 hover:border-slate-300"
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

      {/* 3. TECHNICAL SKILLS & CORE COMPETENCIES (Đặt ngay sau Featured Projects) */}
      <section id="skills" className="py-16 md:py-24 border-b border-slate-200 bg-slate-50/70 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
                <Workflow className="w-3.5 h-3.5" />
                <span>Architecture &amp; Engineering Matrix</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Technical Skills &amp; Core Competencies
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-lg">
              Hệ thống năng lực kỹ thuật chuẩn hóa 4 tầng kiến trúc – từ mô hình hóa nghiệp vụ &amp; cơ chế kiểm soát giao dịch đồng thời đến an ninh bảo mật và quy trình Agile công nghiệp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {SKILL_PILLARS.map((pillar) => {
              const colorClasses = {
                blue: {
                  strip: "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700",
                  badgeBg: "bg-blue-50 text-[#2563EB] border-blue-200",
                  iconBox: "bg-blue-50 text-[#2563EB] border-blue-200",
                  tagHover: "hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200",
                  dotColor: "bg-[#2563EB]",
                },
                emerald: {
                  strip: "bg-gradient-to-r from-emerald-600 to-teal-500",
                  badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
                  iconBox: "bg-emerald-50 text-emerald-700 border-emerald-200",
                  tagHover: "hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200",
                  dotColor: "bg-emerald-600",
                },
                purple: {
                  strip: "bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-700",
                  badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
                  iconBox: "bg-purple-50 text-purple-700 border-purple-200",
                  tagHover: "hover:bg-purple-50 hover:text-purple-800 hover:border-purple-200",
                  dotColor: "bg-purple-600",
                },
                amber: {
                  strip: "bg-gradient-to-r from-amber-600 via-rose-500 to-red-600",
                  badgeBg: "bg-amber-50 text-amber-800 border-amber-200",
                  iconBox: "bg-amber-50 text-amber-800 border-amber-200",
                  tagHover: "hover:bg-amber-50 hover:text-amber-900 hover:border-amber-200",
                  dotColor: "bg-amber-600",
                },
              }[pillar.color];

              return (
                <div
                  key={pillar.id}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group relative"
                >
                  {/* Top Color Accent Line */}
                  <div className={`h-1.5 w-full ${colorClasses.strip}`} />

                  <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                    {/* Header */}
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span
                          className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${colorClasses.badgeBg}`}
                        >
                          {pillar.tier}
                        </span>
                        <span className="font-mono text-xs font-black px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                          {pillar.number}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2.5 rounded-xl border ${colorClasses.iconBox} shrink-0 group-hover:scale-105 transition-transform`}
                        >
                          {pillar.iconName === "server" && <Server className="w-5 h-5" />}
                          {pillar.iconName === "database" && <Database className="w-5 h-5" />}
                          {pillar.iconName === "layout" && <Layout className="w-5 h-5" />}
                          {pillar.iconName === "shield" && <ShieldCheck className="w-5 h-5" />}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    {/* 4 Sub-Categories */}
                    <div className="space-y-4 pt-3 border-t border-slate-100">
                      {pillar.subCategories.map((sub, sIdx) => (
                        <div key={sIdx} className="space-y-2">
                          <div className="text-xs font-bold text-slate-800 flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${colorClasses.dotColor}`} />
                            <span>{sub.title}</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 pl-3.5">
                            {sub.items.map((item, iIdx) => {
                              // Highlight technical keywords or formulas
                              const isCodeLike =
                                item.includes("SELECT") ||
                                item.includes("ORDER BY") ||
                                item.includes("CHECK") ||
                                item.includes("DENY") ||
                                item.includes("3NF") ||
                                item.includes("FSM") ||
                                item.includes("JSONB") ||
                                item.includes("OAuth2") ||
                                item.includes("GIN Index");

                              return (
                                <span
                                  key={iIdx}
                                  className={`text-xs px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-700 transition-all ${colorClasses.tagHover} ${
                                    isCodeLike ? "font-mono font-medium text-slate-800" : "font-sans"
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
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCES & DELIVERY MILESTONES (Đặt ngay sau Phần 3) */}
      <section id="experience" className="py-16 md:py-24 border-b border-slate-200 bg-white scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
                <Milestone className="w-3.5 h-3.5" />
                <span>Proven Delivery Track Record</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Experiences &amp; Delivery Milestones
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-lg">
              Hành trình chuyển giao giá trị thực tế: Từ nghiên cứu mô hình hóa giải thuật, kiểm soát giao dịch đồng thời đến nghiệm thu tải k6 và bàn giao Sprints đúng hạn.
            </p>
          </div>

          <div className="space-y-10">
            {EXPERIENCE_MILESTONES.map((milestone) => (
              <div
                key={milestone.id}
                className="bg-slate-50/60 rounded-3xl border border-slate-200/90 hover:border-blue-200 p-6 sm:p-8 md:p-10 transition-all duration-300 shadow-sm hover:shadow-lg relative overflow-hidden group"
              >
                {/* Accent Top Border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${
                    milestone.accentColor === "blue"
                      ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500"
                      : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500"
                  }`}
                />

                {/* Header Information */}
                <div className="space-y-4 pb-6 border-b border-slate-200">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-xs font-black px-3 py-1 rounded-md bg-slate-900 text-white tracking-widest">
                      {milestone.milestoneNumber}
                    </span>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] border border-blue-200/80">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{milestone.timeline}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {milestone.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Briefcase className="w-4 h-4 text-[#2563EB] shrink-0" />
                      <span className="text-slate-500">Vị trí:</span>
                      <strong className="text-slate-900 font-semibold">{milestone.role}</strong>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">•</span>
                    <div className="flex items-center gap-1.5 font-medium">
                      <Users className="w-4 h-4 text-[#059669] shrink-0" />
                      <span className="text-slate-500">Quy mô &amp; Mô hình:</span>
                      <strong className="text-slate-800 font-semibold">{milestone.teamScale}</strong>
                    </div>
                  </div>
                </div>

                {/* Đóng góp & Dấu ấn đo lường */}
                <div className="pt-6 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                    <span>Đóng góp &amp; Dấu ấn đo lường:</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {milestone.contributions.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group/item"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-2.5">
                            <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#2563EB] font-mono text-xs font-bold flex items-center justify-center border border-blue-200 group-hover/item:bg-[#2563EB] group-hover/item:text-white transition-colors">
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

      {/* 5. INTERACTIVE ARTIFACTS SHOWCASE */}
      <section id="system-specs" className="py-16 border-b border-slate-200 bg-slate-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8 text-slate-900 tracking-tight">
            Interactive Artifacts Showcase
          </h2>

          {/* Tab Navigation */}
          <div
            className="flex border-b border-slate-200 overflow-x-auto mb-6"
            role="tablist"
          >
            {ARTIFACT_TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 font-semibold text-sm whitespace-nowrap transition-all border-b-2 ${
                  activeTab === tab.id
                    ? "border-[#2563EB] text-[#2563EB] bg-white rounded-t-lg"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            {ARTIFACT_TABS.map((tab) => {
              if (tab.id !== activeTab) return null;
              return (
                <div key={tab.id} className="grid md:grid-cols-2 gap-4">
                  {tab.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      className="flex items-center justify-between p-4 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-200 rounded-xl transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="text-[#2563EB] w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="text-sm font-semibold text-slate-900 group-hover:text-[#2563EB] transition-colors">
                            {item.title}
                          </div>
                          <span className="text-xs text-slate-500 font-mono">
                            {item.type}
                          </span>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </a>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FOOTER & CONTACT SECTION */}
      <footer id="contact" className="pt-20 pb-12 bg-white border-t border-slate-200 relative overflow-hidden">
        {/* Glow Ambient Accent Lights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-blue-100/40 blur-[100px] rounded-full pointer-events-none -z-0" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Availability Badge & Core CTA Headline */}
          <div className="flex flex-col items-center text-center mb-12">
            {/* 1. Availability Badge (Tình trạng tuyển dụng hiện tại) */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold shadow-xs mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Open for Technical BA / Systems Analyst (Fresher / Associate / Full-time)</span>
              <span className="text-emerald-400 hidden sm:inline">•</span>
              <span className="text-emerald-700 font-normal">Sẵn sàng onboard ngay tại Hà Nội hoặc Hybrid/Remote</span>
            </div>

            {/* 2. Core Call-to-Action Headline (Lời mời hợp tác sắc bén) */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight max-w-4xl mb-4">
              "Sẵn sàng chuyển hóa bài toán nghiệp vụ phức tạp thành kiến trúc hệ thống bền vững cùng doanh nghiệp của bạn."
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Nếu đội ngũ của bạn đang tìm kiếm một Technical BA sở hữu tư duy hệ thống vững chắc, có khả năng nói chuyện cùng Business Stakeholders và thiết kế logic dữ liệu chuẩn xác cho Engineering Team — hãy kết nối ngay hôm nay.
            </p>
          </div>

          {/* 3. Direct Contact Hub (Kênh liên hệ trực tiếp & Tương tác nhanh) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {/* Email (Click-to-Copy & Mailto) */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-blue-300 hover:bg-white transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="p-2.5 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
                    Click-to-Copy
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Email Kỹ Thuật
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900 font-mono select-all break-all">
                  nguyentanh2k5@gmail.com
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 shadow-2xs flex items-center justify-center gap-1.5 transition-all active:scale-95"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Đã sao chép!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Sao chép email</span>
                    </>
                  )}
                </button>
                <a
                  href="mailto:nguyentanh2k5@gmail.com"
                  className="py-2 px-3 rounded-lg text-xs font-semibold bg-[#2563EB] hover:bg-blue-700 text-white shadow-2xs flex items-center justify-center gap-1 transition-all active:scale-95"
                >
                  <span>Mở Mail</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Điện thoại / Zalo */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-emerald-300 hover:bg-white transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                    Hotline &amp; Zalo
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Điện thoại / Zalo
                </div>
                <div className="text-lg font-extrabold text-slate-900 font-mono">
                  0969 236 054
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center gap-2">
                <a
                  href="tel:0969236054"
                  className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 shadow-2xs flex items-center justify-center gap-1.5 transition-all active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
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

            {/* Địa bàn làm việc */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-indigo-300 hover:bg-white transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 group-hover:scale-105 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200/60">
                    Địa Bàn
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Địa bàn làm việc
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900">
                  Vạn Phúc, Hà Đông, Hà Nội
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200">
                <div className="text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Sẵn sàng Onboard ngay tại HN hoặc Hybrid/Remote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Links & One-Click Asset Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/60">
                <span>Verified System Artifacts &amp; Credentials</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Download Technical BA Resume &amp; Review Schemas
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                Truy cập hồ sơ năng lực, bảng đặc tả Data Dictionaries, API Specs &amp; Schema DDL trên GitHub và LinkedIn.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              {/* One-Click Asset: Nút tải trực tiếp */}
              <a
                href="https://drive.google.com/file/d/1X9OsToGuu4pKkUKXlLAWVZvsMTG7udd3/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-[#2563EB] hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 active:scale-95 transition-all flex items-center gap-2 text-sm sm:text-base group"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Technical BA Resume (PDF)</span>
              </a>

              {/* LinkedIn Profile */}
              <a
                href="https://www.linkedin.com/in/nguyntanh2k5/"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl border border-slate-700 transition-all active:scale-95 flex items-center gap-2 text-sm"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                <span className="font-semibold hidden sm:inline">LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Nguyntanh"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl border border-slate-700 transition-all active:scale-95 flex items-center gap-2 text-sm"
                title="GitHub (Data Dictionaries, API Specs & Schema DDL)"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="font-semibold hidden sm:inline">GitHub Specs</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* 4. Engineering Footer & Integrity Statement (Cam kết chuẩn mực) */}
          <div className="pt-8 border-t border-slate-200 text-center space-y-4">
            {/* Tuyên ngôn chất lượng */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200/80">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>"Designed with strict architectural mindset. Verified for zero data drift &amp; high transactional reliability."</span>
            </div>

            {/* Copyright & Tech Stack Badge */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 pt-2">
              <div>
                © 2026 <strong className="text-slate-800 font-semibold">Nguyễn Tuấn Anh</strong>. All rights reserved.
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 text-slate-600 border border-slate-200 font-mono text-[11px]">
                <span>Built with React, Vite &amp; Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
