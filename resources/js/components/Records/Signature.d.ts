export interface LeaveSignature {
  leaveNumber: string; // 假單編號
  leaveType: 'AL' | 'PL' | 'SL'; // 假別 AL: 年假, PL: 事假, SL: 病假
  totalHours: number; // 總時數
  status: number; // 狀態
  steps: SignatureStep[]; // 簽核步驟
  createdAt: string; // 建立時間

  reason: string; // 假單事由
  rejectReason?: string; // 拒絕原因
  attachment?: Array<any>; // 附件

  // 以下為假單明細
  start: string; // 開始時間
  end: string; // 結束時間

  // 休假資訊
  leaveInfo: LeaveDetail[];
}

// LeaveSignature 範例
// {
//     leaveNumber: 'HR20241017A15837',
//     leaveType: 'AL',
//     totalHours: 8,
//     status: 1,
//     start: '2022-01-01',
//     end: '2022-01-01',
//     reason: '測試',
//     createdAt: '2022-01-01 12:00:00',
//     leaveInfo: [
//       { date: 'AL', hours: 8, start: '2022-01-01', end: '2022-01-01' },
//       { date: 'AL', hours: 8, start: '2022-01-01', end: '2022-01-01' },
//     ],
//     steps: [
//       { role: '經理', name: '經理A', status: 'pending', comment: '尚未簽核' },
//       { role: '經理', name: '經理B', status: 'pending', comment: '尚未簽核' },
//       { role: '經理', name: '經理C', status: 'pending', comment: '尚未簽核' },
//     ],
//   };

// 出差簽核
export interface BusinessTripSignature {
  btNumber: string; // 出差單編號
  type: 'domestic' | 'overseas'; // 出差類型 domestic: 國內, overseas: 國外
  status: number; // 狀態
  steps: SignatureStep[]; // 簽核步驟
  createdAt: string; // 建立時間

  reason: string; // 出差事由
  rejectReason?: string; // 拒絕原因
  attachment?: Array<any>; // 附件

  // 起訖日期
  start: string; // 開始時間
  end: string; // 結束時間

  // 出差資訊
  tripInfo: TripDetail[];
}

export interface TripDetail {
  start: string; // 開始時間
  end: string; // 結束時間
  position: string; // 出差位置
}

// 加班簽核
export interface OvertimeSignature {
  otNumber: string; // 加班單編號
  status: number; // 狀態
  steps: SignatureStep[]; // 簽核步驟
  createdAt: string; // 建立時間

  reason: string; // 加班事由
  rejectReason?: string; // 拒絕原因
  attachment?: Array<any>; // 附件

  // 加班資訊
  overtimeInfo: OvertimeDetail[];
}

export interface OvertimeDetail {
  date: string; // 日期
  clockIn: string; // 上班時間
  clockOut: string; // 下班時間
  hours: number; // 時數
  start: string; // 開始時間
  end: string; // 結束時間
  reason: string; // 加班事由
}

export interface LeaveDetail {
  date: string; // 日期
  start: string; // 開始時間
  end: string; // 結束時間
  hours: number; // 時數
}

export interface SignatureStep {
  role: string; // 簽核角色
  name: string; // 簽核人
  status: string; // 簽核中、已簽核、未簽核
  comment: string; // 簽核意見
}
