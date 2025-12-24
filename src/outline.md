# BÁO CÁO CHIẾN LƯỢC AI CODE GENERATION - MSB

## Slide 1: Cover
- **Tiêu đề:** CHIẾN LƯỢC AI CODE GENERATION
- **Phụ đề:** Từ thử nghiệm Tabby Pilot đến Lộ trình tích hợp SDLC toàn diện
- **Thông tin:** Khối Công nghệ Thông tin | Tháng 12/2025 | AI Team (R&D)

## Slide 2: Agenda (Nội dung chính)
1. Tổng quan & Sự dịch chuyển SDLC
2. Phân tích & So sánh các công cụ AI
3. Kết quả Pilot Tabby tại MSB (Chi tiết)
4. Chiến lược & Lộ trình triển khai

## Slide 3: Sự tiến hóa của Quy trình (SDLC)
- **Thông điệp:** AI thay đổi cách phân bổ nỗ lực (Effort).
- **Traditional SDLC:** Focus Coding (Gõ code).
- **AI-Assisted (Vibe):** Focus Debugging & Prompting.
- **Spec-Driven (Agentic):** Focus Design & Review (Kiến trúc sư).

## Slide 4: Dữ liệu hóa - Sự dịch chuyển Nỗ lực
- **Biểu đồ:** Effort Shift (Stacked Bar).
- **Phân tích:** Coding giảm mạnh (50% -> 10%), Design & Review tăng lên.

## Slide 5: Bức tranh thị trường (Market Map)
- **Biểu đồ:** Bubble Chart (IQ vs Privacy).
- **Trục:** Trí thông minh (Capability) vs An toàn dữ liệu (Privacy).

## Slide 6: Phân loại công cụ: AI Assistants vs Agentic AI
- **Nhóm 1 (AI Assistants):** Vibe Coding. Gồm: Copilot, Gemini, Tabby, Codeium, Amazon Q...
- **Nhóm 2 (Agentic AI):** Spec-Driven. Gồm: AWS Kiro, Devin, Cursor, Windsurf...

## Slide 7: Chi tiết năng lực & Điểm nổi bật
- Giới thiệu chi tiết 4 công cụ chính: Copilot, Gemini, Tabby, Kiro.
- Highlight điểm mạnh cốt lõi của từng công cụ.

## Slide 8: Bảng so sánh tổng thể
- So sánh chi tiết các công cụ theo nhiều tiêu chí (Triển khai, Bảo mật, Model GPT-OSS 20B, Chi phí...).

## Slide 9: Kết quả Pilot - Tổng quan
- **Số liệu:** 32 Users, 4.4k Completions, 393 Chats.
- **Hạ tầng:** 32 Core, 128GB RAM, 1x GPU H100, Model GPT-OSS 20B.

## Slide 10: Phân tích xu hướng sử dụng
- **Biểu đồ:** Line chart thể hiện lượt sử dụng Completions & Chat giảm dần qua 4 tháng.
- **Phân tích:** Đưa ra giả thuyết về nguyên nhân sụt giảm.

## Slide 11: Hiệu quả định lượng
- **Acceptance Rate:** ~28% (Khá tốt).
- **Time Savings:** 70% Dev thấy tiết kiệm thời gian.

## Slide 12: Hiệu quả theo Ngôn ngữ
- **JS/Node.js:** 35%+ (Tốt nhất).
- **Java:** 28% (Trung bình khá).
- **C# (.NET):** 20% (Thấp nhất, model GPT-OSS 20B chưa tối ưu tốt).

## Slide 13: Phản hồi định tính (Heatmap)
- **Tốc độ:** Chấp nhận được.
- **Boilerplate:** Điểm mạnh nhất.
- **Logic:** Hạn chế lớn.
- **Bảo mật:** Điểm cộng lớn nhất (Tuyệt đối).

## Slide 14: Tổng kết Pilot
- **Được:** Triển khai thành công LLM 20B, An toàn 100%, Dev hào hứng.
- **Chưa được:** IQ model 20B còn giới hạn, Thiếu ngữ cảnh, Cần tối ưu/nâng cấp GPU.

## Slide 15: Chiến lược Phân vùng Bảo mật (Traffic Light)
- **🔴 Vùng Đỏ (Cao):** Core Banking, PII -> Chỉ dùng Tabby On-prem.
- **🟡 Vùng Vàng (TB):** App nội bộ -> Tabby / Copilot Business.
- **🟢 Vùng Xanh (Thấp):** Frontend Public -> Tự do (Copilot, Gemini).

## Slide 16: Lộ trình triển khai (Roadmap)
- **GĐ 1 (Hiện tại - Q2/2026):** Nền tảng (Tabby ổn định, 50+ Devs).
- **GĐ 2 (Q3/2026 - Q4/2026):** Tích hợp RAG (Hiểu ngữ cảnh nội bộ).
- **GĐ 3 (2027+):** Agentic AI (Spec-Driven).

## Slide 17: Khuyến nghị Lãnh đạo
- **Chính sách:** Ban hành Traffic Light Protocol.
- **Hạ tầng:** Đầu tư GPU A100/H100.
- **Con người:** Đào tạo tư duy Spec-Driven.

## Slide 18: Q&A
- Thông tin liên hệ AI Team.