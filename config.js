// ============================================================
//  CẤU HÌNH ỨNG DỤNG – Điền thông tin sau khi IT setup xong
// ============================================================

window.APP_CONFIG = {

  // 1. Azure App Registration Client ID
  //    IT lấy từ: Azure Portal → App registrations → App của bạn → Application (client) ID
  CLIENT_ID: 'YOUR_CLIENT_ID_HERE',

  // 2. Azure Tenant ID của VNG
  //    IT lấy từ: Azure Portal → Azure Active Directory → Tenant ID
  //    Hoặc thường là: vng.com.vn (custom domain) hoặc dạng GUID
  TENANT_ID: 'YOUR_TENANT_ID_HERE',

  // 3. Link SharePoint của file Excel
  //    Copy link "Share" từ SharePoint (dạng https://vng.sharepoint.com/:x:/s/...)
  FILE_URL: 'YOUR_SHAREPOINT_FILE_URL_HERE',

  // 4. Tên sheet cần đọc (mặc định là DS_BanThue)
  SHEET_NAME: 'DS_BanThue',

  // ── NÂNG CAO (nếu cách trên không work, IT cung cấp thêm) ──
  // Site ID: lấy từ Graph API https://graph.microsoft.com/v1.0/sites/{hostname}:/{path}
  SITE_ID: '',
  // Drive ID: lấy từ https://graph.microsoft.com/v1.0/sites/{site-id}/drives
  DRIVE_ID: '',
  // File ID: lấy từ https://graph.microsoft.com/v1.0/sites/{site-id}/drives/{drive-id}/root/children
  FILE_ID: '',
};
