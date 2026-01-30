export const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const donationCenters = [
  { id: 1, name: 'المركز الرئيسي - درعا', address: 'شارع المستشفى الوطني' },
  { id: 2, name: 'مركز التبرع - الصنمين', address: 'جانب المشفى الوطني' },
  { id: 3, name: 'مركز التبرع - ازرع', address: 'شارع الكرامة' },
  { id: 4, name: 'مركز التبرع - الشيخ مسكين', address: 'شارع البلدية' }
];

export const statuses = {
  donor: ['active', 'inactive', 'suspended', 'pending'],
  appointment: ['scheduled', 'completed', 'cancelled', 'no_show'],
  blood: ['available', 'low', 'critical', 'expired', 'used'],
  request: ['pending', 'approved', 'rejected', 'fulfilled']
};

export const userRoles = {
  admin: 'مدير النظام',
  supervisor: 'مشرف',
  doctor: 'طبيب',
  nurse: 'ممرض',
  lab_tech: 'فني مختبر',
  receptionist: 'موظف استقبال',
  inventory_manager: 'مدير مخزون'
};

export const permissions = {
  admin: ['all'],
  supervisor: ['view_donors', 'edit_donors', 'view_inventory', 'edit_inventory', 'view_reports'],
  nurse: ['view_donors', 'create_appointments', 'update_appointments'],
  receptionist: ['view_donors', 'create_donors', 'view_appointments']
};

export const bloodColors = {
  'A+': '#DC2626',
  'A-': '#EF4444',
  'B+': '#2563EB',
  'B-': '#3B82F6',
  'AB+': '#7C3AED',
  'AB-': '#8B5CF6',
  'O+': '#059669',
  'O-': '#10B981'
};

export const API_ENDPOINTS = {
  LOGIN: '/api/auth/login',
  DONORS: '/api/donors',
  INVENTORY: '/api/inventory',
  APPOINTMENTS: '/api/appointments',
  REPORTS: '/api/reports',
  EMERGENCY: '/api/emergency'
};