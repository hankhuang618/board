

new Vue({

  el: '#app',
  data: {
    ...app3.data,
    currentContent: '', // 用於顯示當前內容
    currentSheet: 0, // 預設顯示第1個工作表
      sheets: [
        { name: '二部績效' },
        { name: '三部績效' },
        { name: 'PP工單' },
        { name: '主管績效' },
        { name: '員工績效獎' },
        { name: '產線外人員績效' },
        { name: '中國幹部' },
        { name: '效率大於120' },
      ],
    currentLanguage: 'zh',
    translatedText: {
                總數量:'總數量',
                一般:'一般',
                焊接:'焊接',
                成型:'成型',
                做線:'做線',
                焊接S:'焊接',
                成型S:'成型',
                做線S:'做線',
                在線生產看板: '在線生產看板',
                星級完成數量:'重點工站完成數量',
                工單管理: '工單管理',
                工單查詢: '工單查詢',
                工站管理: '工站管理',
                工站設定:'工站設定',
                人員管理: '人員管理',
                考勤異常: '考勤異常',
                生產看版: '生產看版',
                工單分析圖表: '工單分析圖表',
                未結工單: '未結工單',
               完工數量:'完工數量',
                生產日報:'生產日報',
                產能日報:'產能日報',
                卡片設定:'卡片設定',
                考勤日報:'考勤日報',
                登入:'登入',
                NFC_SYSTEAM:'NFC 系統',
                考勤系統:'考勤系統',
                生產數據:'生產數據',
                area:'廠區',
                部門:'部門',
                D:'部',
                S:'課',
                C:'班',
                L:'拉',
                在線人數:'在線人數',
                應出席人數:'應出席人數',
                實際出席人數:'實際出席人數',
                請假人數:'請假人數',
               流水線在線人數:'流水線在線人數',
                借入人數:'借入人數',
                借出人數:'借出人數',
                工單列表:'工單列表',
                ID:'編號',
                工單:'工單',
                品名:'品名',
                數量:'數量',
                標準工時:'標準工時',
                執行工時:'執行工時',
                當前效率:'當前效率',
                過往效率:'過往效率',
                已完成數量:'已完成數量',
                設備:'設備',
                姓名:'姓名',
                工時:'工時',
                工站:'工站',
                座位:'座位',
                工站列表:'工站列表',
                功能:'功能',
                fqcer1:'輸入值不能小於原值',
                fqcer2:'輸入值不能大於工單數量',
                完成:'完成',
                暫停:'暫停',
                復工:'復工',
                輸入工單:'輸入工單',
                查詢:'查詢',
                提交:'提交',
                workOrder1:'100:試產工單, 200:來料全檢, 300:貼紙班, 400:重工,500:裁剝線,700 物料員工時',
                料號:'料號',
                設定工單列表:'設定工單列表',
                移除:'移除',
                總和:'總和',
                choose:'選擇NFC_CODE',
                修改:'修改',
                取消:'取消',
                增加座位:'增加座位',
                刪除座位:'刪除座位',
                卡機號:'卡機號',
                工站名稱:'工站名稱',
                insert:'插入',
                delete:'刪除',
                New:'新增',
                出勤:'出勤',
                工作拉:'工作拉',
                工號:'工號',
                Status:'狀態',
                事由:'事由',
                年休:'年休',
                請假:'請假',
                哺乳假:'哺乳假',
                工傷:'工傷',
                工傷陪護:'工傷陪護',
                借出:'借出',
                新進員工:'新進員工',
                夜班:'夜班',
                考勤日報:'考勤日報',
                show:'顯示',
                出勤人數:'出勤人數',
                實際掛卡工時:'實際掛卡工時',
                總共考勤工時:'總共考勤工時',
                回報管理部考勤工時:'回報管理部考勤工時', 
                差異:'差異', 
                原因:'原因',
                輸入卡機:'輸入卡機',
                NFC卡號:'NFC卡號',
                NFC_CODE:'NFC_CODE',
                刷新:'刷新',
                在線工單:'在線工單',
                平均效率:'平均效率',
                低於90工單數:'低於90%工單數',
                已完成工單:'已完成工單',
                未結案工單:'未結案工單',
                無效工時:'無效工時(hrs)',
                本日:'本日',
                本月:'本月',
                上月:'上月',
                pd1:'備註：(本月、上月)資料來源ERP',
                應報考勤:'應報考勤',
                加總:'加總',
                導出:'導出',
                系統計算考勤工時:'系統計算考勤工時',
                增加有效考勤工時:'增加有效考勤工時',
                正班工時:'正班工時',
                加班工時:'加班工時',
                假別:'假別',
                更新完成:'更新完成',
                更新失敗:'更新失敗',
                重複輸入:'输入值重复，请重新输入！',
                查無卡號:'查無卡號',
                工單已存在:'该工單號已存在于表格中。',
                未添加工單:'未添加工單',
                查無工單:'查無工單，是否手動增加？',
                請輸暫停理由:'請輸暫停理由：',
                未生產:'未生產',
                調整:'調整',
                忘記設定:'忘記設定',
                忘記設定狀態:'忘記設定狀態',
                工作部門:'工作部門',
                備註:'備註',
                考勤調整確認:'考勤調整確認',
                日期:'日期',
                班別管理:'班別管理',
                工單狀態與ERP對比報表:'工單狀態與ERP對比報表',
                ERP入庫數量:'ERP入庫數量',
                過站管理:'過站管理',
                序號查詢:'序號查詢',
                出貨序號表:'出貨序號表',
                工站編號:'工站編號',
                綁定工站:'綁定工站',
                測試工站:'測試工站',
                輸入開始序號:'輸入開始序號',


            },
            showShopFloor: false,  // 控制是否显示 label, input 和 table
            eff_performance_ppwodata: [],
            eff_performance_eff120data: [],
            eff_stff_bonus:[],
            eff_performance_data: [],
            RATING_data:[],
           eff_performance_dates: [],
           eff_performance_groupedData: {},
           DEP_eff_performance_data: [],
           DEP_eff_performance_dates: [],
           DEP_eff_performance_groupedData: {},
           QCDEP_eff_performance_data: [],
           QCDEP_eff_performance_dates: [],
           QCDEP_eff_performance_groupedData: {},
           ZHDEP_eff_performance_data: [],
           ZHDEP_eff_performance_dates: [],
           ZHDEP_eff_performance_groupedData: {},
           sfoperator: [
            // 示例数据
            { OPERATION_NO: '0', OPERATION_DESC: '重工', LINK: 'N', TEST: 'N' },
            { OPERATION_NO: '10', OPERATION_DESC: '萬用表測試', LINK: 'N', TEST: 'T' },
            { OPERATION_NO: '20', OPERATION_DESC: '標籤綁定', LINK: 'T', TEST: 'N' },
            { OPERATION_NO: '30', OPERATION_DESC: '外觀檢查', LINK: 'N', TEST: 'T' },
            { OPERATION_NO: '40', OPERATION_DESC: '最終測試', LINK: 'N', TEST: 'T' },
        ],
        showSelect: false,        // 控制下拉選單的顯示
      selectedRemark: "",       // 暫停原因
      selectedpauseDate: "",
      currentWoId: null,        // 存儲當前的工單ID
      currentNfcCode: null,     // 存儲當前的NFC代碼
     sfsnData: null , // 存储 API 响应的所有数据
    scanContent: '',
    displayContent: '',
     settingsOpen: false, // 新增状态用来控制是否展开设置
     performance: false,
     CHECHED: true,
     selectAll: false,
     WOselectAll: false,
     ighlight: false,
    showActions: false, // 控制功能列的显示与隐藏        
    loading: false,
    showyear : false,
    showCLASS: false,
    showDemoContent: false,
    REWOID:false,
    woderpreport:false,
    iframeHeight:500,
    isButtonDisabled: false,
    selectednfccode:'',
    currentTime: '',
    SHOW_PD_VERSON: false,
    SHOW_WO_VERSON: false,
    SHOW_eff_performance: false,
    SHOW_overflow_performance:false,
    showRealTimeContent: false,
    SHOPSTcontent:false,
   SHOW_RATING_VERSON: false,
    SNLISTcontent:false,
    PDSNLISTcontent: false,
    wo_mangeContent:false,
    wo_selectment:false,
    fqc_mangeContent :false,
    seat_mangeContent:false,
    staff_mangeContent:false,
    ATT_timeContent:false,
    ATT_AbnormalContent:false,
    CARD_mangeContent:false,
    shift_mangeContent:false,
    showForm: false,
    stff_show2: false,
    ATT_ADJ_confirm:false,
    selectedmachine:'',
    selectedyear:'',
    selectedArea: '',
    SFselectedWO: '',
    selectedText:'',
    selectedLINK:'',
    selectedDESC1:'',
    selectedDESC2:'',
    SFselectedOPERATOR:'',
    selectedD:'',
    selectedS:'',
    selectedC:'',
    selectedL:'',
    userIp: '',
    inputValue: 0 ,
    snInput: '',  // 用戶輸入的 SN
      snList: [],   // API 返回的數據列表
      SFoperations:[],
    selectedDepartment: 'DSC',
    productionData: [], // 用于存储从 API 获取的数据
    dpOptions: [],
    CAEDoptions: [],
      selectedUsername: '',
      machine_card: null,
    realTimeData: [],
    shiftdata:[],
    QUERRYTIME: [],
    ERPDATA:[],
    ATT_time_ADJ_data:[],
    selectedERP:'',
    selectedpart:'',
    onlineData: [],
    seatData: [],
    staffData: [],
    sfHLinkList: [],    
    SFPDSNLINK:[],  // SF_H_LINK API 返回的數據
    newStaff:[],
    newSHIFT:[],
    newSeat:[],
    PDVERSON:[],
    woderpdata:[],
    erpdata1:[],
    erpdata2:[],
    erpdata3:[],
    erpdata4:[],
    erpdata5:[],
    erpdata6:[],
    WOVERSON:[],
    transResponse:[],
    WO_SUM_VERSON:[],
    RATING_SUM_VERSON:[],
    RATINGVERSON:[],
    PDTOVERSON:[],
    HOSTMACHINE:[],
    ATT_Abnormal_d: [],
    ATT_time_data:[],
    ATT_time_SUM_data:[],
    attendanceData: [], // Data fetched from the API
    selectedJobNumber: '', // Selected job number
    selectedName: '', // Selected name
// Your condition to show rows
    fqc:[],
    MFG_D:'',
    isLoggedIn:false,
    showADJs:false,
    username:'',
    password:'',
    power:'',
    showInSecondTable: {
        // 设置部门对应的初始状态为 true
        '2D1S1C': false 
      },
    dynamicHeaders: [], // 存儲動態列名（MFG_DAY）
    firstResult: [], // 存儲第一個查詢的數據
    chartInstance: null, // 保存图表实例
        secondResult: [],
        selectedItemDesc: '',
        selectedItemNum: '',
    selectedDate: '',
    PDTYPESelect:'',
    selectedColor: '#00bfff',
    seateditMode:false,
    seathostid:'',
     showseatForm:false,
      scanContent: '',
      displayContent: '',
      showModal: false,
      modalMessage: '',
      adjWOValue: 0.00,
      showDialog: false,
      adjustmentValue: 0,
      selectedreson: '',
      resons: ['忘記掛卡/取卡', '掛卡異常', '網路異常', '斷電', '自離', '新員工', '重複掛卡','忘記設定狀態','掛錯卡', '狀態設定錯誤','其他'], // Example job orders
      currentItem: null,
      ATTSUMdata:[],
      ATTSUMdata2:[],
      WOSUMdata:[],
      WOSUMdata2:[],
      employmentTime: [
          { name: 'John Doe', STAR: 'Finance', END: 'Finance' },
          { name: 'Jane Smith', STAR: 'Finance', END: '2Finance' },
          { name: 'Michael Johnson', STAR: 'Finance', END: 'Finance' }
          // Add more employment time data here
        ],
        employees: [
          { name: 'John Doe', age: 30, department: 'IT' },
          { name: 'Jane Smith', age: 25, department: 'HR' },
          { name: 'Michael Johnson', age: 35, department: 'Finance' }
          // Add more employees here
        ],

  },
  watch: {
      adjustmentValue(value) {
        if (value % 0.5 !== 0) {
          this.adjustmentValue = Math.round(value * 2) / 2;
        }
 },
 selectAll(value) {
      this.ATT_time_ADJ_data.forEach(item => {
        item.selected = value;
      });
    },

   sfsnData(newVal) {
     /* this.$nextTick(() => {
        if (newVal && newVal.NEXTOPNO === this.SFselectedOPERATOR && newVal.LINK === 'T' && newVal.RESULT === 'Pass') {
          this.$refs.nexInputY.focus();
        }
        if (newVal && 
          ((newVal.NEXTOPNO === this.SFselectedOPERATOR && newVal.LINK === 'N' && newVal.RESULT === 'Pass') || 
           (newVal.RESULT === 'Fail' && this.SFselectedOPERATOR === '0'))) {
          this.$nextTick(() => {
            this.$refs.passButton.focus();
          });
        }
      });*/

      this.$nextTick(() => {
    if (this.selectedLINK === 'N') {
        if (this.$refs.passButton) {
            this.$refs.passButton.focus();
        }
    } else if (this.selectedLINK === 'T' && this.selectedDESC2 !== '') {
        if (this.$refs.nexInputY) {
            this.$refs.nexInputY.focus();
        }
    } else {
        if (this.$refs.nexInputD) {
            this.$refs.nexInputD.focus();
        }
    }
});
    }

 
},

      beforeDestroy() {
        window.removeEventListener('keydown', this.handleKeydown);
      },
computed: {
  totalZHFinalBonus() {
    return Object.keys(this.ZHDEP_eff_performance_groupedData).reduce((total, erpCode1) => {
      const date = this.ZHDEP_eff_performance_dates[this.ZHDEP_eff_performance_dates.length - 1]; // 使用最後的日期
      const bonus = parseFloat(this.ZHDEP_eff_performance_getValue(erpCode1, date, '考績獎金')) || 0;
      const extraBonus = parseFloat(this.ZHDEP_eff_performance_getValue(erpCode1, date, '額外考績獎金')) || 0;
      const managementFund = parseFloat(this.ZHDEP_eff_performance_getValue(erpCode1, date, 'A15拉管理福利金')) || 0;
      return total + bonus + extraBonus + managementFund;
    }, 0); // 兩位小數
  },
  totalQCFinalBonus() {
    return Object.keys(this.QCDEP_eff_performance_groupedData).reduce((total, erpCode1) => {
      const date = this.QCDEP_eff_performance_dates[this.QCDEP_eff_performance_dates.length - 1]; // 使用最後的日期
      const bonus = parseFloat(this.QCDEP_eff_performance_getValue(erpCode1, date, '考績獎金')) || 0;
      const extraBonus = parseFloat(this.QCDEP_eff_performance_getValue(erpCode1, date, '額外考績獎金')) || 0;
      const managementFund = parseFloat(this.QCDEP_eff_performance_getValue(erpCode1, date, 'A15拉管理福利金')) || 0;
      return total + bonus + extraBonus + managementFund;
    }, 0); // 兩位小數
  },
  totalFinalBonus() {
      const lastDate = this.DEP_eff_performance_dates[this.DEP_eff_performance_dates.length - 1];
      return Object.keys(this.DEP_eff_performance_groupedData).reduce((total, erpCode1) => {
        const bonus = parseFloat(this.DEP_eff_performance_getValue(erpCode1, lastDate, '最終獎金')) || 0;
        return total + bonus;
      }, 0); // 四捨五入到小數點兩位
    },
  totalSWH() {
    return this.eff_performance_ppwodata
      .reduce((total, item) => total + Number(item.SWH), 0)
      .toFixed(2);
  },
  totalAWH() {
    return this.eff_performance_ppwodata
      .reduce((total, item) => total + Number(item.AWH), 0)
      .toFixed(2);
  },
  groupedByShift() {
      // 根據 SHIFT 分組
      return this.eff_stff_bonus.reduce((acc, item) => {
        if (!acc[item.SHIFT]) {
          acc[item.SHIFT] = [];
        }
        acc[item.SHIFT].push(item);
        return acc;
      }, {});
    },
    totalBonus() {
      // 計算實際獎金總計
      return this.eff_stff_bonus.reduce((total, item) => total + Number(item.實際獎金 || 0), 0);
    },
    processedData() {
      // 1. 使用 reduce 方法对数据进行预处理，合并相同部门的行并计算執行工時总和
      return this.WOVERSON.reduce((acc, item) => {
        // 找到 acc 中是否已存在相同部门的项
        const existingItem = acc.find(i => i.部門 === item.部門 && i.工單 === item.工單 && i.品名 === item.品名 && i.數量 === item.數量 && i.標準工時 === item.標準工時);
        if (existingItem) {
          // 如果已存在，则累加執行工時
          existingItem.執行工時 += item.執行工時;
        } else {
          // 如果不存在，则加入新的项
          acc.push({
            ...item,
            total執行工時: item.執行工時, // 新增 total執行工時 字段来显示合并后的執行工時
            uniqueKey: `${item.部門}_${item.工單}_${item.品名}_${item.數量}_${item.標準工時}` // 使用 uniqueKey 来确保每行的唯一性
          });
        }
        return acc;
      }, []);
    }
  },

  methods: { 
    ...app3.methods,

      // 顯示特定內容區域
      showContent(content) {
        this.currentContent = content;
        if (content === '無效工時') {

          this.IWHR();

        } else if (content === '重點人員') {

          this.IMPORT();
        }

        this.activeMenu = ''; // 隱藏所有菜單
        this.SHOW_RATING_VERSON= false;
        this.SHOPSTcontent= false;
        this.SNLISTcontent= false;
        this.PDSNLISTcontent= false;
        this.SHOW_eff_performance= false;
        this.SHOW_overflow_performance= false;
        this.SHOW_WO_VERSON= false;
        this.SHOW_PD_VERSON= false,
        this.showyear= false,
        this.showCLASS= false,
        this.showDemoContent = false;
        this.showRealTimeContent = false;
        this.wo_mangeContent = false;
        this.wo_selectment= false;
        this.seat_mangeContent = false;
        this.staff_mangeContent = false;
        this.ATT_AbnormalContent = false;
        this.fqc_mangeContent = false;
        this.ATT_timeContent = false;
        this.isLoggedIn= false;
        this.CARD_mangeContent= false;
        this.shift_mangeContent= false;
        this.ATT_ADJ_confirm=false;
        this.woderpreport=false;

      },
    calculateTotalCompletedQty(item) {
    // 数字相加
    const total = (parseFloat(item.COMPLETED_QTY_1) || 0) + 
                  (parseFloat(item.COMPLETED_QTY_2) || 0) + 
                  (parseFloat(item.COMPLETED_QTY_3) || 0) + 
                  (parseFloat(item.COMPLETED_QTY_4) || 0) + 
                  (parseFloat(item.COMPLETED_QTY_5) || 0);
    return total.toFixed(0); // 保留两位小数
  },
    async fetchOperations() {
      if (!this.SFselectedWO) return;

     // const apiUrl = `https://localhost:5001/api/SHOPFLOOR/OPERATION_LIST?WO_ID=${this.SFselectedWO}`;
     const apiUrl = `http://192.168.207.17:5024/api/SHOPFLOOR/OPERATION_LIST?WO_ID=${this.SFselectedWO}`;
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          this.SFoperations = data.result || [];
        } else {
          console.error("API 請求失敗:", response.status);
        }
      } catch (error) {
        console.error("API 請求出錯:", error);
      }
    },
    async fetchSNData() {
      try {
        // 查詢 SN_LIST API
        const snListResponse = await axios.get(`http://192.168.207.17:5024/api/SHOPFLOOR/SN_LIST?sn=${this.snInput}`);
        this.snList = snListResponse.data.result || [];

        // 查詢 SF_H_LINK API
        const sfHLinkResponse = await axios.get(`http://192.168.207.17:5024/api/SHOPFLOOR/SN_LIST_LIK?sn=${this.snInput}`);
        this.sfHLinkList = sfHLinkResponse.data.result || [];
      } catch (error) {
        console.error('查詢失敗', error);
      }
    },
    async fetchPDSNData() {
      const date = new Date(this.selectedDate);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}${month}${day}`;
      try {

        // 查詢 SF_H_LINK API
        const sfHLinkResponse = await axios.get(`http://192.168.207.17:5024/api/SHOPFLOOR/PDSN_TRANS?MFG_DAY=${formattedDate}&TYPE=${this.PDTYPESelect}`);
        this.SFPDSNLINK = sfHLinkResponse.data.result || [];
      } catch (error) {
        console.error('查詢失敗', error);
      }
    },
    eff_performance_sumColumn(data, date, field, 部門) {
    return Object.keys(data).reduce((sum, erpCode) => {
      const department = this.eff_performance_getValue(erpCode, date, '部門');
      if (department === 部門) {
        const value = this.eff_performance_getValue(erpCode, date, field);
        return sum + (isNaN(value) ? 0 : Number(value));
      }
      return sum;
    }, 0);
  },

    formatCurrency(value) {
  // 將數值格式化為金錢樣式，但不添加貨幣符號
  if (typeof value === "number") {
    return new Intl.NumberFormat('zh-TW', { 
      minimumFractionDigits: 0, 
      maximumFractionDigits: 0 
    }).format(value);
  }
  return value;
},

    calculateShiftBonus(shift) {
      // 計算每個 SHIFT 的實際獎金總計
      const group = this.groupedByShift[shift] || [];
      return group.reduce((total, item) => total + Number(item.實際獎金 || 0), 0);
    },
    getTotalCount() {
    return this.productionData ? this.productionData.length : 0;
  },
  getTotalCountPDLIST() {
    return this.SFPDSNLINK ? this.SFPDSNLINK.length : 0;
  },
  getPassCount() {
    return this.productionData ? this.productionData.filter(item => item.RESULT === 'Pass').length : 0;
  },
  getFailCount() {
    return this.productionData ? this.productionData.filter(item => item.RESULT === 'Fail').length : 0;
  },
    handleClick2() {
 
    /*  if (this.sfsnData.TRANS_ID1.length !== 12) {
        this.sfsnData.TRANS_ID1 = ''; // 清空输入框内容
        this.$refs.nexInputY.focus();  // 重新聚焦到输入框


      } else {

        this.$refs.nexInput.focus();
      }*/
      this.$refs.nexInput.focus();
    },

    handleClick(result) {
    // Update modal content
    this.displayContent = this.scanContent;
    this.modalMessage = `這是${result}: ${this.displayContent}`;
    this.showModal = true;

    // Prepare the data to be sent to the API
    const requestData = {
        area: this.selectedArea, // Replace with actual value
        wo_id: this.sfsnData.WO_ID , // Replace with actual value
        part_no: this.sfsnData.part_no , // Replace with actual value
        sn:  this.sfsnData.SN, // Replace with actual value
        operatioN_NO: this.SFselectedOPERATOR,
        operatioN_DESC: this.selectedText, // 使用获取到的文本
        result: result // Pass the result (PASS/FAIL)
    };
    console.log('更新成功', requestData);
    // Call the API
    fetch('http://192.168.207.17:5024/api/SHOPFLOOR/INSERTSN', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON response
    })
    .then(data => {
        console.log('Success:', data);
        this.modalMessage = data.message; // Use message from response
    })
    .catch((error) => {
        console.error('Error:', error);
        this.modalMessage = `上傳成功: ${this.displayContent}`;
    })
    .finally(() => {
        setTimeout(() => {
            this.showModal = false;
            this.scanContent='';
            this.sfsnData=null;
            this.$refs.scanInput.focus();
        }, 500);

    });
    this.SNSUMSELECT();
},
seloption() {


  const selectedOperation = this.SFoperations.find(
    (operation) => operation.OPERATION_NO === this.SFselectedOPERATOR
  );

  // 如果找到对应的工站，则更新 selectedText
  this.selectedText = selectedOperation 
    ? selectedOperation.OPERATION_DESC 
    : '';
    this.selectedLINK = selectedOperation 
    ? selectedOperation.LINK 
    : '';
    this.selectedDESC1 = selectedOperation 
    ? selectedOperation.TRANS_DESC1 
    : '';
    this.selectedDESC2 = selectedOperation 
    ? selectedOperation.TRANS_DESC2 
    : '';

//this.selectedText = this.SFoperations[this.SFselectedOPERATOR].OPERATION_DESC || '';


this.SNSUMSELECT();
    
  },

  SNSUMSELECT(){
    const area = this.selectedArea;
    const wo = this.SFselectedWO;
    const operation = this.SFselectedOPERATOR;

    const apiUrl = `http://192.168.207.17:5024/api/SHOPFLOOR/SNresultSELECT?area=${area}&operation=${operation}&wo=${wo}`;
    axios.get(apiUrl)
      .then(response => {
        this.productionData = response.data; // 将返回的数据存储到 productionData 中
      })
      .catch(error => {
        console.error("API 调用失败:", error);
      });
      console.log("API:", this.productionData);
  },
handleEnterLINKKey() {

 // if (this.sfsnData.TRANS_ID2.length !== 12) {
     // this.sfsnData.TRANS_ID2 = ''; // 清空输入框内容
   //  this.$refs.nexInput.focus();

   // } else {
        this.displayContent = this.scanContent;
    this.modalMessage = `這是: ${this.displayContent}`;
    this.showModal = true;

    // 請求1的數據
    const requestData1 = {
        area: this.selectedArea,
        part_no: this.sfsnData.part_no, // Replace with actual value
        operatioN_NO: this.SFselectedOPERATOR, // Replace with actual value
        masteR_ID: this.sfsnData.SN,
        tranS_ID1: this.sfsnData.TRANS_ID1,  // 根據需求設置
        tranS_ID2: this.sfsnData.TRANS_ID2,
    };

    // 請求2的數據
    const requestData2 = {
        area: this.selectedArea, // Replace with actual value
        wo_id: this.sfsnData.WO_ID, // Replace with actual value
        part_no: this.sfsnData.part_no, // Replace with actual value
        sn: this.sfsnData.SN, // Replace with actual value
        operatioN_NO: this.SFselectedOPERATOR, // Replace with actual value
        operatioN_DESC: this.selectedText, // Replace with actual value
        result: 'Pass' // Pass the result (PASS/FAIL)
    };
    // 同時發送兩個請求
    Promise.all([
    fetch('http://192.168.207.17:5024/api/SHOPFLOOR/INSERT_LINK', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData1)
    }),
    fetch('http://192.168.207.17:5024/api/SHOPFLOOR/INSERTSN', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData2)
    })
])
.then(responses => {
    // 动态解析响应
    return Promise.all(responses.map(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text().then(text => {
            try {
                return JSON.parse(text);
            } catch {
                return { message: text }; // 返回原始文本作为 message
            }
        });
    }));
})
.then(dataArray => {
    const [data1, data2] = dataArray;
    console.log('Success from INSERT_LINK:', data1);
    console.log('Success from INSERTSN:', data2);
    this.modalMessage = `${data1.message}\n${data2.message}`;
})
.catch(error => {
    console.error('Error:', error);
    this.modalMessage = `上傳失敗: ${this.displayContent}`;
})
.finally(() => {
    setTimeout(() => {
        this.showModal = false;
        this.scanContent = '';
        this.sfsnData = null;
        this.$refs.scanInput.focus();
    }, 500);
    this.seloption();
});
  
      //}
},

async handleEnter() {
      
      try {
        const response = await axios.get(
          'http://192.168.207.17:5024/api/SHOPFLOOR/SNSELECT',
          {
            params: {
              area: this.selectedArea,
              SN: this.scanContent,
              OP: this.SFselectedOPERATOR
            }
          }
        );

        // 假设响应数据是一个数组，我们只取第一个元素
        if (response.data && response.data.length > 0) {
          this.sfsnData = response.data[0];
  
          console.log('Success from INSERT_LINK:', this.SFselectedOPERATOR);
          if (this.SFselectedOPERATOR === '40' ) {
        // 调用第二个 API
        const response2 = await axios.get(
          'http://192.168.207.17:5024/api/SHOPFLOOR/SN_TRANS',
          {
            params: {
              sn: this.scanContent // 使用 scanContent 作为 sn 参数
            }
          }
        );

        // 保存第二个 API 的结果
        this.transResponse = response2.data.result[0]; // 假设返回的数据直接赋值
      } else {
        this.transResponse = null; // 如果条件不符合，清空第二个 API 数据
      }
      console.log('Success from INSERT_LINK:',  this.transResponse);
      this.scanContent='';

        } else {
          // 如果没有数据，清空显示
          this.sfsnData = null;
          this.scanContent='';
        }
      } catch (error) {
        console.error('API 请求失败:', error);
        // 处理错误时也清空显示
        this.sfsnData = null;       
         this.scanContent='';
            }




    },

          /*  handleKeydown(event) {
          if (event.key === 'a' || event.key === 'A') {
            this.handleClick('PASS');

          } else if (event.key === 'b' || event.key === 'B') {
            this.handleClick('FAIL');
          }
        },*/
        async RATING_fetchData() {

          if (this.selectedL) {
  this.selectedDepartment = this.selectedD + 'D' + this.selectedS + 'S' + this.selectedC + '-' + this.selectedL + 'C';
} else {
  this.selectedDepartment = this.selectedD + 'D' + this.selectedS + 'S' + this.selectedC + 'C';
}
          const Department = this.selectedDepartment;
          const area = this.selectedArea;

          try {
            const response = await axios.get(`http://192.168.207.17:5024/api/READWOID/SELECT_RATING?area=${area}&department=${Department}`);
            this.  RATING_data = response.data.result;
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        },
    async eff_performance_fetchData() {
          try {
            const response = await axios.get('http://192.168.207.17:5024/api/performance/effperformance?area=VN');
            this.  eff_performance_data = response.data.result;
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        },
        async DEP_eff_performance_fetchData() {
          try {
            const response = await axios.get('http://192.168.207.17:5024/api/performance/DEPPER?area=VN');
            this.  DEP_eff_performance_data = response.data.result;
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        },
        async QCDEP_eff_performance_fetchData() {
          try {
            const response = await axios.get('http://192.168.207.17:5024/api/performance/QCDEPPER?area=VN');
            this.  QCDEP_eff_performance_data = response.data.result;
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        },
        async ZHDEP_eff_performance_fetchData() {
          try {
            const response = await axios.get('http://192.168.207.17:5024/api/performance/ZHDEPPER?area=VN');
            this.  ZHDEP_eff_performance_data = response.data.result;
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        },
        async DEP_eff_OVERFLOW_fetchData() {
          try {
            const response = await axios.get('http://192.168.207.17:5024/api/performance/DEPover?area=VN');
            this.  DEP_eff_performance_data = response.data.result;
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        },
        async QCDEP_eff_OVERFLOW_fetchData() {
          try {
            const response = await axios.get('http://192.168.207.17:5024/api/performance/QCDEPover?area=VN');
            this.  QCDEP_eff_performance_data = response.data.result;
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        },
        async CNDEP_eff_OVERFLOW_fetchData() {
          try {
            const response = await axios.get('http://192.168.207.17:5024/api/performance/CNDEPover?area=VN');
            this.  ZHDEP_eff_performance_data = response.data.result;
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        },
        async eff_performance_ppwo() {
          try {
            const response = await axios.get('http://192.168.207.17:5024/api/performance/PPWO?area=vn');
            this.eff_performance_ppwodata = response.data.result;
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        },
        async eff_performance_eff120() {
          try {
            const response = await axios.get('http://192.168.207.17:5024/api/performance/eff120?area=vn');
            this.eff_performance_eff120data = response.data.result;
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        },
        async eff_stff_bonus_fetchData() {
          try {
            const response = await axios.get('http://192.168.207.17:5024/api/performance/stff_bonus?area=vn');
            this.eff_stff_bonus = response.data.result;
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        },
        async eff_stff_OVER_bonus_fetchData() {
          try {
            const response = await axios.get('http://192.168.207.17:5024/api/performance/stff_OVER_bonus?area=VN');
            this.eff_stff_bonus = response.data.result;
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        },
        async overflow_performance_fetchData() {
          try {
            const response = await axios.get('http://192.168.207.17:5024/api/performance/overflowperformance?area=VN');
            this.  eff_performance_data = response.data.result;
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        },
        eff_performance_processData() {
          const dateSet = new Set();
          const grouped = {};

          // 处理数据
          this. eff_performance_data.forEach(item => {
            dateSet.add(item.日期);
            if (!grouped[item.ERP班別代號]) {
              grouped[item.ERP班別代號] = {};
            }
            grouped[item.ERP班別代號][item.日期] = item;
          });

          this.eff_performance_dates = Array.from(dateSet).sort();
          this.eff_performance_groupedData = grouped;
          console.log('API response:', grouped);
          console.log('API response:', this.eff_performance_groupedData);
        },
        DEP_eff_performance_processData() {
          const dateSet = new Set();
          const grouped = {};

          // 处理数据
          this.DEP_eff_performance_data.forEach(item => {
            dateSet.add(item.日期);
            if (!grouped[item.ERP班別代號]) {
              grouped[item.ERP班別代號] = {};
            }
            grouped[item.ERP班別代號][item.日期] = item;
          });

          this.DEP_eff_performance_dates = Array.from(dateSet).sort();
          this.DEP_eff_performance_groupedData = grouped;
          console.log('API response:', grouped);
          console.log('API response:', this.DEP_eff_performance_groupedData);
        },
        QCDEP_eff_performance_processData() {
          const dateSet = new Set();
          const grouped = {};

          // 处理数据
          this.QCDEP_eff_performance_data.forEach(item => {
            dateSet.add(item.日期);
            if (!grouped[item.ERP班別代號]) {
              grouped[item.ERP班別代號] = {};
            }
            grouped[item.ERP班別代號][item.日期] = item;
          });

          this.QCDEP_eff_performance_dates = Array.from(dateSet).sort();
          this.QCDEP_eff_performance_groupedData = grouped;
          console.log('API response:', grouped);
          console.log('API response:', this.QCDEP_eff_performance_groupedData);
        },
        ZHDEP_eff_performance_processData() {
          const dateSet = new Set();
          const grouped = {};

          // 处理数据
          this.ZHDEP_eff_performance_data.forEach(item => {
            dateSet.add(item.日期);
            if (!grouped[item.ERP班別代號]) {
              grouped[item.ERP班別代號] = {};
            }
            grouped[item.ERP班別代號][item.日期] = item;
          });

          this.ZHDEP_eff_performance_dates = Array.from(dateSet).sort();
          this.ZHDEP_eff_performance_groupedData = grouped;
          console.log('API response:', grouped);
          console.log('API response:', this.ZHDEP_eff_performance_groupedData);
        },
        DEP_eff_OVERFLOE_processData() {
          const dateSet = new Set();
          const grouped = {};

          // 处理数据
          this.DEP_eff_performance_data.forEach(item => {
            dateSet.add(item.日期);
            if (!grouped[item.ERP班別代號]) {
              grouped[item.ERP班別代號] = {};
            }
            grouped[item.ERP班別代號][item.日期] = item;
          });

          this.DEP_eff_performance_dates = Array.from(dateSet).sort();
          this.DEP_eff_performance_groupedData = grouped;
          console.log('API response:', grouped);
          console.log('API response:', this.DEP_eff_performance_groupedData);
        },
        QCDEP_eff_OVERFLOE_processData() {
          const dateSet = new Set();
          const grouped = {};

          // 处理数据
          this.QCDEP_eff_performance_data.forEach(item => {
            dateSet.add(item.日期);
            if (!grouped[item.ERP班別代號]) {
              grouped[item.ERP班別代號] = {};
            }
            grouped[item.ERP班別代號][item.日期] = item;
          });

          this.QCDEP_eff_performance_dates = Array.from(dateSet).sort();
          this.QCDEP_eff_performance_groupedData = grouped;
          console.log('API response:', grouped);
          console.log('API response:', this.QCDEP_eff_performance_groupedData);
        },
        CNDEP_eff_OVERFLOE_processData() {
          const dateSet = new Set();
          const grouped = {};

          // 处理数据
          this.ZHDEP_eff_performance_data.forEach(item => {
            dateSet.add(item.日期);
            if (!grouped[item.ERP班別代號]) {
              grouped[item.ERP班別代號] = {};
            }
            grouped[item.ERP班別代號][item.日期] = item;
          });

          this.ZHDEP_eff_performance_dates = Array.from(dateSet).sort();
          this.ZHDEP_eff_performance_groupedData = grouped;
          console.log('API response:', grouped);
          console.log('API response:', this.ZHDEP_eff_performance_groupedData);
        },
        overflow_performance_processData() {
          const dateSet = new Set();
          const grouped = {};

          // 处理数据
          this. eff_performance_data.forEach(item => {
            dateSet.add(item.日期);
            if (!grouped[item.ERP班別代號]) {
              grouped[item.ERP班別代號] = {};
            }
            grouped[item.ERP班別代號][item.日期] = item;
          });

          this.eff_performance_dates = Array.from(dateSet).sort();
          this.eff_performance_groupedData = grouped;
          console.log('API response:', grouped);
          console.log('API response:', this.eff_performance_groupedData);
        },
        eff_performance_getValue(erpCode, date, field) {
          return this.eff_performance_groupedData[erpCode] && this.eff_performance_groupedData[erpCode][date] ? this.eff_performance_groupedData[erpCode][date][field] : '-';
        },
        DEP_eff_performance_getValue(erpCode, date, field) {
          return this.DEP_eff_performance_groupedData[erpCode] && this.DEP_eff_performance_groupedData[erpCode][date] ? this.DEP_eff_performance_groupedData[erpCode][date][field] : '-';
        },
        QCDEP_eff_performance_getValue(erpCode, date, field) {
          return this.QCDEP_eff_performance_groupedData[erpCode] && this.QCDEP_eff_performance_groupedData[erpCode][date] ? this.QCDEP_eff_performance_groupedData[erpCode][date][field] : '-';
        },
        ZHDEP_eff_performance_getValue(erpCode, date, field) {
          return this.ZHDEP_eff_performance_groupedData[erpCode] && this.ZHDEP_eff_performance_groupedData[erpCode][date] ? this.ZHDEP_eff_performance_groupedData[erpCode][date][field] : '-';
        },
        overflow_performance_getValue(erpCode, date, field) {
          return this.eff_performance_groupedData[erpCode] && this.eff_performance_groupedData[erpCode][date] ? this.eff_performance_groupedData[erpCode][date][field] : '-';
        },

        eff_performance_formatNumber(value) {
        return (typeof value === 'number' && !isNaN(value)) ? value.toFixed(2) : '-';
         },
        overflow_performance_formatNumber(value) {
          return typeof value === 'number' ? value.toFixed(2) : '-';
        },
        eff_performance_formatNumber2(value) {
           return (typeof value === 'number' && !isNaN(value)) ? value.toFixed(2) + '%' : '-';
         },
        overflow_performance_formatNumber2(value) {
          return typeof value === 'number' ? value.toFixed(2)+'%' : '-';
        },
        
        async effper() {
    // 使用 selectedArea 作为参数进行 API 调用
    await this.eff_performance_fetchData();
     this.eff_performance_processData();
     await this.eff_performance_ppwo();
     await this. eff_performance_eff120();
     await this.eff_stff_bonus_fetchData();
    await this.DEP_eff_performance_fetchData();
      this.DEP_eff_performance_processData();
    await this.QCDEP_eff_performance_fetchData();
     this.QCDEP_eff_performance_processData();
    await this.ZHDEP_eff_performance_fetchData();
  this.ZHDEP_eff_performance_processData();

  },
  async overflowper() {
    // 使用 selectedArea 作为参数进行 API 调用
    await this.overflow_performance_fetchData();
     this.overflow_performance_processData();
     await this.eff_performance_ppwo();
     await this.eff_stff_OVER_bonus_fetchData();
     await this.DEP_eff_OVERFLOW_fetchData();
     this.DEP_eff_OVERFLOE_processData();
     await this.QCDEP_eff_OVERFLOW_fetchData();
     this.QCDEP_eff_OVERFLOE_processData();
     await this.CNDEP_eff_OVERFLOW_fetchData();
     this.CNDEP_eff_OVERFLOE_processData();
  },
  processData(data) {
    // 处理和分组数据的逻辑
    // ...
  },
  calculateTotaleff(group, type) {
    return Object.values(group).reduce((total, monthData) => total + (monthData[type] || 0), 0);
  },
    woselect() {
      this.loading = true;
      this.secondResult = [];
    axios.get('http://192.168.207.17:5024/api/READWOID/part_list', {
        params: {
            part: this.selectedpart
        }
    })
    .then(response => {
        console.log('API response:', response.data); // 調試信息

        this.secondResult = response.data.result || [];
        this.loading = false;
        // 假设 response.data.result 是一个数组，你可以选择第一个元素的 ItemDesc 或其他逻辑
        if (this.secondResult.length > 0) {
            this.selectedItemDesc = this.secondResult[0].ItemDesc;
            this.selectedItemNum = this.secondResult[0].ItemNum;
        } else {
            this.selectedItemDesc = '';
            this.selectedItemNum = '';
        }
        this.loading = false;
        this.generateCharts();
    })
    .catch(error => {
      this.loading = false;
        console.error('API call failed: ', error);
        this.secondResult = [];
        this.selectedItemDesc = '';
        this.selectedItemNum = '';
    });
},
generateCharts() {
    // 如果存在旧的图表实例，则销毁它
    if (this.chartInstance) {
        this.chartInstance.destroy();
        this.chartInstance = null; // 确保旧实例已被销毁
    }

    // 反向排序副本
    const data = this.secondResult.slice().reverse();
    const labels = data.map(item => item.WONum);
    const effData = data.map(item => item.eff);
    const womoneyData = data.map(item => {
  // 判断 womoney 是否为 null 或者是一个空对象
  if (item.womoney !== null && typeof item.womoney === 'number') {
    return item.womoney;
  } else {
    return 0; // 如果为空值，则返回 0
  }
});


    // 绘制混合图表
    const mixedCtx = document.getElementById('mixedChart').getContext('2d');
    this.chartInstance = new Chart(mixedCtx, {
        type: 'bar', // 主图表类型设为柱状图
        data: {
            labels: labels,
            datasets: [
                {
                    label: '人時差異(含製費)',
                    data: womoneyData,
                    backgroundColor: 'rgba(255, 99, 132, 0.7)',
                    borderColor: 'rgba(255, 99, 132,  0.7)',
                    borderWidth: 1,
                    type: 'bar', // 数据集类型为柱状图
                    yAxisID: 'y1' // 指定使用右侧 y 轴
                },
                {
                    label: '效率 ',
                    data: effData,
                    borderColor: 'rgba(25, 101, 0,  0.7)',
                    backgroundColor: 'rgba(25, 101, 0, 0.7)',
                    type: 'line', // 数据集类型为折线图
                    yAxisID: 'y2' // 指定使用左侧 y 轴
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true
                },
                y1: {
                    beginAtZero: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: '人時差異(含製費)'
                    }
                },
                y2: {
                    beginAtZero: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: '效率'
                    },
                    ticks: {
                        color: 'rgba(75, 192, 192, 1)' // 将折线图的 y 轴刻度标记颜色设置为折线图的颜色
                    }
                }
            }
        }
    });
},

                selectwo(woid) {
                    axios.get('http://192.168.207.17:5024/api/READWOID/combined_data', {
                        params: {
                          wo_id: woid
                        }
                    })
                    .then(response => {
                        console.log('API response:', response.data); // 調試信息
                        if (response.data.firstResult && response.data.firstResult.length > 0) {
                            this.processFirstResult(response.data.firstResult);
                        } else {
                            this.firstResult = [];
                        }
                        this.firstResult = response.data.firstResult || [];
                    })
                    .catch(error => {
                        console.error('API call failed: ', error);
                        this.firstResult = [];

                    });
                },
                processFirstResult(data) {
                    // 獲取所有動態列（MFG_DAY）
                    this.dynamicHeaders = Object.keys(data[0]).filter(key => key !== '生產部門' && key !== '工作內容');
                    
                    // 將數據存儲在 firstResult 中
                    this.firstResult = data;
                },
                calculateRowTotal(row) {
                    // 計算每行的總和
                    return this.dynamicHeaders.reduce((total, day) => {
                        const value = row[day]*1;
                        return total + (value  ? parseFloat(value) : 0);
                    }, 0);
                },
                calculateColumnTotal(day) {
                    // 計算每列的總和
                    return this.firstResult.reduce((total, row) => {
                        const value = row[day]*1;
                        return total + (value ? parseFloat(value) : 0);
                    }, 0);
                },
                calculateGrandTotal() {
                    // 計算所有列的總和
                    return this.dynamicHeaders.reduce((grandTotal, day) => {
                        return grandTotal + this.calculateColumnTotal(day);
                    }, 0);
                },
    fetchAttendanceData(jobNumber, name) {
      const date = new Date(this.selectedDate);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}${month}${day}`;
      const apiUrl = `http://192.168.207.17:5024/api/Attendance/ATT_RAWDATA?MFG_DAY=${formattedDate}&JOB_NUMBER=${jobNumber}`;
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          this.attendanceData = data;
          this.selectedJobNumber = jobNumber;
          this.selectedName = name;
        })
        .catch(error => {
          console.error('Error fetching attendance data:', error);
        });
    },
    toggleSettings() {
      this.settingsOpen = !this.settingsOpen; // 切换设置的展开状态
    },
    toggleperformance () {
      this.performance = !this.performance; // 切换设置的展开状态
    },
    toggleSelectAll() {
      this.ATT_time_ADJ_data.forEach(item => {
        item.selected = this.selectAll;
      });
    },
    toggleWOSelectAll() {
        this.WO_SUM_VERSON.forEach(item => {
            this.$set(this.showInSecondTable, item.部門, this.WOselectAll);
        });
        const trueKeys = Object.keys(this.showInSecondTable)
  .filter(key => this.showInSecondTable[key])
  .sort((a, b) => a - b);

trueKeys.forEach(trueKey => {
  this.WOVERSON = [];
  this.WOVER(trueKey);
});

    },
    toggleRATINGSelectAll() {
        this.RATING_SUM_VERSON.forEach(item => {
            this.$set(this.showInSecondTable, item.部門, this.WOselectAll);
        });
        const trueKeys = Object.keys(this.showInSecondTable)
  .filter(key => this.showInSecondTable[key])
  .sort((a, b) => a - b);

trueKeys.forEach(trueKey => {
  this.RATINGVERSON = [];
  this.RATINGVER(trueKey);
});

    },
    toggleATTSelectAll() {
        this.ATT_time_SUM_data.forEach(item => {
            this.$set(this.showInSecondTable, item.部門, this.WOselectAll);
        });

const trueKeys = Object.keys(this.showInSecondTable)
  .filter(key => this.showInSecondTable[key])
  .sort((a, b) => a - b);

trueKeys.forEach(trueKey => {
  this.att_hr_data(trueKey);
});
    },
    async executeSelected() {
      this.loading = true;
      this.isButtonDisabled = true;
  const selectedItems = this.ATT_time_ADJ_data.filter(item => item.selected);
  try {
    for (const item of selectedItems) {
      const UPDATEData = {
        mfG_DAY: item.mfG_DAY,
        area: item.area,
        department: item.department,
        jobnumber: item.jobnumber,
        ADJTIME: item.adj_time,
      };

      await axios.post('http://192.168.207.17:5024/api/Attendance/UPDATE_ADJS', UPDATEData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    alert(this.translatedText.更新完成);
    this.isButtonDisabled = false;
    this.loading = false;
    this.att_hr_SUM_ADJ();
  } catch (error) {
    console.error('更新失敗', error);
  }
},

    calculateTotalDifference() {

      return this.WO_SUM_VERSON.reduce((total, item) => {
        const difference = item.回報工時 - (item.執行工時 * 1 + item.狀態工時 * 1 + item.狀態工時2 * 1 + item.殘疾人 * 1 + (item.未設定工單 - item.殘疾人 * 1) + item.無效工時 * 1 + item.借出工時 * 1 - item.借入工時 * 1 + item.調整工時 * 1);
        if (this.showInSecondTable[item.部門]) {
        return total + difference;
        }else{

          return total;
        }
      }, 0);
    },
    show_ADJ() {
      this.showADJs = true;

    },
    show_ADJ_CANCEL() {
      this.showADJs = false;

    },
    CHECK_WOADJ() {
      let totalAdjustment = this.WOVERSON.reduce((sum, item) => {
        return parseFloat((sum + parseFloat(item.ADJ || 0)).toFixed(2));
      }, 0);

      if (totalAdjustment !== 0) {
        alert('調整欄位數字相加必須為0');
        console.log('Success:', totalAdjustment);
      } else {
        alert('調整正確');
        
        let adjustedItems = this.WOVERSON.filter(item => item.ADJ && item.ADJ != 0);
        
        adjustedItems.forEach(item => {
          let payload = {
            AREA: item.廠區, // Replace with actual value if needed
            MFG_DAY: item.日期,  // Replace with actual value if needed
            WO_DEPARTMENT: item.工單部門,
            wo_id: item.工單,
            part_desc: item.品名,
            Qty: item.數量,
            std_time: item.標準工時,
            working_hours: item.ADJ
          };
          console.log('更新成功', payload);
          axios.post('http://192.168.207.17:5024/api/Report/ADG_WO_TIME', payload)
            .then(response => {
              console.log('Success:', response);
              this.WO_SUM_VER();
            })
            .catch(error => {
              console.error('Error:', error);
            });
        });
  
      }
      this.showADJs = false;
    },
       ADJ_CONFIRM_ET(item) {
      const UPDATEData = {
  mfG_DAY:item.mfG_DAY,
  area: item.area,
  department: item.department,
  jobnumber:item.jobnumber,
  ADJTIME:item.adj_time,
};
axios.post('http://192.168.207.17:5024/api/Attendance/UPDATE_ADJS', UPDATEData, {
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  // Handle successful response here
  if (response.status === 200) {


  } else {

  }

})
.catch(error => {
  // Handle other errors here

});
    },

    showAdjustmentDialog(item) {
      this.currentItem = item;
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    },
    applyAdjustment() {
      if (this.currentItem) {
        // Apply the adjustment logic here
        console.log(`Adjusted ${this.adjustmentValue} for ${this.currentItem.工號}`);
        console.log(`Job Order: ${this.selectedreson}`);
        console.log(`DATE: ${this.selectedDate}`);
        console.log(`AREA: ${this.selectedArea}`);
        
const UPDATEData = {
  area: this.selectedArea,
  mfG_DAY:this.selectedDate,
  jobnumber:this.currentItem.工號,
  adjtime: this.adjustmentValue,
  reson:this.selectedreson,
};
//axios.post('https://localhost:5001/api/Attendance/ADJTIMES', UPDATEData, {

axios.post('http://192.168.207.17:5024/api/Attendance/ADJTIMES', UPDATEData, {
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  // Handle successful response here
  if (response.status === 200) {
    console.log('更新成功', response.status);
    alert(this.translatedText.更新完成);
   
  } else {
    console.log('更新成功 (但是收到了 400 錯誤)', response);
  }

})
.catch(error => {
  // Handle other errors here
  if (error.response.status === 400 && error.response.data === "No data found to delete.") {
    // 如果错误消息是 "No data found to delete"，则继续执行 this.insert
    console.log('更新成功', error.response.status);
    alert(this.translatedText.更新完成);
   
  }
  alert(this.translatedText.更新完成);
   
});


      }
      this.att_hr_SUM_data();
      this.closeDialog();
    },
    submitCARD_Form() {
    // 构造要发送的数据对象
    const formData = {
      area: this.selectedArea, // 如果您的表单中有区域相关的数据，请将其填充在这里
      department: this.machine_card[0].department,
      jO_NUMBER: this.machine_card[0].job_number,
      username: this.machine_card[0].username,
      nfC_ID: this.machine_card[0].nfC_ID,
      code: this.machine_card[0].code
    };

    // 发送 POST 请求到指定的 API
    fetch("http://192.168.207.17:5024/api/c_CARD/updatecard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      // 处理响应
      if (response.ok) {
        // 成功发送数据
        console.log("表单数据已成功提交");
        alert(this.translatedText.更新完成);
        // 可以在这里执行其他操作，例如显示成功消息
      } else {
        // 发生错误
        console.error("表单数据提交失败");
        alert(this.translatedText.更新失敗);
        // 可以在这里执行其他操作，例如显示错误消息
      }
    })
    .catch(error => {
      // 捕获网络错误
      console.error("网络错误:", error);
      // 可以在这里执行其他操作，例如显示网络错误消息
    });
  },
    CAEDoptions_change(event) {
    const selectedUsername = event.target.value;
    const selectedOption = this.CAEDoptions.find(option => option.username === selectedUsername);
    if (selectedOption) {
      this.machine_card[0].job_number = selectedOption.jobnumber;
    }
  },
     fetchOptions() {
      this.selectedDepartment = this.selectedD + 'D' + this.selectedS + 'S' + this.selectedC + 'C';
      axios.post('http://192.168.207.17:5024/api/c_CARD/SELECT', {
         area: this.selectedArea,
         department:this.selectedDepartment,


})
.then(response => {
// POST請求成功，將數據賦值給seatData
//this.ATT_time_data = this.ATT_time_data.concat(response.data);
this.CAEDoptions= response.data;

console.log('值.',this.CAEDoptions);
})
.catch(error => {
// POST請求失敗，輸出錯誤信息
console.error('Error posting data:', error);
});


    },
    shift_data (){

      this.loading = true;
       if (!this.selectedArea && !this.selectedDate) {
       this.loading = false;
      return; // 如果没有选择区域，直接返回
        }
      axios.post('http://192.168.207.17:5024/api/c_shift', {
         area: this.selectedArea,

})
.then(response => {
// POST請求成功，將數據賦值給seatData
//this.ATT_time_data = this.ATT_time_data.concat(response.data);
this.shiftdata= response.data;
})
.catch(error => {
// POST請求失敗，輸出錯誤信息
console.error('Error posting data:', error);
this.shiftdata=[];

});

this.loading = false;

    },
    selectMachine(){
     // this.ATT_time_data=[];
     this.loading = true;
       if (!this.selectedArea && !this.selectedDate) {
       this.loading = false;
      return; // 如果没有选择区域，直接返回
        }
        if (this.selectedL) {
  this.selectedDepartment = this.selectedD + 'D' + this.selectedS + 'S' + this.selectedC + '-' + this.selectedL + 'C';
} else {
  this.selectedDepartment = this.selectedD + 'D' + this.selectedS + 'S' + this.selectedC + 'C';
}

        axios.post('http://192.168.207.17:5024/api/c_CARD', {
         area: this.selectedArea,
         department:this.selectedDepartment,
         machine:this.selectedmachine,

})
.then(response => {
// POST請求成功，將數據賦值給seatData
//this.ATT_time_data = this.ATT_time_data.concat(response.data);
this.machine_card= response.data;
this.machine_card[0].department=this.selectedDepartment
console.log('值.',this.machine_card);
})
.catch(error => {
// POST請求失敗，輸出錯誤信息
console.error('Error posting data:', error);
this.machine_card=[];
alert(this.translatedText.查無卡號);
});

this.loading = false;
this.fetchOptions();


    },
    calculateTotal_hrsum(column) {
      return this.ATT_time_SUM_data.reduce((total, item) => {
        if (this.showInSecondTable[item.部門]) {
          return total + parseFloat(item[column] || 0);
        } else {
          return total;
        }
      }, 0);
    },
    calculateTotal_wosum(column) {
      return this.WO_SUM_VERSON.reduce((total, item) => {
        if (this.showInSecondTable[item.部門]) {
          return total + parseFloat(item[column] || 0);
        } else {
          return total;
        }
      }, 0);
    },
    checkDuplicate(inputValue,inputField,item) {
      console.log('值.',inputValue);
      
            // 检查输入值是否存在于 hostMachine.MACHIN 中
            const isDuplicate = this.hostMachine.some(machine => machine.Machine === inputValue);


            if (isDuplicate) {
                // 如果存在，将输入值重置为 '0000'
                alert(this.translatedText.重複輸入);
                this.newSeat[inputField] = '0000';
            }else{
              const newSeatS = {
                 Machine: inputValue,
                 HOSTID: this.hostMachine[0].HOSTID
                 };
                this.hostMachine.push(newSeatS);
            }
        
    },
    checkDuplicate2(inputValue,inputField,item) {
      console.log('值.',inputValue);
      
            // 检查输入值是否存在于 hostMachine.MACHIN 中
            const isDuplicate = this.hostMachine.some(machine => machine.Machine === inputValue);


            if (isDuplicate) {
                // 如果存在，将输入值重置为 '0000'
                alert(this.translatedText.重複輸入);
           
                item[inputField] = '0000';
            }else{
              const newSeatS = {
                 Machine: inputValue,
                 HOSTID: this.hostMachine[0].HOSTID
                 };
                this.hostMachine.push(newSeatS);
            }
        
    },
    async completeSeat() {
  if (this.selectedL) {
    this.selectedDepartment = this.selectedD + 'D' + this.selectedS + 'S' + this.selectedC + '-' + this.selectedL + 'C';
  } else {
    this.selectedDepartment = this.selectedD + 'D' + this.selectedS + 'S' + this.selectedC + 'C';
  }

  if (this.selectedD && this.selectedS && this.selectedC) {
    try {
  // 删除座位数据
  await this.DELETESEAT();

  // 插入座位数据


  // 更新座位数据
 // await this.UPDATESEAT();

  console.log('All operations completed successfully.');
} catch (error) {
  console.error('Error during operations:', error);
}

}

},
RESET(){
  const UPDATEData = {
  area: this.selectedArea,
  department: this.selectedDepartment,
};

axios.post('http://192.168.207.17:5024/api/ONLINE/RESET', UPDATEData, {
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  // Handle successful response here
  if (response.status === 200) {
    console.log('更新成功', response.status);
    alert(this.translatedText.更新完成);
   
  } else {
    console.log('更新成功 (但是收到了 400 錯誤)', response);
  }
  this.fetchData();
})
.catch(error => {
  // Handle other errors here
  if (error.response.status === 400 && error.response.data === "No data found to delete.") {
    // 如果错误消息是 "No data found to delete"，则继续执行 this.insert
    console.log('更新成功', error.response.status);
    alert(this.translatedText.更新完成);
   
  }
  alert(this.translatedText.更新完成);
   
});

},
async insertseat2(){

  try {
  const uploadDataArray = this.seatData.map(item => ({
    area: this.selectedArea,
    department: this.selectedDepartment,
    machine_L: item.machine_L,
    work_content_L: item.work_content_L ? item.work_content_L.toString() : "",
    work_content_id_L: "123",
    seat_ID: item.seatID.toString(),
    machine_R: item.machine_R,
    work_content_R: item.work_content_R ? item.work_content_R.toString() : "",
    work_content_id_R: "123",
    host_id: this.hostMachine[0].HOSTID, // 修改为适当的变量名
  }));

  // 批量上传数据
  const responses = await Promise.all(uploadDataArray.map(async uploadData => {
    try {
      const response = await fetch('http://192.168.207.17:5024/api/c_seat/INSERT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(uploadData),
      });

      // 检查 HTTP 状态码
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // 处理响应
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        const result = await response.json();
        console.log('Upload result:', result);
        console.log('Success Message:', result.successMessage);
        return result; // 返回结果以便进一步处理
      } else {
        const resultText = await response.text();
        console.log('Success Message:', resultText);
        return resultText; // 返回结果以便进一步处理
      }
    } catch (error) {
      console.error('Error uploading data:', uploadData);
      throw error; // 重新抛出错误以便外部处理
    }
  }));

  // 处理成功上传的结果
  console.log('All uploads successful:', responses);
  this.UPDATESEAT();
  // 更新座位数据（如果需要）
} catch (error) {
  console.error('Error during upload:', error);
}



},
 UPDATESEAT(){
  const UPDATEData = {
  area: this.selectedArea,
  department: this.selectedDepartment,
};

axios.post('http://192.168.207.17:5024/api/c_seat/updateseat', UPDATEData, {
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  // Handle successful response here
  if (response.status === 200) {
    console.log('更新成功', response.status);
    alert(this.translatedText.更新完成);
   
     this.seatData = [];
     this.seateditMode = false;
     this.postData();
  } else {
    console.log('更新成功 (但是收到了 400 錯誤)', response);
  }

})
.catch(error => {
  // Handle other errors here
  if (error.response.status === 400 && error.response.data === "No data found to delete.") {
    // 如果错误消息是 "No data found to delete"，则继续执行 this.insert
    console.log('更新成功', error.response.status);
    alert(this.translatedText.更新完成);
   
     this.seatData = [];
     this.seateditMode = false;
     this.postData();
  }
  alert(this.translatedText.更新完成);
   
   this.seatData = [];
   this.seateditMode = false;
   this.postData();
});

},

 DELETESEAT(){
// 構建 DELETE 請求的主體
const deleteData = {

  area: this.selectedArea,
 department: this.selectedDepartment,
}
console.log('DEPARTMENT', deleteData);
axios.delete('http://192.168.207.17:5024/api/c_seat/DELETE', {
    data: deleteData,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      // Handle successful response here
      if (response.status === 400) {
        console.log('刪除成功 (但是收到了 400 錯誤)', response);
      } else {
        console.log('有資料刪除成功', response.status);
      }
      this.seateditMode = false;
       this.insertseat2();
  
    })
    .catch(error => {
      // Handle other errors here
      console.error('刪除失敗', error.response.data);
      if (error.response.data === "No data found to delete.") {
        // 如果错误消息是 "No data found to delete"，则继续执行 this.insert
        console.log('無資料刪除成功', error.response.status);
        this.insertseat2();
      
      }
    });


    },
    addSeat() {
      this.showseatForm=true;
   
  },
  inputseat(){
    console.log('刪除成功', this.newSeat.seatID);
    const newSeatS = {
      seatID: this.newSeat.seatID, // 座位号需要转换为字符串类型
      machine_L: this.newSeat.machine_L,
      work_content_L: this.newSeat.work_content_L,
      work_content_R: this.newSeat.work_content_R,
      machine_R: this.newSeat.machine_R,
  
      
    };

    this.seatData.push(newSeatS); // 将新座位添加到 seatData 数组中
    this.seatData.forEach(item => {
        item.editMode = true;
      });
      this.seatData.sort((a, b) => a.seatID - b.seatID);
      this.seatData.sort((a, b) => {
    if (a.seatID === b.seatID) {
        return b.seatID - a.seatID; // 如果 property1 相等，则按照 property2 进行排序
    } else {
        return  a.seatID -b.seatID ; // 否则，按照 property1 进行排序
    }
});
// Reassign new seatIDs
this.seatData = this.seatData.map((item, index) => {
    item.seatID = index + 1;
    return item;
});
this.showseatForm=false;
this.newSeat.machine_L='0000';
this.newSeat.machine_R='0000';
  },
  removeSeat(){
    this.showActions = true;
  },
  DELETESEATtb(index){

 
    if (index !== -1) {
        // 如果找到具有特定行号的座位对象，则删除它
        this.seatData.splice(index, 1);
    }
    
    this.showActions = false;
    this.seatData = this.seatData.map((item, index) => {
    item.seatID = index + 1;
    return item;
});
},
    // 删除行     this.seatData.splice(newValue, diff); // 修改这行


    enableseatEditMode() {
      this.seatData.forEach(item => {
        item.editMode = true;

      });
      this.seateditMode = true;
    },
    canceseatlEdit() {
      this.showActions = false;
      // 取消编辑时，将所有项目的 editMode 属性设置为 false
      this.seatData.forEach(item => {
        item.editMode = false;
  
      });
      this.seateditMode = false;
      this.postData();
    },
    formattedDate: function() {
  if (this.selectedDate) {
    const date = new Date(this.selectedDate);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}${month}${day}`;
    
    // 在這裡調用函數

    
    return formattedDate;
  } else {
    return '';
  }
},    calculateDepartment_WOTotal(field, department) {
  let total = 0;
  for (const item of this.WOVERSON) {
    if (item.部門 === department && !isNaN(parseFloat(item[field]))) {
      total += parseFloat(item[field]);
    }
  }
  return total;
},

    calculateDepartmentTotal(field, department) {
  let total = 0;
  for (const item of this.ATT_time_data) {
    if (item.部門 === department && !isNaN(parseFloat(item[field]))) {
      total += parseFloat(item[field]);
    }
  }
  return total;
},
  calculateExcessHoursTotal(department) {
    let totalExcessHours = 0;
    for (const item of this.ATT_time_data) {
      if (item.部門 === department && !isNaN(parseFloat(item.考勤工時)) && ((item.考勤工時*1)+(item.調整工時*1)+(item.手動調整工時*1)) >= 8) {
        totalExcessHours +=  8 ;
      }else if (item.部門 === department &&  !isNaN(parseFloat(item.考勤工時)) && ((item.考勤工時*1)+(item.調整工時*1)+(item.手動調整工時*1))< 8) {

        totalExcessHours += parseFloat(((item.考勤工時*1)+(item.調整工時*1)+(item.手動調整工時*1))) ;

      }else if (item.部門 === department &&  item.假別 === '年休' ) {

     totalExcessHours += parseFloat(((item.調整工時*1))) ;

}else{

        totalExcessHours +=0;
      }
    }
    return totalExcessHours;
  },

    validateInput( item) {
   console.log('n', item.FQC);
console.log(' o:', item.OLDFQC);

      if (item.FQC < item.OLDFQC) {
      item.inputError = true;
      item.FQC=item.OLDFQC; // 更新原始值
    } else if (item.FQC > item.qty) {
      item.inputError2 = true;
      item.FQC=item.OLDFQC; // 更新原始值
      }else{
      item.inputError = false;
      item.inputError2 = false;
    }
    // 其他驗證邏輯，比如檢查是否大於工單數量，可以在這裡進行
  },
  async downloadExcelWOPER() {
// 引入库
const dataRows = Array.from(document.querySelectorAll('#WOPET2 tbody tr'));
      this.ATTSUMdata = dataRows.map(row => {
        const cells = row.querySelectorAll('td');

        return {
          班別代號: cells[0]?.innerText,
          M1標準工時:parseFloat(parseFloat(cells[1]?.innerText || '0').toFixed(2)),
          M1實際工時:parseFloat(cells[2]?.innerText.trim()).toFixed(2) || 0,
          M1效率: parseFloat(cells[3]?.innerText.trim()).toFixed(2) || 0,
          M2標準工時:parseFloat(cells[4]?.innerText.trim()).toFixed(2) || 0,
          M2實際工時:parseFloat(cells[5]?.innerText.trim()).toFixed(2) || 0,
          M2效率:parseFloat(cells[6]?.innerText.trim()).toFixed(2) || 0,
          M3標準工時:parseFloat(cells[7]?.innerText.trim()).toFixed(2) || 0,
          M3實際工時:parseFloat(cells[8]?.innerText.trim()).toFixed(2) || 0,
          M3效率:parseFloat(cells[9]?.innerText.trim()).toFixed(2) || 0,
          累計負值效率:cells[10]?.innerText,
          效率上升率:cells[11]?.innerText,
          最終考核效率:cells[12]?.innerText,
          當月考績:	cells[13]?.innerText,			
          額外獎勵:	cells[14]?.innerText,			
          下月累計負值效率:	cells[15]?.innerText,			
          // 其他需要保存的資料也在這裡處理
        };
      });
      const dataRows6 = Array.from(document.querySelectorAll('#WOPET3 tbody tr'));
      this.ATTSUMdata6 = dataRows6.map(row => {
        const cells6 = row.querySelectorAll('td');

        return {
          班別代號: cells6[0]?.innerText,
          M1標準工時:parseFloat(parseFloat(cells6[1]?.innerText || '0').toFixed(2)),
          M1實際工時:parseFloat(cells6[2]?.innerText.trim()).toFixed(2) || 0,
          M1效率: parseFloat(cells6[3]?.innerText.trim()).toFixed(2) || 0,
          M2標準工時:parseFloat(cells6[4]?.innerText.trim()).toFixed(2) || 0,
          M2實際工時:parseFloat(cells6[5]?.innerText.trim()).toFixed(2) || 0,
          M2效率:parseFloat(cells6[6]?.innerText.trim()).toFixed(2) || 0,
          M3標準工時:parseFloat(cells6[7]?.innerText.trim()).toFixed(2) || 0,
          M3實際工時:parseFloat(cells6[8]?.innerText.trim()).toFixed(2) || 0,
          M3效率:parseFloat(cells6[9]?.innerText.trim()).toFixed(2) || 0,
          累計負值效率:cells6[10]?.innerText,
          效率上升率:cells6[11]?.innerText,
          最終考核效率:cells6[12]?.innerText,
          當月考績:	cells6[13]?.innerText,			
          額外獎勵:	cells6[14]?.innerText,			
          下月累計負值效率:	cells6[15]?.innerText,			
          // 其他需要保存的資料也在這裡處理
        };
      });
      const dataRows2 = Array.from(document.querySelectorAll('#PPWO tbody tr'));
      this.ATTSUMdata2 = dataRows2.map(row => {
        const cells2 = row.querySelectorAll('td');

        return {
          工單: cells2[0]?.innerText,
          班別代號:cells2[1]?.innerText,
          料號:cells2[2]?.innerText,
          數量:cells2[3]?.innerText,
          標準工時:parseFloat(parseFloat(cells2[4]?.innerText || '0').toFixed(2)),
          實際工時:parseFloat(parseFloat(cells2[5]?.innerText|| '0').toFixed(2)),
	
          // 其他需要保存的資料也在這裡處理

        };
      });
      const dataRows3 = Array.from(document.querySelectorAll('#stffbonus tbody tr'));
      this.ATTSUMdata3 = dataRows3.map(row => {
        const cells3 = row.querySelectorAll('td');

        return {
          班別代號: cells3[0].innerText|| '',
          工號:cells3[1].innerText|| '',
          姓名:cells3[2]?.innerText|| '',
          工作天數:cells3[3]?.innerText|| '',
          請假天數:cells3[4]?.innerText|| '',
          崗位:cells3[5]?.innerText|| '',
          績效等級I:cells3[6]?.innerText|| '',
          獎金I:cells3[7]?.innerText|| '',
          績效等級II:cells3[8]?.innerText|| '',
          獎金II:cells3[9]?.innerText|| '',
          最終獎金:cells3[10]?.innerText|| '',
        };
      });
      const dataRows4 = Array.from(document.querySelectorAll('#DEPPER tbody tr'));
      this.ATTSUMdata4 = dataRows4.map(row => {
        const cells4 = row.querySelectorAll('td');

        return {
          管理部門: cells4[0]?.innerText,
          管理班別:cells4[1]?.innerText,
          工號:cells4[2]?.innerText,
          姓名: cells4[3]?.innerText,
          上班天數:cells4[4]?.innerText,
          職稱:cells4[5]?.innerText,
          M1效率:parseFloat(cells4[6]?.innerText.trim()).toFixed(2) || 0,
          M2效率:parseFloat(cells4[7]?.innerText.trim()).toFixed(2) || 0,
          M3效率:parseFloat(cells4[8]?.innerText.trim()).toFixed(2) || 0,
          累計負值效率:cells4[9]?.innerText,
          效率上升率:cells4[10]?.innerText,
          最終考核效率:cells4[11]?.innerText,
          當月考績:cells4[12]?.innerText,
          額外獎勵:cells4[13]?.innerText,
          考績獎金:cells4[14]?.innerText,	
          額外考績獎金:cells4[15]?.innerText,
          A15拉管理福利金:cells4[16]?.innerText,
          最終獎金:cells4[17]?.innerText,
          下月累計負值效率:cells4[18]?.innerText,
          // 其他需要保存的資料也在這裡處理
        };
      });
      const dataRows5 = Array.from(document.querySelectorAll('#QCDEPPER tbody tr'));
      this.ATTSUMdata5 = dataRows5.map(row => {
        const cells5 = row.querySelectorAll('td');

        return {
          管理部門: cells5[0]?.innerText,
          管理班別:cells5[1]?.innerText,
          工號:cells5[2]?.innerText,
          姓名: cells5[3]?.innerText,
          職稱:cells5[4]?.innerText,
          M1效率:parseFloat(cells5[5]?.innerText.trim()).toFixed(2) || 0,
          M2效率:parseFloat(cells5[6]?.innerText.trim()).toFixed(2) || 0,
          M3效率:parseFloat(cells5[7]?.innerText.trim()).toFixed(2) || 0,
          累計負值效率:cells5[8]?.innerText,
          效率上升率:cells5[9]?.innerText,
          最終考核效率:cells5[10]?.innerText,
          當月考績:cells5[11]?.innerText,
          額外獎勵:cells5[12]?.innerText,
          考績獎金:cells5[13]?.innerText,	
          額外考績獎金:cells5[14]?.innerText,
          A15拉管理福利金:cells5[15]?.innerText,
          最終獎金:cells5[16]?.innerText,
          下月累計負值效率:cells5[17]?.innerText,
          // 其他需要保存的資料也在這裡處理
        };
      });
      const dataRows7 = Array.from(document.querySelectorAll('#ZHDEPPER tbody tr'));
      this.ATTSUMdata7 = dataRows7.map(row => {
        const cells7 = row.querySelectorAll('td');

        return {
          管理部門: cells7[0]?.innerText,
          管理班別:cells7[1]?.innerText,
          工號:cells7[2]?.innerText,
          姓名: cells7[3]?.innerText,
          職稱:cells7[4]?.innerText,
          M1效率:parseFloat(cells7[5]?.innerText.trim()).toFixed(2) || 0,
          M2效率:parseFloat(cells7[6]?.innerText.trim()).toFixed(2) || 0,
          M3效率:parseFloat(cells7[7]?.innerText.trim()).toFixed(2) || 0,
          累計負值效率:cells7[8]?.innerText,
          效率上升率:cells7[9]?.innerText,
          最終考核效率:cells7[10]?.innerText,
          當月考績:cells7[11]?.innerText,
          額外獎勵:cells7[12]?.innerText,
          考績獎金:cells7[13]?.innerText,	
          額外考績獎金:cells7[14]?.innerText,
          A15拉管理福利金:cells7[15]?.innerText,
          最終獎金:cells7[16]?.innerText,
          下月累計負值效率:cells7[17]?.innerText,
          // 其他需要保存的資料也在這裡處理
        };
      });
      const dataRows8 = Array.from(document.querySelectorAll('#eff120 tbody tr'));
      this.ATTSUMdata8 = dataRows8.map(row => {
        const cells8 = row.querySelectorAll('td');

        return {
          班別代號:cells8[0]?.innerText,
          料號:cells8[1]?.innerText,
          客戶料號:cells8[2]?.innerText,
          工單數量: cells8[3]?.innerText,     
          數量:cells8[4]?.innerText,
          標準工時:parseFloat(parseFloat(cells8[5]?.innerText || '0').toFixed(2)),
          實際工時:parseFloat(parseFloat(cells8[6]?.innerText|| '0').toFixed(2)),
          效率:parseFloat(parseFloat(cells8[7]?.innerText|| '0').toFixed(2)),
          // 其他需要保存的資料也在這裡處理
          建議調整標準工時:cells8[8]?.innerText,
        };
      });
    
    
    
      const PERData = {
            MFG_DAY: '2024/10',
            wopet: this.ATTSUMdata,
            PPWO: this.ATTSUMdata2,
            stffbonus:this.ATTSUMdata3,
            DEPPER:this.ATTSUMdata4,
            QCDEPPER:this.ATTSUMdata5,
            wopet3: this.ATTSUMdata6,
            ZHDEPPER:this.ATTSUMdata7,
            EFF120:this.ATTSUMdata8,
          };

          axios.post('https://localhost:5001/api/PWEWOTableToExcel/to-excel', PERData, { responseType: 'blob' })
          //axios.post('https://localhost:5001/api/PWEWOTableToExcel/to-pdf', PERData, { responseType: 'blob' })
         // axios.post('https://localhost:5001/api/TableToExcel/to-excel', combinedData, { responseType: 'blob' })
            .then(response => {
              const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
              const link = document.createElement('a');
              link.href = window.URL.createObjectURL(blob);
              link.download =  '月效率考核表 Mẫu đánh giá hiệu quả hàng tháng .xlsx';
              link.click();
            })
            .catch(error => {
              console.error('Error exporting to Excel:', error);
            });
  },
  
  async downloadExcelWOOVER() {
// 引入库
const dataRows = Array.from(document.querySelectorAll('#WOOEVER2 tbody tr'));
      this.ATTSUMdata = dataRows.map(row => {
        const cells = row.querySelectorAll('td');

        return {
          班別代號: cells[0]?.innerText,
          M1標準工時:parseFloat(parseFloat(cells[1]?.innerText || '0').toFixed(2)),
          M1實際工時:parseFloat(cells[2]?.innerText.trim()).toFixed(2) || 0,
          M1效率: parseFloat(cells[3]?.innerText.trim()).toFixed(2) || 0,
          M2標準工時:parseFloat(cells[4]?.innerText.trim()).toFixed(2) || 0,
          M2實際工時:parseFloat(cells[5]?.innerText.trim()).toFixed(2) || 0,
          M2效率:parseFloat(cells[6]?.innerText.trim()).toFixed(2) || 0,
          M3標準工時:parseFloat(cells[7]?.innerText.trim()).toFixed(2) || 0,
          M3實際工時:parseFloat(cells[8]?.innerText.trim()).toFixed(2) || 0,
          M3效率:parseFloat(cells[9]?.innerText.trim()).toFixed(2) || 0,
          累計負值效率:cells[10]?.innerText,
          效率上升率:cells[11]?.innerText,
          最終考核效率:cells[12]?.innerText,
          當月考績:	cells[13]?.innerText,			
          額外獎勵:	cells[14]?.innerText,			
          下月累計負值效率:	cells[15]?.innerText,			
          // 其他需要保存的資料也在這裡處理
        };
      });
      const dataRows6 = Array.from(document.querySelectorAll('#WOOEVER3 tbody tr'));
      this.ATTSUMdata6 = dataRows6.map(row => {
        const cells6 = row.querySelectorAll('td');

        return {
          班別代號: cells6[0]?.innerText,
          M1標準工時:parseFloat(parseFloat(cells6[1]?.innerText || '0').toFixed(2)),
          M1實際工時:parseFloat(cells6[2]?.innerText.trim()).toFixed(2) || 0,
          M1效率: parseFloat(cells6[3]?.innerText.trim()).toFixed(2) || 0,
          M2標準工時:parseFloat(cells6[4]?.innerText.trim()).toFixed(2) || 0,
          M2實際工時:parseFloat(cells6[5]?.innerText.trim()).toFixed(2) || 0,
          M2效率:parseFloat(cells6[6]?.innerText.trim()).toFixed(2) || 0,
          M3標準工時:parseFloat(cells6[7]?.innerText.trim()).toFixed(2) || 0,
          M3實際工時:parseFloat(cells6[8]?.innerText.trim()).toFixed(2) || 0,
          M3效率:parseFloat(cells6[9]?.innerText.trim()).toFixed(2) || 0,
          累計負值效率:cells6[10]?.innerText,
          效率上升率:cells6[11]?.innerText,
          最終考核效率:cells6[12]?.innerText,
          當月考績:	cells6[13]?.innerText,			
          額外獎勵:	cells6[14]?.innerText,			
          下月累計負值效率:	cells6[15]?.innerText,			
          // 其他需要保存的資料也在這裡處理
        };
      });
      const dataRows2 = Array.from(document.querySelectorAll('#WOPP3 tbody tr'));
      this.ATTSUMdata2 = dataRows2.map(row => {
        const cells2 = row.querySelectorAll('td');

        return {
          工單: cells2[0].innerText,
          班別代號:cells2[1].innerText,
          料號:cells2[2].innerText,
          數量:cells2[3].innerText,
          標準工時:parseFloat(parseFloat(cells2[4]?.innerText || '0').toFixed(2)),
          實際工時:parseFloat(parseFloat(cells2[5]?.innerText|| '0').toFixed(2)),
	
          // 其他需要保存的資料也在這裡處理

        };
      });
      const dataRows3 = Array.from(document.querySelectorAll('#STAFF_OVERBOUNS tbody tr'));
      this.ATTSUMdata3 = dataRows3.map(row => {
        const cells3 = row.querySelectorAll('td');

        return {
          班別代號: cells3[0].innerText|| '',
          工號:cells3[1].innerText|| '',
          姓名:cells3[2]?.innerText|| '',
          工作天數:cells3[3]?.innerText|| '',
          請假天數:cells3[4]?.innerText|| '',
          崗位:cells3[5]?.innerText|| '',
          績效等級I:cells3[6]?.innerText|| '',
          獎金I:cells3[7]?.innerText|| '',
          績效等級II:cells3[8]?.innerText|| '',
          獎金II:cells3[9]?.innerText|| '',
          最終獎金:cells3[10]?.innerText|| '',
        };
      });
      const dataRows4 = Array.from(document.querySelectorAll('#DEPOVER tbody tr'));
      this.ATTSUMdata4 = dataRows4.map(row => {
        const cells4 = row.querySelectorAll('td');

        return {
          管理部門: cells4[0]?.innerText,
          管理班別:cells4[1]?.innerText,
          工號:cells4[2]?.innerText,
          姓名: cells4[3]?.innerText,
          上班天數:cells4[4]?.innerText,
          職稱:cells4[5]?.innerText,
          M1效率:parseFloat(cells4[6]?.innerText.trim()).toFixed(2) || 0,
          M2效率:parseFloat(cells4[7]?.innerText.trim()).toFixed(2) || 0,
          M3效率:parseFloat(cells4[8]?.innerText.trim()).toFixed(2) || 0,
          累計負值效率:cells4[9]?.innerText,
          效率上升率:cells4[10]?.innerText,
          最終考核效率:cells4[11]?.innerText,
          當月考績:cells4[12]?.innerText,
          額外獎勵:cells4[13]?.innerText,
          考績獎金:cells4[14]?.innerText,	
          額外考績獎金:cells4[15]?.innerText,
          A15拉管理福利金:cells4[16]?.innerText,
          最終獎金:cells4[17]?.innerText,
          下月累計負值效率:cells4[18]?.innerText,
          // 其他需要保存的資料也在這裡處理
        };
      });
      const dataRows5 = Array.from(document.querySelectorAll('#QCDEPOVER tbody tr'));
      this.ATTSUMdata5 = dataRows5.map(row => {
        const cells5 = row.querySelectorAll('td');

        return {
          管理部門: cells5[0]?.innerText,
          管理班別:cells5[1]?.innerText,
          工號:cells5[2]?.innerText,
          姓名: cells5[3]?.innerText,
          職稱:cells5[4]?.innerText,
          M1效率:parseFloat(cells5[5]?.innerText.trim()).toFixed(2) || 0,
          M2效率:parseFloat(cells5[6]?.innerText.trim()).toFixed(2) || 0,
          M3效率:parseFloat(cells5[7]?.innerText.trim()).toFixed(2) || 0,
          累計負值效率:cells5[8]?.innerText,
          效率上升率:cells5[9]?.innerText,
          最終考核效率:cells5[10]?.innerText,
          當月考績:cells5[11]?.innerText,
          額外獎勵:cells5[12]?.innerText,
          考績獎金:cells5[13]?.innerText,	
          額外考績獎金:cells5[14]?.innerText,
          A15拉管理福利金:cells5[15]?.innerText,
          最終獎金:cells5[16]?.innerText,
          下月累計負值效率:cells5[17]?.innerText,
          // 其他需要保存的資料也在這裡處理
        };
      });
      const dataRows7 = Array.from(document.querySelectorAll('#CNDEPOVER tbody tr'));
      this.ATTSUMdata7 = dataRows7.map(row => {
        const cells7 = row.querySelectorAll('td');

        return {
          管理部門: cells7[0]?.innerText,
          管理班別:cells7[1]?.innerText,
          工號:cells7[2]?.innerText,
          姓名: cells7[3]?.innerText,
          職稱:cells7[4]?.innerText,
          M1效率:parseFloat(cells7[5]?.innerText.trim()).toFixed(2) || 0,
          M2效率:parseFloat(cells7[6]?.innerText.trim()).toFixed(2) || 0,
          M3效率:parseFloat(cells7[7]?.innerText.trim()).toFixed(2) || 0,
          累計負值效率:cells7[8]?.innerText,
          效率上升率:cells7[9]?.innerText,
          最終考核效率:cells7[10]?.innerText,
          當月考績:cells7[11]?.innerText,
          額外獎勵:cells7[12]?.innerText,
          考績獎金:cells7[13]?.innerText,	
          額外考績獎金:cells7[14]?.innerText,
          A15拉管理福利金:cells7[15]?.innerText,
          最終獎金:cells7[16]?.innerText,
          下月累計負值效率:cells7[17]?.innerText,
          // 其他需要保存的資料也在這裡處理
        };
      });

    
    
    
      const PERData = {
            MFG_DAY: '2024/10',
            wopet: this.ATTSUMdata,
            PPWO: this.ATTSUMdata2,
            stffbonus:this.ATTSUMdata3,
            DEPPER:this.ATTSUMdata4,
            QCDEPPER:this.ATTSUMdata5,
            wopet3: this.ATTSUMdata6,
            ZHDEPPER:this.ATTSUMdata7,
            EFF120:this.ATTSUMdata2,
          };

          axios.post('https://localhost:5001/api/PWEOVERWOTableToExcel/to-excel', PERData, { responseType: 'blob' })
          //axios.post('https://localhost:5001/api/PWEWOTableToExcel/to-pdf', PERData, { responseType: 'blob' })
         // axios.post('https://localhost:5001/api/TableToExcel/to-excel', combinedData, { responseType: 'blob' })
            .then(response => {
              const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
              const link = document.createElement('a');
              link.href = window.URL.createObjectURL(blob);
              link.download =  '月溢領考核表 Mẫu đánh giá hiệu quả hàng tháng .xlsx';
              link.click();
            })
            .catch(error => {
              console.error('Error exporting to Excel:', error);
            });
  },
  
  
  async downloadExcel() {
    const dataRows = Array.from(document.querySelectorAll('#stff2 tbody tr'));
      this.ATTSUMdata = dataRows.map(row => {
        const cells = row.querySelectorAll('td');

        return {
          部門: cells[0].innerText,
          出勤人數:parseInt(cells[1]?.innerText.trim()) || 0,
          實際掛卡工時:parseFloat(parseFloat(cells[2]?.innerText.trim() || '0').toFixed(2)),
          系統計算考勤工時:parseFloat(parseFloat(cells[3]?.innerText.trim() || '0').toFixed(2)),
          回報管理部考勤工時:parseFloat(parseFloat(cells[4]?.innerText.trim() || '0').toFixed(2)),
          差異:parseFloat(parseFloat(cells[5]?.innerText.trim() || '0').toFixed(2)),
          原因:	cells[6].innerText,			
          // 其他需要保存的資料也在這裡處理
        };
      });
      const dataRows2 = Array.from(document.querySelectorAll('#stff tbody tr'));
      this.ATTSUMdata2 = dataRows2.map(row => {
        const cells2 = row.querySelectorAll('td');

        return {
          部門: cells2[0].innerText,
          工作拉:cells2[1].innerText,
          工號:cells2[2].innerText,
          姓名:cells2[3].innerText,
          實際掛卡工時:parseFloat(parseFloat(cells2[4]?.innerText || '0').toFixed(2)),
          系統計算考勤工時:parseFloat(parseFloat(cells2[5]?.innerText|| '0').toFixed(2)),
          調整: parseFloat(parseFloat(cells2[6]?.innerText || '0').toFixed(2)),	
          回報管理部考勤工時:	parseFloat(parseFloat(cells2[7]?.innerText || '0').toFixed(2)),
          正班工時:	parseFloat(parseFloat(cells2[8]?.innerText || '0').toFixed(2)),	
          加班工時:	parseFloat(parseFloat(cells2[9]?.innerText || '0').toFixed(2)),
          假別:	cells2[9]?.innerText || '', // 差異原因
          事由:	cells2[10]?.innerText || '',	
          差異原因:	cells2[11]?.innerText || '',		
          差異原因2:	cells2[12]?.innerText || '',		
          // 其他需要保存的資料也在這裡處理
        };
      });
          // Combine data for all tables
          const combinedData = {
            MFG_DAY: this.selectedDate,
            employees: this.ATTSUMdata,
            employmentTime: this.ATTSUMdata2,
          };

          // Send combined data to backend API https://localhost:5001/api/TableToExcel/to-excel
           axios.post('http://192.168.207.17:5024/api/TableToExcel/to-excel', combinedData, { responseType: 'blob' })
         // axios.post('https://localhost:5001/api/TableToExcel/to-excel', combinedData, { responseType: 'blob' })
            .then(response => {
              const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
              const link = document.createElement('a');
              link.href = window.URL.createObjectURL(blob);
              link.download =  this.selectedDate+'Attendance daily report.xlsx';
              link.click();
            })
            .catch(error => {
              console.error('Error exporting to Excel:', error);
            });
        
        },


        async downloadWOExcel() {
      const dataRows = Array.from(document.querySelectorAll('#WO1 tbody tr'));
      this.WOSUMdata = dataRows.map(row => {
        const cells = row.querySelectorAll('td');
        return {
    部門: cells[0]?.innerText || '',
    回報管理部考勤工: parseFloat(parseFloat(cells[1]?.innerText.trim() || '0')),
    工單工時: parseFloat(parseFloat(cells[2]?.innerText.trim() || '0').toFixed(2)),
    狀態工時: parseFloat(parseFloat(cells[3]?.innerText.trim() || '0').toFixed(2)),
    狀態工時2: parseFloat(parseFloat(cells[4]?.innerText.trim() || '0').toFixed(2)),
    貼紙班: parseFloat(parseFloat(cells[5]?.innerText.trim() || '0').toFixed(2)),
    殘疾人: parseFloat(parseFloat(cells[6]?.innerText.trim() || '0').toFixed(2)),
    無效工時: parseFloat(parseFloat(cells[7]?.innerText.trim() || '0').toFixed(2)),
    未設定工單: parseFloat(parseFloat(cells[8]?.innerText.trim() || '0').toFixed(2)),
    借入工時: parseFloat(parseFloat(cells[9]?.innerText.trim() || '0').toFixed(2)),
    借出工時: parseFloat(parseFloat(cells[10]?.innerText.trim() || '0').toFixed(2)),
    調整工時: parseFloat(parseFloat(cells[11]?.innerText.trim() || '0').toFixed(2)),
    備註: cells[12]?.innerText || '',
    系統計算差異: parseFloat(parseFloat(cells[13]?.innerText.trim() || '0').toFixed(2)),
    // 其他需要保存的資料也在這裡處理
  };
      });
      const dataRows2 = Array.from(document.querySelectorAll('#WO2 tbody tr'));
      this.WOSUMdata2 = dataRows2.map(row => {
        const cells2 = row.querySelectorAll('td');

        return {
          部門: cells2[0].innerText|| '',
          拉:cells2[1].innerText|| '',
          工單:cells2[2].innerText|| '',
          工序:cells2[3].innerText|| '',
          品名:cells2[4].innerText|| '',
          數量:parseFloat(parseFloat(cells2[5]?.innerText || '0').toFixed(2)),
          標準工時:parseFloat(parseFloat(cells2[6]?.innerText|| '0').toFixed(2)),
          執行工時: parseFloat(parseFloat(cells2[7]?.innerText || '0').toFixed(2)),	

        };
      });
          // Combine data for all tables
          const WOCombinedData = {
            MFG_DAY: this.selectedDate,
            WOEmployee: this.WOSUMdata,
            WOEmploymentTime: this.WOSUMdata2,
          };
          console.log('更新成功', WOCombinedData);
          // Send combined data to backend API https://localhost:5001/api/TableToExcel/to-excel
           axios.post('http://192.168.207.17:5024/api/WOTableToExcel/to-excel', WOCombinedData, { responseType: 'blob' })
         //axios.post('https://localhost:5001/api/WOTableToExcel/to-excel', WOCombinedData, { responseType: 'blob' })
            .then(response => {
              const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
              const link = document.createElement('a');
              link.href = window.URL.createObjectURL(blob);
              link.download =  this.selectedDate+'生產日報 report.xlsx';
              link.click();
            })
            .catch(error => {
              console.error('Error exporting to Excel:', error);
            });
        
        },
        exportToExcel2() {
          const wb = XLSX.utils.book_new();

// 第一个表格的数据
const ws1 = XLSX.utils.json_to_sheet(this.woderpdata);
XLSX.utils.book_append_sheet(wb, ws1, '總表');

// 第二个表格的数据
const ws2 = XLSX.utils.json_to_sheet(this.erpdata1);
XLSX.utils.book_append_sheet(wb, ws2, 'NFC工時與ERP工時不符');
const ws3 = XLSX.utils.json_to_sheet(this.erpdata2);
XLSX.utils.book_append_sheet(wb, ws3, 'NFC已完成ERP未結案');
const ws4 = XLSX.utils.json_to_sheet(this.erpdata3);
XLSX.utils.book_append_sheet(wb, ws4, 'NFC未完成ERP已結案');
const ws5 = XLSX.utils.json_to_sheet(this.erpdata4);
XLSX.utils.book_append_sheet(wb, ws5, 'NFC沒資料ERP已結案');
const ws6 = XLSX.utils.json_to_sheet(this.erpdata5);
XLSX.utils.book_append_sheet(wb, ws6, '昨日已完成工單');
const ws7 = XLSX.utils.json_to_sheet(this.erpdata6);
XLSX.utils.book_append_sheet(wb, ws7, '廠區生產未完成工單');

// 导出 Excel 文件
const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
const fileName = '工單狀態與ERP對比報表.xlsx';
const blob = new Blob([wbout], { type: 'application/octet-stream' });

if (navigator.msSaveBlob) {
  navigator.msSaveBlob(blob, fileName);
} else {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
},
PDSNexportToExcel() {
          const wb = XLSX.utils.book_new();

// 第一个表格的数据
const ws1 = XLSX.utils.json_to_sheet(this.SFPDSNLINK);
XLSX.utils.book_append_sheet(wb, ws1, '總表');

// 第二个表格的数据

// 导出 Excel 文件
const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
const fileName = '出貨序號對照表.xlsx';
const blob = new Blob([wbout], { type: 'application/octet-stream' });

if (navigator.msSaveBlob) {
  navigator.msSaveBlob(blob, fileName);
} else {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
},
  
 
  exportTableToExcel() {
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.aoa_to_sheet([]);

      // 处理表格1的数据
      const table1 = document.querySelector('#erpsum');
      const table1Headers = [
        [table1.querySelector('th[colspan]').innerText],
        Array.from(table1.querySelectorAll('thead th')).map(th => th.innerText)
      ];
      const table1Data = Array.from(table1.querySelectorAll('tbody tr')).map(tr =>
        Array.from(tr.querySelectorAll('td')).map(td => td.innerText)
      );

      // 处理表格2的数据
      const table2 = document.querySelector('#erpsum');
      const table2Headers = [Array.from(table2.querySelectorAll('thead th')).map(th => th.innerText)];
      const table2Data = Array.from(table2.querySelectorAll('tbody tr')).map(tr =>
        Array.from(tr.querySelectorAll('td')).map(td => td.innerText)
      );

      // 合并数据


      // 写入数据到工作表
      XLSX.utils.sheet_add_aoa(ws, mergedData, { origin: 'A1' });

      // 处理合并单元格
      ws['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: 7 } }, // 合并第一张表的标题行
      ];

      XLSX.utils.book_append_sheet(wb, ws, '考勤報告');
      XLSX.writeFile(wb, '考勤報告.xlsx');
    },
    exportToExcel() {
      fetch('http://192.168.207.17:5024/api/TableToExcel/generate')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.blob();
        })
        .then(blob => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const a = document.createElement('a');
          a.href = url;
          a.download = 'attendance_report.xlsx';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    },
                  
              
        exportToExcel_wo() {
          const data = this.generateExcelData_wo();
          const ws = XLSX.utils.json_to_sheet(data);
          const wb = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
          XLSX.writeFile(wb, this.WOVERSON[0].部門 + "工單明細.xlsx");
        },
        generateExcelData_wo() {
          const data = [];
          this.WOVERSON.forEach(item => {
            data.push({
              部門: item.部門,
              總工時: item.執行工時,
              執行工單: item.執行工單,
              品名: item.品名,
              執行工時: item.工單工時

            });
          });
          return data;
        },
        toggleStatus(id, show) {
  const newValue = show === 'T' ? 'F' : 'T';
  const ID = parseInt(id, 10);

  // 构建 PUT 请求的主体
  const updateData = {
    id: ID,
    area: this.selectedArea,
    show: newValue
  };

  axios.put('http://192.168.207.17:5024/api/Attendance/UPDATE_SHOW', updateData, {
    headers: {
      'Content-Type': 'application/json'  // 设置 Content-Type 为 JSON
    }
  })
  .then(response => {
    // 处理成功的响应
    console.log('更新成功', response);
  })
  .catch(error => {
    // 处理错误
    console.error('更新失败', error);
  });

  console.log('选中的数据:', updateData);
},
toggleSHIFTStatus(id, show,NAME) {
  const newValue = show === 'T' ? 'F' : 'T';
  const ID = parseInt(id, 10);

  // 构建 PUT 请求的主体
  const updateData = {
    id: ID,
    area: this.selectedArea,
    show: newValue,
    field:NAME
  };
  axios.put('http://192.168.207.17:5024/api/c_shift/UPDATE_SHOW', updateData, {
    headers: {
      'Content-Type': 'application/json'  // 设置 Content-Type 为 JSON
    }
  })
  .then(response => {
    // 处理成功的响应
    console.log('更新成功', response);
  })
  .catch(error => {
    // 处理错误
    console.error('更新失败', error);
  });
this.shift_data();

},
updateAllRatings() {


    const payload = this.RATING_data.map(item => ({
      area: this.selectedArea,
      qty1: item.COMPLETED_QTY_1,
      qty2: item.COMPLETED_QTY_2,
      qty3: item.COMPLETED_QTY_3,
      qty4: item.COMPLETED_QTY_4,
      qty5: item.COMPLETED_QTY_5,
      toqty: this.calculateTotalCompletedQty(item),
      ID: String(item.id)
    }));
    console.log('id:',payload);

    axios.put("http://192.168.207.17:5024/api/READWOID/UPDATE_RATING_ALL", payload)
      .then(response => {
        alert(response.data); // 提示更新成功的信息
        this.fetchData();
        this.RATING_fetchData()

      })
      .catch(error => {
        console.error(error);
        alert("更新失敗！");
      });
  },
async updateRATINGDate(ID, fqc1,fqc2,fqc3,fqc4,fqc5,total) {

      try {

        const response = await axios.put(
          "http://192.168.207.17:5024/api/READWOID/UPDATE_RATING",
          {
             area: this.selectedArea, // 根據需求傳入正確值
             qty1: fqc1,
             qty2: fqc2,
             qty3: fqc3,
             qty4: fqc4,
             qty5: fqc5,
             toqty: total,
             id: String(ID), // 将 id 转换为字符串

          }
        );

        alert(response.data);
      } catch (error) {
        console.error("更新失敗", error);
        alert("更新失敗，請重試！");
      } finally {
        this.fetchData();
        this.RATING_fetchData()
      }
    },
    completeWorkOrder(woId, fqc) {

    const requestData = {
      wO_ID: woId,
      fqc: fqc.toString(),
      department: this.selectedDepartment, // 您的部门名称
      area: this.selectedArea // 您的区域名称
    };
    axios.post('http://192.168.207.17:5024/api/READWOID/update', requestData)
    .then(response => {
      // 成功时弹出成功消息
      console.log('选中的数据:', this.translatedText.更新完成);
      alert(this.translatedText.更新完成);
      // 如果需要在完成后进行一些额外的操作，可以在此处添加代码
    })
    .catch(error => {
      // 失败时弹出错误消息
      alert(this.translatedText[currentLanguage].更新完成);
      console.error('完成工單时出错', requestData);
      // 处理错误情况
    });
  },
    changeLanguage(event) {
            this.currentLanguage = event.target.value;

            // 根據選定的語言更新translatedText中的內容
            if (this.currentLanguage === 'zh') {
                this.translatedText = {
                  總數量:'總數量',
                一般:'一般',
                焊接:'焊接',
                成型:'成型',
                做線:'做線',
                焊接S:'焊接',
                成型S:'成型',
                做線S:'做線',
                星級完成數量:'重點工站完成數量',
                    在線生產看板: '在線生產看板',
                    工單管理: '工單管理',
                    工單查詢: '工單查詢',
                    工站管理: '工站管理',
                    工站設定:'工站設定',
                    人員管理: '人員管理',
                    考勤異常: '考勤異常',
                    生產看版: '生產看版',
                    工單分析圖表: '工單分析圖表',
                    未結工單: '未結工單',
                    完工數量:'完工數量',
                    生產日報:'生產日報',
                    產能日報:'產能日報',
                    卡片設定:'卡片設定',
                    考勤日報:'考勤日報',
                    登入:'登入',
                    NFC_SYSTEAM:'NFC 系統',
                    考勤系統:'考勤系統',
                    生產數據:'生產數據',
                    area:'選擇廠區',
                    部門:'部門',
                    D:'部',
                    S:'課',
                    C:'班',
                    L:'拉',
                    在線人數:'在線人數',
                    應出席人數:'應出席人數',
                    實際出席人數:'實際出席人數',
                    請假人數:'請假人數',
                    流水線在線人數:'流水線在線人數',
                    借入人數:'借入人數',
                    借出人數:'借出人數',
                    工單列表:'工單列表',
                    ID:'編號',
                    工單:'工單',
                    品名:'品名',
                    數量:'數量',
                    標準工時:'標準工時',
                    執行工時:'執行工時',
                    當前效率:'當前效率',
                    過往效率:'過往效率',
                    已完成數量:'已完成數量',
                    設備:'設備',
                    姓名:'姓名',
                    工時:'工時',
                    工站:'工站',
                    座位:'座位',
                    工站列表:'工站列表',
                    功能:'功能',
                    fqcer1:'輸入值不能小於原值',
                    fqcer2:'輸入值不能大於工單數量',
                    完成:'完成',
                    暫停:'暫停',
                    復工:'復工',
                    輸入工單:'輸入工單',
                    查詢:'查詢',
                    提交:'提交',
                    workOrder1:'100:試產工單, 200:來料全檢, 300:貼紙班, 400:重工,500:裁剝線,700 物料員工時',
                    料號:'料號',
                    設定工單列表:'設定工單列表',
                    移除:'移除',
                    總和:'總和',
                    修改:'修改',
                    取消:'取消',
                    增加座位:'增加座位',
                    刪除座位:'刪除座位',
                    卡機號:'卡機號',
                    工站名稱:'工站名稱',
                    insert:'插入',
                    delete:'刪除',
                    New:'新增',
                    出勤:'出勤',
                    工作拉:'工作拉',
                    工號:'工號',
                    Status:'狀態',
                    事由:'事由',
                    年休:'年休',
                    請假:'請假',
                    哺乳假:'哺乳假',
                    工傷:'工傷',
                    工傷陪護:'工傷陪護',
                    借出:'借出',
                    新進員工:'新進員工',
                    夜班:'夜班',
                    考勤日報:'考勤日報',
                    show:'顯示',
                    出勤人數:'出勤人數',
                    實際掛卡工時:'實際掛卡工時',
                    總共考勤工時:'總共考勤工時',
                    回報管理部考勤工時:'回報管理部考勤工時', 
                    差異:'差異', 
                    原因:'原因',
                    輸入卡機:'輸入卡機',
                    NFC卡號:'NFC卡號',
                    choose:'選擇 NFC_CODE',
                    刷新:'刷新',
                    在線工單:'在線工單',
                    平均效率:'平均效率',
                    低於90工單數:'低於90%工單數',
                    已完成工單:'已完成工單',
                    未結案工單:'未結案工單',
                    無效工時:'無效工時(hrs)',
                    本日:'本日',
                    本月:'本月',
                   上月:'上月',
                   pd1:'備註：(本月、上月)資料來源ERP',
                   應報考勤:'應報考勤',
                   加總:'加總',
                   導出:'導出',
                   系統計算考勤工時:'系統計算考勤工時',
                   增加有效考勤工時:'增加有效考勤工時',
                   正班工時:'正班工時',
                   加班工時:'加班工時',
                   假別:'假別',
                   更新完成:'更新完成',
                   更新失敗:'更新失敗',
                   重複輸入:'输入值重复，请重新输入！',
                   查無卡號:'查無卡號',
                   工單已存在:'该工單號已存在于表格中。',
                   未添加工單:'未添加工單',
                   查無工單:'查無工單，是否手動增加？',
                   請輸暫停理由:'請輸暫停理由：',
                   未生產:'未生產',
                   調整:'調整',
                   忘記設定:'忘記設定',
                  忘記設定狀態:'忘記設定狀態',
                  工作部門:'工作部門',
                  備註:'備註',
                  考勤調整確認:'考勤調整確認',
                  日期:'日期',
                  班別管理:'班別管理',
                  工單狀態與ERP對比報表:'工單狀態與ERP對比報表',
                  ERP入庫數量:'ERP入庫數量',
                  過站管理:'過站管理',
                  序號查詢:'序號查詢',
                  出貨序號表:'出貨序號表',
                工站編號:'工站編號',
                綁定工站:'綁定工站',
                測試工站:'測試工站',
                輸入開始序號:'輸入開始序號',
                   
                };
            } else if (this.currentLanguage === 'en') {
                this.translatedText = {

                  總數量:'Total quantity',
                  星級完成數量:'Number of stars completed',
                一般:'General',
                焊接:'welding',
                成型:'MD',
                做線:'Make a line',
                焊接S:'welding',
                成型S:'MD',
                做線S:'Make a line',
                    在線生產看板: 'In line production dashboard',
                    工單管理: 'Work order query',
                    工單查詢: '工單查詢',
                    工站管理: 'Work station management',
                    工站設定:'Workstation settings',
                    人員管理: 'Staff management',
                    考勤異常: 'Abnormal attendance',
                    生產看版: 'Production dashboard',
                    工單分析圖表: 'Work order analysis chart',
                    未結工單: 'Unfinished work order',
                    完工數量:'Completed quantity',
                    生產日報:'Daily production report',
                    產能日報:'Capacity Daily',
                    卡片設定:'Card settings',
                    考勤日報:'Attendance daily report',
                    登入:'Log in',
                    NFC_SYSTEAM:'NFC Systeam',
                    考勤系統:'Attendance System',
                    生產數據:'Production Data',
                    area:'Area',
                    部門:'department',
                    D:'D',
                    S:'S',
                    C:'C',
                    L:'L',
                    在線人數:'Online users',
                    應出席人數:'Number of people to attend',
                    實際出席人數:'Actual attendance',
                    請假人數:'Leave',
                    流水線在線人數:'Production line users',
                    借入人數:'Borrowing',
                    借出人數:'Lending',
                    工單列表:'Work Order List',
                    ID:'ID',
                    工單:'Work_Order',
                    品名:'Product name',
                    數量:'Quantity',
                    標準工時:'Standard hours',
                    執行工時:'Execution hours',
                    當前效率:'Current efficiency',
                    過往效率:'Past efficiency',
                    已完成數量:'Completed quantity',
                    設備:'Equipment:',
                    姓名:'Name',
                    工時:'Hours',
                    工站:'Workstation',
                    座位:'Seats',
                    工站列表:'Seat list',
                    功能:'Function',
                    fqcer1:'The input value cannot be less than the original value',
                    fqcer2:'The input value cannot be greater than the work order quantity',
                    完成:'complete',
                    暫停:'pause',
                    復工:'Return to work',
                    輸入工單:'Enter work order NO.',
                    查詢:'Query',
                    提交:'submit',
                    workOrder1:'100: Trial production work order, 200: Full inspection of incoming materials, 300: Sticker class, 400: 500: Cut and strip wire,700 Giờ làm việc của nhân viên vật liệu',
                    料號:'Part No',
                    設定工單列表:'Set up work order list',
                    移除:'remove',
                    總和:'sum',
                    choose:'Chooset NFC CODE',
                    修改:'Revise',
                    取消:'Cancel',
                    增加座位:'Add Seats',
                    刪除座位:'Delete seat',
                    卡機號:'machine number',
                    工站名稱:'Work_ tation',
                    insert:'Insert',
                    delete:'Delete',
                    New:'New',
                    出勤:'Attendance',
                    工作拉:'Production line',
                    工號:'Job number',
                    Status:'Status',
                    事由:'Reason',
                    年休:'Annual leave',
                    請假:' Ask for leave',
                    哺乳假:'Breastfeeding leave',
                    工傷:'work injury leave',
                    工傷陪護:'Work injury escort',
                    借出:'Borrowing',
                    新進員工:'Junior staff',
                    夜班:'Night shift',
                    考勤日報:'Daily attendance report',
                    show:'show',
                    出勤人數:'Attendance',
                    實際掛卡工時:'Actual working hours',
                    總共考勤工時:'Total attendance hours',
                    回報管理部考勤工時:'Report attendance hours to the management department', 
                    差異:'Difference', 
                    原因:'Reason',
                    輸入卡機:'Input card machine NO.',
                    NFC卡號:'NFC card number',
                    NFC_CODE:'NFC_CODE',
                    刷新:'Refresh',
                    在線工單:'Online work order',
                    平均效率:'Average efficiency',
                    低於90工單數:'Less than 90% of work orders',
                    已完成工單:'Completed Work_Order',
                    未結案工單:'Open case work order',
                    無效工時:'Invalid working hours(hrs)',
                    本日:'Today',
                    本月:'This month',
                    上月:'Last month',
                    pd1:'Remarks: (This month, Last month) Data source ERP',
                    應報考勤:'Attendance should be reported:',
                    加總:'Total',
                    導出:'Export',
                    系統計算考勤工時:'The system calculates attendance hours',
                    增加有效考勤工時:'Increase effective attendance hours',
                    正班工時:'Regular working hours',
                    加班工時:'overtime hours',
                    假別:'Leave type',
                    更新完成:'Update completed',
                    更新失敗:'Update failed',
                    重複輸入:'The input value is repeated, please re-enter!',
                    查無卡號:'Check no card number',
                    工單已存在:'The work order number already exists in the table',
                    未添加工單:'No work order added',
                    查無工單:'If there is no work order, do you want to add it manually?',
                    請輸暫停理由:'Please enter the reason for suspension:',
                    未生產:'Not produce yet',
                    調整:'Adjustment',
                    忘記設定:'Forgot settings',
                     忘記設定狀態:'Forgot to set status',
                     工作部門:'Working department',
                     備註:'Remark',
                     考勤調整確認:'Attendance adjustment',
                     日期:'MFG_DAY',
                     班別管理:'Shift management',
                     工單狀態與ERP對比報表:'Work order status and ERP comparison report',
                     ERP入庫數量:'ERP warehousing quantity',
                     過站管理:'Station management',
                     序號查詢:'Serial number query',
                     出貨序號表:'Shipping serial number table',
                     工站編號:' Station number',
                     綁定工站:' Bind work station',
                     測試工站:' Test station',
                     輸入開始序號:'Enter the starting sequence number',

                };
            } else if (this.currentLanguage === 'vi') {
                this.translatedText = {
                  總數量:'Tổng số lượng',
                  星級完成數量:'Số sao đã hoàn thành',
                  一般:'Tổng quan',
                焊接:'Hàn',
                成型:'Thành hình',
                做線:'Làm dây',
                焊接S:'Hàn',
                成型S:'Thành hình',
                做線S:'Làm dây',
                    在線生產看板: 'Bảng điều khiển sản xuất trên chuyền',
                    工單管理: 'Quản lý công đơn',
                    工單查詢: 'Truy vấn lệnh sản xuất',
                    工站管理: 'Quản lý trạm',
                    工站設定:'Cài đặt máy trạm',
                    人員管理: 'Quản lý nhân sự',
                    考勤異常: 'Chấm công bất thường',
                    生產看版: 'Bảng điều khiển sản xuất',
                    工單分析圖表: 'Biểu đồ phân tích công đơn',
                    未結工單: 'Công đơn chưa hoàn thành',
                    完工數量:'Số lượng đã hoàn thành',
                    生產日報:'Báo cáo sản xuất hàng ngày',
                    產能日報:'Công suất hàng ngày',
                    卡片設定:'Cài đặt thẻ',
                    考勤日報:'Báo cáo chấm công hàng ngày',
                    登入:'Đăng nhập',
                    NFC_SYSTEAM:'NFC_SYSTEAM',
                    考勤系統:'Hệ thống chấm công',
                    生產數據:'Dữ liệu sản xuất',
                    area:'Khu vực',
                    部門:'Bộ phận',
                    D:'D',
                    S:'S',
                    C:'C',
                    L:'L',
                    在線人數:'Số người trên chuyền',
                    應出席人數:'Số người tham gia',
                    實際出席人數:'Số người tham gia thực tế',
                    請假人數:'Số người xin nghỉ phép',
                    流水線在線人數:'Số người làm việc trên chuyền',
                    借入人數:'Số lượng người mượn',
                    借出人數:'Số người cho mượn',
                    工單列表:'Danh sách công đơn',
                    ID:'ID',
                    工單:'Công đơn',
                    品名:'Tên sản phẩm',
                    數量:'Số lượng',
                    標準工時:'Giờ làm việc tiêu chuẩn',
                    執行工時:'Giờ thực hiện',
                    當前效率:'Hiệu suất hiện tại',
                    過往效率:'Hiệu suất trước kia',
                    已完成數量:'Số lượng đã hoàn thành',
                    設備:'Thiết bị',
                    姓名:'Tên',
                    工時:'Giờ làm việc',
                    工站:'Trạm',
                    座位:'Số ghế',
                    工站列表:'Danh sách trạm',
                    功能:'Chức năng',
                    fqcer1:'Giá trị đầu vào không thể nhỏ hơn giá trị ban đầu',
                    fqcer2:'Giá trị đầu vào không được lớn hơn số lượng công đơn',
                    完成:'Hoàn thành',
                    暫停:'Tạm dừng',
                    復工:'Quay trở lại làm việc',
                    輸入工單:'Nhập công đơn',
                    查詢:'Tra cứu',
                    提交:'Nộp',
                    workOrder1:'100: Lệnh sản xuất thử, 200: Kiểm tra toàn bộ nguyên liệu đầu vào, 300: Loại nhãn dán, 400: Công việc nặng nhọc,500:Cắt và tước dây,700 Giờ làm việc của nhân viên vật liệu',
                    料號:'Mã liệu',
                    設定工單列表:'Thiết lập danh sách công đơn',
                    移除:'Di dời',
                    總和:'Tổng',
                    choose:'Chọn NFC CODE',
                    修改:'Sửa đổi',
                    取消:'Hủy bỏ',
                    增加座位:'Thêm chỗ ngồi',
                    刪除座位:'Xóa chỗ ngồi',
                    卡機號:'Số thiết bị',
                    工站名稱:'Tên trạm',
                    insert:'Chèn',
                    delete:'Xóa',
                    New:'Mới',
                    出勤:'Tham gia',
                    工作拉:'Chuyền',
                    工號:'Mã số nhân viên',
                    Status:'Trạng thái',
                    事由:'Lý do',
                    年休:'Nghỉ phép năm',
                    請假:'Nghỉ việc riêng',
                    哺乳假:'Nghỉ con nhỏ',
                    工傷:'Tai nạn lao động',
                    工傷陪護:'Bồi thường tai nạn lao động',
                    借出:'Cho mượn',
                    新進員工:'Nhân viên mới',
                    夜班:'Ca đêm',
                    考勤日報:'Chấm công hàng ngày',
                    show:'Trình bày',
                    出勤人數:'Số người tham gia',
                    實際掛卡工時:'Số giờ sản xuất thực tế',
                    總共考勤工時:'Tổng số giờ tham gia',
                    回報管理部考勤工時:'Báo cáo số giờ tham gia cho bộ phận Nhân sự', 
                    差異:'Sự khác biệt', 
                    原因:'Nguyên nhân',
                    輸入卡機:'Nhập số thiết bị',
                    NFC卡號:'Mã thẻ NFC',
                    NFC_CODE:'NFC_CODE',
                    刷新:'làm cho khỏe lại',
                    在線工單:'Lệnh làm việc trực tuyến',
                    平均效率:'Hiệu quả trung bình',
                    低於90工單數:'Ít hơn 90% đơn đặt hàng công việc',
                    已完成工單:'Đã hoàn thành công việc_Đơn hàng',
                    未結案工單:'Mở lệnh làm việc',
                    無效工時:'Giờ làm việc không hợp lệ(hrs)',
                    本日:'Hôm nay',
                    本月:'tháng này',
                    上月:'tháng trước',
                    pd1:'Lưu ý: (tháng này, tháng trước) nguồn dữ liệu ERP',
                    應報考勤:'Việc tham dự phải được báo cáo',
                    加總:'Tổng cộng',
                    導出:'Xuất khẩu',
                    系統計算考勤工時:'Hệ thống tính số giờ chấm công',
                    增加有效考勤工時:'Tăng số giờ đi học hiệu quả',
                    正班工時:'Giờ làm việc thường xuyên',
                    加班工時:'giờ tăng ca',
                    假別:'loại nghỉ phép',
                    更新完成:'Cập nhật đã hoàn tất',
                    更新失敗:'Cập nhật không thành công',
                    重複輸入:'Giá trị đầu vào bị lặp lại, vui lòng nhập lại!',
                    查無卡號:'Kiểm tra không có số thẻ',
                    工單已存在:'Số lệnh sản xuất đã tồn tại trong bảng',
                    未添加工單:'Không có lệnh sản xuất nào được thêm vào',
                    查無工單:'Nếu không có lệnh sản xuất, bạn có muốn thêm nó theo cách thủ công không?',
                    請輸暫停理由:'Vui lòng nhập lý do tạm dừng:',
                    未生產:'Chưa sản xuất',
                    調整:'Điều chỉnh',
                    忘記設定:'Quên cài đặt',
                     忘記設定狀態:'Quên đặt trạng thái',
                     工作部門:'Bộ phận công tác',
                     備註:'Nhận xét',
                     考勤調整確認:'Điều chỉnh chấm công',
                     日期:'ngày',
                     班別管理:'Quản lý ca',
                     工單狀態與ERP對比報表:'Trạng thái lệnh sản xuất và báo cáo so sánh ERP',
                     ERP入庫數量:'Số lượng kho ERP',
                     過站管理:'Quản lý trạm',
                     序號查詢:'Truy vấn số sê-ri',
                     出貨序號表:'Bảng số serial vận chuyển',
                     工站編號:'Số trạm',
                     綁定工站:'Trạm làm việc ràng buộc',
                     測試工站:'Trạm kiểm tra',
                     輸入開始序號:'Nhập số thứ tự bắt đầu',
                };
            }
        },
    removeRow(item) {
        // 在这里处理移除行的逻辑
        const index = this.ERPDATA.indexOf(item);
        if (index !== -1) {
            this.ERPDATA.splice(index, 1);
        }
    },

     async updateStatus(JOBNUMBER, status) {
      let hrtime;
      let note;
      const translatedText = {
    zh: {
        事由: '請輸入理由:', // 添加出勤的翻译
        考勤: '請輸有效考勤工時（只能輸入數字）：', // 添加出勤的翻译
       },
      en: {

        事由: 'Please enter the reason',
        考勤: 'Please enter valid attendance hours (only numbers can be entered):', // 添加出勤的翻译
     },
     vi: {
      事由: 'Vui lòng nhập lý do',
      考勤: 'Vui lòng nhập số giờ tham dự hợp lệ (chỉ có thể nhập số):', // 添加出勤的翻译
     }
     
};
let currentLanguage = this.currentLanguage; // 默认语言为中文
      if(status==='請假' ){
       hrtime ='0';
        note = window.prompt(translatedText[currentLanguage].事由 );
        
      }else if (status==='夜班'){
        hrtime ='0';
        note = '';
      }else if (status==='備註'){
        hrtime ='0';
        note = window.prompt(translatedText[currentLanguage].事由 );
        }else{


// 使用 while 循环确保用户输入的是一个有效的数字
while (true) {
    hrtime = window.prompt(translatedText[currentLanguage].考勤);

    // 使用 isNaN() 函数检查输入是否为数字
    if (!isNaN(hrtime)) {
        break; // 如果输入是数字，跳出循环
    }
}
        note = window.prompt(translatedText[currentLanguage].事由 );

      }

      // Make API call to add new staff
      const apiUrl = "http://192.168.207.17:5024/api/Attendance/UPDATESTATUS";
      
      // Assuming you have Axios installed, if not run: npm install axios

      axios.post(apiUrl, {
        area: this.selectedArea,
        jobnumber: JOBNUMBER,
        ststus: status,
        hr_time:hrtime,
        note:note,
      
})
        .then(response => {
          // Handle success
          console.log("New staff added successfully:", response.data);
          this. staff_data();
          // You may want to update the staffData array with the new data
          // For example, this.staffData.push(response.data);

          // Reset the form and hide it
        })
        .catch(error => {
          // Handle error
          console.log("hrtime", hrtime);
          console.error("Error adding new staff:", error);
        });
    },
    startAutoScroll() {
          this.intervalId = setInterval(() => {
            // 移除第一個元素，將新數字添加到最後
            this.PDVERSON.push(this.PDVERSON.shift());
          }, 1000); // 調整循環播放的時間間隔
        },
        stopAutoScroll() {
          clearInterval(this.intervalId);
        },
        countShiftDesc(index, data) {
      let count = 1;
      while (index + count < data.length && data[index + count].部門 === data[index].部門) {
        count++;
      }
      return count;
    },
    countShiftDescATT(index) {
      let count = 1;
      while (index + count < this.ATT_time_data.length && this.ATT_time_data[index + count].部門 === this.ATT_time_data[index].部門) {
        count++;
      }
      return count;
    },
    ATT_Abnorma_data() {
    // Make a POST request to the API
    axios.post('http://192.168.207.17:5024/api/Attendance/ATT_DATA_Exception', /* Add any data you need to send in the body */)
      .then(response => {
        // Assuming the API response contains data in a property named 'data'
        this.ATT_Abnormal_d = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },

    formatDepartment(department) {
      if (!department) {
        return '';  // 如果没有部门值，则返回空字符串
      }

      // 使用 replace 方法替换字符串中的 "D"、"S"、"C"
      const formattedDepartment = department.replace(/D/g, 'D').replace(/S/g, 'S').replace(/C/g, 'C');
      return formattedDepartment;
    },
    async woderp() {
      this.woderpdata = [];
      this.erpdata1=[];
      this.erpdata2=[];
      this.erpdata3=[];
      this.erpdata4=[];
      this.erpdata5=[];
      this.erpdata6=[];
      this.loading = true;
      this.woderpreport = true;
       if (!this.selectedArea) {
       this.loading = false;
     
      return; // 如果没有选择区域，直接返回
        }
        const date = new Date(this.selectedDate);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}${month}${day}`;

        const apiUrl1 = `http://192.168.207.17:5024/api/Report/WO_ERP__SUM_version?AREA=${this.selectedArea}`;
        const apiUrl2 = `http://192.168.207.17:5024/api/Report/WO_ERP_1?AREA=${this.selectedArea}`;
        const apiUrl3 = `http://192.168.207.17:5024/api/Report/WO_ERP_2?AREA=${this.selectedArea}`;
        const apiUrl4 = `http://192.168.207.17:5024/api/Report/WO_ERP_3?AREA=${this.selectedArea}`;
        const apiUrl5 = `http://192.168.207.17:5024/api/Report/WO_ERP_4?AREA=${this.selectedArea}`;
        const apiUrl6 = `http://192.168.207.17:5024/api/Report/WO_ERP_5?AREA=${this.selectedArea}&MFG_DAY=${formattedDate}`;
        const apiUrl7 = `http://192.168.207.17:5024/api/Report/WO_ERP_6?AREA=${this.selectedArea}`;

        try {
        const responses = await Promise.all([
            fetch(apiUrl1),
            fetch(apiUrl2),
            fetch(apiUrl3),
            fetch(apiUrl4),
            fetch(apiUrl5),
            fetch(apiUrl6),
            fetch(apiUrl7)

        ]);
        const data = await Promise.all(responses.map(response => response.json()));

        this.woderpdata = data[0];
        this.erpdata1 = data[1];
        this.erpdata2 = data[2];
        this.erpdata3 = data[3];
        this.erpdata4 = data[4];
        this.erpdata5 = data[5];
        this.erpdata6 = data[6];
     } catch (error) {
    console.error('Error fetching data:', error);
    }
     this.loading = false;
     this.woderpreport = true;

},
    async PDVER() {
      this.PDVERSON = [];
      this.PDTOVERSON = [];
      this.loading = true;
       this.SHOW_PD_VERSON = true;

       if (!this.selectedArea) {
       this.loading = false;
       this.SHOW_PD_VERSON = true;
      return; // 如果没有选择区域，直接返回
        }

        const apiUrl1 = `http://192.168.207.17:5024/api/Report/PD_version?AREA=${this.selectedArea}`;
        const apiUrl2 = `http://192.168.207.17:5024/api/Report/PD_TO_version?AREA=${this.selectedArea}`;

        try {
        const responses = await Promise.all([
            fetch(apiUrl1),
            fetch(apiUrl2)
        ]);
        const data = await Promise.all(responses.map(response => response.json()));

        this.PDVERSON = data[0];
        this.PDTOVERSON = data[1];
     } catch (error) {
    console.error('Error fetching data:', error);
    }
     this.loading = false;
     this.SHOW_PD_VERSON = true;

},

async  fetchCombinedVersions(selectedArea) {
     this.PDVERSON = [];
      this.PDTOVERSON = [];
      this.loading = true;
      this.SHOW_PD_VERSON = false;
       if (!this.selectedArea) {
       this.loading = false;
       this.SHOW_PD_VERSON = true;
      return; // 如果没有选择区域，直接返回
        }

    const apiUrl = `http://192.168.207.17:5024/api/Report/Combined_versions?AREA=${this.selectedArea}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log('PD Version:', data.pdVersion);
        console.log('PD TO Version:', data.pdToVersion);

        // 处理数据
        this.PDVERSON = data.pdVersion;
        this.PDTOVERSON = data.pdToVersion;
        this.loading = false;
        this.SHOW_PD_VERSON = true;
    } catch (error) {
        console.error('Error fetching data:', error);
        this.loading = false;
    }
    this.SHOW_PD_VERSON = true;
},

async RATING_SUM_VER() {
  this.RATING_SUM_VERSON = [];
  this.RATINGVERSON = [];
  this.loading = true;

  if (!this.selectedArea) {
    this.loading = false;
    return; // 如果没有选择区域，直接返回
  }

  const date = new Date(this.selectedDate);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}${month}${day}`;
  const apiUrl1 = `http://192.168.207.17:5024/api/READWOID/SELECT_SUM_RATING?area=${this.selectedArea}&MFG_DAY=${formattedDate}`;

  try {
    const response = await fetch(apiUrl1);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    this.RATING_SUM_VERSON = data.result; // 假设 JSON 数据结构为 { "result": [...] }

    // 根据获取到的数据进行二次处理
    const trueKeys = Object.keys(this.showInSecondTable)
      .filter(key => this.showInSecondTable[key])
      .sort((a, b) => a - b);

    trueKeys.forEach(trueKey => {
      // 避免清空已存在的数据，改为追加处理
      this.RATINGVER(trueKey);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    this.loading = false;
  }
},
// 日期格式化函数

// 异步函数 RATINGVER
async RATINGVER(DEPARTMENT) {
  console.log("New staff added successfully:", this.showInSecondTable);
  if (!this.showInSecondTable[DEPARTMENT]) {
      // 遍历ATT_time_data数组
      for (let i = this.RATINGVERSON.length - 1; i >= 0; i--) {
        if (this.RATINGVERSON[i].部門 === DEPARTMENT) {
          // 如果部门匹配，从数组中删除该项
          this.RATINGVERSON.splice(i, 1);
        }
      }
    }


  // 如果没有选择区域，直接返回
  if (!this.selectedArea) {
    console.warn('No selected area');
    return;
  }

  this.loading = true; // 开始加载
  const date = new Date(this.selectedDate);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}${month}${day}`;
  const apiUrl1 = `http://192.168.207.17:5024/api/READWOID/SELECT_SN_RATING?area=${this.selectedArea}&department=${DEPARTMENT}&MFG_DAY=${formattedDate}`;

  try {
    // 发起 API 请求
    const response = await fetch(apiUrl1);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data && Array.isArray(data.result)) {
      // 合并数据到 RATINGVERSON
      this.RATINGVERSON.push(...data.result);

      // 按部门排序
      this.RATINGVERSON.sort((a, b) => (a.部門 < b.部門 ? -1 : a.部門 > b.部門 ? 1 : 0));
    } else {
      console.warn('No valid data returned from API:', data);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    this.loading = false; // 加载结束
  }

  console.log("RATINGVERSON:", this.RATINGVERSON);
},




async WO_SUM_VER() {
      this.WO_SUM_VERSON = [];
      this.WOVERSON = [];
      this.loading = true;
       if (!this.selectedArea) {
       this.loading = false;
      return; // 如果没有选择区域，直接返回
        }
        const date = new Date(this.selectedDate);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}${month}${day}`;
        const apiUrl1 = `http://192.168.207.17:5024/api/Report/WO_SUM_version?AREA=${this.selectedArea}&MFG_DAY=${formattedDate}`;

        try {
        const responses = await Promise.all([
            fetch(apiUrl1),
    
        ]);
        const data = await Promise.all(responses.map(response => response.json()));

        this.WO_SUM_VERSON = data[0];

     } catch (error) {
    console.error('Error fetching data:', error);
    }
    const trueKeys = Object.keys(this.showInSecondTable)
  .filter(key => this.showInSecondTable[key])
  .sort((a, b) => a - b);

trueKeys.forEach(trueKey => {
  this.WOVERSON = [];
  this.WOVER(trueKey);
});
     this.loading = false;
},

async WOVER(DEPARTMENT) {
  console.log("New staff added successfully:", this.showInSecondTable);
  if (!this.showInSecondTable[DEPARTMENT]) {
      // 遍历ATT_time_data数组
      for (let i = this.WOVERSON.length - 1; i >= 0; i--) {
        if (this.WOVERSON[i].部門 === DEPARTMENT) {
          // 如果部门匹配，从数组中删除该项
          this.WOVERSON.splice(i, 1);
        }
      }
    }

      this.loading = true;
       if (!this.selectedArea) {
       this.loading = false;
      return; // 如果没有选择区域，直接返回
        }
        const date = new Date(this.selectedDate);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const formattedDate = `${year}${month}${day}`;
        const apiUrl1 = `http://192.168.207.17:5024/api/Report/WO_version?AREA=${this.selectedArea}&DEPARTMENT=${DEPARTMENT}&MFG_DAY=${formattedDate}`;

        try {
        const responses = await Promise.all([
            fetch(apiUrl1),
    
        ]);
        const data = await Promise.all(responses.map(response => response.json()));

        //this.WOVERSON = data[0];
        this.WOVERSON.push(...data[0]);
        this.WOVERSON.sort((a, b) => {
        // 按部门名称顺序排序（假设部门名称是字符串）
           if (a.部門 < b.部門) {
          return -1;
          }
             if (a.部門 > b.部門) {
               return 1;
         }
                return 0;
});

     } catch (error) {
    console.error('Error fetching data:', error);
    }
     this.loading = false;
},

async att_hr_SUM_ADJ() {
  this.ATT_time_ADJ_data=[];
  this.loading = true;
       if (!this.selectedArea  && !this.selectedDate) {
       this.loading = false;
      return; // 如果没有选择区域，直接返回
        }
  const apiUrl1 = `http://192.168.207.17:5024/api/Attendance/HR_ADJ_CONFIRM?AREA=${this.selectedArea}`;
  
  try {
  const responses = await Promise.all([
      fetch(apiUrl1),
  ]);
  const data = await Promise.all(responses.map(response => response.json()));

  this.ATT_time_ADJ_data = data[0];
} catch (error) {
console.error('Error fetching data:', error);
}
this.loading = false;
},
async att_hr_SUM_data() {
      this.ATT_time_data=[];
      this.ATT_time_SUM_data = [];
      this.loading = true;
       if (!this.selectedArea  && !this.selectedDate) {
       this.loading = false;
      return; // 如果没有选择区域，直接返回
        }
        const date = new Date(this.selectedDate);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}${month}${day}`;
        const apiUrl1 = `http://192.168.207.17:5024/api/Report/HR_SUN_version?AREA=${this.selectedArea}&MFG_DAY=${formattedDate}`;
  
        try {
        const responses = await Promise.all([
            fetch(apiUrl1),
        ]);
        const data = await Promise.all(responses.map(response => response.json()));

        this.ATT_time_SUM_data = data[0];
     } catch (error) {
    console.error('Error fetching data:', error);
    }
    
   
   /* const trueKeys = Object.keys(this.showInSecondTable).filter(key => this.showInSecondTable[key]);

// 遍历 trueKeys 数组，依次传递每个值为 true 的键给 att_hr_data 方法
trueKeys.forEach(trueKey => {
  this.att_hr_data(trueKey);
});
     this.loading = false;*/

     const trueKeys = Object.keys(this.showInSecondTable)
  .filter(key => this.showInSecondTable[key])
  .sort((a, b) => a - b);

trueKeys.forEach(trueKey => {
  this.att_hr_data(trueKey);
});

this.loading = false;
},

async att_hr_data( DEPATRMENT) {
     // this.ATT_time_data=[];
     if (!this.showInSecondTable[DEPATRMENT]) {
      // 遍历ATT_time_data数组
      for (let i = this.ATT_time_data.length - 1; i >= 0; i--) {
        if (this.ATT_time_data[i].部門 === DEPATRMENT) {
          // 如果部门匹配，从数组中删除该项
          this.ATT_time_data.splice(i, 1);
        }
      }
    }
     this.loading = true;
       if (!this.selectedArea && !this.selectedDate) {
       this.loading = false;
      return; // 如果没有选择区域，直接返回
        }
        if (this.selectedL) {
  this.selectedDepartment = this.selectedD + 'D' + this.selectedS + 'S' + this.selectedC + '-' + this.selectedL + 'C';
} else {
  this.selectedDepartment = this.selectedD + 'D' + this.selectedS + 'S' + this.selectedC + 'C';
}
const date = new Date(this.selectedDate);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}${month}${day}`;
        axios.post('http://192.168.207.17:5024/api/Attendance/ATT_DATA_hr', {
         area: this.selectedArea,
         department:DEPATRMENT,
         mfG_DAY:formattedDate,

})
.then(response => {
// POST請求成功，將數據賦值給seatData
//this.ATT_time_data = this.ATT_time_data.concat(response.data);
this.ATT_time_data.push(...response.data);
this.ATT_time_data.sort((a, b) => {
  // 按部门名称顺序排序（假设部门名称是字符串）
  if (a.部門 < b.部門) {
    return -1;
  }
  if (a.部門 > b.部門) {
    return 1;
  }
  return 0;
});

})
.catch(error => {
// POST請求失敗，輸出錯誤信息
console.error('Error posting data:', error);
});
this.setCookie2('showInSecondTable', JSON.stringify(this.showInSecondTable));
     this.loading = false;
},
    generateChart() {
      // Trigger chart generation in the child component
      this.$children[0].fetchData();
      this.$children[1].fetchReportData();
    },
  
    new_staff() {
        this.newStaff.department  =this.selectedDepartment;
      this.showForm = true;
    },
    show_delete() {
      this.showActions = true;
   
    },
    show_CANCLE(){
      this.showActions = false;

      this.showForm = false;
      this.staffData.forEach(item => {
      item.editable = false;
    });
      this. staff_data();
    },
    show_UPDATE() {
      this.showActions = true;
      this.staffData.forEach(item => {
      item.editable = true;
    });
   
    },
    addNewSHIFT() {
      // Make API call to add new staff
      const apiUrl = "http://192.168.207.17:5024/api/c_shift/creat";
      
      // Assuming you have Axios installed, if not run: npm install axios

      axios.post(apiUrl, {
        area: this.selectedArea,
        department: this.newSHIFT.DEPARTMENT,
        hostid: this.newSHIFT.HOSTID,

})
        .then(response => {
          // Handle success
          console.log("New staff added successfully:", response.data);

          // You may want to update the staffData array with the new data
          // For example, this.staffData.push(response.data);

          // Reset the form and hide it
          this.newSHIFT = {
            department: "",
            HOSTID: "",
    
          };
          this.showForm = false;
          this. shift_data();
        })
        .catch(error => {
          // Handle error
          console.error("Error adding new staff:", error);
        });
    },
    addNewStaff() {
      // Make API call to add new staff
      const apiUrl = "http://192.168.207.17:5024/api/Attendance/creat";
      
      // Assuming you have Axios installed, if not run: npm install axios

      axios.post(apiUrl, {
        area: this.selectedArea,
        department: this.newStaff.department,
        jobnumber: this.newStaff.jobnumber,
        username: this.newStaff.username,
        work_department: this.newStaff.work_department ? this.newStaff.work_department : ''
})
        .then(response => {
          // Handle success
          console.log("New staff added successfully:", response.data);

          // You may want to update the staffData array with the new data
          // For example, this.staffData.push(response.data);

          // Reset the form and hide it
          this.newStaff = {
            department: "",
            jobnumber: "",
            username: "",
            work_department: "",
          };
          this.showForm = false;
          this. staff_data();
        })
        .catch(error => {
          // Handle error
          console.error("Error adding new staff:", error);
        });
    },
    // ... (existing methods for completeTask and pauseTask)
   staff_data() {
    this.staffData=[];
    if (!this.selectedArea || !this.selectedD || !this.selectedS || !this.selectedC) {
        // 資料為空，不執行POST請求
            console.warn('資料為空，未執行POST請求。');
           return;
         }

if (this.selectedL) {
this.selectedDepartment = this.selectedD + 'D' + this.selectedS + 'S' + this.selectedC + 'C';
} else {
this.selectedDepartment = this.selectedD + 'D' + this.selectedS + 'S' + this.selectedC + 'C';
}
console.log('POST 請求傳遞的資料:', {
    area: this.selectedArea,
department: this.selectedDepartment,
  });
// 使用axios來發送POST請求
axios.post('http://192.168.207.17:5024/api/Attendance', {
area: this.selectedArea,
department: this.selectedDepartment,
})
.then(response => {
// POST請求成功，將數據賦值給seatData
this.staffData = response.data;
})
.catch(error => {
// POST請求失敗，輸出錯誤信息
console.error('Error posting data:', error);
});

},  
    enableEditMode(selectedItem) {
      // 將所有項目的 editMode 設置為 false
      this.seatData.forEach(item => {
        item.editMode = false;
      });
      // 將選定的項目的 editMode 設置為 true
      selectedItem.editMode = true;
    },
  
    disableEditMode(item) {
      item.editMode = false;
    },
    postData() {

        if (!this.selectedArea || !this.selectedD || !this.selectedS || !this.selectedC) {
        // 資料為空，不執行POST請求
            console.warn('資料為空，未執行POST請求。');
           return;
         }

        if (this.selectedL) {
           this.selectedDepartment = this.selectedD + 'D' + this.selectedS + 'S' + this.selectedC + '-' + this.selectedL + 'C';
        } else {
           this.selectedDepartment = this.selectedD + 'D' + this.selectedS + 'S' + this.selectedC + 'C';
        }
      // 使用axios來發送POST請求
      axios.post('http://192.168.207.17:5024/api/c_seat', {
        area: this.selectedArea,
        department: this.selectedDepartment,
      })
      .then(response => {
        // POST請求成功，將數據賦值給seatData
        this.seatData = response.data;
        this.newSeat.machine_L='0000',
        this.newSeat.machine_R='0000',
        this.newSeat.seatID=this.seatData.length + 1
        this.HOST_MACHINE();
      })
      .catch(error => {

        // POST請求失敗，輸出錯誤信息
        console.error('Error posting data:', error);
        this.HOST_MACHINE();
        this.seatData=[];
      });
    

  },
  HOST_MACHINE(){

    // 使用axios來發送GET請求
    axios.get('http://192.168.207.17:5024/api/c_seat/HOST_MACHINE', {
        params: {
            AREA: this.selectedArea,
            DEPARTMENT: this.selectedDepartment
        }
    })
    .then(response => {
        // 成功获取数据后的处理逻辑，你可以根据需要处理返回的数据
        this.hostMachine = response.data;
        console.log('Data fetched successfully:', response.data);
    })
    .catch(error => {
        // GET請求失敗，輸出錯誤信息
        console.error('Error fetching data:', error);
    });



  },

    getRowSpan(index) {
      let count = 1;
      for (let i = index + 1; i < this.realTimeData.length; i++) {
        if (this.realTimeData[i].NFC_CODE === this.realTimeData[index].NFC_CODE) {
          count++;
        } else {
          break;
        }
      }
      return count;
    },

    async fetchOnlineData() {
        if (this.selectedL) {
  this.selectedDepartment = this.selectedD + 'D' + this.selectedS + 'S' + this.selectedC + '-' + this.selectedL + 'C';
} else {
  this.selectedDepartment = this.selectedD + 'D' + this.selectedS + 'S' + this.selectedC + 'C';
}


    const apiUrl = 'http://192.168.207.17:5024/api/ONLINE?area=' + this.selectedArea + '&department=' + this.selectedDepartment;

    try {
        const response = await fetch(apiUrl); // 使用 apiUrl 而不是硬编码的 URL
        const data = await response.json();
        this.onlineData = data;
      } catch (error) {
        console.error('Error fetching online data:', error);
      }
    
  },
    async executeUpdate() {

        const allWoIds = this.totwo();
       try {
    // 构造 UPDATE 请求的数据
    const updateData = {
      nickName: allWoIds, // 替换为实际的 nickName
      department: this.selectedDepartment,
      area: this.selectedArea,
      nfC_CODE:this.selectednfccode,

    };

    // 使用 fetch 或其他方法发送 UPDATE 请求
    const response = await fetch('http://192.168.207.17:5024/api/NEWWOID/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    });

    // 检查 HTTP 状态码
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // 检查 Content-Type
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
      // 处理 UPDATE 响应
      const result = await response.json();
      console.log('UPDATE result:', result);
    } else {
      // 处理非 JSON 格式的 UPDATE 响应
      const resultText = await response.text();
      console.log('UPDATE result:', resultText);
      alert(this.translatedText.更新完成);
     this.fetchData2();
     this.ERPDATA = [];
     this.selectedERP='';

    }

  } catch (error) {
    console.error('Error executing UPDATE:', error);
  }
},
    totwo() {
     let allWoIds = "";
      for (const item of this.ERPDATA) {
       allWoIds += item.wadoco + ",";
     }
     return allWoIds;
    },
    async uploadData() {
       try {
      // 计算整张表格的总和
      const totalQty = parseFloat(this.calculateTotal("wauorg"));
      const totalStdTime = parseFloat(this.calculateTotal("wlrunl_sum"));
      const allWoIds = this.totwo();

    // 逐行上传数据
    for (const item of this.ERPDATA) {
      const standardTime = parseFloat(item.wlrunl_sum);
      const qty = parseFloat(item.wauorg);

      const uploadData = {
        area: this.selectedArea,
        department: this.selectedDepartment,
        woId: item.wadoco,
        transId: "LOT_START",
        qty: qty,
        nfcCode: this.selectednfccode,
        partNo: item.walitm,
        partDesc: item.wadl01,
        standardTime: standardTime,
        totalWo: allWoIds,
        totalQty: totalQty,
        totalStdTime: totalStdTime.toFixed(2),
        PasstEFF: item.avgStdEff || 0,
      };

      // 使用 fetch 或其他方法发送 POST 请求上传数据
      console.log('uploadData Message:', uploadData);
      const response = await fetch('http://192.168.207.17:5024/api/NEWWOID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(uploadData),
      });

      // 检查 HTTP 状态码
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // 检查 Content-Type
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        // 处理响应
        const result = await response.json();
        console.log('Upload result:', result);
        console.log('Success Message:', result.successMessage);
       // await this.executeUpdate();
      } else {
        // 处理非 JSON 格式的成功消息
        const resultText = await response.text();
        console.log('Success Message:', resultText);
    
      }

    }
    await this.executeUpdate();
  } catch (error) {
    console.error('Error uploading data:', uploadData);
    
  }

},
    async fetchDPData() {
      if (this.selectedL) {
  this.selectedDepartment = this.selectedD + 'D' + this.selectedS + 'S' + this.selectedC + '-' + this.selectedL + 'C';
} else {
  this.selectedDepartment = this.selectedD + 'D' + this.selectedS + 'S' + this.selectedC + 'C';
}
      // 从服务器获取下拉选项的数据
      try {

        
        const response = await fetch('http://192.168.207.17:5024/api/DISTINCTNFCCODE?name=' + this.selectedDepartment + 'LN%25&area=' + this.selectedArea);
        const data = await response.json();
        this.dpOptions = data.map(item => {
      const match = item.nfc_code.match(/\d+$/);
      return match ? match[0] : item.nfc_code;
      console.log('Success Message:', response);
    });
      } catch (error) {
        console.error('Error fetching DP data:', error);
      }
    },
    SAFFcalculateTotal(property) {
      // 计算指定属性的总和
      return this.ERPDATA.reduce((total, item) => total + parseFloat(item[property] || 0), 0);
    },
    calculateTotal(property) {
      // 计算指定属性的总和
      return this.ERPDATA.reduce((total, item) => total + parseFloat(item[property] || 0), 0);
    },
    PDcalculateTotal(property) {
      // 计算指定属性的总和
      return this.PDTOVERSON.reduce((total, item) => total + parseFloat(item[property] || 0), 0);
    },
    PDcalculateAVG(property) {
  // 獲取指定屬性的數組
  const propertyArray = this.PDTOVERSON.map(item => parseFloat(item[property] || 0));
  
  // 計算總和
  const sum = propertyArray.reduce((total, value) => total + value, 0);
  
  // 計算平均值，注意處理分母為零的情況
  const nonZeroLength = propertyArray.filter(value => value !== 0).length;
  const average = nonZeroLength > 0 ? sum / nonZeroLength : 0;

  // 返回總和和平均值
  return average;
},

    checkAndSelectERP() {
        this.isButtonDisabled = true;
  const existingWorkOrderInERPDATA = this.ERPDATA.find(item => item.wadoco === this.selectedERP);
  const existingWorkOrderInRealTimeData = this.realTimeData.find(item => item.WO_ID === this.selectedERP);

  if (existingWorkOrderInERPDATA || existingWorkOrderInRealTimeData) {
    alert(this.translatedText.工單已存在);
    this.isButtonDisabled = false;
  } else {
    this.selectERP();
  } 
},
    selectERP(){

 const wo_Id = this.selectedERP;
//const apiUrl = `http://192.168.207.17:5024/api/ERPWOID/${wo_Id}`;


if(wo_Id==='100'){
  this.ERPDATA.push({
      wadoco: wo_Id,
      walitm: '100',
      wadl01:'試產工單',
      wauorg: '0',
      wlrunl_sum:'1',
      // 其他属性...

    });
    this.isButtonDisabled = false;  
}else if (wo_Id==='200'){
  this.ERPDATA.push({
      wadoco: wo_Id,
      walitm: '200',
      wadl01:'來料全檢',
      wauorg: '0',
      wlrunl_sum:'1',
      // 其他属性...

    });
    this.isButtonDisabled = false;  
}else if (wo_Id==='300'){
  this.ERPDATA.push({
      wadoco: wo_Id,
      walitm: '300',
      wadl01:'貼紙班',
      wauorg: '0',
      wlrunl_sum:'1',
      // 其他属性...

    });
    this.isButtonDisabled = false;  
  }else if (wo_Id==='400'){
  this.ERPDATA.push({
      wadoco: wo_Id,
      walitm: '400',
      wadl01:'重工',
      wauorg: '0',
      wlrunl_sum:'1',
      // 其他属性...

    });
    this.isButtonDisabled = false;  
  }else if (wo_Id==='700'){
  this.ERPDATA.push({
      wadoco: wo_Id,
      walitm: '700',
      wadl01:'物料員工時',
      wauorg: '0',
      wlrunl_sum:'1',
      // 其他属性...

    });
  }else if (wo_Id==='500'){
  this.ERPDATA.push({
      wadoco: wo_Id,
      walitm: '500',
      wadl01:'裁剝線',
      wauorg: '0',
      wlrunl_sum:'1',
      // 其他属性...

    });
    this.isButtonDisabled = false;  
}else{
// Assuming you are using fetch API
axios.post('http://192.168.207.17:5024/api/ERPREAD/WOID', {
  wadoco: this.selectedERP
})
.then(response => {
  const data = response.data;
  if (data.length === 0 || data[0].wadoco === '') {
    const userWantsToAddManually = window.confirm(this.translatedText.查無工單);
    if (userWantsToAddManually) {
      // 执行手动增加工单的逻辑，可以调用一个方法或者显示一个表单
      this.addManually(wo_Id);
    } else {
      // 用户选择不手动增加时的逻辑
      alert(this.translatedText.未添加工單);
      this.isButtonDisabled = false;  
    }
  } else {
    this.ERPDATA.push(...data);
    this.isButtonDisabled = false;  
  }
})
.catch(error => {
  // POST请求失败，输出错误信息
  console.error('Error posting data:', error);
  alert(this.translatedText.查無工單);
      this.isButtonDisabled = false;  
});
  
}
this.selectedERP='';
    },
    addManually(wo_Id) {
  // 使用 window.prompt 弹出提示框，接收用户输入
  const WO_IDNumber = window.prompt('請輸入料號：');
  const PARTNumber = window.prompt('請輸入料號：');
  const productName = window.prompt('請輸入品名：');
  const quantity = window.prompt('請輸入數量：');
  const STD = window.prompt('請輸入標準工時：');

  // 判断用户是否点击了取消按钮
  if (PARTNumber !== null && productName !== null && quantity !== null) {
    // 执行手动增加工单的逻辑，例如将输入的数据添加到 ERPDATA 数组
    this.ERPDATA.push({
      wadoco: wo_Id,
      walitm: PARTNumber,
      wadl01:productName,
      wauorg: quantity,
      wlrunl_sum:STD,
      // 其他属性...

    });
    this.isButtonDisabled = false;  
  } else {
    // 用户点击了取消按钮
    alert('取消手動增加工單');
    this.isButtonDisabled = false;  
  }

},
REWORK(item) {
  // 禁用按钮，防止重复点击
  this.isButtonDisabled = true;

  // 在 ERPDATA 中查找是否已经存在具有相同 WO_ID 的工作单
  const existingWorkOrderInERPDATA = this.ERPDATA.find(data => data.wadoco === item.WO_ID);

  // 如果工作单已存在，显示警告信息并重新启用按钮
  if (existingWorkOrderInERPDATA) {
    alert(this.translatedText.工單已存在);
    this.isButtonDisabled = false;
  } else {
    // 如果工作单不存在，将新的工作单数据推入 ERPDATA 数组
    this.ERPDATA.push({
      wadoco: item.WO_ID,
      walitm: item.PART_NO,
      wadl01: item.PART_DESC,
      wauorg: item.qty,
      wlrunl_sum: item.std,
      avgStdEff: item.PasstEFF 
      // 其他属性...
    });
    this.isButtonDisabled = false;
  }
},

    completeTask(woId, nfcCode) {
    const area = this.selectedArea;
    const department = this.selectedDepartment;
    // 发起完成任务的 HTTP 请求
    fetch(`http://192.168.207.17:5024/api/lotend?area=${area}&department=${department}&NFC_code=${nfcCode}&woId=${woId}`)
      .then(response => response.json())
      .then(data => {
        // 处理成功完成任务的响应
        console.log('任务完成:', data);
        alert(this.translatedText.更新完成);
        this.fetchData2();
      })
      .catch(error => console.error('发生错误:', error));
  
  },
  delete_staffData(id) {

    const numericId = parseInt(id, 10);

// 構建 DELETE 請求的主體
const deleteData = {
  id: numericId,
  area: this.selectedArea
};

axios.delete('http://192.168.207.17:5024/api/Attendance/Delete', {
    data: deleteData,  // 將主體放入 data 選項
    headers: {
      'Content-Type': 'application/json'  // 設置 Content-Type 為 JSON
    }
  })
    .then(response => {
      // 在這裡處理成功的回應，如果需要的話
      console.log('刪除成功', response);
      this. staff_data();
      this.showActions = false;
    })
    .catch(error => {
      // 在這裡處理錯誤，如果需要的話
      console.error('刪除失敗', error);

    });
    console.log('selectedD:', id)
},  
UPDATE_staffData(ITEM) {



  // 构建 PUT 请求的主体
  const updateData = {
    id: ITEM.id.toString(),
    area: this.selectedArea,
    department: ITEM.department,
    jobnumber:ITEM.jobnumber,
    username:ITEM.username,
    work_department:ITEM.work_department
  };

  axios.put('http://192.168.207.17:5024/api/Attendance/UPDATE_USER', updateData, {
    headers: {
      'Content-Type': 'application/json'  // 设置 Content-Type 为 JSON
    }
  })
  .then(response => {
    // 处理成功的响应
    console.log('更新成功', response);
    this. staff_data();
      this.showActions = false;
  })
  .catch(error => {
    // 处理错误
    console.error('更新失败', error);
  });

  console.log('选中的数据:', updateData);


},delete_hr(id) {

const numericId = parseInt(id, 10);

// 構建 DELETE 請求的主體
const deleteData = {
id: numericId,
area: this.selectedArea
};

axios.delete('http://192.168.207.17:5024/api/Attendance/Delete_hr', {
data: deleteData,  // 將主體放入 data 選項
headers: {
  'Content-Type': 'application/json'  // 設置 Content-Type 為 JSON
}
})
.then(response => {
  // 在這裡處理成功的回應，如果需要的話
  console.log('刪除成功', response);
  this. staff_data();
  this.showActions = false;
})
.catch(error => {
  // 在這裡處理錯誤，如果需要的話
  console.error('刪除失敗', error);

});
console.log('selectedD:', id)
},
openDateDialog(item) {
      this.REWOID = item;
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
      this.REWOID = null;
      this.selectedDate = null;
    },
    async updateReworkDate() {
      if (!this.selectedDate) {
        alert("請選擇日期！");
        return;
      }

      try {
        this.isButtonDisabled = true;
        console.log('id:', this.REWOID);
        console.log('reworkDate:', this.selectedDate);
        console.log('area:', this.selectedArea);
        const response = await axios.put(
          "http://192.168.207.17:5024/api/READWOID/UPDATE_rework_date",
          {
             area: this.selectedArea, // 根據需求傳入正確值
             reworkDate: this.selectedDate,
             id: String(this.REWOID), // 将 id 转换为字符串
          }
        );

        alert(response.data);
      } catch (error) {
        console.error("更新失敗", error);
        alert("更新失敗，請重試！");
      } finally {
        this.isButtonDisabled = false;
        this.closeDialog();
        this.fetchDPData();
        this.fetchData();
      }
    },
showRemarkSelect(woId, nfcCode) {
      this.showSelect = true;       // 顯示下拉選單
      this.currentWoId = woId;      // 儲存當前工單ID
      this.currentNfcCode = nfcCode;// 儲存當前NFC代碼
    },
    closeModal() {
      this.showSelect = false;      // 關閉彈窗
      this.selectedRemark = "";    // 重置選項
    },
  pauseTask(woId, nfcCode) {
    if (this.selectedRemark) {    // 確認用戶選擇了原因
        const area = this.selectedArea;
        const department = this.selectedDepartment;
        const woId = this.currentWoId;
        const nfcCode = this.currentNfcCode;
        const remarkWithDate = this.selectedRemark;  
        const now = new Date();
    const reWORKDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;  


    // 发起暂停任务的 HTTP 请求
    fetch(`http://192.168.207.17:5024/api/lotend/PAUSE?area=${area}&department=${department}&NFC_code=${nfcCode}&woId=${woId}&REMARK=${remarkWithDate}&REWORK=${reWORKDate}`)
      .then(response => response.json())
      .then(data => {
        // 处理成功暂停任务的响应
        console.log('任务暂停:', data);
        this.fetchData2();
      })
      .catch(error => console.error('发生错误:', error));
        // 重置並隱藏下拉選單
        this.showSelect = false;
        this.selectedRemark = "";
        this.currentWoId = null;
        this.currentNfcCode = null;
  } else {
    console.log('用户取消了操作');
    // 可以添加相应的提示或处理
  }
  },
    getBackgroundColor(nfcCode) {
  // 根据 nfcCode 的值返回相应的颜色
  if (nfcCode === '01') {
    return '#4886ea';
  } else if (nfcCode === '02') {
    return 'darkgreen';
  } else if (nfcCode === '03') {
    return 'yellow';
  } else if (nfcCode === '04') {
    return '#bd91f3';
  } else if (nfcCode === '05') {
    return 'lightgreen';
  } else if (nfcCode === '06') {
    return 'orange';
  }  else {
    return ''; // 如果没有匹配的值，可以返回空字符串或其他默认值
  }

},
login_VERSON(){
  this.SHOW_RATING_VERSON= false;
  this.SHOPSTcontent= false;
      this.SNLISTcontent= false;
      this.PDSNLISTcontent= false;
      this.SHOW_eff_performance= false;
      this.SHOW_overflow_performance= false;
     this.SHOW_PD_VERSON= false;
     this.SHOW_WO_VERSON= false;
     this.showyear= false;
      this.showCLASS= false;
      this.showRealTimeContent = false;
      this.showDemoContent = false;
      this.wo_mangeContent = false;
      this.wo_selectment= false;
      this.seat_mangeContent = false;
      this.staff_mangeContent = false;
      this.ATT_AbnormalContent = false;
      this.ATT_timeContent = false;
      this.fqc_mangeContent = false;
      this.isLoggedIn= true
      this.ATT_ADJ_confirm=false;
      this.woderpreport=false;
      this.activeMenu = ''; // 隱藏所有菜單
},
effperformance(){
  this.SHOW_RATING_VERSON= false;
  this.SHOPSTcontent= false;
  this.SNLISTcontent= false;
  this.PDSNLISTcontent= false;
  this.SHOW_eff_performance= true;
  this.SHOW_overflow_performance= false;
  this.SHOW_PD_VERSON= false;
     this.SHOW_WO_VERSON= false;
     this.showyear= false;
      this.showCLASS= false;
      this.showRealTimeContent = false;
      this.showDemoContent = false;
      this.wo_mangeContent = false;
      this.wo_selectment= false;
      this.seat_mangeContent = false;
      this.staff_mangeContent = false;
      this.ATT_AbnormalContent = false;
      this.ATT_timeContent = false;
      this.fqc_mangeContent = false;
      this.isLoggedIn= false;
      this.ATT_ADJ_confirm=false;
      this.woderpreport=false;
      this.effper();
      this.activeMenu = ''; // 隱藏所有菜單

},
overflowperformance(){
  this.SHOW_RATING_VERSON= false;
  this.SHOPSTcontent= false;
  this.SNLISTcontent= false;
  this.PDSNLISTcontent= false;
  this.SHOW_eff_performance= false;
  this.SHOW_overflow_performance= true;
  this.SHOW_PD_VERSON= false;
     this.SHOW_WO_VERSON= false;
     this.showyear= false;
      this.showCLASS= false;
      this.showRealTimeContent = false;
      this.showDemoContent = false;
      this.wo_mangeContent = false;
      this.wo_selectment= false;
      this.seat_mangeContent = false;
      this.staff_mangeContent = false;
      this.ATT_AbnormalContent = false;
      this.ATT_timeContent = false;
      this.fqc_mangeContent = false;
      this.isLoggedIn= false;
      this.ATT_ADJ_confirm=false;
      this.woderpreport=false;
      this.overflowper();
      this.activeMenu = ''; // 隱藏所有菜單

},
WO_VERSON(){
  this.SHOW_RATING_VERSON= false;
  this.SHOPSTcontent= false;
  this.SNLISTcontent= false;
  this.PDSNLISTcontent= false;
  this.SHOW_eff_performance= false;
  this.SHOW_overflow_performance= false;
     this.SHOW_PD_VERSON= false;
     this.SHOW_WO_VERSON= true;
     this.showyear= false;
      this.showCLASS= false;
      this.showRealTimeContent = false;
      this.showDemoContent = false;
      this.wo_mangeContent = false;
      this.wo_selectment= false;
      this.seat_mangeContent = false;
      this.staff_mangeContent = false;
      this.ATT_AbnormalContent = false;
      this.ATT_timeContent = false;
      this.fqc_mangeContent = false;
      this.isLoggedIn= false;
      this.WO_SUM_VER();
      this.ATT_ADJ_confirm=false;
      this.woderpreport=false;
      this.activeMenu = ''; // 隱藏所有菜單

},
RATING_VERSON(){
  this.SHOW_RATING_VERSON= false;
  this.SHOPSTcontent= false;
  this.SNLISTcontent= false;
  this.PDSNLISTcontent= false;
  this.SHOW_eff_performance= false;
  this.SHOW_overflow_performance= false;
     this.SHOW_PD_VERSON= false;
     this.SHOW_WO_VERSON= false;
     this.SHOW_RATING_VERSON= true;
     this.showyear= false;
      this.showCLASS= false;
      this.showRealTimeContent = false;
      this.showDemoContent = false;
      this.wo_mangeContent = false;
      this.wo_selectment= false;
      this.seat_mangeContent = false;
      this.staff_mangeContent = false;
      this.ATT_AbnormalContent = false;
      this.ATT_timeContent = false;
      this.fqc_mangeContent = false;
      this.isLoggedIn= false;
      this.RATING_SUM_VER();
      this.ATT_ADJ_confirm=false;
      this.woderpreport=false;
      this.activeMenu = ''; // 隱藏所有菜單

},
PD_VERSON(){
  this.SHOW_RATING_VERSON= false;
  this.SHOPSTcontent= false;
  this.SNLISTcontent= false;
  this.PDSNLISTcontent= false;
  this.SHOW_eff_performance= false;
  this.SHOW_overflow_performance= false;
    this.SHOW_WO_VERSON= false;
     this.SHOW_PD_VERSON= true;
     this.showyear= false;
      this.showCLASS= false;
      this.showRealTimeContent = false;
      this.showDemoContent = false;
      this.wo_mangeContent = false;
      this.wo_selectment= false;
      this.seat_mangeContent = false;
      this.staff_mangeContent = false;
      this.ATT_AbnormalContent = false;
      this.ATT_timeContent = false;
      this.fqc_mangeContent = false;
      this.isLoggedIn= false;
      this.fetchCombinedVersions();
      this.ATT_ADJ_confirm=false;
      this.woderpreport=false;
      this.activeMenu = ''; // 隱藏所有菜單

},

woerp_report(){
  this.SHOW_RATING_VERSON= false;
  this.SHOPSTcontent= false;
  this.SNLISTcontent= false;
  this.PDSNLISTcontent= false;
  this.SHOW_eff_performance= false;
  this.SHOW_overflow_performance= false;
      this.SHOW_WO_VERSON= false;
      this.fqc_mangeContent = false;
      this.SHOW_PD_VERSON= false,
      this.showyear= false,
      this.showCLASS= false,
      this.showDemoContent = false;
      this.seat_mangeContent = false;
      this.showRealTimeContent = false;
      this.wo_mangeContent = false;
      this.wo_selectment= false;
      this.staff_mangeContent = false;
      this.ATT_AbnormalContent = false;
      this.ATT_timeContent = false;
      this.isLoggedIn= false;
      this.CARD_mangeContent= false;
      this.shift_mangeContent= false;
      this.ATT_ADJ_confirm=false;
      this.woderpreport=true;
      this.woderp() ;
      this.activeMenu = ''; // 隱藏所有菜單
},
eff_report() {
  this.SHOW_RATING_VERSON= false;
  this.SHOPSTcontent= false;
  this.SNLISTcontent= false;
  this.PDSNLISTcontent= false;
  this.SHOW_eff_performance= false;
  this.SHOW_overflow_performance= false;
      // 點擊時設置 showRealTimeContent 為 false，並且 showDemoContent 為 true
      this.SHOW_WO_VERSON= false;
      this.SHOW_PD_VERSON= false,
      this.showyear= true,
      this.showCLASS= false,
      this.showRealTimeContent = false;
      this.showDemoContent = true;
      this.wo_mangeContent = false;
      this.wo_selectment= false;
      this.seat_mangeContent = false;
      this.staff_mangeContent = false;
      this.ATT_AbnormalContent = false;
      this.ATT_timeContent = false;
      this.fqc_mangeContent = false;
      this.isLoggedIn= false;
      this.ATT_ADJ_confirm=false;
      this.woderpreport=false;
      this.activeMenu = ''; // 隱藏所有菜單
      
      this.$nextTick(() => {
        const iframe = this.$refs.demoIframe;
        if (iframe) {
          iframe.contentWindow.addEventListener('resize', () => {
            this.iframeHeight = iframe.contentDocument.body.scrollHeight;
          });
        }
      });
    },
    SHOP_ST() {
      this.SHOW_RATING_VERSON= false;
      this.SHOPSTcontent= true;
      this.SNLISTcontent= false;
      this.PDSNLISTcontent= false;
      this.SHOW_eff_performance= false;
      this.SHOW_overflow_performance= false;
      this.SHOW_WO_VERSON= false;
      this.SHOW_PD_VERSON= false,
      this.showyear= false,
      this.showCLASS= true,
        this.showDemoContent = false;
      this.showRealTimeContent = false;
      this.wo_mangeContent = false;
      this.wo_selectment= false;
      this.seat_mangeContent = false;
      this.staff_mangeContent = false;
      this.ATT_AbnormalContent = false;
      this.fqc_mangeContent = false;
      this.ATT_timeContent = false;
      this.isLoggedIn= false;
      this.CARD_mangeContent= false;
      this.shift_mangeContent= false;
      this.ATT_ADJ_confirm=false;
      this.woderpreport=false;
      this.fetchData();
      this.activeMenu = ''; // 隱藏所有菜單
    },
    SNLIST() {
      this.SHOW_RATING_VERSON= false;
      this.SHOPSTcontent= false;
      this.SNLISTcontent= true;
      this.PDSNLISTcontent= false;
      this.SHOW_eff_performance= false;
      this.SHOW_overflow_performance= false;
      this.SHOW_WO_VERSON= false;
      this.SHOW_PD_VERSON= false,
      this.showyear= false,
      this.showCLASS= false,
        this.showDemoContent = false;
      this.showRealTimeContent = false;
      this.wo_mangeContent = false;
      this.wo_selectment= false;
      this.seat_mangeContent = false;
      this.staff_mangeContent = false;
      this.ATT_AbnormalContent = false;
      this.fqc_mangeContent = false;
      this.ATT_timeContent = false;
      this.isLoggedIn= false;
      this.CARD_mangeContent= false;
      this.shift_mangeContent= false;
      this.ATT_ADJ_confirm=false;
      this.woderpreport=false;
      this.activeMenu = ''; // 隱藏所有菜單

    },
    PDSNLIST() {
      this.SHOW_RATING_VERSON= false;
      this.SHOPSTcontent= false;
      this.SNLISTcontent= false;
      this.PDSNLISTcontent= true;
      this.SHOW_eff_performance= false;
      this.SHOW_overflow_performance= false;
      this.SHOW_WO_VERSON= false;
      this.SHOW_PD_VERSON= false,
      this.showyear= false,
      this.showCLASS= false,
        this.showDemoContent = false;
      this.showRealTimeContent = false;
      this.wo_mangeContent = false;
      this.wo_selectment= false;
      this.seat_mangeContent = false;
      this.staff_mangeContent = false;
      this.ATT_AbnormalContent = false;
      this.fqc_mangeContent = false;
      this.ATT_timeContent = false;
      this.isLoggedIn= false;
      this.CARD_mangeContent= false;
      this.shift_mangeContent= false;
      this.ATT_ADJ_confirm=false;
      this.woderpreport=false;
      this.activeMenu = ''; // 隱藏所有菜單

    },
    showRealTime() {
      this.SHOW_RATING_VERSON= false;
      this.SHOPSTcontent= false;
      this.SNLISTcontent= false;
      this.PDSNLISTcontent= false;
      this.SHOW_eff_performance= false;
      this.SHOW_overflow_performance= false;
      this.SHOW_WO_VERSON= false;
      this.SHOW_PD_VERSON= false,
      this.showyear= false,
      this.showCLASS= true,
      this.showDemoContent = false;
      this.showRealTimeContent = true;
      this.wo_mangeContent = false;
      this.wo_selectment= false;
      this.seat_mangeContent = false;
      this.staff_mangeContent = false;
      this.ATT_AbnormalContent = false;
      this.fqc_mangeContent = false;
      this.ATT_timeContent = false;
      this.isLoggedIn= false;
      this.CARD_mangeContent= false;
      this.shift_mangeContent= false;
      this.fetchData();
      this.ATT_ADJ_confirm=false;
      this.woderpreport=false;
      this.activeMenu = ''; // 隱藏所有菜單
    },
    fqc_mange(){
      this.SHOW_RATING_VERSON= false;
      this.SHOPSTcontent= false;
      this.SNLISTcontent= false;
      this.PDSNLISTcontent= false;
      this.SHOW_eff_performance= false;
      this.SHOW_overflow_performance= false;
      this.SHOW_WO_VERSON= false;
      this.SHOW_PD_VERSON= false,
      this.showyear= false,
      this.showCLASS= true,
      this.showDemoContent = false;
      this.seat_mangeContent = false;
      this.fqc_mangeContent = true;
      this.wo_mangeContent = false;
      this.wo_selectment= false;
      this.showRealTimeContent = false;
      this.staff_mangeContent = false;
      this.ATT_AbnormalContent = false;
      this.ATT_timeContent = false;
      this.isLoggedIn= false;
      this.CARD_mangeContent= false;
      this.shift_mangeContent= false;

      this.ATT_ADJ_confirm=false;
      this.woderpreport=false;
      this.fetchData();
      this.RATING_fetchData()
      this.activeMenu = ''; // 隱藏所有菜單

    },
    wo_select(){
      this.SHOW_RATING_VERSON= false;
      this.SHOPSTcontent= false;
      this.SNLISTcontent= false;
      this.PDSNLISTcontent= false;
      this.SHOW_eff_performance= false;
      this.SHOW_overflow_performance= false;
      this.SHOW_WO_VERSON= false;
      this.fqc_mangeContent = false;
      this.SHOW_PD_VERSON= false,
      this.showyear= false,
      this.showCLASS= false,
      this.showDemoContent = false;
      this.seat_mangeContent = false;
      this.wo_mangeContent = false;
      this.wo_selectment= true;
      this.showRealTimeContent = false;
      this.staff_mangeContent = false;
      this.ATT_AbnormalContent = false;
      this.ATT_timeContent = false;
      this.isLoggedIn= false;
      this.CARD_mangeContent= false;
      this.shift_mangeContent= false;
      this.ATT_ADJ_confirm=false;
      this.woderpreport=false;
      this.activeMenu = ''; // 隱藏所有菜單

    },
    wo_mange() {
      this.SHOW_RATING_VERSON= false;
      this.SHOPSTcontent= false;
      this.SNLISTcontent= false;
      this.PDSNLISTcontent= false;
      this.SHOW_eff_performance= false;
      this.SHOW_overflow_performance= false;
      this.SHOW_WO_VERSON= false;
      this.fqc_mangeContent = false;
      this.SHOW_PD_VERSON= false,
      this.showyear= false,
      this.showCLASS= true,
      this.showDemoContent = false;
      this.seat_mangeContent = false;
      this.wo_mangeContent = true;
      this.wo_selectment= false;
      this.showRealTimeContent = false;
      this.staff_mangeContent = false;
      this.ATT_AbnormalContent = false;
      this.ATT_timeContent = false;
      this.isLoggedIn= false;
      this.CARD_mangeContent= false;
      this.shift_mangeContent= false;
      this.fetchDPData();
      this.fetchData();
      this.ATT_ADJ_confirm=false;
      this.woderpreport=false;
      this.activeMenu = ''; // 隱藏所有菜單
    },
    seat_mange() {
      this.SHOW_RATING_VERSON= false;
      this.SHOPSTcontent= false;
      this.SNLISTcontent= false;
      this.PDSNLISTcontent= false;
      this.SHOW_eff_performance= false;
      this.SHOW_overflow_performance= false;
      this.SHOW_WO_VERSON= false;
      this.fqc_mangeContent = false;
      this.SHOW_PD_VERSON= false,
      this.showyear= false,
      this.showCLASS= true,
      this.showDemoContent = false;
      this.seat_mangeContent = true;
      this.showRealTimeContent = false;
      this.wo_mangeContent = false;
      this.wo_selectment= false;
      this.staff_mangeContent = false;
      this.ATT_AbnormalContent = false;
      this.ATT_timeContent = false;
      this.isLoggedIn= false;
      this.postData();
      this.CARD_mangeContent= false;
      this.shift_mangeContent= false;
      this.ATT_ADJ_confirm=false;
      this.woderpreport=false;
      this.activeMenu = ''; // 隱藏所有菜單
    },
    staff_mange() {
      this.SHOW_RATING_VERSON= false;
      this.SHOPSTcontent= false;
      this.SNLISTcontent= false;
      this.PDSNLISTcontent= false;
      this.SHOW_eff_performance= false;
      this.SHOW_overflow_performance= false;
      this.SHOW_WO_VERSON= false;
      this.fqc_mangeContent = false;
      this.SHOW_PD_VERSON= false,
      this.showyear= false,
      this.showCLASS= false,
      this.showDemoContent = false;
      this.seat_mangeContent = false;
      this.showRealTimeContent = false;
      this.wo_mangeContent = false;
      this.wo_selectment= false;
      this.staff_mangeContent = true;
      this.ATT_AbnormalContent = false;
      this.ATT_timeContent = false;
      this.isLoggedIn= false;
      this.staff_data();
      this.CARD_mangeContent= false;
      this.shift_mangeContent= false;
      this.ATT_ADJ_confirm=false;
      this.woderpreport=false;
      this.activeMenu = ''; // 隱藏所有菜單
      
    },
    ATT_Abnormal(){
      this.SHOW_RATING_VERSON= false;
      this.SHOPSTcontent= false;
      this.SNLISTcontent= false;
      this.PDSNLISTcontent= false;
      this.SHOW_eff_performance= false;
      this.SHOW_overflow_performance= false;
      this.SHOW_WO_VERSON= false;
      this.fqc_mangeContent = false;
      this.SHOW_PD_VERSON= false,
      this.showyear= false,
      this.showCLASS= false,
      this.showDemoContent = false;
      this.seat_mangeContent = false;
      this.showRealTimeContent = false;
      this.wo_mangeContent = false;
      this.wo_selectment= false;
      this.staff_mangeContent = false;
      this.ATT_AbnormalContent = true;
      this.ATT_timeContent = false;
      this.isLoggedIn= false;
      this.ATT_Abnorma_data();
      this.CARD_mangeContent= false;
      this.shift_mangeContent= false;
      this.ATT_ADJ_confirm=false;
      this.woderpreport=false;
      this.activeMenu = ''; // 隱藏所有菜單
 

    },
    ATT_timebt_confirm(){
      this.SHOW_RATING_VERSON= false;
      this.SHOPSTcontent= false;
      this.SNLISTcontent= false;
      this.PDSNLISTcontent= false;
      this.SHOW_eff_performance= false;
      this.SHOW_overflow_performance= false;
      this.SHOW_WO_VERSON= false;
      this.fqc_mangeContent = false;
      this.SHOW_PD_VERSON= false,
      this.showyear= false,
      this.showCLASS= false,
      this.showDemoContent = false;
      this.seat_mangeContent = false;
      this.showRealTimeContent = false;
      this.wo_mangeContent = false;
      this.wo_selectment= false;
      this.staff_mangeContent = false;
      this.ATT_AbnormalContent = false;
      this.ATT_timeContent = false;
      this.isLoggedIn= false;
      this.att_hr_SUM_ADJ();
      this.CARD_mangeContent= false;
      this.shift_mangeContent= false;
      this.ATT_ADJ_confirm=true;
      this.woderpreport=false;
      this.activeMenu = ''; // 隱藏所有菜單
    },
    ATT_timebt(){
      this.SHOW_RATING_VERSON= false;
      this.SHOPSTcontent= false;
      this.SNLISTcontent= false;
      this.PDSNLISTcontent= false;
      this.SHOW_eff_performance= false;
      this.SHOW_overflow_performance= false;
      this.SHOW_WO_VERSON= false;
      this.fqc_mangeContent = false;
      this.SHOW_PD_VERSON= false,
      this.showyear= false,
      this.showCLASS= false,
      this.showDemoContent = false;
      this.seat_mangeContent = false;
      this.showRealTimeContent = false;
      this.wo_mangeContent = false;
      this.wo_selectment= false;
      this.staff_mangeContent = false;
      this.ATT_AbnormalContent = false;
      this.ATT_timeContent = true;
      this.isLoggedIn= false;
      this.att_hr_SUM_data();
      this.CARD_mangeContent= false;
      this.shift_mangeContent= false;
      this.ATT_ADJ_confirm=false;
      this.woderpreport=false;
      this.activeMenu = ''; // 隱藏所有菜單
     

    },
    CARD_mange(){
      this.SHOW_RATING_VERSON= false;
      this.SHOPSTcontent= false;
      this.SNLISTcontent= false;
      this.PDSNLISTcontent= false;
      this.SHOW_eff_performance= false;
      this.SHOW_overflow_performance= false;
      this.SHOW_WO_VERSON= false;
      this.fqc_mangeContent = false;
      this.SHOW_PD_VERSON= false,
      this.showyear= false,
      this.showCLASS= true,
      this.showDemoContent = false;
      this.seat_mangeContent = false;
      this.showRealTimeContent = false;
      this.wo_mangeContent = false;
      this.wo_selectment= false;
      this.staff_mangeContent = false;
      this.ATT_AbnormalContent = false;
      this.ATT_timeContent = false;
      this.isLoggedIn= false;
      this.CARD_mangeContent= true;
      this.shift_mangeContent= false;
       this.machine_card=null;
       this.selectedmachine='';
       this.ATT_ADJ_confirm=false;
       this.woderpreport=false;
               this.activeMenu = ''; // 隱藏所有菜單

    },
    shift_mange(){
      this.SHOW_RATING_VERSON= false;
      this.SHOPSTcontent= false;
      this.SNLISTcontent= false;
      this.PDSNLISTcontent= false;
      this.SHOW_eff_performance= false;
      this.SHOW_overflow_performance= false;
this.SHOW_WO_VERSON= false;
this.fqc_mangeContent = false;
this.SHOW_PD_VERSON= false,
this.showyear= false,
this.showCLASS= false,
this.showDemoContent = false;
this.seat_mangeContent = false;
this.showRealTimeContent = false;
this.wo_mangeContent = false;
this.wo_selectment= false;
this.staff_mangeContent = false;
this.ATT_AbnormalContent = false;
this.ATT_timeContent = false;
this.isLoggedIn= false;
this.CARD_mangeContent= false;
this.shift_mangeContent= true;
 this.machine_card=null;
 this.selectedmachine='';
 this.ATT_ADJ_confirm=false;
 this.woderpreport=false;
 this.shift_data();
 this.activeMenu = ''; // 隱藏所有菜單
},
    handleInputChange() {
      this.setCookie('selectedArea', this.selectedArea, 30); // 在這裡，30 是 cookie 的有效期（天）
      this.setCookie('selectedD', this.selectedD, 30); // 在這裡，30 是 cookie 的有效期（天）
      this.setCookie('selectedS', this.selectedS, 30); // 在這裡，30 是 cookie 的有效期（天）
      this.setCookie('selectedC', this.selectedC, 30); // 在這裡，30 是 cookie 的有效期（天）
      this.setCookie('selectedL', this.selectedL, 30); // 在這裡，30 是 cookie 的有效期（天）
      // 在这里添加条件语句
      if (this.seat_mangeContent) {
            this.postData();
          }
          if (this.staff_mangeContent) {
            this.staff_data();
          }
          if (this.showRealTimeContent) {
            this.fetchData();
          } 
          if (this.wo_mangeContent) {
            this.fetchData();
            this.fetchDPData();


          }
          if (this.fqc_mangeContent) {
            this.fetchData();
            this.RATING_fetchData()
       
          } if (this.SHOPSTcontent) {
            this.fetchData();
       
          }
 
 

    },

    async fetchData() {
      if (this.selectedL) {
  this.selectedDepartment = this.selectedD + 'D' + this.selectedS + 'S' + this.selectedC + '-' + this.selectedL + 'C';
} else {
  this.selectedDepartment = this.selectedD + 'D' + this.selectedS + 'S' + this.selectedC + 'C';
}

if (this.selectedD && this.selectedS && this.selectedC) {

  
  this.loading = true;
  const apiUrl1 = `http://192.168.207.17:5024/api/READWOID?area=${this.selectedArea}&department=${this.selectedDepartment}`;
  const apiUrl2 = `http://192.168.207.17:5024/api/Query2?area=${this.selectedArea}&department=${this.selectedDepartment}`;

  // 使用 Promise.all 并行发起两个请求
  Promise.all([
    fetch(apiUrl1),
    fetch(apiUrl2)
  ])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => {
      // data[0] 包含第一个请求的响应数据
      // data[1] 包含第二个请求的响应数据
      this.realTimeData = data[0];
      this.QUERRYTIME = data[1];
    })
    .catch(error => console.error('Error fetching data:', error))
        .finally(() => {
          this.loading = false;
          this.fetchOnlineData();
          this.fetchDPData();  
  
        });
      }
},

    fetchData2() {
      const apiUrl = `http://192.168.207.17:5024/api/READWOID?area=${this.selectedArea}&department=${this.selectedDepartment}`;

      // Assuming you are using fetch API
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          this.realTimeData = data;
        })
        .catch(error => console.error('Error fetching data:', error));  
        this.fetchDPData();  
    },
    fetchData3() {

      if (this.selectedD && this.selectedS && this.selectedC) {
        console.log('TIME:',  this.currentTime)
        if (this.selectedL) {
         this.selectedDepartment = this.selectedD + 'D' + this.selectedS + 'S' + this.selectedC + '-' + this.selectedL + 'C';
         } else {
            this.selectedDepartment = this.selectedD + 'D' + this.selectedS + 'S' + this.selectedC + 'C';
           }

  const apiUrl1 = `http://192.168.207.17:5024/api/READWOID?area=${this.selectedArea}&department=${this.selectedDepartment}`;
  const apiUrl2 = `http://192.168.207.17:5024/api/Query2?area=${this.selectedArea}&department=${this.selectedDepartment}`;

  // 使用 Promise.all 并行发起两个请求
  Promise.all([
    fetch(apiUrl1),
    fetch(apiUrl2)
  ])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => {
      // data[0] 包含第一个请求的响应数据
      // data[1] 包含第二个请求的响应数据
      this.realTimeData = data[0];
      this.QUERRYTIME = data[1];
    })
    .catch(error => console.error('Error fetching data:', error))
        .finally(() => {
          this.fetchDPData();  
          this.fetchOnlineData();

        });
      }
},
getCurrentDate() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()-1).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    login() {
      // 这里进行用户名和密码的验证
      if (this.username === 'admin' && this.password === 'admin') {
        this.isLoggedIn = false;
        this.power='T'
        this.power='T'
      } else {
        alert('Invalid username or password');
      }
    },
    logout() {
      // 这里进行用户名和密码的验证

        this.power='F'
        this.power='F'
  
    },
    savePreference() {
      // 保存偏好設置到 Cookie 中

    },
    setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    },
    getCookie(name) {
      const cname = name + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(';');
      for (let i = 0; i < cookieArray.length; i++) {
        let c = cookieArray[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(cname) === 0) {
          return c.substring(cname.length, c.length);
        }
      }
      return "";
    },
    setCookie2(name, value, days = 7) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    },
    getCookie2(name) {
      const cookieName = name + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(';');
      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
          return cookie.substring(cookieName.length, cookie.length);
        }
      }
      return null;
    },

  },
  created() {

    // 在组件创建时检查是否有 Cookie 记录
    const savedState = this.getCookie2('showInSecondTable');
    if (savedState) {
      this.showInSecondTable = JSON.parse(savedState);
    }
   //  console.log('showInSecondTable:',  this.showInSecondTable)
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yyyy = yesterday.getFullYear();
    const mm = String(yesterday.getMonth() + 1).padStart(2, '0'); // 加一是因为月份从0开始计数
    const dd = String(yesterday.getDate()).padStart(2, '0');
    this.selectedDate = `${yyyy}-${mm}-${dd}`;
    const savedselectedArea= this.getCookie('selectedArea');
    const savedsselectedD= this.getCookie('selectedD');
    const savedsselectedS= this.getCookie('selectedS');
    const savedselectedC= this.getCookie('selectedC');
    const savedselectedL= this.getCookie('selectedL');
    //const savedshowInSecondTable= this.getCookie2('showInSecondTable');
   // this.showInSecondTable = savedshowInSecondTable;
   // console.log('selectedD:',  this.showInSecondTable)

    if (savedselectedArea) {
      this.selectedArea = savedselectedArea;
    }
    if (savedsselectedD) {
      this.selectedD = savedsselectedD;
    }
    if (savedsselectedS) {
      this.selectedS = savedsselectedS;
    }
    if (savedselectedC) {
      this.selectedC = savedselectedC;
    }
    if (savedselectedL) {
      this.selectedL = savedselectedL;
    }   

    this.MFG_D = this.getCurrentDate();
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
    // Refresh data every minute
    setInterval(() => {
      if (this.showRealTimeContent) {
        this.fetchData3();

      }
    }, 15000);


    
  },

  
});