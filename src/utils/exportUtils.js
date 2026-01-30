/* eslint-disable no-unused-vars */
// src/utils/exportUtils.js

/**
 * تصدير التقرير اليومي بصيغة PDF
 */
export const exportDailyReport = (reportData) => {
  // محاكاة تصدير PDF (في الواقع ستستخدم مكتبة مثل jsPDF)
  const reportContent = `
    تقرير بنك الدم - درعا
    التاريخ: ${reportData.date}
    
    الإحصائيات:
    - إجمالي المتبرعين: ${reportData.totalDonors}
    - وحدات الدم المتاحة: ${reportData.totalBloodUnits}
    - المواعيد اليوم: ${reportData.appointmentsToday}
    - طلبات الطوارئ: ${reportData.emergencyRequests}
    
    ملخص اليوم:
    ${reportData.summary}
    
    طلبات الطوارئ:
    ${reportData.emergencyRequestsList?.map(req => `  - ${req.hospital}: ${req.units} وحدة ${req.bloodType}`).join('\n')}
    
    توقيع: مدير بنك الدم - درعا
  `;

  // إنشاء ملف وهمي للتحميل
  const blob = new Blob([reportContent], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `تقرير_بنك_الدم_${reportData.date.replace(/\//g, '-')}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
  
  alert('تم تصدير التقرير بنجاح!');
};

/**
 * تصدير التقرير بصيغة Excel
 */
export const exportToExcel = (data, fileName = 'تقرير_بنك_الدم') => {
  // في الواقع ستستخدم مكتبة مثل SheetJS
  const csvContent = "data:text/csv;charset=utf-8,";
  
  // رأس الجدول
  const headers = ['التاريخ', 'النوع', 'القيمة', 'الملاحظات'];
  const rows = data.map(item => [
    item.date,
    item.type,
    item.value,
    item.notes || ''
  ]);
  
  const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
  const encodedUri = encodeURI(csvContent + csv);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `${fileName}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  alert('تم تصدير البيانات بصيغة Excel!');
};

/**
 * طباعة التقرير
 */
export const printReport = () => {
  // حفظ محتوى الصفحة الحالي
  const originalContent = document.body.innerHTML;
  
  // استخراج محتوى لوحة التحكم فقط
  const dashboardContent = document.querySelector('.dashboard-page')?.innerHTML;
  
  if (dashboardContent) {
    // إنشاء نافذة طباعة
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
      <head>
        <meta charset="UTF-8">
        <title>تقرير بنك الدم - درعا</title>
        <style>
          body {
            font-family: 'Cairo', Arial, sans-serif;
            direction: rtl;
            padding: 20px;
            line-height: 1.6;
          }
          .print-header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 3px solid #c62828;
            padding-bottom: 20px;
          }
          .print-header h1 {
            color: #c62828;
            margin-bottom: 10px;
          }
          .print-date {
            color: #666;
            font-size: 16px;
          }
          .stats-grid-print {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin: 20px 0;
          }
          .stat-card-print {
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
          }
          .stat-value-print {
            font-size: 24px;
            font-weight: bold;
            color: #333;
          }
          .stat-label-print {
            color: #666;
            margin-top: 5px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: right;
          }
          th {
            background-color: #f8f9fa;
            font-weight: bold;
          }
          @media print {
            body { padding: 0; }
            .no-print { display: none; }
          }
          .print-footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            text-align: center;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="print-header">
          <h1>🏥 تقرير بنك الدم - درعا</h1>
          <div class="print-date">تاريخ التقرير: ${new Date().toLocaleDateString('ar-SA')}</div>
          <div class="print-date">وقت الطباعة: ${new Date().toLocaleTimeString('ar-SA')}</div>
        </div>
        
        <div class="print-content">
          ${dashboardContent}
        </div>
        
        <div class="print-footer">
          <p>© ${new Date().getFullYear()} بنك الدم محافظة درعا - جميع الحقوق محفوظة</p>
          <p>صفحة 1 من 1</p>
        </div>
        
        <script>
          window.onload = function() {
            window.print();
            window.onafterprint = function() {
              window.close();
            };
          };
        </script>
      </body>
      </html>
    `);
    printWindow.document.close();
  } else {
    // إذا لم نجد المحتوى، نطبع الصفحة كاملة
    window.print();
  }
};

/**
 * تصدير صورة من لوحة التحكم
 */
export const exportAsImage = () => {
  // في الواقع ستستخدم مكتبة مثل html2canvas
  alert('جارٍ تصدير الصورة...');
  setTimeout(() => {
    alert('تم تصدير صورة التقرير بنجاح!');
  }, 1000);
};