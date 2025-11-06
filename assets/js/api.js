// assets/js/api.js
export const DEVICES = [
  { id: "D001", name: "Router XR500", model: "NetGear Pro", status: "Active", location: "Chennai HQ", lastService: "2025-08-10", warranty: "2026-08-10" },
  { id: "D002", name: "Printer T300", model: "Epson Series X", status: "Needs Service", location: "Bangalore Branch", lastService: "2025-06-22", warranty: "2025-12-31" },
  { id: "D003", name: "POS Terminal P-7", model: "Verifone P7", status: "Active", location: "Mumbai Office", lastService: "2025-09-01", warranty: "2026-09-01" },
  { id: "D004", name: "Barcode Scanner B-12", model: "Honeywell B12", status: "Active", location: "Chennai HQ", lastService: "2025-05-10", warranty: "2026-05-10" },
  { id: "D005", name: "Thermal Printer T-510", model: "Zebra T510", status: "Needs Service", location: "Delhi Office", lastService: "2025-04-30", warranty: "2025-11-30" },
  { id: "D006", name: "Access Point A-AC", model: "Ubiquiti AC", status: "Active", location: "Bangalore Branch", lastService: "2025-07-28", warranty: "2027-07-28" },
  { id: "D007", name: "NAS Unit N-2", model: "Synology DS220", status: "Active", location: "Mumbai Office", lastService: "2025-08-15", warranty: "2028-08-15" },
  { id: "D008", name: "IP Camera C-900", model: "Hikvision 900", status: "Needs Service", location: "Chennai HQ", lastService: "2024-12-12", warranty: "2025-12-12" },
  { id: "D009", name: "POS Tablet T-9", model: "Samsung Tab", status: "Active", location: "Delhi Office", lastService: "2025-03-03", warranty: "2026-03-03" },
  { id: "D010", name: "Printer Laser L-21", model: "HP LaserJet", status: "Active", location: "Bangalore Branch", lastService: "2025-09-05", warranty: "2027-09-05" },
  { id: "D011", name: "Payment Gateway Box", model: "PayBox v2", status: "Active", location: "Remote", lastService: "2025-06-02", warranty: "2026-06-02" },
  { id: "D012", name: "Laptop Dev-1", model: "Dell XPS", status: "Active", location: "Mumbai Office", lastService: "2025-01-20", warranty: "2026-01-20" },
  { id: "D013", name: "Laptop Dev-2", model: "Lenovo ThinkPad", status: "Active", location: "Chennai HQ", lastService: "2025-02-10", warranty: "2026-02-10" },
  { id: "D014", name: "Kiosk K-01", model: "KioskPro V3", status: "Needs Service", location: "Delhi Mall", lastService: "2025-07-01", warranty: "2026-07-01" },
  { id: "D015", name: "Sensor S-45", model: "EnviroSense", status: "Active", location: "Bangalore Branch", lastService: "2025-09-10", warranty: "2026-09-10" },
  { id: "D016", name: "Router Backup", model: "Cisco 2900", status: "Active", location: "DataCenter", lastService: "2025-08-01", warranty: "2028-08-01" },
  { id: "D017", name: "AP Outdoor", model: "Ubiquiti Mesh", status: "Active", location: "Rooftop Chennai", lastService: "2025-06-12", warranty: "2027-06-12" },
  { id: "D018", name: "UPS Unit U-3", model: "APC Smart", status: "Active", location: "Mumbai Office", lastService: "2025-03-28", warranty: "2029-03-28" },
  { id: "D019", name: "Projector P-22", model: "Epson Pro", status: "Active", location: "Chennai HQ", lastService: "2025-05-05", warranty: "2026-05-05" },
  { id: "D020", name: "Tablet Field", model: "Tab A7", status: "Needs Service", location: "Field Team", lastService: "2024-11-10", warranty: "2025-11-10" }
];

export function listDevices() {
  // return a clone to avoid accidental mutation
  return DEVICES.map(d => ({ ...d }));
}

export function getDeviceById(id) {
  return DEVICES.find(d => d.id === id) || null;
}
