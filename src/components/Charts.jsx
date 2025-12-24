import React, { useState, useEffect, useMemo } from 'react';
import { Bar, Bubble, Radar, Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

// Hook mới: Trì hoãn việc cung cấp DỮ LIỆU cho biểu đồ, thay vì trì hoãn render.
// Đây là cách chuẩn để kích hoạt animation "update" của Chart.js.
const useDelayedData = (fullData, delay = 1200) => {
  const [data, setData] = useState({ labels: [], datasets: [] });

   useEffect(() => {
    const timer = setTimeout(() => {
      setData(fullData);
    }, delay);
    return () => clearTimeout(timer);
  }, [fullData, delay]);

  return data;
};

export const EffortShiftChart = () => {
  const options = useMemo(() => ({
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: { legend: { position: 'bottom', labels: { font: { family: 'Montserrat', size: 12 } } } },
    scales: { x: { stacked: true, grid: {display: false} }, y: { stacked: true, max: 100, ticks: { callback: v => v + '%' } } },
    animations: {
      // Vertical Bar: Animate giá trị từ 0 để cột mọc từ dưới lên
      y: { 
        from: (ctx) => ctx.chart.scales.y.getPixelForValue(0),
        duration: 1200, easing: 'easeOutQuart', 
        delay: (ctx) => ctx.dataIndex * 150 + ctx.datasetIndex * 100 
      }
    }
  }), []);

  const fullData = useMemo(() => ({
    labels: ['Traditional SDLC', 'AI-Assisted (Vibe)', 'Spec-Driven (Agent)'],
    datasets: [
      { label: 'Design & Specs', data: [20, 15, 45], backgroundColor: '#dc3545', borderRadius: 4 },
      { label: 'Coding', data: [50, 25, 10], backgroundColor: '#fd7e14', borderRadius: 4 },
      { label: 'Testing & Review', data: [30, 60, 45], backgroundColor: '#0d6efd', borderRadius: 4 }
    ]
  }), []);

  const data = useDelayedData(fullData);

  return (
    <Bar options={options} data={data} />
  );
};

export const UsageTrendChart = () => {
  const options = useMemo(() => ({
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: { legend: { position: 'bottom', labels: { font: { family: 'Montserrat', size: 12 } } } },
    scales: { y: { beginAtZero: true, title: { display: true, text: 'Số lượt sử dụng' } } },
    animations: {
      tension: {
        duration: 1500,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: false
      }
    }
  }), []);

  const fullData = useMemo(() => ({
    labels: ['Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
    datasets: [
      { label: 'Code Completions', data: [2451, 1174, 613, 238], borderColor: 'var(--msb-red)', backgroundColor: 'var(--msb-red)', tension: 0.4 },
      { label: 'Chats', data: [194, 153, 46, 0], borderColor: 'var(--msb-orange)', backgroundColor: 'var(--msb-orange)', tension: 0.4 }
    ]
  }), []);

  const data = useDelayedData(fullData);

  return <Line options={options} data={data} />;
};

export const MarketBubbleChart = () => {
  const options = useMemo(() => ({
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: { legend: { position: 'bottom', labels: { font: { family: 'Montserrat', size: 12 } } } },
    scales: { x: { min: 50, max: 100, title: { display: true, text: 'Trí thông minh (IQ) →', font: {weight: 'bold'} } }, y: { min: 0, max: 120, title: { display: true, text: 'An toàn dữ liệu →', font: {weight: 'bold'} } } },
    animations: {
      // Tính toán tọa độ tâm biểu đồ (x=75, y=50) để bong bóng bay tỏa ra từ giữa
      x: { 
        from: (ctx) => ctx.chart.scales.x.getPixelForValue(75), 
        duration: 1000, easing: 'easeOutQuart' 
      },
      y: { 
        from: (ctx) => ctx.chart.scales.y.getPixelForValue(50), 
        duration: 1000, easing: 'easeOutQuart' 
      },
      r: { from: 0, duration: 1500, easing: 'easeOutBounce', delay: (ctx) => ctx.dataIndex * 200 }
    }
  }), []);

  const fullData = useMemo(() => ({
    datasets: [
      { label: 'GitHub Copilot', data: [{x: 95, y: 30, r: 30}], backgroundColor: '#6e5494cc', borderColor: '#6e5494', borderWidth: 2 },
      { label: 'Tabby (MSB Pilot)', data: [{x: 65, y: 95, r: 20}], backgroundColor: '#E41E26cc', borderColor: '#E41E26', borderWidth: 3 },
      { label: 'Google Gemini', data: [{x: 90, y: 25, r: 25}], backgroundColor: '#4285F4cc', borderColor: '#4285F4', borderWidth: 2 },
      { label: 'AWS Kiro', data: [{x: 85, y: 60, r: 15}], backgroundColor: '#FF9900cc', borderColor: '#FF9900', borderWidth: 2 }
    ]
  }), []);

  const data = useDelayedData(fullData);

  return (
    <Bubble options={options} data={data} />
  );
};

export const RadarAssessmentChart = () => {
  const options = useMemo(() => ({
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: { legend: { position: 'bottom', labels: { font: { family: 'Montserrat', size: 12 } } } },
    scales: { r: { min: 0, max: 10, ticks: { stepSize: 2, display: false, backdropColor: 'transparent' }, pointLabels: { font: { size: 11, weight: 'bold' } } } },
    animation: { 
      duration: 1500, 
      easing: 'easeOutElastic',
      delay: 500
    }
  }), []);

  const fullData = useMemo(() => ({
    labels: ['IQ Code', 'Security (An toàn)', 'Context (RAG)', 'Speed (Tốc độ)', 'Integration (Tích hợp)'],
    datasets: [
      { label: 'GitHub Copilot', data: [9.5, 2, 8, 9.5, 9.5], borderColor: '#6e5494', backgroundColor: 'rgba(110, 84, 148, 0.1)', borderWidth: 2, pointRadius: 0 },
      { label: 'Google Gemini', data: [9, 2, 9.5, 9, 8], borderColor: '#4285F4', backgroundColor: 'rgba(66, 133, 244, 0.1)', borderWidth: 2, pointRadius: 0 },
      { label: 'Tabby (MSB)', data: [6.5, 10, 6, 8, 7], borderColor: '#E41E26', backgroundColor: 'rgba(228, 30, 38, 0.2)', borderWidth: 3, pointBackgroundColor: '#E41E26' },
      { label: 'AWS Kiro', data: [8.5, 6, 9, 7, 9], borderColor: '#FF9900', backgroundColor: 'transparent', borderWidth: 1, borderDash: [5, 5], pointRadius: 0 }
    ]
  }), []);

  const data = useDelayedData(fullData);

  return (
    <Radar options={options} data={data} />
  );
};

export const AcceptanceRateChart = () => {
  const options = useMemo(() => ({
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: { legend: { position: 'bottom', labels: { font: { family: 'Montserrat', size: 12 } } } },
    indexAxis: 'y',
    scales: { x: { max: 60, ticks: { callback: v => v + '%' } } },
    animations: {
      // Horizontal Bar: Animate trục x để thanh chạy từ trái sang
      x: { from: 0, duration: 1500, easing: 'easeOutQuart', delay: (ctx) => ctx.dataIndex * 300 }
    }
  }), []);

  const fullData = useMemo(() => ({
    labels: ['Tabby (MSB Pilot)', 'Copilot (Industry)'],
    datasets: [{ label: 'Acceptance Rate (%)', data: [28, 46], backgroundColor: ['#E41E26', '#6c757d'], borderRadius: 5 }]
  }), []);

  const data = useDelayedData(fullData);

  return (
    <Bar options={options} data={data} />
  );
};

export const TimeSavingsChart = () => {
  const options = useMemo(() => ({
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: { legend: { position: 'bottom', labels: { font: { family: 'Montserrat', size: 12 } } } },
    cutout: '60%',
    // Pie/Doughnut: Xòe quạt (Rotate) và KHÔNG phóng to (Scale), có delay
    animation: { 
      animateScale: false, 
      animateRotate: true, 
      duration: 1500, 
      easing: 'easeOutQuart',
      delay: 500
    }
  }), []);

  const fullData = useMemo(() => ({
    labels: ['Tiết kiệm >30%', 'Tiết kiệm 10-30%', 'Không đáng kể'],
    datasets: [{ data: [20, 50, 30], backgroundColor: ['#198754', '#F06E1D', '#adb5bd'], borderWidth: 2 }]
  }), []);

  const data = useDelayedData(fullData);

  return (
    <Doughnut options={options} data={data} />
  );
};

export const LanguageBreakdownChart = () => {
  const options = useMemo(() => ({
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: { legend: { position: 'bottom', labels: { font: { family: 'Montserrat', size: 12 } } } },
    scales: { y: { beginAtZero: true, max: 50, ticks: { callback: v => v + '%' } } },
    animations: {
      // Vertical Bar: Animate giá trị từ 0 để cột mọc từ dưới lên
      y: { 
        from: (ctx) => ctx.chart.scales.y.getPixelForValue(0),
        duration: 1200, easing: 'easeOutQuart', delay: (ctx) => ctx.dataIndex * 200 
      }
    }
  }), []);

  const fullData = useMemo(() => ({
    labels: ['JS/Node.js', 'Java (Spring)', 'C# (.NET)'],
    datasets: [{ label: 'Acceptance Rate (%)', data: [35, 28, 20], backgroundColor: ['#198754', '#F06E1D', '#E41E26'], borderRadius: 5 }]
  }), []);

  const data = useDelayedData(fullData);

  return (
    <Bar options={options} data={data} />
  );
};
