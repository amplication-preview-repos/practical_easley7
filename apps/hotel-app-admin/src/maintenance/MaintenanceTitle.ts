import { Maintenance as TMaintenance } from "../api/maintenance/Maintenance";

export const MAINTENANCE_TITLE_FIELD = "id";

export const MaintenanceTitle = (record: TMaintenance): string => {
  return record.id?.toString() || String(record.id);
};
