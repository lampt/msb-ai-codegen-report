import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import msbLogo from '../assets/msb-logo.png';

// Variants cho Container (quản lý stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

// Variants cho từng Item con (bay từ dưới lên)
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
};

// Helper function to render cell content: either text or a styled badge
const renderCellContent = (content) => {
  if (typeof content === 'object' && content !== null && content.text) {
    return (
      <span className={`status-badge status-${content.type || 'default'}`}>
        {content.text}
      </span>
    );
  }
  return content;
};

// Component con chứa state và logic riêng cho Slide 3 để tránh re-render toàn bộ slide
const SdlcEvolutionContent = ({ slide }) => {
  const [hoveredFocus, setHoveredFocus] = useState(null);

  // Hàm tính toán cường độ focus (0 -> 1) cho từng bước
  const getIntensity = (stepName) => {
    if (!hoveredFocus) return 0;
    switch (hoveredFocus) {
      case 'coding': // Traditional
        return stepName === 'Implementation' ? 1.0 : 0.1;
      case 'debugging': // AI-Assisted
        if (stepName === 'Testing') return 1.0;
        if (stepName === 'Implementation') return 0.5; // Vẫn code nhưng ít hơn
        return 0.1;
      case 'design': // Spec-Driven
        if (stepName === 'Design') return 1.0; // Trọng tâm cao nhất
        if (stepName === 'Requirement') return 0.9; // Rất quan trọng
        if (stepName === 'Testing') return 0.8; // Review kỹ
        if (stepName === 'Implementation') return 0.3; // AI làm là chính
        return 0.1;
      default: return 0;
    }
  };

  return (
    <>
      {/* SDLC Process Flow */}
      <motion.div variants={itemVariants} style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', 
        marginBottom: '30px', gap: '15px', 
        minHeight: '140px', // Tăng chiều cao để chứa hiệu ứng scale
        paddingTop: '30px' // Chừa chỗ phía trên để không bị crop khi phóng to
      }}>
        {slide.sdlcSteps.map((step, i) => {
          const intensity = getIntensity(step.step);
          const isActive = hoveredFocus !== null;
          
          // Tính toán style dựa trên cường độ
          const scale = isActive ? (intensity > 0.2 ? 1 + intensity * 0.2 : 0.9) : 1; // Max scale 1.2
          const opacity = isActive ? (intensity > 0.2 ? 1 : 0.3) : 1;
          const shadowBlur = intensity * 30; // Càng quan trọng bóng càng tỏa rộng
          const isHighFocus = intensity > 0.6;

          return (
            <React.Fragment key={i}>
              <div style={{
                background: isHighFocus ? 'linear-gradient(135deg, var(--msb-orange), #ff9f43)' : (intensity > 0.2 ? '#fff5f5' : 'white'),
                border: `2px solid ${intensity > 0.2 ? 'var(--msb-orange)' : '#e9ecef'}`, 
                borderRadius: '12px', padding: '10px 15px',
                textAlign: 'center', minWidth: '110px', 
                boxShadow: isActive && intensity > 0.2 ? `0 10px ${shadowBlur}px rgba(240, 110, 29, ${intensity * 0.6})` : '0 4px 10px rgba(0,0,0,0.05)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2,
                transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                transform: `scale(${scale})`,
                opacity: opacity,
              }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%', 
                  background: isHighFocus ? 'rgba(255,255,255,0.2)' : '#fff5f5', 
                  display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '8px',
                  transition: 'background 0.3s ease-in-out'
                }}>
                  <i className={`fas ${step.icon}`} style={{fontSize: '20px', color: isHighFocus ? 'white' : 'var(--msb-red)'}}></i>
                </div>
                <div style={{fontSize: '13px', fontWeight: '700', color: isHighFocus ? 'white' : 'var(--text-primary)'}}>{step.step}</div>
              </div>
              {i < slide.sdlcSteps.length - 1 && (
                <i className="fas fa-arrow-right" style={{color: '#ccc', fontSize: '16px', transition: 'opacity 0.3s ease-in-out', opacity: isActive ? 0.3 : 1}}></i>
              )}
            </React.Fragment>
          );
        })}
      </motion.div>

      {/* Slogan */}
      <motion.div variants={itemVariants} style={{ textAlign: 'center', margin: '0 auto 30px', padding: '20px 30px', background: 'linear-gradient(to right, #fff5f5, #fff)', borderRadius: '16px', borderLeft: '6px solid var(--msb-orange)', boxShadow: '0 5px 15px rgba(240, 110, 29, 0.1)' }}>
        <p style={{fontSize: '22px', fontWeight: '500', color: '#2c3e50', margin: 0, lineHeight: 1.4}}>
          <i className="fas fa-quote-left" style={{color: 'var(--msb-orange)', marginRight: '15px', fontSize: '24px', verticalAlign: 'top'}}></i>
          {slide.slogan}
        </p>
      </motion.div>

      {/* Evolution Cards */}
      <div className="grid-3">
        {slide.cards.map((card, i) => {
          let focusType = null;
          if (card.title.includes('Traditional')) focusType = 'coding';
          if (card.title.includes('AI-Assisted')) focusType = 'debugging';
          if (card.title.includes('Spec-Driven')) focusType = 'design';

          return (
          <motion.div key={i} className={`card ${card.highlight ? 'card-highlight' : ''}`} variants={itemVariants} style={{ borderTop: `6px solid ${card.color}`, textAlign:'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}
            onMouseEnter={() => setHoveredFocus(focusType)}
            onMouseLeave={() => setHoveredFocus(null)}
          >
            <div className="icon-box" style={{ width: '70px', height: '70px', borderRadius: '50%', background: `${card.color}15`, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
              <i className={`fas ${card.icon}`} style={{ fontSize: '32px', color: card.color }}></i>
            </div>
            <h3 style={{fontSize: '20px', marginBottom: '10px'}}>{card.title}</h3>
            <p style={{flex: 1, fontSize: '15px', lineHeight: 1.5, margin: 0}}>{card.text}</p>
            <div className="badge" style={{ background: card.color, fontSize: '13px', padding: '6px 12px', marginTop: '15px' }}>{card.badge}</div>
          </motion.div>);
        }
        )}
      </div>
    </>
  );
};

// Component con cho Gantt Chart để quản lý state tooltip
const GanttChartContent = ({ slide }) => {
  const [hoveredTaskIndex, setHoveredTaskIndex] = useState(null);

  return (
    <div className="gantt-container" style={{width: '100%'}}>
      <div className="gantt-header">
        <div>Hạng mục công việc</div>
        {['T1', 'T2', 'T3', 'T4', 'T5', 'T6'].map(m => <div key={m}>{m}</div>)}
      </div>
      <motion.div variants={itemVariants} style={{display: 'contents'}}>
        {slide.tasks.map((task, i) => {
          // Tính toán vị trí của tooltip để nó căn giữa thanh bar
          const barCenterAsFraction = ((task.start - 1) + (task.end - task.start + 1) / 2) / 6;
          const tooltipLeft = `${barCenterAsFraction * 100}%`;

          return (
            <div 
              key={i} 
              className="gantt-row"
              onMouseEnter={() => setHoveredTaskIndex(i)}
              onMouseLeave={() => setHoveredTaskIndex(null)}
            >
              <div className="gantt-task-name">{task.name}</div>
              <div className="gantt-timeline">
                {/* Background Grid Lines */}
                <div className="gantt-grid-background">
                  {Array.from({ length: 6 }).map((_, j) => (
                    <div key={j} className="gantt-grid-cell" />
                  ))}
                </div>
                {/* Task Bar */}
                <motion.div 
                  className="gantt-bar"
                  style={{ gridColumn: `${task.start} / ${task.end + 1}` }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                >
                  {/* Text removed from bar */}
                </motion.div>
                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredTaskIndex === i && task.details && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.9 }}
                      animate={{ opacity: 1, y: -15, x: "-50%", scale: 1 }}
                      exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="gantt-tooltip"
                      style={{ left: tooltipLeft }}
                    >
                      {task.details}
                      <div className="gantt-tooltip-arrow"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

// Component hiển thị cơ cấu nhân sự
const PeopleStructure = ({ personnel }) => (
  <div style={{marginBottom: '20px', display: 'flex', gap: '30px', height: '140px'}}>
    <div className="card" style={{flex: 1.2, display: 'flex', flexDirection: 'column', padding: '15px', borderLeft: '5px solid var(--msb-red)', background: '#fff5f5'}}>
      <div style={{fontWeight: 'bold', color: 'var(--msb-red)', marginBottom: '10px', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px'}}>
        <i className="fas fa-university" style={{marginRight: 8}}></i> Governance Team (Dedicate)
      </div>
      <div style={{display: 'flex', gap: '10px', flex: 1}}>
        {personnel.governance.map((p, i) => (
          <div key={i} className="people-card" style={{flex: 1, background: 'white', borderRadius: '8px', padding: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden'}}>
            <div style={{position: 'absolute', top: 5, right: 5, background: p.color, color: 'white', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', border: '2px solid white'}}>{p.count}</div>
            <i className={`fas ${p.icon}`} style={{color: p.color, fontSize: '24px', marginBottom: '5px'}}></i>
            <div style={{fontWeight: 'bold', fontSize: '13px', color: '#333'}}>{p.role}</div>
            <div style={{fontSize: '11px', color: '#666'}}>{p.desc}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="card" style={{flex: 0.8, display: 'flex', flexDirection: 'column', padding: '15px', borderLeft: '5px solid #198754', background: '#f0fff4'}}>
       <div style={{fontWeight: 'bold', color: '#198754', marginBottom: '10px', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px'}}>
        <i className="fas fa-code" style={{marginRight: 8}}></i> Execution (Flexible)
      </div>
      <div style={{display: 'flex', gap: '10px', flex: 1}}>
        {personnel.execution.map((p, i) => (
          <div key={i} className="people-card" style={{flex: 1, background: 'white', borderRadius: '8px', padding: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden'}}>
            <div style={{position: 'absolute', top: 5, right: 5, background: p.color, color: 'white', borderRadius: '12px', padding: '0 8px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', border: '2px solid white'}}>{p.count}</div>
            <i className={`fas ${p.icon}`} style={{color: p.color, fontSize: '24px', marginBottom: '5px'}}></i>
            <div style={{fontWeight: 'bold', fontSize: '13px', color: '#333'}}>{p.role}</div>
            <div style={{fontSize: '11px', color: '#666'}}>{p.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SlideRenderer = ({ slide }) => {
  // Helper để bọc nội dung slide với Header chuẩn
  const SlideWrapper = ({ children, className = "", style = {} }) => (
    <>
      {slide.type !== 'cover' && slide.type !== 'end' && (
        <motion.div className="slide-header" variants={itemVariants}>
          {slide.subTitle ? (
            <div className="header-text-group">
              <div className="header-main-title">{slide.title}</div>
              <div className="header-sub-title">{slide.subTitle}</div>
            </div>
          ) : (
            // Nếu không có subtitle, render tiêu đề chính với style lớn hơn
            <div className="header-sub-title">{slide.title}</div>
          )}
          <div className="header-logo">
            <img src={msbLogo} alt="MSB" style={{height: '45px', display: 'block'}} />
          </div>
        </motion.div>
      )}
      <motion.div className={`slide-content ${className}`} style={style} variants={containerVariants} initial="hidden" animate="show">
        {children}
      </motion.div>
    </>
  );

  switch (slide.type) {
    case 'cover':
      return (
        <motion.div variants={containerVariants} initial="hidden" animate="show" style={{display:'flex', height:'100%', alignItems: 'center'}}>
          <div className="cover-text">
            <motion.div variants={itemVariants} className="org-tag"><i className="fas fa-code-branch"></i> {slide.org}</motion.div>
            <motion.h1 variants={itemVariants} className="msb-main-title">
              {slide.title}<br/>
              <span>{slide.titleGradient}</span>
            </motion.h1>
            <motion.div variants={itemVariants} className="msb-line"></motion.div>
            <motion.p variants={itemVariants} className="msb-desc">{slide.subtitle}</motion.p>
            <motion.div variants={itemVariants} className="cover-badges">
              <div className="badge-outline">
                <i className="far fa-calendar-alt"></i> {slide.date}
              </div>
              <div className="badge-outline">
                <i className="fas fa-users-cog"></i> {slide.unit}
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="cover-image" 
            variants={itemVariants}
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
          </motion.div>
        </motion.div>
      );

    case 'agenda':
      return (
        <SlideWrapper className="grid-2">
          <motion.ul className="agenda-list" variants={itemVariants} style={{
            listStyle:'none', 
            padding:0, 
            display: 'flex', 
            flexDirection: 'column', 
            height: '90%', 
            gap: '2.5vh' // Dùng gap để tạo khoảng cách đồng đều
          }}>
            {slide.items.map((item, i) => (
              <motion.li key={i} className="card agenda-card" variants={itemVariants} style={{
                borderLeft:`6px solid ${item.color}`, 
                padding: '0 30px', // Chỉ cần padding ngang, chiều dọc để flex tự căn
                display:'flex', alignItems:'center', 
                fontSize: 'clamp(16px, 2.5vh, 24px)', // Font chữ tự tính toán theo chiều cao màn hình
                fontFamily:'Montserrat, sans-serif',
                flex: 1, // Quan trọng: Tự chia đều không gian
                minHeight: 0 // Quan trọng: Fix lỗi co giãn trên Safari
              }}>
                <span className="idx" style={{
                  color: item.color, 
                  marginRight: '20px',
                  fontSize: 'clamp(30px, 5vh, 48px)', // Số thứ tự cũng tự co giãn
                  fontWeight: 900, 
                  opacity: 0.8,
                  minWidth: '50px',
                  textAlign: 'center'
                }}>{item.num}</span> {item.title}
              </motion.li>
            ))}
          </motion.ul>
          {/* Thay thế icon cũ bằng thiết kế nền trang nhã hơn */}
          <motion.div 
            className="agenda-bg" 
            variants={itemVariants} 
            style={{
              position: 'relative', 
              height: '100%', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              borderRadius: '12px', 
              overflow: 'hidden',
              background: '#2c3e50'
            }}
          >
            <svg width="100%" height="100%" style={{ position: 'absolute', opacity: 0.04 }}>
              <defs>
                <pattern id="dot-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="15" cy="15" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dot-pattern)" />
            </svg>
            <motion.svg width="250" height="250" viewBox="0 0 200 200" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.4 } } }}>
              <motion.circle cx="100" cy="100" r="90" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" fill="none" />
              <motion.circle cx="100" cy="100" r="90" stroke="var(--msb-orange)" strokeWidth="4" fill="none"
                variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1, transition: { duration: 1.5, ease: "easeInOut" } } }}
                strokeDasharray="1"
              />
              <motion.path d="M75 70 h50 M75 100 h50 M75 130 h50" stroke="white" strokeWidth="6" strokeLinecap="round"
                variants={{ hidden: { opacity: 0, scale: 0.5 }, show: { opacity: 0.8, scale: 1, transition: { duration: 0.8, delay: 0.5 } } }}
              />
            </motion.svg>
          </motion.div>
        </SlideWrapper>
      );

    case 'strategy_plan':
      return (
        <SlideWrapper className="grid-3">
          {slide.strategy.map((item, i) => (
            <motion.div key={i} className="card strategy-card" variants={itemVariants} style={{display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden'}}>
              <div style={{background: 'linear-gradient(to right, #fff5f5, #fff)', padding: '20px 25px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', position: 'relative'}}>
                 <div style={{width: '50px', height: '50px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', marginRight: '15px', zIndex: 1}}>
                    <i className={`fas ${item.icon}`} style={{fontSize: '24px', color: 'var(--msb-red)'}}></i>
                 </div>
                 <h3 style={{margin: 0, fontSize: '18px', color: 'var(--msb-red)', flex: 1, zIndex: 1}}>{item.title}</h3>
                 <span style={{fontFamily: 'Montserrat', fontSize: '40px', fontWeight: 900, color: '#e9ecef', position: 'absolute', right: '20px', top: '10px', zIndex: 0}}>{item.num}</span>
              </div>
              <div style={{padding: '25px', flex: 1, display: 'flex', flexDirection: 'column'}}>
                <p style={{fontSize: '15px', lineHeight: 1.6, marginBottom: '15px', color: '#444'}} dangerouslySetInnerHTML={{__html: item.desc}}></p>
                <ul style={{fontSize: '14px', paddingLeft: '20px', margin: 0, color: '#666', lineHeight: 1.5}}>
                  {item.details.map((detail, j) => <li key={j} dangerouslySetInnerHTML={{__html: detail}}></li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </SlideWrapper>
      );

    case 'sdlc_evolution':
      return (
        <SlideWrapper>
          <SdlcEvolutionContent slide={slide} />
        </SlideWrapper>
      );

    case 'grid_3':
      return (
        <SlideWrapper>
          <motion.p className="section-desc" variants={itemVariants} style={{textAlign:'center', maxWidth:800, margin:'0 auto 40px', fontSize:20}}>{slide.desc}</motion.p>
          <div className="grid-3">
            {slide.cards.map((card, i) => (
              <motion.div key={i} className={`card ${card.highlight ? 'card-highlight' : ''}`} variants={itemVariants} style={{ borderTop: `6px solid ${card.color}`, textAlign:'center' }}>
                <div className="icon-box"><i className={`fas ${card.icon}`} style={{ color: card.color }}></i></div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <div className="badge" style={{ background: card.color }}>{card.badge}</div>
              </motion.div>
            ))}
          </div>
        </SlideWrapper>
      );

    case 'full_chart':
      return (
        <SlideWrapper>
          <motion.p className="section-desc" variants={itemVariants} style={{textAlign:'center', maxWidth:900, margin:'0 auto 30px'}}>{slide.desc}</motion.p>
          {/* Full chart nằm trong Flex container -> dùng flex: 1 */}
          <motion.div className="chart-box" variants={itemVariants} style={{flex: 1, minHeight: 0}}>{slide.chart}</motion.div>
        </SlideWrapper>
      );

    case 'split_chart':
      return (
        <SlideWrapper className={slide.layout || 'split-chart-30-70'}>
          {slide.analysis && slide.analysis.heatmap ? (
            <motion.div variants={itemVariants}>
              <h3 style={{marginTop: 0}}>{slide.analysis.title}</h3>
              <table className="clean-table" style={{textAlign:'center', fontSize: 11}}>
                <thead>
                  <tr>
                    <th style={{textAlign:'left', width:'40%', padding: '6px 10px'}}>Khía cạnh</th>
                    <th style={{padding: '6px 10px'}}>Java</th>
                    <th style={{padding: '6px 10px'}}>Node.js</th>
                    <th style={{padding: '6px 10px'}}>.NET</th>
                  </tr>
                </thead>
                <tbody>
                  {slide.analysis.heatmap.map((row, i) => (
                    <tr key={i} style={{fontSize: 11}}>
                      <td style={{textAlign:'left'}}><strong>{row.aspect}</strong></td>
                      <td className={row.java}>{row.java.replace('heat-','')}</td>
                      <td className={row.node}>{row.node.replace('heat-','')}</td>
                      <td className={row.net}>{row.net.replace('heat-','')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="card card-highlight" style={{marginTop: 15, padding: '15px 20px'}}>
                <h4 style={{margin: '0 0 10px 0', color: 'var(--msb-orange)', display: 'flex', alignItems: 'center'}}>
                  <i className="fas fa-comment-dots" style={{marginRight: 10}}></i> Nhận xét tổng quan
                </h4>
                <ul style={{margin: 0, paddingLeft: 20, fontSize: 15, lineHeight: 1.6}}>
                  {slide.analysis.conclusions && slide.analysis.conclusions.map((c, i) => (
                    <li key={i} style={{marginBottom: 5}}>
                      {c.text.split(c.highlight).map((part, index) => index === 0 ? part : <React.Fragment key={index}><span style={{color: 'var(--msb-orange)', fontWeight: 'bold'}}>{c.highlight}</span>{part}</React.Fragment>)}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ) : (
            <motion.div variants={itemVariants}>
              {slide.analysis && slide.analysis.points && slide.analysis.points.map((p, i) => (
                <motion.div key={i} className="card small-card" variants={itemVariants} style={{ borderLeft: `5px solid ${p.color || '#eee'}`, marginBottom:15, padding:15 }}>
                  <strong>{p.label}</strong> {p.text}
                </motion.div>
              ))}
              {slide.analysis && slide.analysis.takeaways && (
                <motion.div className="card card-highlight" variants={itemVariants} style={{marginTop: 30, padding: 25}}>
                    <h4 style={{margin: '0 0 15px 0', color: 'var(--msb-orange)', display: 'flex', alignItems: 'center'}}>
                        <i className={`fas ${slide.analysis.takeaways.icon}`} style={{marginRight: 10, fontSize: '1.2em'}}></i> {slide.analysis.takeaways.title}
                    </h4>
                    <ul style={{margin: 0, paddingLeft: 0, listStyle: 'none', fontSize: 16, lineHeight: 1.7}}>
                        {slide.analysis.takeaways.items.map((item, i) => (
                            <li key={i} style={{marginBottom: 12, display: 'flex', alignItems: 'start'}}>
                                <i className={`fas ${item.icon}`} style={{marginRight: 12, marginTop: 5, color: 'var(--msb-red)', width: '20px', textAlign: 'center'}}></i>
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
              )}
            </motion.div>
          )}
          {/* Split chart nằm trong Grid -> dùng height: 100% để fill ô grid */}
          <motion.div variants={itemVariants} style={{height: '100%', minHeight: 0, overflow: 'hidden'}}>{slide.chart}</motion.div>
        </SlideWrapper>
      );

    case 'dual_chart':
      return (
        <SlideWrapper className="grid-2">
          <motion.div className="card" variants={itemVariants} style={{height: '100%', display:'flex', flexDirection:'column'}}>
            <h3>{slide.left.title}</h3>
            <div style={{flex:1}}>{slide.left.chart}</div>
            <p style={{fontSize:14, marginTop:10}}>{slide.left.desc}</p>
          </motion.div>
          <motion.div className="card" variants={itemVariants} style={{height: '100%', display:'flex', flexDirection:'column'}}>
            <h3>{slide.right.title}</h3>
            <div style={{flex:1}}>{slide.right.chart}</div>
            <p style={{fontSize:14, marginTop:10}}>{slide.right.desc}</p>
          </motion.div>
        </SlideWrapper>
      );

    case 'tool_groups':
      return (
        <SlideWrapper className="grid-2">
          {slide.groups.map((group, i) => (
            <motion.div key={i} className="card" variants={itemVariants} style={{borderTop: `6px solid ${group.color}`, display: 'flex', flexDirection: 'column', height: '100%'}}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: 20}}>
                <div style={{width: 60, height: 60, borderRadius: '50%', background: `${group.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 20, flexShrink: 0}}>
                  <i className={group.icon} style={{fontSize: 28, color: group.color}}></i>
                </div>
                <div>
                  <h3 style={{margin: 0, fontSize: 24, color: group.color}}>{group.title}</h3>
                  <div style={{fontSize: 16, color: '#666', fontWeight: 500, marginTop: 4}}>{group.subtitle}</div>
                </div>
              </div>
              
              <p style={{fontSize: 18, marginBottom: 30, flex: 1, lineHeight: 1.6}}>{group.desc}</p>
              
              <div style={{background: '#f8f9fa', borderRadius: 12, padding: 20, border: '1px dashed #ccc'}}>
                <div style={{fontSize: 13, textTransform: 'uppercase', color: '#999', fontWeight: 'bold', marginBottom: 15, letterSpacing: 1}}>Các công cụ tiêu biểu</div>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: 15, justifyContent: 'center'}}>
                  {group.tools.map((t, j) => (
                    <motion.div key={j} 
                      whileHover={{scale: 1.1, y: -5}}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ 
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: j * 0.3 } 
                      }}
                      style={{
                      background: t.highlight ? group.color : 'white',
                      color: t.highlight ? 'white' : '#333',
                      border: t.highlight ? 'none' : '1px solid #e0e0e0',
                      padding: '10px 18px', borderRadius: 30, fontSize: 15, fontWeight: 600,
                      boxShadow: t.highlight ? '0 8px 20px rgba(0,0,0,0.2)' : '0 4px 10px rgba(0,0,0,0.05)', 
                      display: 'flex', alignItems: 'center', cursor: 'default'
                    }}>
                      {t.icon && <i className={t.icon} style={{marginRight: 10, fontSize: 18}}></i>}
                      {t.name}
                      {t.tag && <span style={{
                        fontSize: 10, marginLeft: 8, padding: '2px 8px', borderRadius: 10,
                        background: t.highlight ? 'rgba(255,255,255,0.3)' : '#f0f0f0',
                        color: t.highlight ? 'white' : '#666', fontWeight: 700, textTransform: 'uppercase'
                      }}>{t.tag}</span>}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </SlideWrapper>
      );

    case 'tool_grid':
      return (
        <SlideWrapper className="tool-grid">
          {slide.cards.map((card, i) => (
            <motion.div key={i} className="card" variants={itemVariants} style={{
              borderTop: `5px solid ${card.color}`, 
              display: 'flex', flexDirection: 'column', 
              padding: '20px', // Giảm padding để tiết kiệm diện tích
              height: '100%', overflow: 'hidden'
            }}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: 12}}>
                <div style={{width: 48, height: 48, borderRadius: '50%', background: `${card.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 15, flexShrink: 0}}>
                  <i className={card.icon} style={{fontSize: 22, color: card.color}}></i>
                </div>
                <div style={{minWidth: 0}}>
                  <h3 style={{margin: 0, fontSize: 20, color: card.color, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{card.name}</h3>
                  <div style={{fontSize: 14, color: '#555', fontWeight: 700, marginTop: 2, textTransform: 'uppercase', letterSpacing: 0.5}}>{card.slogan}</div>
                </div>
              </div>
              
              <p style={{fontSize: 16, marginBottom: 15, lineHeight: 1.4, flex: '0 0 auto'}}>{card.desc}</p>
              
              <div style={{background: '#f8f9fa', borderRadius: 8, padding: '12px 15px', border: '1px dashed #ccc', flex: 1, overflowY: 'auto'}}>
                <ul style={{margin: 0, paddingLeft: 20, fontSize: 15}}>
                  {card.features.map((f, j) => <li key={j} style={{marginBottom: 5}}>{f}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </SlideWrapper>
      );

    case 'grid_2':
      return (
        <SlideWrapper className="grid-2">
          {slide.cards.map((card, i) => (
            <motion.div key={i} className="card" variants={itemVariants}>
              <div style={{display:'flex', alignItems:'center', marginBottom:20}}>
                {card.icon && <i className={card.icon} style={{fontSize:40, marginRight:15, color: card.iconColor || (i===1?'var(--msb-orange)':'#333')}}></i>}
                <h3 style={{margin:0}}>{card.h}</h3>
              </div>
              <p>{card.p}</p>
              {card.list && <ul>{card.list.map((li, j) => <li key={j}>{li}</li>)}</ul>}
            </motion.div>
          ))}
        </SlideWrapper>
      );

    case 'summary_and_actions':
      return (
        <SlideWrapper>
          {/* Top Summary Cards */}
          <div className="grid-2" style={{ gap: '25px', alignItems: 'stretch', height: 'auto', flex: '0 0 auto' }}>
            {slide.summary.cards.map((card, i) => (
              <motion.div key={i} className="card" variants={itemVariants} style={{ padding: '15px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{display:'flex', alignItems:'center', marginBottom:10}}>
                  <i className={card.icon} style={{fontSize:28, marginRight:15, color: card.color}}></i>
                  <h3 style={{margin:0, fontSize: '18px', color: card.color}}>{card.h}</h3>
                </div>
                <ul style={{fontSize: 14, lineHeight: 1.5, paddingLeft: 20, margin: 0, flex: 1}}>
                  {card.list.map((li, j) => <li key={j}>{li}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom Next Actions Card */}
          <motion.div className="card card-highlight" variants={itemVariants} style={{marginTop: '20px', padding: 20, flex: 1, display: 'flex', flexDirection: 'column'}}>
            <h3 style={{margin: '0 0 15px 0', color: 'var(--msb-orange)', display: 'flex', alignItems: 'center'}}>
              <i className={`fas ${slide.next_actions.icon}`} style={{marginRight: 10, fontSize: '1.2em'}}></i> {slide.next_actions.title}
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', flex: 1}}>
              {slide.next_actions.groups && slide.next_actions.groups.map((group, i) => (
                <div key={i} style={{background: 'rgba(255,255,255,0.6)', borderRadius: '12px', padding: '15px', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column'}}>
                  <div style={{fontWeight: 'bold', color: 'var(--msb-red)', marginBottom: '12px', display: 'flex', alignItems: 'center', fontSize: '16px'}}>
                    <i className={`fas ${group.icon}`} style={{marginRight: '10px', fontSize: '18px'}}></i> {group.category}
                  </div>
                  <ul style={{margin: 0, paddingLeft: '20px', fontSize: '15px', lineHeight: 1.6, flex: 1}}>
                    {group.items.map((item, j) => (
                      <li key={j} style={{marginBottom: '8px'}}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </SlideWrapper>
      );

    case 'table_compare':
      return (
        <SlideWrapper>
          <table className="clean-table">
            <thead>
              <tr>
                <th style={{width:'20%'}}>Tiêu chí so sánh</th>
                <th style={{width:'20%'}}><i className="fab fa-github"></i> Copilot</th>
                <th style={{width:'20%'}}><i className="fab fa-google"></i> Gemini</th>
                <th style={{width:'20%', color: 'var(--msb-red)', background: '#fff5f5', borderBottom: '3px solid var(--msb-red)'}}><i className="fas fa-cat"></i> Tabby (MSB)</th>
                <th style={{width:'20%'}}><i className="fab fa-aws"></i> AWS Kiro</th>
              </tr>
            </thead>
            <tbody>
              {slide.rows.map((row, i) => {
                const isLastRow = i === slide.rows.length - 1;
                return (
                <tr key={i}>
                  <td><strong>{row.label}</strong></td>
                  <td>{renderCellContent(row.copilot)}</td>
                  <td>{renderCellContent(row.gemini)}</td>
                  <td className={`tabby-col ${isLastRow ? 'tabby-col-last' : ''}`}>{renderCellContent(row.tabby)}</td>
                  <td>{renderCellContent(row.kiro)}</td>
                </tr>
                );
              })}
            </tbody>
          </table>
        </SlideWrapper>
      );

    case 'architecture':
      return (
        <SlideWrapper className="grid-2">
          <motion.div variants={itemVariants}>
            <h3 style={{color:'var(--msb-red)', fontSize:28}}>Giải pháp "Pháo đài số"</h3>
            <p>{slide.desc}</p>
            <ul className="card" style={{padding:30, borderLeft:'5px solid var(--msb-red)'}}>
              {slide.points.map((p, i) => (
                <li key={i} style={{marginBottom:15}}><strong>{p.title}:</strong> {p.text}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemVariants} className="card" style={{height: '100%', minHeight: 0, display:'flex', justifyContent:'center', alignItems:'center', background:'#f8f9fa', border:'2px dashed #ccc'}}>
             <div style={{textAlign:'center', color:'#999'}}><i className="fas fa-network-wired" style={{fontSize:80, marginBottom:20}}></i><br/>Mô hình triển khai On-Premise<br/>(Minh họa kiến trúc)</div>
          </motion.div>
        </SlideWrapper>
      );

    case 'stats_infra':
      return (
        <SlideWrapper>
          <motion.div className="grid-3" variants={itemVariants} style={{marginBottom:40}}>
            {slide.stats.map((s, i) => (
              <motion.div key={i} className="card" variants={itemVariants} style={{textAlign:'center', borderBottom:`5px solid ${s.color}`}}>
                <i className={`fas ${s.icon}`} style={{fontSize:60, color:s.color, marginBottom:20, opacity:0.2}}></i>
                <div style={{fontSize:54, fontFamily:'Montserrat', fontWeight:900, lineHeight:1}}>{s.val}</div>
                <div style={{fontSize:20, color:'var(--text-secondary)', fontWeight:500}}>{s.lab}</div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="card card-highlight" variants={itemVariants}>
            <h3 style={{marginTop:0}}>Hạ tầng thử nghiệm:</h3>
            <ul style={{display:'flex', justifyContent:'space-around', listStyle:'none', padding:0}}>
              {slide.infra.map((inf, i) => (
                <li key={i} style={{display:'flex', alignItems:'center'}}>
                  <i className={`fas ${inf.icon}`} style={{marginRight:10, fontSize:24, color: i===0?'var(--msb-red)':i===1?'var(--msb-orange)':'#0d6efd'}}></i> 
                  <strong>{inf.lab}:</strong>&nbsp;{inf.val}
                </li>
              ))}
            </ul>
          </motion.div>
        </SlideWrapper>
      );

    case 'heatmap':
      return (
        <SlideWrapper>
          <motion.p variants={itemVariants} style={{textAlign:'center', maxWidth:800, margin:'0 auto 30px'}}>Tổng hợp đánh giá mức độ hài lòng của đội ngũ phát triển.</motion.p>
          <table className="clean-table" style={{textAlign:'center'}}>
            <thead>
              <tr>
                <th style={{textAlign:'left', width:'30%'}}>Khía cạnh đánh giá</th>
                <th>Team Java</th>
                <th>Team Node.js</th>
                <th>Team .NET</th>
                <th>Trung bình</th>
              </tr>
            </thead>
            <tbody>
              {slide.rows.map((row, i) => (
                <tr key={i}>
                  <td style={{textAlign:'left'}}><strong>{row.aspect}</strong></td>
                  <td className={row.java}>{row.java === 'heat-high' ? 'Tốt' : row.java === 'heat-mid' ? 'Khá' : 'Kém'}</td>
                  <td className={row.node}>{row.node === 'heat-high' ? 'Tốt' : row.node === 'heat-mid' ? 'Khá' : 'Kém'}</td>
                  <td className={row.net}>{row.net === 'heat-high' ? 'Tốt' : row.net === 'heat-mid' ? 'Khá' : 'Kém'}</td>
                  <td style={{fontWeight:'bold'}}>{row.avg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </SlideWrapper>
      );

    case 'gantt_chart':
      return (
        <SlideWrapper>
          <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            {slide.personnel && (
              <PeopleStructure personnel={slide.personnel} />
            )}
            <GanttChartContent slide={slide} />
          </div>
        </SlideWrapper>
      );

    case 'roadmap':
      return (
        <SlideWrapper className="grid-3">
          {slide.phases.map((p, i) => (
            <motion.div key={i} className="card" variants={itemVariants} style={{height: '100%', minHeight: 0, borderTop:`6px solid ${p.color}`, position:'relative', overflow:'hidden'}}>
              <i className={`fas ${p.icon}`} style={{position:'absolute', right:-10, top:-10, fontSize:80, opacity:0.05}}></i>
              <h3 style={{color:p.color}}>{p.phase}</h3>
              <p><strong>{p.time}</strong></p>
              <ul style={{fontSize:16, paddingLeft:20}}>{p.list.map((item, j) => <li key={j}>{item}</li>)}</ul>
            </motion.div>
          ))}
        </SlideWrapper>
      );

    case 'end':
      return (
        <motion.div variants={containerVariants} initial="hidden" animate="show" style={{display:'flex', height:'100%', alignItems: 'center'}}>
          <div className="cover-text">
            <motion.h1 variants={itemVariants} className="msb-main-title" style={{fontSize: '100px', textAlign: 'center'}}>
              {slide.title}<br/>
              <span>{slide.titleGradient}</span>
            </motion.h1>
          </div>
          <motion.div 
            className="cover-image" 
            variants={itemVariants}
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
          </motion.div>
        </motion.div>
      );

    default:
      return <div className="slide-content"><div className="card anim-el">Dữ liệu slide #{slide.id} đang được cập nhật...</div></div>;
  }
};

export default SlideRenderer;