// src/utils/data.js
export const initialDashboardData = {
  stats: {
    totalDonors: 1248,
    activeRequests: 18,
    todayAppointments: 24,
    donationRate: 87,
    totalUnits: 140,
    criticalTypes: 3
  },
  
  inventory: [
    { type: 'A+', units: 25, critical: 10, status: 'safe' },
    { type: 'A-', units: 15, critical: 5, status: 'safe' },
    { type: 'B+', units: 30, critical: 10, status: 'warning' },
    { type: 'B-', units: 8, critical: 3, status: 'critical' },
    { type: 'O+', units: 42, critical: 15, status: 'safe' },
    { type: 'O-', units: 12, critical: 5, status: 'warning' },
    { type: 'AB+', units: 5, critical: 3, status: 'critical' },
    { type: 'AB-', units: 3, critical: 2, status: 'critical' },
  ],
  
  activities: [
    { 
      id: 1, 
      type: 'donation', 
      user: 'أحمد محمد', 
      bloodType: 'O+', 
      time: 'قبل 10 دقائق',
      description: 'تبرع جديد',
      icon: '🩸'
    },
    { 
      id: 2, 
      type: 'request', 
      user: 'مستشفى درعا', 
      bloodType: 'A+', 
      time: 'قبل 30 دقيقة',
      description: 'طلب دم عاجل',
      icon: '🚨'
    },
    { 
      id: 3, 
      type: 'appointment', 
      user: 'سارة علي', 
      bloodType: 'B+', 
      time: 'قبل ساعة',
      description: 'حجز موعد تبرع',
      icon: '📅'
    },
    { 
      id: 4, 
      type: 'test', 
      user: 'المختبر المركزي', 
      bloodType: 'AB+', 
      time: 'قبل ساعتين',
      description: 'نتيجة فحص',
      icon: '🧪'
    },
  ],
  
  alerts: [
    {
      id: 1,
      type: 'critical',
      title: 'نقص حاد في O-',
      description: 'المخزون أقل من الحد الأدنى بـ 5 وحدات',
      time: 'منذ 4 ساعات',
      icon: '🩸'
    },
    {
      id: 2,
      type: 'warning',
      title: 'طلب دم عاجل',
      description: 'مستشفى درعا بحاجة لـ 3 وحدات A+',
      time: 'منذ ساعة',
      icon: '⚠️'
    }
  ],
  
  appointments: [
    { id: 1, time: '09:00 ص', name: 'محمد أحمد', type: 'O+', status: 'confirmed' },
    { id: 2, time: '10:30 ص', name: 'فاطمة علي', type: 'A+', status: 'confirmed' },
    { id: 3, time: '12:00 م', name: 'خالد حسن', type: 'B+', status: 'pending' },
    { id: 4, time: '02:30 م', name: 'سارة محمد', type: 'AB+', status: 'confirmed' },
  ]
};

// وظائف التحديث
export const updateInventory = (type, units) => {
  console.log(`تم تحديث ${type} إلى ${units} وحدة`);
  return { type, units };
};

export const addAppointment = (appointment) => {
  console.log('تم إضافة موعد:', appointment);
  return appointment;
};

export const addActivity = (activity) => {
  console.log('تم إضافة نشاط:', activity);
  return activity;
};