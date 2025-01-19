export interface QuotationOrder {
  number: string; // 報價單號
  date: string; // 報價日期

  companyInfo: CompanyInfo; // 公司資訊
  selfCompanyInfo: CompanyInfo; // 自家公司資訊

  items: QuotationOrderItem[]; // 報價單項目
  total: number; // 總價
  tax: number; // 稅金
  grandTotal: number; // 總計
  remark: string; // 備註

  status: number; // 狀態

  step: QuotationStatus; // 狀態步驟
}

export interface CompanyInfo {
  name: string; // 公司名稱
  address: string; // 公司地址
  phone: string; // 公司電話
  email: string; // 公司電子郵件
  contactPerson: string; // 聯絡人
}

export interface QuotationOrderItem {
  name: string; // 項目名稱
  description: string; // 項目描述
  unit: string; // 單位
  quantity: number; // 數量
  price: number; // 單價
  total: number; // 總價
}

export interface QuotationStatus {
  // 報價單是否回簽
  step: number; // 步驟
  name: string; // 步驟名稱
  description: string; // 步驟描述
}

// 業務報價之流程：
// 1. 需求收集(了解客戶需求): 規格、數量、交付要求
// 2. 初步評估(可行性評估): 技術可行性、產能規劃、交付可行性
// 3. 成本核算: 材料成本、人工成本、機器成本、管理成本、利潤
// 4. 報價準備
// 4-1. 內部審核
//      4-1-1. 通過
//      4-1-2. 未通過
// 4-1-1. 送出報價
// 4-1-2. 重新報價
// 5. 報價回簽
// 5-1. 客戶確認回簽(成功)
// 5-2. 客戶未回簽(失敗)
