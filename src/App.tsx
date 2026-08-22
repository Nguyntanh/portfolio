import { useState } from "react";
import {
  CheckCircle2,
  ExternalLink,
  FileText,
  Mail,
  Phone,
  Layers,
  Workflow,
  Download,
} from "lucide-react";

// --- TYPES ---
interface CaseStudy {
  id: string;
  title: string;
  role: string;
  timeline: string;
  techStack: string[];
  situation: string;
  action: string[];
  result: string[];
}

interface ArtifactTab {
  id: string;
  label: string;
  items: { title: string; type: string; link: string }[];
}

// --- DATA ---
const CASE_STUDIES: CaseStudy[] = [
  {
    id: "wms",
    title: "📌 CASE STUDY 1: Hệ Thống Quản Lý Kho Hàng Thông Minh (WMS)",
    role: "Technical Business Analyst",
    timeline: "06/2026 – 09/2026",
    techStack: [
      "ReactJS/Vite",
      "NestJS",
      "MySQL",
      "Redis Cache",
      "RESTful API",
    ],
    situation:
      'Quy trình vận hành kho truyền thống chịu rủi ro "kho mù", phụ thuộc file Excel rời rạc gây sai lệch dữ liệu và tăng 35% quãng đường di chuyển tác nghiệp.',
    action: [
      "Đặc tả 7 phân hệ chức năng, 13 Use Cases, chuẩn hóa dữ liệu CSDL khóa BIGINT và thiết kế ma trận phân quyền RBAC.",
      "Xây dựng thuật toán Smart Slotting Engine kết hợp phân hạng ABC lai và tọa độ 3D; thiết kế cơ chế chống xuất khống via Lock Transaction.",
      "Chuẩn hóa tài liệu RESTful API spec, mô hình hóa Outbox Pattern để đồng bộ dữ liệu bất đồng bộ với hệ thống ERP.",
    ],
    result: [
      "Tăng tỷ lệ chính xác tồn kho lên 95.8%.",
      "Giảm 28% – 35% quãng đường di chuyển cất/lấy hàng.",
      "Phản hồi API tra cứu < 40ms ở mức tải 650 RPS.",
    ],
  },
  {
    id: "internhub",
    title:
      "📌 CASE STUDY 2: InternHub – Nền Tảng Quản Lý Thực Tập Sinh Tập Trung",
    role: "Lead Business Analyst",
    timeline: "01/2026 – 04/2026",
    techStack: [
      "Angular",
      "Java Spring Boot",
      "MySQL",
      "RESTful API",
      "Jira/Confluence",
    ],
    situation:
      "Đào tạo thực tập sinh tại doanh nghiệp bị phân mảnh qua Excel/Zalo, khiến HR/Mentor tốn 40% thời gian cho tác vụ hành chính và đánh giá kết quả mang tính cảm tính.",
    action: [
      "Lập tài liệu đặc tả SRS chuẩn IEEE 830, bóc tách phạm vi MVP 1.0 và biên soạn 19 User Stories chuẩn INVEST cho 5 nhóm tác nhân.",
      "Đặc tả mô hình đánh giá Skill Tags 2 lớp, công thức tính GPA trọng số Micro-tasks và bảo toàn dữ liệu bằng cờ Soft Delete.",
      "Vận hành Agile/Scrum trên Jira, ứng dụng AI bóc tách nhiệm vụ, điều phối 5 Sprints cho đội ngũ 5 lập trình viên.",
    ],
    result: [
      "Giúp doanh nghiệp giảm 60% – 70% thời gian tác vụ hành chính.",
      "Đảm bảo 100% tính năng hoàn thành đúng tiến độ Sprints.",
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
        link: "https://app.diagrams.net/#G1kQFuk7Wm2_ZUOKw4bIoYkpGTntvhFDeo#%7B%22pageId%22%3A%22oBJV3Z6j8f0KfGirI5Sk%22%7D",
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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <span className="font-extrabold text-lg md:text-xl tracking-tight text-slate-900">
            TUAN ANH <span className="text-[#2563EB]">.BA</span>
          </span>
          <a
            href="mailto:nguyentanh2k5@gmail.com"
            className="text-xs md:text-sm font-semibold bg-[#2563EB] hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all shadow-md shadow-blue-500/20 active:scale-95 flex items-center gap-2"
          >
            <Mail className="w-4 h-4" /> Contact Me
          </a>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="py-16 md:py-24 border-b border-slate-200 bg-white relative overflow-hidden">
        {/* Glow Light Accent */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/60 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            AVAILABLE FOR TECHNICAL BA / SYSTEM ANALYST ROLES
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight max-w-4xl mb-6">
            Bridge Business Logic with{" "}
            <span className="text-[#2563EB]">Scalable Architecture</span> &
            System Specifications
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed mb-10">
            Cử nhân KTPM (GPA 3.33/4.0) sở hữu chứng chỉ Google Project
            Management. Chuyên phân tích yêu cầu, chuẩn hóa Database Schema,
            thiết kế RESTful API Spec và tối ưu quy trình Agile/Scrum.
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 md:p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
            <div className="border-l-4 border-[#2563EB] pl-4">
              <div className="text-xl sm:text-2xl font-black text-slate-900">
                3.33 / 4.0
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                GPA KTPM - CMC University
              </div>
            </div>
            <div className="border-l-4 border-[#2563EB] pl-4">
              <div className="text-xl sm:text-2xl font-black text-slate-900">
                Google PM
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                Certified Professional
              </div>
            </div>
            <div className="border-l-4 border-[#059669] pl-4">
              <div className="text-xl sm:text-2xl font-black text-[#059669]">
                95.8%
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                Độ chính xác CSDL & Nghiệp vụ
              </div>
            </div>
            <div className="border-l-4 border-[#059669] pl-4">
              <div className="text-xl sm:text-2xl font-black text-[#059669]">
                60% - 70%
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                Tối ưu hóa quy trình vận hành
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT & TECHNICAL HYBRID MATRIX */}
      <section className="py-16 border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8 text-slate-900 flex items-center gap-3 tracking-tight">
            <Workflow className="text-[#2563EB] w-6 h-6" /> Core Competency
            Matrix
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* BA Core Block */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-base font-bold text-[#2563EB] mb-4 flex items-center gap-2 tracking-wide uppercase">
                💼 BA CORE & REQUIREMENTS ENG.
              </h3>
              <ul className="space-y-3.5 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2563EB] font-bold select-none">
                    •
                  </span>
                  <span>
                    <strong className="text-slate-900 font-semibold">
                      Document Specs:
                    </strong>{" "}
                    SRS (IEEE 830), BRD, User Story (INVEST), BR.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2563EB] font-bold select-none">
                    •
                  </span>
                  <span>
                    <strong className="text-slate-900 font-semibold">
                      Modeling:
                    </strong>{" "}
                    Use Case, Activity & Sequence Diagrams, RBAC Matrix.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2563EB] font-bold select-none">
                    •
                  </span>
                  <span>
                    <strong className="text-slate-900 font-semibold">
                      Agile & Project:
                    </strong>{" "}
                    Scrum, Jira/Confluence, AI-Assisted BA tools.
                  </span>
                </li>
              </ul>
            </div>

            {/* Tech Core Block */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-base font-bold text-[#059669] mb-4 flex items-center gap-2 tracking-wide uppercase">
                💻 TECHNICAL & SYSTEM DESIGN
              </h3>
              <ul className="space-y-3.5 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#059669] font-bold select-none">
                    •
                  </span>
                  <span>
                    <strong className="text-slate-900 font-semibold">
                      Database:
                    </strong>{" "}
                    MySQL 8.x, BIGINT Primary / Foreign Keys, ERD, Transaction.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#059669] font-bold select-none">
                    •
                  </span>
                  <span>
                    <strong className="text-slate-900 font-semibold">
                      Architecture & APIs:
                    </strong>{" "}
                    RESTful API Specs, Swagger, Postman, Outbox Pattern.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#059669] font-bold select-none">
                    •
                  </span>
                  <span>
                    <strong className="text-slate-900 font-semibold">
                      Technical Stack:
                    </strong>{" "}
                    ReactJS/Vite, NestJS, Redis Cache, TypeORM, Git.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED CASE STUDIES */}
      <section className="py-16 border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-10 text-slate-900 flex items-center gap-3 tracking-tight">
            <Layers className="text-[#2563EB] w-6 h-6" /> Featured Case Studies
          </h2>

          <div className="space-y-10">
            {CASE_STUDIES.map((cs) => (
              <article
                key={cs.id}
                className="bg-slate-50/60 border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-blue-200 hover:bg-white transition-all shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 border-b border-slate-200 pb-4">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">
                    {cs.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-600 bg-slate-200/60 px-3 py-1 rounded-full w-fit shrink-0">
                    {cs.timeline} |{" "}
                    <span className="text-[#2563EB] font-bold">{cs.role}</span>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cs.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 bg-white text-slate-700 rounded-md border border-slate-200 shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* STAR Grid */}
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-bold text-[#2563EB] uppercase text-xs tracking-wider mb-1.5">
                      Situation & Task
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {cs.situation}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#2563EB] uppercase text-xs tracking-wider mb-1.5">
                      Action (BA Scope)
                    </h4>
                    <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed">
                      {cs.action.map((act, i) => (
                        <li key={i}>{act}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#059669] uppercase text-xs tracking-wider mb-1.5">
                      Result & Impact
                    </h4>
                    <ul className="space-y-1.5 text-slate-900">
                      {cs.result.map((res, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                          <span className="font-semibold">{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE ARTIFACTS SHOWCASE */}
      <section className="py-16 border-b border-slate-200 bg-slate-50">
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

      {/* 5. FOOTER & CALL-TO-ACTION */}
      <footer className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6">
            Ready to standardise your software development lifecycle?
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="https://drive.google.com/file/d/1X9OsToGuu4pKkUKXlLAWVZvsMTG7udd3/view?usp=sharing"
              className="px-6 py-3 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95 flex items-center gap-2 text-sm"
            >
              <Download className="w-4 h-4" /> Tải CV Nguyễn Tuấn Anh (PDF)
            </a>
            <a
              href="https://www.linkedin.com/in/nguyntanh2k5/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold border border-slate-200 rounded-xl transition-all active:scale-95 flex items-center gap-2 text-sm group"
            >
              <span>Kết nối LinkedIn</span>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

          <div className="pt-8 border-t border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
            <p className="font-bold text-slate-900">Nguyễn Tuấn Anh</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:nguyentanh2k5@gmail.com"
                className="flex items-center gap-1.5 hover:text-[#2563EB] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#2563EB]" />{" "}
                nguyentanh2k5@gmail.com
              </a>
              <a
                href="tel:0969236054"
                className="flex items-center gap-1.5 hover:text-[#059669] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#059669]" /> 0969236054
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
