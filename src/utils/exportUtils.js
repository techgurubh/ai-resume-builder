// src/utils/exportUtils.js
import html2pdf from 'html2pdf.js';

export const exportToPDF = async (element, fullName) => {
  if (!element) return;
  
  const opt = {
    margin: [0.5, 0.5, 0.5, 0.5],
    filename: `${fullName.replace(/\s/g, '_')}_Resume.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, letterRendering: true, useCORS: true },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  
  try {
    await html2pdf().set(opt).from(element).save();
  } catch (error) {
    console.error('PDF export failed:', error);
  }
};

export const handlePrint = (element, fullName) => {
  if (!element) return;
  
  const originalTitle = document.title;
  document.title = `${fullName} Resume`;
  
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow pop-ups to print the resume');
    return;
  }
  
  // Clone the element with its styles
  const clone = element.cloneNode(true);
  
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${fullName} Resume</title>
        <meta charset="UTF-8">
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2/dist/tailwind.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;400;600;700&family=Playfair+Display:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600&family=Merriweather:wght@300;400;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <style>
          body {
            margin: 0;
            padding: 20px;
            background: white;
            font-size: 12pt;
          }
          @page {
            size: A4;
            margin: 0.5in;
          }
          .no-print, button {
            display: none !important;
          }
          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        </style>
      </head>
      <body>
        ${clone.outerHTML}
        <script>
          window.onload = () => {
            window.print();
            window.onafterprint = () => window.close();
          };
        <\/script>
      </body>
    </html>
  `);
  
  printWindow.document.close();
  document.title = originalTitle;
};
