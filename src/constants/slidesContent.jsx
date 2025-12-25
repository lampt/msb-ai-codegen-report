import React from 'react';
import * as C from '../components/Charts';

export const SLIDES_DATA = [
  {
    id: 1, type: 'cover', 
    title: 'REPORT',
    titleGradient: 'AI CODE-GENERATION',
    subtitle: 'Từ thử nghiệm TabbyML Pilot đến Lộ trình tích hợp SDLC toàn diện',
    org: 'MSB. AI PROGRAM', 
    date: 'Tháng 12/2025', 
    unit: 'Đơn vị: AIP - Codegen Squad',
    bgImage: 'https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148879890.jpg'
  },
  {
    id: 2, type: 'agenda', title: 'Nội dung chính',
    items: [
      { num: '01', title: 'Tổng quan & Sự dịch chuyển SDLC', color: 'var(--msb-red)' },
      { num: '02', title: 'Phân tích & So sánh các công cụ AI', color: 'var(--msb-orange)' },
      { num: '03', title: 'Kết quả Pilot Tabby tại MSB (Chi tiết)', color: 'var(--msb-red)' },
      { num: '04', title: 'Chiến lược & Lộ trình triển khai', color: 'var(--msb-orange)' }
    ]
  },
  {
    id: 3, type: 'sdlc_evolution', title: '1. Tổng quan & Sự dịch chuyển SDLC', subTitle: 'Sự tiến hóa của Quy trình (SDLC)',
    sdlcSteps: [
      { step: 'Requirement', icon: 'fa-file-alt' },
      { step: 'Design', icon: 'fa-pencil-ruler' },
      { step: 'Implementation', icon: 'fa-code' },
      { step: 'Testing', icon: 'fa-bug' },
      { step: 'Deployment', icon: 'fa-rocket' }
    ],
    slogan: 'AI không loại bỏ lập trình viên, mà thay đổi căn bản cách phân bổ nỗ lực (Effort) trong quy trình phát triển phần mềm.',
    cards: [
      { icon: 'fa-laptop-code', title: 'Traditional SDLC', text: 'Mô hình truyền thống, tập trung phần lớn thời gian vào việc viết mã thủ công (Implementation).', badge: 'Focus: Coding (Gõ code)', color: '#6c757d' },
      { icon: 'fa-comments', title: 'AI-Assisted (Vibe)', text: 'Sử dụng Chatbot (Copilot/Gemini) để gợi ý code nhanh. Giảm coding, nhưng tăng thời gian debug lỗi.', badge: 'Focus: Debugging & Prompting', color: 'var(--msb-orange)', highlight: true },
      { icon: 'fa-robot', title: 'Spec-Driven (Agentic)', text: 'AI tự động thực hiện coding dựa trên đặc tả kỹ thuật (Specs). Con người tập trung vào thiết kế và kiểm thử.', badge: 'Focus: Design & Review', color: '#0d6efd' }
    ]
  },
  {
    id: 4, type: 'split_chart', layout: 'split-chart-50-50', title: '1. Tổng quan & Sự dịch chuyển SDLC', subTitle: 'Dữ liệu hóa: Sự dịch chuyển Nỗ lực',
    analysis: {
      points: [
        { label: 'Xu hướng rõ rệt:', text: 'Thời gian cho "Coding/Implementation" (màu cam) giảm mạnh.', color: '#fd7e14' },
        { label: 'Yêu cầu mới:', text: 'Thời gian cho "Design/Specs" (màu đỏ) và "Review/Verify" (màu xanh) tăng lên đáng kể.', color: '#dc3545' }
      ],
      takeaways: {
        title: "Định hướng & Hành động",
        icon: "fa-bullseye",
        items: [
            { icon: "fa-brain", text: "Chuyển dịch tư duy: Từ \"Thợ code\" sang \"Kiến trúc sư giải pháp\", tập trung vào thiết kế và chất lượng." },
            { icon: "fa-graduation-cap", text: "Đào tạo kỹ năng mới: Mở các khóa học về Prompt Engineering, Spec-Driven Design và AI-assisted Testing." },
            { icon: "fa-tools", text: "Tối ưu công cụ: Xây dựng bộ quy tắc và \"best practice\" để khai thác tối đa sức mạnh của các công cụ AI." }
        ]
      }
    },
    chart: <C.EffortShiftChart />
  },
  {
    id: 5, type: 'dual_chart', title: '2. Phân tích & So sánh các công cụ AI', subTitle: 'Bức tranh thị trường & Đánh giá năng lực',
    left: { title: 'Bức tranh thị trường (Market Map)', chart: <C.MarketBubbleChart />, desc: 'Phân loại dựa trên IQ và An toàn dữ liệu. Kích thước bong bóng thể hiện Mức độ phổ biến.' },
    right: { title: 'Đánh giá đa chiều (Radar)', chart: <C.RadarAssessmentChart />, desc: 'So sánh chi tiết 5 công cụ trên 5 tiêu chí cốt lõi.' }
  },
  {
    id: 6, type: 'tool_groups', title: '2. Phân tích & So sánh các công cụ AI', subTitle: 'Phân loại công cụ: AI Assistants vs Agentic AI',
    groups: [
      {
        title: 'Nhóm 1: AI Assistants',
        subtitle: 'Vibe Coding (Gợi ý tức thời)',
        icon: 'fas fa-magic',
        color: 'var(--msb-orange)',
        desc: 'Đóng vai trò "Pair Programmer" giúp viết code nhanh hơn. Phù hợp tác vụ nhỏ, sửa lỗi, giải thích code.',
        tools: [
          { name: 'GitHub Copilot', tag: 'Leader', highlight: false, icon: 'fab fa-github' },
          { name: 'Google Gemini', tag: 'Context', highlight: false, icon: 'fab fa-google' },
          { name: 'Tabby', tag: 'On-Prem', highlight: true, icon: 'fas fa-shield-alt' },
          { name: 'Codeium', tag: 'Free', highlight: false, icon: 'fas fa-cube' },
          { name: 'Amazon Q', tag: 'AWS', highlight: false, icon: 'fab fa-aws' },
          { name: 'JetBrains AI', tag: 'IDE', highlight: false, icon: 'fas fa-laptop-code' }
        ]
      },
      {
        title: 'Nhóm 2: Agentic AI',
        subtitle: 'Spec-Driven (Tự chủ quy trình)',
        icon: 'fas fa-robot',
        color: '#0d6efd',
        desc: 'Đóng vai trò "Software Engineer" ảo. Tự lập kế hoạch và thực hiện task phức tạp từ đặc tả (Specs).',
        tools: [
          { name: 'AWS Kiro', tag: 'New', highlight: false, icon: 'fab fa-aws' },
          { name: 'Devin', tag: 'Pioneer', highlight: false, icon: 'fas fa-user-astronaut' },
          { name: 'Cursor', tag: 'Composer', highlight: false, icon: 'fas fa-mouse-pointer' },
          { name: 'Windsurf', tag: 'Flow', highlight: false, icon: 'fas fa-wind' },
          { name: 'Lovable', tag: 'Fullstack', highlight: false, icon: 'fas fa-heart' }
        ]
      }
    ]
  },
  {
    id: 7, type: 'tool_grid', title: '2. Phân tích & So sánh các công cụ AI', subTitle: 'Chi tiết năng lực & Điểm nổi bật',
    cards: [
      {
        icon: 'fab fa-github', name: 'GitHub Copilot', color: '#24292e',
        slogan: 'IQ cao nhất (GPT-4o) & Trải nghiệm mượt',
        desc: 'Trợ lý AI phổ biến nhất thế giới, tiên phong mô hình "Pair Programmer".',
        features: ['Tích hợp sâu vào VS Code/IntelliJ.', 'Hỗ trợ đa ngôn ngữ tốt nhất.', 'Lưu ý: Dữ liệu phải gửi lên Cloud.']
      },
      {
        icon: 'fab fa-google', name: 'Google Gemini', color: '#4285F4',
        slogan: 'Context Window siêu lớn (1M+ Token)',
        desc: 'Sức mạnh từ model Gemini 1.5 Pro. Hiểu toàn bộ dự án lớn.',
        features: ['Chat đa phương thức (Ảnh/Code).', 'Giải thích code tường tận.', 'Lưu ý: Phụ thuộc hạ tầng Google.']
      },
      {
        icon: 'fas fa-cat', name: 'Tabby (MSB Choice)', color: 'var(--msb-red)',
        slogan: 'Bảo mật tuyệt đối (Self-hosted)',
        desc: 'Giải pháp Open-source chạy nội bộ, không gửi code ra ngoài.',
        features: ['Zero Data Egress (An toàn 100%).', 'Tự chủ model & hạ tầng.', 'Chi phí tối ưu trên GPU sẵn có.']
      },
      {
        icon: 'fab fa-aws', name: 'AWS Kiro', color: '#FF9900',
        slogan: 'Spec-Driven Agentic AI',
        desc: 'Đại diện thế hệ Agentic AI, làm việc theo quy trình bài bản.',
        features: ['Tự sinh code từ file đặc tả (Specs).', 'Quy trình: Plan -> Code -> Test.', 'Lưu ý: Hệ sinh thái đóng AWS.']
      }
    ]
  },
  {
    id: 8, type: 'table_compare', title: '2. Phân tích & So sánh các công cụ AI', subTitle: 'Bảng so sánh tổng thể các giải pháp',
    rows: [
      { label: 'Triển khai', copilot: 'Cloud SaaS', gemini: 'Cloud SaaS', tabby: 'Self-hosted', kiro: 'Cloud Agent' },
      { label: 'Bảo mật Data', copilot: { text: 'Rủi ro Cloud', type: 'danger' }, gemini: { text: 'Rủi ro Cloud', type: 'danger' }, tabby: { text: 'Tuyệt đối (On-Prem)', type: 'success' }, kiro: { text: 'Cloud (Có cam kết)', type: 'warning' } },
      { label: 'Mô hình (LLM)', copilot: 'GPT-4o (Mạnh)', gemini: 'Gemini 1.5 Pro', tabby: 'GPT-OSS 20B', kiro: 'Claude 3.5 Sonnet' },
      { label: 'Phương pháp', copilot: 'Vibe Coding (Gợi ý)', gemini: 'Vibe Coding (Gợi ý)', tabby: 'Vibe Coding (Gợi ý)', kiro: 'Spec-Driven (Tự chủ)' },
      { label: 'Ngữ cảnh (Context)', copilot: 'Trung bình', gemini: 'Rất lớn (1M+)', tabby: 'RAG (Repo Context)', kiro: 'Project Context' },
      { label: 'Tính năng Chat', copilot: 'Có (Copilot Chat)', gemini: 'Có (Advanced)', tabby: 'Có (Answer Engine)', kiro: 'Có (Agentic)' },
      { label: 'Tích hợp IDE', copilot: 'Rất tốt (Plugin)', gemini: 'Tốt (Plugin)', tabby: 'Tốt (Plugin)', kiro: 'IDE Riêng (Fork)' },    
      { label: 'Chi phí', copilot: '$$ (License)', gemini: 'Free / $', tabby: '$ (Hạ tầng)', kiro: '$$$ (Usage)' }
    ]
  },
  {
    id: 9, type: 'stats_infra', title: '3. Kết quả Pilot Tabby tại MSB', subTitle: 'Tổng quan hạ tầng & Số liệu',
    stats: [
      { icon: 'fa-users', val: '32', lab: 'Users đang hoạt động', color: 'var(--msb-red)' },
      { icon: 'fa-code', val: '4.4k', lab: 'Code Completions (4 tháng)', color: 'var(--msb-orange)' },
      { icon: 'fa-comments', val: '393', lab: 'Lượt Chat (4 tháng)', color: '#0d6efd' }
    ],
    infra: [
      { icon: 'fa-server', lab: 'Server', val: '32 Core CPU, 128GB RAM' },
      { icon: 'fa-microchip', lab: 'GPU', val: '01 x NVIDIA H100' }, 
      { icon: 'fa-brain', lab: 'Model', val: 'GPT-OSS 20B' }
    ]
  },
  {
    id: 11, type: 'split_chart', title: '3. Kết quả Pilot Tabby tại MSB', subTitle: 'Phân tích hiệu quả & Phản hồi',
    analysis: {
      title: 'Phản hồi định tính (Feedback Heatmap)',
      heatmap: [
        { aspect: 'Tốc độ phản hồi (Latency)', java: 'heat-mid', node: 'heat-high', net: 'heat-mid', avg: 'Chấp nhận được' },
        { aspect: 'Độ chính xác (Boilerplate)', java: 'heat-high', node: 'heat-high', net: 'heat-high', avg: 'Điểm mạnh nhất' },
        { aspect: 'Độ chính xác (Logic)', java: 'heat-low', node: 'heat-mid', net: 'heat-low', avg: 'Hạn chế lớn' },
        { aspect: 'Cảm giác Bảo mật', java: 'heat-high', node: 'heat-high', net: 'heat-high', avg: 'Điểm cộng lớn nhất' }
      ],
      conclusions: [
        { text: 'Dev hài lòng về tốc độ phản hồi và khả năng giảm tải các công việc lặp lại nhàm chán.', highlight: 'tốc độ phản hồi' },
        { text: 'Điểm yếu lớn nhất hiện tại là khả năng xử lý logic nghiệp vụ phức tạp chưa cao.', highlight: 'xử lý logic nghiệp vụ' }
      ],
      stats: [
        { icon: 'fa-code', val: '4.4k', lab: 'Code Completions' },
        { icon: 'fa-comments', val: '393', lab: 'Lượt Chat' },
        { icon: 'fa-users', val: '32', lab: 'Users hoạt động' },
      ],
    },
    chart: (
      <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <h3 style={{marginTop: 0}}>Dữ liệu định lượng (Quantitative Data)</h3>
        <div style={{display: 'grid', gridTemplateRows: '45% 50%', gridTemplateColumns: '1fr 1fr', gap: '20px', flex: 1, minHeight: 0}}>
          <div style={{gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', minHeight: 0}}>
            <p className="chart-desc" style={{flexShrink: 0}}>Tỷ lệ chấp nhận code gợi ý của Tabby so với trung bình ngành.</p>
            <div className="chart-box" style={{flex: 1, minHeight: 0}}><C.AcceptanceRateChart /></div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', minHeight: 0}}>
            <p className="chart-desc" style={{flexShrink: 0}}>Hiệu quả theo từng ngôn ngữ lập trình.</p>
            <div className="chart-box" style={{flex: 1, minHeight: 0}}><C.LanguageBreakdownChart /></div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', minHeight: 0}}>
            <p className="chart-desc" style={{flexShrink: 0}}>Khảo sát mức độ tiết kiệm thời gian của Devs.</p>
            <div className="chart-box" style={{flex: 1, minHeight: 0}}><C.TimeSavingsChart /></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 12, type: 'summary_and_actions', title: '3. Kết quả Pilot Tabby tại MSB', subTitle: 'Tổng kết & Đề xuất hành động',
    summary: {
      cards: [
        { icon: 'fas fa-check-circle', h: 'Những điều ĐÃ làm được', color: '#198754', list: ['Triển khai thành công LLM 20B nội bộ.', 'Kiểm soát hoàn toàn luồng dữ liệu (Zero Egress).', 'Devs cởi mở, sẵn sàng đón nhận công nghệ.'] },
        { icon: 'fas fa-exclamation-triangle', h: 'Những hạn chế & Thách thức', color: 'var(--msb-red)', list: ['Model Open-source (20B) vẫn kém hơn GPT-4.', 'Thiếu ngữ cảnh toàn dự án (Lack of Context).', 'Cần tối ưu/nâng cấp GPU để mở rộng.'] }
      ]
    },
    next_actions: {
      title: "Đề xuất Hành động tiếp theo (Next Actions)",
      icon: "fa-tasks",
      groups: [
        {
          category: "Tổ chức & Quy trình (WoW)",
          icon: "fa-sitemap",
          items: [
            "Thống nhất WoW: PO của AIP phối hợp chặt chẽ với Co-PO & BA Khối IT & các Program khác khối SI để thúc đẩy trên từng Project.",
            "Xây dựng & Ban hành Bộ chỉ số đo lường (Metrics), các biểu mẫu Survey định kỳ để đánh giá hiệu quả."
          ]
        },
        {
          category: "Nghiên cứu & Công nghệ",
          icon: "fa-flask",
          items: [
            "Nghiên cứu & PoC tính năng RAG (Context) của Tabby với tài liệu nội bộ trên Confluence (cần chọn các dự án thí điểm cụ thể).",
            "Thử nghiệm model mới (DeepSeek V2 hoặc GPT-OSS 120B. Cần đầu tư thêm ít nhất 4 x H100 GPU).",
            "Thử nghiệm công cụ Agentic AI (như Wynxx /Kiro) cho nhóm bài toán Greenfield."
          ]
        },
        {
          category: "Đào tạo & Văn hóa",
          icon: "fa-chalkboard-teacher",
          items: [
            "Tìm kiếm lớp hoặc thuê chính các đơn vị PoC các Agentic AI để Đào tạo kỹ năng Prompt Engineering & Review code AI.",
            "Workshop \"AI-First Mindset\" cho cấp quản lý và Tech Lead.",
            "Xây dựng cộng đồng chia sẻ Best Practice nội bộ."
          ]
        }
      ]
    }
  },
  {
    id: 13, type: 'strategy_plan', title: '4. Chiến lược & Lộ trình triển khai', subTitle: 'Chiến lược & Giải pháp triển khai',
    strategy: [
        {
            num: '01',
            title: 'Khảo sát & Phân tích hiện trạng',
            icon: 'fa-search',
            desc: 'PO của AIP phối hợp cùng IT Lead thực hiện <strong>khảo sát toàn diện</strong> hệ thống & nhân sự.',
            details: ['<strong>Phân nhóm hệ thống:</strong> Legacy (Core), Microservice (Digital), Monolith (Internal).', '<strong>Tech Stack:</strong> Java (Spring), .NET Core, React/Angular.', '<strong>Pain Points:</strong> Xác định các dự án có nợ kỹ thuật cao hoặc quy trình thủ công.']
        },
        {
            num: '02',
            title: 'Lựa chọn Pilot & Nhân sự',
            icon: 'fa-user-check',
            desc: 'Lựa chọn <strong>đúng người, đúng việc</strong>. Ưu tiên tinh thần "Can-do" và tư duy mở.',
            details: ['<strong>Dự án Vibe Coding:</strong> Bảo trì, Fix bug, Unit Test (Giảm tải).', '<strong>Dự án Spec-Driven:</strong> Xây mới (Greenfield), Module độc lập.', '<strong>Champion Team:</strong> Chọn lọc các Tech Lead có tầm ảnh hưởng để lan tỏa.']
        },
        {
            num: '03',
            title: 'Khung Đo lường & Đánh giá',
            icon: 'fa-ruler-combined',
            desc: 'Thiết lập bộ <strong>Metrics định lượng</strong> để chứng minh hiệu quả đầu tư (ROI).',
            details: ['<strong>Chỉ số:</strong> Acceptance Rate (>30%), Time Savings (>20%), Bug Rate (Giảm).', '<strong>Cơ chế:</strong> Survey định kỳ hàng tháng & Phỏng vấn sâu.', '<strong>Go/No-Go:</strong> Đánh giá lại sau mỗi quý để quyết định mở rộng.']
        }
    ]
  },
  {
    id: 14, type: 'gantt_chart', title: '4. Chiến lược & Lộ trình triển khai', subTitle: 'Cơ cấu nhân sự & Lộ trình 2026',
    personnel: {
        governance: [
            { role: 'PM/PO (AIP)', count: '01', desc: 'Strategy & WoW', icon: 'fa-user-tie', color: 'var(--msb-red)' },
            { role: 'Tech Lead (AIP)', count: '01', desc: 'Architecture & Quality', icon: 'fa-user-shield', color: 'var(--msb-orange)' },
            { role: 'BA (AIP)', count: '01', desc: 'Requirement & Specs', icon: 'fa-clipboard-list', color: '#6f42c1' },
            { role: 'AI Engineer', count: '02', desc: 'Model & RAG', icon: 'fa-cogs', color: '#0d6efd' }
        ],
        execution: [
            { role: 'Co-PO & BA (IT)', count: '02', desc: 'Đối ứng & Phối hợp', icon: 'fa-handshake', color: '#198754' },
            { role: 'Champion Devs', count: '05', desc: 'Tiên phong & Lan tỏa', icon: 'fa-medal', color: '#ffc107' },
            { role: 'DEV Squads', count: '50+', desc: 'Tham gia Pilot', icon: 'fa-users', color: '#6c757d' }
        ]
    },
    tasks: [
      { 
          name: 'Khảo sát & Phân nhóm dự án', start: 1, end: 2,
          details: 'Nền tảng cho mọi quyết định. Phải làm đầu tiên để biết "chiến trường" hiện tại (công nghệ, ngôn ngữ, dự án "nóng").'
      },
      { 
          name: 'Xây dựng Quy trình & Metrics (WoW)', start: 1, end: 3,
          details: 'Xây dựng và thống nhất quy trình làm việc mới (WoW) và bộ chỉ số đo lường (Metrics). Cần thời gian để thảo luận và ban hành chính thức.'
      },
      { 
          name: 'PoC Agentic AI - Spec driven: Wynxx & Kiro', start: 2, end: 4,
          details: 'Bắt đầu sớm với Cloud Model. Đánh giá khả năng tự chủ của AI trên dự án Greenfield và so sánh hiệu quả.'
      },
      { 
          name: 'Nâng cấp Hạ tầng GPU (4xH100)', start: 3, end: 3,
          details: 'Quy trình phê duyệt và mua sắm nhanh trong 1 tháng. Nền tảng để thử nghiệm các model lớn hơn cho Tabby.'
      },
      { 
          name: 'PoC RAG cho Tabby (Dự án sẽ chọn sau)', start: 3, end: 4,
          details: 'Hạng mục "Nâng cấp" cho Tabby. Chạy song song với nâng cấp GPU để tăng độ chính xác cho các dự án có sẵn.'
      },
      { 
          name: 'Thử nghiệm Models: DeepSeek-Coder-V2, GPT-OSS 120B', start: 4, end: 4,
          details: 'Ngay khi có GPU mới, thực hiện test các model lớn để nâng cấp "IQ" cho Tabby, so sánh hiệu quả.'
      },
      { 
          name: 'Đào tạo & Mở rộng Pilot (50+ Devs)', start: 4, end: 6,
          details: 'Dựa trên kết quả các PoC, tiến hành đào tạo diện rộng và mở rộng cho nhiều dev hơn, thu thập feedback liên tục.'
      }
    ]
  },
  {
    id: 15, type: 'end', title: 'THANK YOU', titleGradient: '& QnA',
    bgImage: 'https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148879890.jpg'
  }
];