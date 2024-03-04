import instance from "../axios";

const REPORTS_ROOT = "reports"

export const getReports = () => instance.get(REPORTS_ROOT)
