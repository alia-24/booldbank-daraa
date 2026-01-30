// تنسيق التاريخ
export const formatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// معلومات نوع الدم
export const getBloodTypeInfo = (type) => {
  const info = {
    'A+': { 
      canDonateTo: ['A+', 'AB+'], 
      canReceiveFrom: ['A+', 'A-', 'O+', 'O-'],
      description: 'فصيلة A موجب'
    },
    'A-': { 
      canDonateTo: ['A+', 'A-', 'AB+', 'AB-'], 
      canReceiveFrom: ['A-', 'O-'],
      description: 'فصيلة A سالب'
    },
    'B+': { 
      canDonateTo: ['B+', 'AB+'], 
      canReceiveFrom: ['B+', 'B-', 'O+', 'O-'],
      description: 'فصيلة B موجب'
    },
    'B-': { 
      canDonateTo: ['B+', 'B-', 'AB+', 'AB-'], 
      canReceiveFrom: ['B-', 'O-'],
      description: 'فصيلة B سالب'
    },
    'O+': { 
      canDonateTo: ['O+', 'A+', 'B+', 'AB+'], 
      canReceiveFrom: ['O+', 'O-'],
      description: 'فصيلة O موجب (المانح العام)'
    },
    'O-': { 
      canDonateTo: ['كل الفصائل'], 
      canReceiveFrom: ['O-'],
      description: 'فصيلة O سالب (المانح العالمي)'
    },
    'AB+': { 
      canDonateTo: ['AB+'], 
      canReceiveFrom: ['كل الفصائل'],
      description: 'فصيلة AB موجب (المستقبل العام)'
    },
    'AB-': { 
      canDonateTo: ['AB+', 'AB-'], 
      canReceiveFrom: ['AB-', 'A-', 'B-', 'O-'],
      description: 'فصيلة AB سالب'
    }
  };
  return info[type] || {};
};

// التحقق من رقم الهاتف السوري
export const validatePhone = (phone) => {
  return /^09\d{8}$/.test(phone);
};

// حساب العمر من تاريخ الميلاد
export const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
};

// توليد رقم متبرع عشوائي
export const generateDonorId = () => {
  const prefix = 'DNR';
  const random = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}${random}`;
};