export interface Dealer {
    id: number;  // remove the optional mark here
    login_access: boolean;
    name: string;
    company_name: string;
    mobile_no: string;
    telephone_no: string;
    whatsapp_no: string;
    remark: string;
    date_of_birth: string;
    anniversary_date: string;
    gst_type: string;
    gstin: string;
    pan_no: string;
    apply_tds: boolean;
    credit_limit: number;
    address: string;
    bank_id: string;
    opening_balance: number;
    supplier_type: string;
    email: string;
    opening_balance_type: string;
  }
  