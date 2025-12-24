import React from 'react';
import * as C from '../components/Charts';

export const SLIDES_DATA = [
  {
    id: 1, type: 'cover', title: 'CHIẾN LƯỢC AI CODE GENERATION',
    subtitle: 'Báo cáo kết quả nghiệm Tabby Pilot & Lộ trình tích hợp SDLC toàn diện',
    org: 'AI PROGRAM', date: 'Tháng 12/2025', unit: 'Codegen Squad',
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
    id: 3, type: 'grid_3', title: '1. Tổng quan & Sự dịch chuyển SDLC', subTitle: 'Sự tiến hóa của Quy trình (SDLC)',
    desc: 'AI không loại bỏ lập trình viên, mà thay đổi căn bản cách phân bổ nỗ lực (Effort) trong quy trình phát triển phần mềm.',
    cards: [
      { icon: 'fa-laptop-code', title: 'Traditional SDLC', text: 'Mô hình truyền thống, tập trung phần lớn thời gian vào việc viết mã thủ công (Implementation).', badge: 'Focus: Coding (Gõ code)', color: '#6c757d' },
      { icon: 'fa-comments', title: 'AI-Assisted (Vibe)', text: 'Sử dụng Chatbot (Copilot/Gemini) để gợi ý code nhanh. Giảm coding, nhưng tăng thời gian debug lỗi.', badge: 'Focus: Debugging & Prompting', color: 'var(--msb-orange)', highlight: true },
      { icon: 'fa-robot', title: 'Spec-Driven (Agentic)', text: 'AI tự động thực hiện coding dựa trên đặc tả kỹ thuật (Specs). Con người tập trung vào thiết kế và kiểm thử.', badge: 'Focus: Design & Review', color: '#0d6efd' }
    ]
  },
  {
    id: 4, type: 'split_chart', title: '1. Tổng quan & Sự dịch chuyển SDLC', subTitle: 'Dữ liệu hóa: Sự dịch chuyển Nỗ lực',
    analysis: {
      points: [
        { label: 'Xu hướng rõ rệt:', text: 'Thời gian cho "Coding/Implementation" (màu cam) giảm mạnh.', color: '#fd7e14' },
        { label: 'Yêu cầu mới:', text: 'Thời gian cho "Design/Specs" (màu đỏ) và "Review/Verify" (màu xanh) tăng lên đáng kể.', color: '#dc3545' },
        { label: 'Kết luận:', text: 'Lập trình viên cần chuyển dịch kỹ năng từ "thợ code" sang "kiến trúc sư" và "kiểm thử viên cấp cao".' }
      ]
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
    id: 10, type: 'split_chart', title: '3. Kết quả Pilot Tabby tại MSB', subTitle: 'Phân tích xu hướng sử dụng (4 tháng)',
    analysis: {
      points: [
        { label: 'Xu hướng giảm:', text: 'Lượt sử dụng cả 2 tính năng (Completions & Chat) đều giảm mạnh qua các tháng.', color: '#dc3545' },
        { label: 'Tháng 12:', text: 'Ghi nhận mức sử dụng thấp nhất, đặc biệt tính năng Chat không được sử dụng.', color: '#fd7e14' },
        { label: 'Giả thuyết:', text: 'Có thể do chất lượng gợi ý chưa cao, hoặc dev chưa quen/chưa thấy thực sự hữu ích trong công việc hàng ngày.' }
      ]
    },
    chart: <C.UsageTrendChart />
  },
  {
    id: 11, type: 'dual_chart', title: '3. Kết quả Pilot Tabby tại MSB', subTitle: 'Dữ liệu định lượng: Hiệu quả hoạt động',
    left: { title: 'Tỷ lệ chấp nhận code (Acceptance Rate)', chart: <C.AcceptanceRateChart />, desc: 'Tabby đạt ~28%, mức khá tốt cho model tự vận hành.' },
    right: { title: 'Thời gian tiết kiệm (Ước tính)', chart: <C.TimeSavingsChart />, desc: '70% Dev thấy tiết kiệm được thời gian đáng kể.' }
  },
  {
    id: 12, type: 'split_chart', title: '3. Kết quả Pilot Tabby tại MSB', subTitle: 'Hiệu quả theo Ngôn ngữ lập trình',
    analysis: {
      points: [
        { label: 'JavaScript / Node.js:', text: '35%+ (Hiệu quả cao nhất. Rất tốt cho Frontend/BFF).', color: '#198754' },
        { label: 'Java (Spring Boot):', text: '28% (Mức trung bình khá. Tốt cho DTO, Entity).', color: '#F06E1D' },
        { label: 'C# (.NET Core):', text: '20% (Thấp nhất. Model GPT-OSS 20B vẫn chưa tối ưu tốt cho .NET).', color: '#E41E26' }
      ]
    },
    chart: <C.LanguageBreakdownChart />
  },
  {
    id: 13, type: 'heatmap', title: '3. Kết quả Pilot Tabby tại MSB', subTitle: 'Phản hồi định tính (Feedback Heatmap)',
    rows: [
      { aspect: 'Tốc độ phản hồi (Latency)', java: 'heat-mid', node: 'heat-high', net: 'heat-mid', avg: 'Chấp nhận được' },
      { aspect: 'Độ chính xác (Boilerplate)', java: 'heat-high', node: 'heat-high', net: 'heat-high', avg: 'Điểm mạnh nhất' },
      { aspect: 'Độ chính xác (Logic)', java: 'heat-low', node: 'heat-mid', net: 'heat-low', avg: 'Hạn chế lớn' },
      { aspect: 'Cảm giác Bảo mật', java: 'heat-high', node: 'heat-high', net: 'heat-high', avg: 'Điểm cộng lớn nhất' }
    ]
  },
  {
    id: 14, type: 'grid_2', title: '3. Kết quả Pilot Tabby tại MSB', subTitle: 'Tổng kết các phát hiện chính sau Pilot',
    cards: [
      { icon: 'fas fa-check-circle', h: 'Những điều ĐÃ làm được', p: 'Chứng minh khả thi kỹ thuật; Bảo mật dữ liệu 100%; Dev cởi mở hào hứng.', list: ['Triển khai thành công LLM 20B nội bộ.', 'Kiểm soát hoàn toàn luồng dữ liệu.', 'Giảm tải công việc nhàm chán.'] },
      { icon: 'fas fa-exclamation-triangle', h: 'Những hạn chế & Thách thức', p: 'IQ model 20B vẫn còn giới hạn; Thiếu ngữ cảnh toàn dự án; Cần tối ưu/nâng cấp GPU.', list: ['Model Open-source (20B) vẫn kém hơn GPT-4.', 'Thiếu ngữ cảnh (Lack of Context).', 'Cần tối ưu/nâng cấp thêm GPU để mở rộng.'] }
    ]
  },
  {
    id: 15, type: 'traffic_light', title: '4. Chiến lược & Lộ trình triển khai', subTitle: 'Chiến lược Phân vùng Bảo mật',
    policy: 'Áp dụng chính sách "Đèn Giao Thông" (Traffic Light Protocol) để quản lý rủi ro khi sử dụng AI.',
    zones: [
      { color: 'red', label: '🔴 VÙNG ĐỎ (Cao)', desc: 'Core Banking, Dữ liệu KHTN, Thẻ. Chứa PII.', tool: 'CHỈ DÙNG Tabby (On-Prem)' },
      { color: 'yellow', label: '🟡 VÙNG VÀNG (TB)', desc: 'Ứng dụng nội bộ, Middleware. Logic nghiệp vụ.', tool: 'Tabby (Ưu tiên) / Copilot Business' },
      { color: 'green', label: '🟢 VÙNG XANH (Thấp)', desc: 'Frontend Public, Open-Source Libs. Dữ liệu công khai.', tool: 'Tự do (Copilot, Gemini...)' }
    ]
  },
  {
    id: 16, type: 'roadmap', title: '4. Chiến lược & Lộ trình triển khai', subTitle: 'Lộ trình triển khai chi tiết (Roadmap)',
    phases: [
      { phase: 'Giai đoạn 1: Nền tảng', time: 'Hiện tại - Q2/2026', icon: 'fa-rocket', color: 'var(--msb-red)', list: ['Ổn định Tabby On-prem.', 'Mở rộng 50+ developers.', 'Nâng cấp GPU (2x A100).'] },
      { phase: 'Giai đoạn 2: Tích hợp RAG', time: 'Q3/2026 - Q4/2026', icon: 'fa-network-wired', color: 'var(--msb-orange)', list: ['Kết nối Confluence/GitLab nội bộ.', 'Thử nghiệm mô hình Hybrid.', 'Hiểu ngữ cảnh nghiệp vụ.'] },
      { phase: 'Giai đoạn 3: Agentic AI', time: '2027+', icon: 'fa-robot', color: '#0d6efd', list: ['Mô hình Spec-Driven Development.', 'Pilot AI Agent dự án mới.', 'Văn hóa "AI-First".'] }
    ]
  },
  {
    id: 17, type: 'grid_3', title: '4. Chiến lược & Lộ trình triển khai', subTitle: 'Khuyến nghị cho Ban Lãnh Đạo',
    cards: [
      { icon: 'fa-file-signature', title: '1. Phê duyệt Chính sách', text: 'Ban hành quy định phân loại dữ liệu và vùng sử dụng AI (Traffic Light Protocol).', color: 'var(--msb-red)' },
      { icon: 'fa-server', title: '2. Đầu tư Hạ tầng GPU', text: 'Phê duyệt ngân sách nâng cấp server GPU nội bộ để sở hữu năng lực AI riêng.', color: 'var(--msb-orange)' },
      { icon: 'fa-user-graduate', title: '3. Chuyển đổi Con người', text: 'Đào tạo diện rộng về kỹ năng làm việc với AI và tư duy thiết kế (Spec-Driven).', color: '#0d6efd' }
    ]
  },
  {
    id: 18, type: 'end', title: 'Q & A', subtitle: 'Cảm ơn Quý Lãnh đạo đã lắng nghe.',
    contact: { unit: 'AI Team - Khối CNTT MSB', email: 'aiteam@msb.com.vn' }
  }
];