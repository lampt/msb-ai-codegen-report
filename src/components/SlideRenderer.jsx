import React from 'react';
import { motion } from 'framer-motion';
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

const SlideRenderer = ({ slide }) => {
  // Helper để bọc nội dung slide với Header chuẩn
  const SlideWrapper = ({ children, className = "" }) => (
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
      <motion.div className={`slide-content ${className}`} variants={containerVariants} initial="hidden" animate="show">
        {children}
      </motion.div>
    </>
  );

  switch (slide.type) {
    case 'cover':
      return (
        <motion.div className="cover-layout" variants={containerVariants} initial="hidden" animate="show" style={{display:'flex', height:'100%'}}>
          <motion.div className="cover-text" variants={itemVariants} style={{flex:1.2, padding:80, background:'#fff', zIndex:2, clipPath:'polygon(0 0, 100% 0, 90% 100%, 0% 100%)', display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <div className="org-tag"><i className="fas fa-code-branch"></i> {slide.org}</div>
            <h1 className="msb-main-title" style={{fontSize:60, lineHeight:1.1, margin:'20px 0'}}>{slide.title}</h1>
            <div className="msb-line"></div>
            <p className="msb-desc">{slide.subtitle}</p>
            <div className="cover-badges">
              <div className="badge-outline"><i className="far fa-calendar-alt"></i> {slide.date}</div>
              <div className="badge-outline"><i className="fas fa-users-cog"></i> {slide.unit}</div>
            </div>
          </motion.div>
          <motion.div className="cover-image" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} style={{ backgroundImage: `url(${slide.bgImage})`, flex:1, backgroundSize:'cover', backgroundPosition:'center' }}></motion.div>
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
        <SlideWrapper className="grid-2" style={{ gridTemplateColumns: '1fr 1.5fr' }}>
          <motion.div variants={itemVariants}>
            {slide.analysis.points.map((p, i) => (
              <motion.div key={i} className="card small-card" variants={itemVariants} style={{ borderLeft: `5px solid ${p.color || '#eee'}`, marginBottom:15, padding:15 }}>
                <strong>{p.label}</strong> {p.text}
              </motion.div>
            ))}
          </motion.div>
          {/* Split chart nằm trong Grid -> dùng height: 100% để fill ô grid */}
          <motion.div className="chart-box" variants={itemVariants} style={{height: '100%', minHeight: 0, overflow: 'hidden'}}>{slide.chart}</motion.div>
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

    case 'traffic_light':
      return (
        <SlideWrapper>
          <motion.p className="section-desc" variants={itemVariants}>{slide.policy}</motion.p>
          <table className="clean-table">
            <tbody>
              {slide.zones.map((z, i) => (
                <tr key={i} style={{background: z.color === 'red' ? '#fff5f5' : z.color === 'yellow' ? '#fffbeb' : '#f0fff4'}}>
                  <td style={{width:'20%'}}><strong>{z.label}</strong></td>
                  <td>{z.desc}</td>
                  <td><b>{z.tool}</b></td>
                </tr>
              ))}
            </tbody>
          </table>
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
        <motion.div className="end-layout" variants={containerVariants} initial="hidden" animate="show" style={{height:'100%', display:'flex', justifyContent:'center', alignItems:'center', background:"url('https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148879890.jpg') center/cover"}}>
          <motion.div className="card" variants={itemVariants} style={{textAlign:'center', padding:'60px 100px'}}>
            <div style={{fontSize:120, background:'var(--msb-gradient)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}><i className="fas fa-comments"></i></div>
            <h1 style={{fontSize:80, fontFamily:'Montserrat'}}>{slide.title}</h1>
            <p style={{fontSize:24, color:'#555'}}>{slide.subtitle}</p>
            <div style={{marginTop:50}}><p><strong>{slide.contact.unit}</strong></p><p style={{color:'var(--msb-red)'}}>{slide.contact.email}</p></div>
          </motion.div>
        </motion.div>
      );

    default:
      return <div className="slide-content"><div className="card anim-el">Dữ liệu slide #{slide.id} đang được cập nhật...</div></div>;
  }
};

export default SlideRenderer;