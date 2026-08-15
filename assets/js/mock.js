/* ============================================================
   Campus Life System · Mock Data
   ============================================================ */
window.CAMPUS = window.CAMPUS || {};

CAMPUS.mock = {
  currentUser: {
    id: "S2024001", name: "陈思远", role: "student",
    avatar: "陈", college: "计算机科学与技术学院", major: "软件工程", grade: "2024级",
    dorm: "明德楼 A-312", phone: "138****6688", email: "chensy@stu.edu.cn"
  },

  stats: {
    student: [
      { key: "dorm", label: "宿舍水电", value: "¥186.50", trend: "+12%", icon: "home", trendUp: true },
      { key: "meal", label: "本月餐费", value: "¥1,328", trend: "-8%", icon: "utensils", trendUp: false },
      { key: "repair", label: "进行中工单", value: "2", trend: "待处理", icon: "wrench", trendUp: true },
      { key: "access", label: "本月出入", value: "186次", trend: "+15%", icon: "door", trendUp: true }
    ],
    staff: [
      { key: "attend", label: "本月出勤", value: "98.6%", trend: "+1.2%", icon: "calendar", trendUp: true },
      { key: "notice", label: "已发通知", value: "24", trend: "+3", icon: "bell", trendUp: true },
      { key: "repair", label: "办公报修", value: "1", trend: "处理中", icon: "wrench", trendUp: true },
      { key: "resource", label: "借用中物资", value: "5", trend: "正常", icon: "box", trendUp: true }
    ],
    admin: [
      { key: "users", label: "系统用户", value: "12,486", trend: "+128", icon: "users", trendUp: true },
      { key: "tickets", label: "待派工单", value: "37", trend: "+5", icon: "ticket", trendUp: true },
      { key: "finance", label: "本月营收", value: "¥8.62M", trend: "+6.4%", icon: "wallet", trendUp: true },
      { key: "uptime", label: "系统可用率", value: "99.98%", trend: "稳定", icon: "activity", trendUp: true }
    ]
  },

  dorm: {
    info: { building: "明德楼", room: "A-312", type: "四人间", area: "32㎡", floor: 3, beds: 4, used: 4 },
    roommates: [
      { name: "陈思远", bed: "1号床", dept: "软件工程", phone: "138****6688", isMe: true },
      { name: "林浩然", bed: "2号床", dept: "软件工程", phone: "139****1234" },
      { name: "王俊杰", bed: "3号床", dept: "网络工程", phone: "137****5678" },
      { name: "赵明轩", bed: "4号床", dept: "数据科学", phone: "136****9012" }
    ],
    utilities: [
      { month: "2026-07", electric: 86.5, water: 24.3, total: 110.8, status: "已结清" },
      { month: "2026-06", electric: 92.1, water: 28.6, total: 120.7, status: "已结清" },
      { month: "2026-05", electric: 78.4, water: 22.1, total: 100.5, status: "已结清" },
      { month: "2026-04", electric: 65.8, water: 18.9, total: 84.7, status: "已结清" }
    ],
    inspections: [
      { date: "2026-08-10", score: 92, items: "整洁/安全/纪律", result: "优秀", inspector: "李辅导员" },
      { date: "2026-07-15", score: 88, items: "整洁/安全/纪律", result: "良好", inspector: "李辅导员" },
      { date: "2026-06-20", score: 95, items: "整洁/安全/纪律", result: "优秀", inspector: "李辅导员" }
    ]
  },

  dining: {
    balance: 328.50,
    subsidy: 60.00,
    halls: [
      { id: "h1", name: "第一食堂", open: "06:30-20:30", rating: 4.6, crowd: "适中", distance: "320m" },
      { id: "h2", name: "第二食堂", open: "06:00-21:00", rating: 4.4, crowd: "拥挤", distance: "580m" },
      { id: "h3", name: "清真食堂", open: "06:30-19:30", rating: 4.8, crowd: "宽松", distance: "720m" },
      { id: "h4", name: "风味餐厅", open: "10:00-22:00", rating: 4.7, crowd: "适中", distance: "450m" }
    ],
    menus: [
      { time: "早餐", items: [
        { name: "豆浆+油条", price: 4.5, hall: "第一食堂", cal: 320 },
        { name: "鸡蛋灌饼", price: 6, hall: "第一食堂", cal: 410 },
        { name: "小米粥+包子", price: 5.5, hall: "第二食堂", cal: 280 }
      ]},
      { time: "午餐", items: [
        { name: "红烧肉盖饭", price: 13, hall: "第一食堂", cal: 680, hot: true },
        { name: "酸菜鱼套餐", price: 16, hall: "风味餐厅", cal: 540, hot: true },
        { name: "麻辣香锅", price: 18, hall: "风味餐厅", cal: 720 },
        { name: "番茄牛腩面", price: 12, hall: "第二食堂", cal: 520 }
      ]},
      { time: "晚餐", items: [
        { name: "黄焖鸡米饭", price: 14, hall: "第一食堂", cal: 580 },
        { name: "砂锅米线", price: 11, hall: "第二食堂", cal: 460 },
        { name: "烤鱼双人餐", price: 38, hall: "风味餐厅", cal: 880, hot: true }
      ]}
    ],
    orders: [
      { id: "M20260815001", time: "2026-08-15 12:08", items: "红烧肉盖饭×1, 紫菜蛋花汤×1", amount: 15, status: "已完成" },
      { id: "M20260814002", time: "2026-08-14 18:32", items: "黄焖鸡米饭×1, 可乐×1", amount: 16, status: "已完成" },
      { id: "M20260813003", time: "2026-08-13 12:15", items: "酸菜鱼套餐×1", amount: 16, status: "已完成" },
      { id: "M20260812004", time: "2026-08-12 19:45", items: "砂锅米线×2", amount: 22, status: "已完成" }
    ]
  },

  repairs: [
    { id: "RP20260815001", type: "宿舍报修", title: "空调不制冷", desc: "宿舍空调开启后无冷风，已尝试重启无效", location: "明德楼 A-312", urgency: "紧急", status: "处理中", created: "2026-08-15 09:23", handler: "张师傅", progress: 60 },
    { id: "RP20260812002", type: "宿舍报修", title: "卫生间水龙头漏水", desc: "洗手台水龙头持续滴水", location: "明德楼 A-312", urgency: "普通", status: "待派工", created: "2026-08-12 20:11", handler: null, progress: 10 },
    { id: "RP20260808003", type: "公共报修", title: "走廊灯不亮", desc: "三楼走廊东侧声控灯不亮", location: "明德楼 3F东", urgency: "普通", status: "已完成", created: "2026-08-08 14:50", handler: "李师傅", progress: 100 },
    { id: "RP20260730004", type: "宿舍报修", title: "床铺护栏松动", desc: "上铺护栏螺丝松动", location: "明德楼 A-312", urgency: "普通", status: "已完成", created: "2026-07-30 10:20", handler: "王师傅", progress: 100 }
  ],

  access: [
    { id: "AC001", time: "2026-08-15 21:42", gate: "南校门", direction: "入校", method: "人脸识别", status: "通过" },
    { id: "AC002", time: "2026-08-15 18:05", gate: "南校门", direction: "出校", method: "校园卡", status: "通过" },
    { id: "AC003", time: "2026-08-15 12:30", gate: "东校门", direction: "入校", method: "人脸识别", status: "通过" },
    { id: "AC004", time: "2026-08-14 22:10", gate: "南校门", direction: "入校", method: "校园卡", status: "通过" },
    { id: "AC005", time: "2026-08-14 07:15", gate: "北校门", direction: "出校", method: "人脸识别", status: "通过" }
  ],
  accessPass: { total: 186, normal: 184, abnormal: 2, lastGate: "南校门", lastTime: "2026-08-15 21:42" },

  social: {
    posts: [
      { id: "P001", author: "苏雨晴", avatar: "苏", time: "10分钟前", content: "图书馆四楼自习室开放啦，环境超好，有空调有插座，速来！", likes: 128, comments: 32, tags: ["学习", "图书馆"], liked: false },
      { id: "P002", author: "周晨曦", avatar: "周", time: "32分钟前", content: "出二手自行车一辆，九成新，变速山地车，原价1200现价500，需要的同学私信我～", likes: 45, comments: 18, tags: ["二手交易"], liked: false },
      { id: "P003", author: "吴梦瑶", avatar: "吴", time: "1小时前", content: "明天晚上7点体育馆有篮球友谊赛，计算机学院vs电子学院，欢迎来观战！", likes: 89, comments: 24, tags: ["体育", "活动"], liked: true },
      { id: "P004", author: "刘子轩", avatar: "刘", time: "2小时前", content: "求推荐校内靠谱的考研自习室，最好能长期占座的，谢谢各位学长学姐～", likes: 56, comments: 41, tags: ["考研", "求助"], liked: false },
      { id: "P005", author: "黄思琪", avatar: "黄", time: "3小时前", content: "失物招领：在第一食堂二楼捡到一张校园卡，卡号尾号3856，请失主联系我", likes: 72, comments: 12, tags: ["失物招领"], liked: false }
    ],
    activities: [
      { id: "A001", title: "2026年秋季社团招新", time: "08-20 14:00", location: "大学生活动中心", organizer: "校学生会", count: 1280, status: "报名中" },
      { id: "A002", title: "ACM程序设计竞赛校选", time: "08-22 09:00", location: "计算机楼B201", organizer: "计算机学院", count: 186, status: "报名中" },
      { id: "A003", title: "校园歌手大赛初赛", time: "08-25 18:30", location: "大礼堂", organizer: "校团委", count: 96, status: "报名中" },
      { id: "A004", title: "新生开学典礼", time: "09-01 09:00", location: "体育场", organizer: "校长办公室", count: 0, status: "即将开始" }
    ],
    groups: [
      { name: "软件工程2024", members: 168, new: 12 },
      { name: "考研交流群", members: 456, new: 23 },
      { name: "校园美食探店", members: 892, new: 5 },
      { name: "失物招领中心", members: 2340, new: 8 }
    ]
  },

  staff: {
    profile: { id: "T2010086", name: "李文博", role: "staff", avatar: "李", dept: "计算机科学与技术学院", title: "副教授", office: "计算机楼 A-508", phone: "139****8866", email: "liwb@edu.cn" },
    attendance: {
      today: { checkIn: "07:58", checkOut: null, status: "在岗", duration: "已工作 8h 12m" },
      month: { total: 22, normal: 21, late: 1, early: 0, absent: 0, rate: 98.6 },
      records: [
        { date: "2026-08-15", checkIn: "07:58", checkOut: "--", status: "在岗", duration: "8h 12m" },
        { date: "2026-08-14", checkIn: "08:02", checkOut: "17:35", status: "正常", duration: "9h 33m" },
        { date: "2026-08-13", checkIn: "07:55", checkOut: "18:10", status: "正常", duration: "10h 15m" },
        { date: "2026-08-12", checkIn: "08:15", checkOut: "17:30", status: "迟到", duration: "9h 15m" },
        { date: "2026-08-11", checkIn: "07:50", checkOut: "17:28", status: "正常", duration: "9h 38m" }
      ]
    },
    notices: [
      { id: "N001", title: "关于2026年秋季学期开学教学安排的通知", scope: "全院", published: "2026-08-14", read: 186, total: 240, status: "已发布" },
      { id: "N002", title: "计算机学院研究生招生宣讲会通知", scope: "毕业班", published: "2026-08-12", read: 92, total: 120, status: "已发布" },
      { id: "N003", title: "关于期末考试监考教师安排的公示", scope: "全体教师", published: "2026-07-20", read: 56, total: 68, status: "已发布" },
      { id: "N004", title: "2026年暑期科研立项申报通知", scope: "科研团队", published: "2026-06-15", read: 28, total: 32, status: "已归档" }
    ],
    officeRepairs: [
      { id: "OR001", title: "办公室空调异响", location: "计算机楼 A-508", status: "处理中", created: "2026-08-13", handler: "后勤张师傅", progress: 50 },
      { id: "OR002", title: "投影仪色彩异常", location: "计算机楼 A-508", status: "已完成", created: "2026-07-28", handler: "信息中心", progress: 100 }
    ],
    resources: {
      venues: [
        { id: "V001", name: "计算机楼B201会议室", capacity: 60, status: "可借用", equipment: "投影/音响/空调" },
        { id: "V002", name: "学院报告厅", capacity: 200, status: "已占用", equipment: "LED屏/音响/同传" },
        { id: "V003", name: "实验室A301", capacity: 30, status: "可借用", equipment: "实验设备/电脑" },
        { id: "V004", name: "小型研讨室B105", capacity: 12, status: "可借用", equipment: "白板/电视" }
      ],
      items: [
        { id: "IT001", name: "便携投影仪", total: 8, available: 3, myBorrow: 1 },
        { id: "IT002", name: "无线麦克风", total: 15, available: 9, myBorrow: 2 },
        { id: "IT003", name: "翻页笔", total: 20, available: 14, myBorrow: 1 },
        { id: "IT004", name: "笔记本电脑", total: 12, available: 5, myBorrow: 1 },
        { id: "IT005", name: "移动白板", total: 6, available: 4, myBorrow: 0 }
      ],
      myBorrows: [
        { id: "BR001", item: "便携投影仪", count: 1, borrowDate: "2026-08-10", returnDate: "2026-08-20", status: "使用中" },
        { id: "BR002", item: "无线麦克风", count: 2, borrowDate: "2026-08-12", returnDate: "2026-08-19", status: "使用中" },
        { id: "BR003", item: "翻页笔", count: 1, borrowDate: "2026-08-14", returnDate: "2026-08-16", status: "使用中" },
        { id: "BR004", item: "笔记本电脑", count: 1, borrowDate: "2026-08-08", returnDate: "2026-08-22", status: "使用中" },
        { id: "BR005", item: "会议室B201", count: 1, borrowDate: "2026-08-15", returnDate: "2026-08-15", status: "今日使用" }
      ]
    }
  },

  admin: {
    users: [
      { id: "S2024001", name: "陈思远", role: "学生", dept: "计算机学院", status: "正常", created: "2024-09-01", last: "2026-08-15" },
      { id: "S2024002", name: "林浩然", role: "学生", dept: "计算机学院", status: "正常", created: "2024-09-01", last: "2026-08-15" },
      { id: "T2010086", name: "李文博", role: "教职工", dept: "计算机学院", status: "正常", created: "2010-07-15", last: "2026-08-15" },
      { id: "T2015042", name: "张慧敏", role: "教职工", dept: "电子学院", status: "正常", created: "2015-09-01", last: "2026-08-14" },
      { id: "A0001", name: "系统管理员", role: "管理员", dept: "信息中心", status: "正常", created: "2020-01-01", last: "2026-08-15" },
      { id: "S2023108", name: "苏雨晴", role: "学生", dept: "外国语学院", status: "冻结", created: "2023-09-01", last: "2026-07-20" },
      { id: "T2008033", name: "王建国", role: "教职工", dept: "数学学院", status: "正常", created: "2008-07-01", last: "2026-08-13" },
      { id: "S2024056", name: "周晨曦", role: "学生", dept: "经管学院", status: "正常", created: "2024-09-01", last: "2026-08-15" }
    ],
    tickets: [
      { id: "RP20260815001", type: "宿舍报修", title: "空调不制冷", requester: "陈思远", priority: "紧急", status: "处理中", assignee: "张师傅", created: "2026-08-15 09:23", sla: "2h内响应" },
      { id: "RP20260812002", type: "宿舍报修", title: "水龙头漏水", requester: "陈思远", priority: "普通", status: "待派工", assignee: null, created: "2026-08-12 20:11", sla: "24h内响应" },
      { id: "OR001", type: "办公报修", title: "空调异响", requester: "李文博", priority: "普通", status: "处理中", assignee: "张师傅", created: "2026-08-13 10:00", sla: "8h内响应" },
      { id: "NET001", type: "网络故障", title: "宿舍区网络中断", requester: "林浩然", priority: "紧急", status: "处理中", assignee: "网络组", created: "2026-08-15 14:20", sla: "30min内响应" },
      { id: "RP20260808003", type: "公共报修", title: "走廊灯不亮", requester: "陈思远", priority: "普通", status: "已完成", assignee: "李师傅", created: "2026-08-08 14:50", sla: "已闭环" }
    ],
    finance: {
      summary: { income: 8620000, expense: 5340000, net: 3280000, pending: 186000 },
      channels: [
        { name: "餐饮消费", amount: 3280000, ratio: 38, trend: "+8.2%" },
        { name: "住宿费用", amount: 1860000, ratio: 21.6, trend: "+2.1%" },
        { name: "学费杂费", amount: 2480000, ratio: 28.8, trend: "+5.4%" },
        { name: "其他收入", amount: 1000000, ratio: 11.6, trend: "-1.2%" }
      ],
      records: [
        { id: "F001", type: "收入", category: "餐饮消费", amount: 15, subject: "红烧肉盖饭", time: "2026-08-15 12:08", channel: "校园卡" },
        { id: "F002", type: "支出", category: "后勤维修", amount: 280, subject: "空调维修配件", time: "2026-08-15 10:30", channel: "对公转账" },
        { id: "F003", type: "收入", category: "住宿费用", amount: 110.8, subject: "7月水电费", time: "2026-08-10 09:00", channel: "校园卡" },
        { id: "F004", type: "支出", category: "办公采购", amount: 5600, subject: "投影仪采购", time: "2026-08-09 16:20", channel: "对公转账" },
        { id: "F005", type: "收入", category: "学费杂费", amount: 5800, subject: "新生学费", time: "2026-08-08 11:15", channel: "银行代扣" }
      ]
    },
    analytics: {
      userTrend: [12486, 12502, 12548, 12580, 12612, 12648, 12686, 12728, 12768, 12812, 12848, 12886],
      activeToday: 8642,
      moduleUsage: [
        { name: "餐饮服务", visits: 4862, ratio: 100 },
        { name: "宿舍管理", visits: 3286, ratio: 67 },
        { name: "门禁出行", visits: 2890, ratio: 59 },
        { name: "校园社交", visits: 2468, ratio: 51 },
        { name: "后勤报修", visits: 1286, ratio: 26 },
        { name: "考勤打卡", visits: 986, ratio: 20 }
      ],
      satisfaction: 4.6,
      peakHour: "12:00-13:00"
    },
    system: {
      health: { cpu: 32, memory: 58, disk: 46, network: 28, uptime: "99.98%", qps: 1286 },
      services: [
        { name: "认证服务", status: "运行中", latency: "32ms", uptime: "99.99%" },
        { name: "订单服务", status: "运行中", latency: "48ms", uptime: "99.98%" },
        { name: "门禁服务", status: "运行中", latency: "21ms", uptime: "100%" },
        { name: "消息服务", status: "降级", latency: "186ms", uptime: "99.82%" },
        { name: "数据分析", status: "运行中", latency: "128ms", uptime: "99.95%" }
      ],
      logs: [
        { time: "21:42:18", level: "INFO", source: "auth-service", msg: "用户 S2024001 登录成功" },
        { time: "21:38:05", level: "WARN", source: "message-service", msg: "消息队列积压超过阈值 1280" },
        { time: "21:32:46", level: "INFO", source: "order-service", msg: "订单 M20260815001 创建" },
        { time: "21:28:12", level: "ERROR", source: "payment-service", msg: "第三方支付回调超时，已重试" },
        { time: "21:18:33", level: "INFO", source: "access-service", msg: "门禁记录 AC001 写入" }
      ]
    },
    extensions: [
      { id: "ext-1", name: "智能问答助手", desc: "基于大模型的校园生活咨询助手", status: "已上线", version: "v2.1.0" },
      { id: "ext-2", name: "校园电商商城", desc: "校内学生二手交易与周边商户", status: "已上线", version: "v1.8.2" },
      { id: "ext-3", name: "在线心理咨询", desc: "匿名心理疏导与预约咨询", status: "灰度发布", version: "v0.9.1" },
      { id: "ext-4", name: "智能课表导入", desc: "教务系统课表自动同步与提醒", status: "已上线", version: "v3.0.4" },
      { id: "ext-5", name: "校园地图导航", desc: "室内外一体化AR导航", status: "开发中", version: "v0.2.0" },
      { id: "ext-6", name: "电子学生证", desc: "NFC校园卡与身份凭证", status: "规划中", version: "—" },
      { id: "ext-7", name: "校友联络平台", desc: "毕业校友社交与捐赠", status: "规划中", version: "—" },
      { id: "ext-8", name: "能源管理分析", desc: "全校园水电能耗可视化与节能", status: "开发中", version: "v0.5.0" }
    ]
  },

  notifications: [
    { id: 1, title: "宿舍报修进度更新", content: "您的工单 RP20260815001 已派工，张师傅预计30分钟内到达", time: "10分钟前", read: false, type: "repair" },
    { id: 2, title: "餐费充值到账", content: "校园卡充值 ¥200.00 已到账，当前余额 ¥328.50", time: "1小时前", read: false, type: "finance" },
    { id: 3, title: "门禁异常提醒", content: "检测到您的校园卡于 22:30 在北校门尝试刷卡，如非本人操作请及时挂失", time: "昨天", read: true, type: "security" },
    { id: 4, title: "宿舍卫生检查通知", content: "本周三 15:00 将进行宿舍卫生例行检查，请提前整理", time: "2天前", read: true, type: "dorm" }
  ]
};

/* 拓展增值功能接口预留 */
CAMPUS.extensions = {
  registry: [],
  register(ext) { this.registry.push(ext); console.log("[Extension] registered:", ext.name); },
  invoke(name, ...args) {
    const ext = this.registry.find(e => e.name === name);
    if (!ext) return Promise.reject({ code: "EXT_NOT_FOUND", message: `拓展 ${name} 未注册` });
    return ext.handler(...args);
  },
  list() { return this.registry.map(({ name, version, description }) => ({ name, version, description })); }
};