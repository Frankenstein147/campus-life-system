/* ============================================================
   Campus Life System · Core App JS
   ============================================================ */
window.CAMPUS = window.CAMPUS || {};

/* —— 图标库（内联 SVG，stroke 风格） —— */
CAMPUS.icons = {
  home: '<path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1V9.5z"/>',
  utensils: '<path d="M3 2v7a3 3 0 0 0 3 3v10M6 2v7M9 2v7a3 3 0 0 1-3 3M16 2v20M16 2c-2 0-3 2-3 4s1 4 3 4"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 1 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z"/>',
  door: '<path d="M3 21V3h14v18M3 21h14M7 12h2v2H7z"/>',
  chat: '<path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5z"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18M8 2v4M16 2v4"/>',
  bell: '<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',
  box: '<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.3 7L12 12l8.7-5M12 22V12"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  ticket: '<path d="M3 7v2a2 2 0 0 1 0 4v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a2 2 0 0 1 0-4V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zM13 5v14"/>',
  wallet: '<path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5M16 12h5v4h-5a2 2 0 0 1 0-4z"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  chart: '<path d="M3 3v18h18M7 16l4-6 3 4 5-8"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>',
  menu: '<path d="M3 12h18M3 6h18M3 18h18"/>',
  sun: '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
  trash: '<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  x: '<path d="M18 6L6 18M6 6l12 12"/>',
  chevronRight: '<path d="M9 18l6-6-6-6"/>',
  chevronDown: '<path d="M6 9l6 6 6-6"/>',
  arrowUp: '<path d="M12 19V5M5 12l7-7 7 7"/>',
  arrowDown: '<path d="M12 5v14M19 12l-7 7-7-7"/>',
  arrowRight: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  map: '<path d="M1 6l7-3 8 3 7-3v15l-7 3-8-3-7 3V6zM8 3v15M16 6v15"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>',
  star: '<path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  zap: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
  grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
  layers: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
  cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
  wifi: '<path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M2 9a15 15 0 0 1 20 0M12 20h.01"/>',
  plug: '<path d="M12 22v-5M9 8V2M15 8V2M5 8h14v3a7 7 0 0 1-14 0V8z"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15zM20 22H6.5a2.5 2.5 0 0 1 0-5H20"/>',
  send: '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
  filter: '<path d="M22 3H2l8 9v6l4 2v-8l8-9z"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
  refresh: '<path d="M23 4v6h-6M1 20v-6h6M3.5 9a9 9 0 0 1 14.8-3.2L23 10M20.5 15a9 9 0 0 1-14.8 3.2L1 14"/>',
  alert: '<path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',
  more: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4M9 6h.01M15 6h.01M9 10h.01M15 10h.01M9 14h.01M15 14h.01"/>',
  graduation: '<path d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>'
};

CAMPUS.icon = function (name, cls) {
  const path = CAMPUS.icons[name] || "";
  cls = cls || "icon";
  return '<svg class="' + cls + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + path + '</svg>';
};

/* —— 工具函数 —— */
CAMPUS.util = {
  $(s, r) { return (r || document).querySelector(s); },
  $$(s, r) { return Array.from((r || document).querySelectorAll(s)); },
  el(tag, attrs, ...kids) {
    const e = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      if (k === "class") e.className = attrs[k];
      else if (k === "html") e.innerHTML = attrs[k];
      else if (k === "text") e.textContent = attrs[k];
      else if (k.startsWith("on") && typeof attrs[k] === "function") e.addEventListener(k.slice(2), attrs[k]);
      else e.setAttribute(k, attrs[k]);
    }
    kids.flat().forEach(k => { if (k == null) return; e.append(k.nodeType ? k : document.createTextNode(k)); });
    return e;
  },
  formatMoney(n) { return "¥" + Number(n).toLocaleString("zh-CN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); },
  formatDate(d) { return new Date(d).toLocaleDateString("zh-CN"); },
  relativeTime(t) {
    const diff = (Date.now() - new Date(t).getTime()) / 1000;
    if (diff < 60) return "刚刚";
    if (diff < 3600) return Math.floor(diff / 60) + "分钟前";
    if (diff < 86400) return Math.floor(diff / 3600) + "小时前";
    return Math.floor(diff / 86400) + "天前";
  },
  uid() { return "id" + Math.random().toString(36).slice(2, 10); },
  debounce(fn, ms) { let t; return function (...a) { clearTimeout(t); t = setTimeout(() => fn.apply(this, a), ms); }; }
};

/* —— Toast —— */
CAMPUS.toast = function (msg, type) {
  let wrap = document.querySelector(".toast-wrap");
  if (!wrap) { wrap = document.createElement("div"); wrap.className = "toast-wrap"; document.body.appendChild(wrap); }
  const icons = { success: "check", warning: "alert", danger: "x", info: "bell" };
  const t = document.createElement("div");
  t.className = "toast toast-" + (type || "info");
  t.innerHTML = CAMPUS.icon(icons[type || "info"] || "bell", "icon") + '<span style="font-size:13px;font-weight:500">' + msg + "</span>";
  wrap.appendChild(t);
  setTimeout(() => { t.style.opacity = "0"; t.style.transform = "translateX(20px)"; setTimeout(() => t.remove(), 300); }, 2800);
};

/* —— Modal —— */
CAMPUS.modal = function (opts) {
  const overlay = CAMPUS.util.el("div", { class: "modal-overlay" });
  const modal = CAMPUS.util.el("div", { class: "modal", style: opts.width ? "max-width:" + opts.width : "" });
  modal.innerHTML =
    '<div class="modal-header"><h3 style="margin:0;font-size:16px">' + (opts.title || "") + '</h3><button class="modal-close">' + CAMPUS.icon("x", "icon") + "</button></div>" +
    '<div class="modal-body">' + (opts.body || "") + "</div>" +
    (opts.footer !== false ? '<div class="modal-footer">' + (opts.footer || '<button class="btn btn-ghost js-close">取消</button><button class="btn btn-primary js-ok">确定</button>') + "</div>" : "");
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  const close = () => overlay.remove();
  modal.querySelector(".modal-close").onclick = close;
  modal.querySelectorAll(".js-close").forEach(b => b.onclick = close);
  modal.querySelectorAll(".js-ok").forEach(b => b.onclick = () => { if (opts.onOk) opts.onOk(modal); else close(); });
  overlay.addEventListener("click", e => { if (e.target === overlay && opts.closeOnOverlay !== false) close(); });
  if (opts.onMount) opts.onMount(modal);
  return { close, modal };
};

/* —— 主题切换 —— */
CAMPUS.theme = {
  get() { return localStorage.getItem("campus-theme") || "light"; },
  set(t) { localStorage.setItem("campus-theme", t); document.documentElement.setAttribute("data-theme", t); },
  toggle() { this.set(this.get() === "light" ? "dark" : "light"); }
};

/* —— 应用 Shell 渲染 —— */
CAMPUS.shell = {
  render(opts) {
    const { role, nav, title, active } = opts;
    document.documentElement.setAttribute("data-role", role);
    CAMPUS.theme.set(CAMPUS.theme.get());

    const sidebarNavHtml = nav.map(section => {
      const items = section.items.map(it => {
        const badge = it.badge ? '<span class="nav-badge">' + it.badge + "</span>" : "";
        return '<a class="nav-item' + (it.key === active ? " active" : "") + '" href="' + it.href + '">' +
          CAMPUS.icon(it.icon, "icon") + '<span class="nav-label">' + it.label + "</span>" + badge + "</a>";
      }).join("");
      return '<div class="nav-section"><div class="nav-section-title">' + section.title + "</div>" + items + "</div>";
    }).join("");

    const user = role === "student" ? CAMPUS.mock.currentUser : (role === "staff" ? CAMPUS.mock.staff.profile : { name: "系统管理员", avatar: "管", id: "A0001" });
    const roleLabel = { student: "学生用户", staff: "教职工", admin: "管理员" }[role];

    const app = document.createElement("div");
    app.className = "app";
    app.innerHTML =
      '<aside class="sidebar">' +
        '<div class="sidebar-brand"><div class="brand-logo">' + CAMPUS.icon("graduation", "icon-lg") + '</div><div class="brand-text">校园生活系统<small>Campus Life</small></div></div>' +
        '<nav class="sidebar-nav">' + sidebarNavHtml + "</nav>" +
        '<div class="sidebar-foot"><div class="sidebar-user">' +
          '<div class="avatar avatar-sm">' + user.avatar + "</div>" +
          '<div class="sidebar-user-info"><div class="sidebar-user-name">' + user.name + '</div><div class="sidebar-user-role">' + roleLabel + " · " + user.id + "</div></div>" +
          '<a href="../index.html" title="退出登录">' + CAMPUS.icon("logout", "icon-sm") + "</a>" +
        "</div></div>" +
      "</aside>" +
      '<header class="header">' +
        '<button class="header-toggle" id="navToggle">' + CAMPUS.icon("menu", "icon") + "</button>" +
        '<div class="header-title">' + title + "</div>" +
        '<div class="input-group header-search"><span class="input-icon">' + CAMPUS.icon("search", "icon-sm") + '</span><input class="input" placeholder="搜索功能、工单、用户…"></div>' +
        '<div class="header-actions">' +
          '<button class="header-action" id="themeToggle">' + CAMPUS.icon(CAMPUS.theme.get() === "dark" ? "sun" : "moon", "icon") + "</button>" +
          '<button class="header-action" id="notifBtn">' + CAMPUS.icon("bell", "icon") + '<span class="dot"></span></button>' +
          '<div class="avatar avatar-sm" style="margin-left:4px">' + user.avatar + "</div>" +
        "</div>" +
      "</header>" +
      '<main class="main" id="pageMain"></main>';

    document.body.prepend(app);
    const main = app.querySelector("#pageMain");

    app.querySelector("#navToggle").onclick = () => {
      if (window.innerWidth <= 768) app.classList.toggle("mobile-open");
      else app.classList.toggle("collapsed");
    };
    app.querySelector("#themeToggle").onclick = (e) => {
      CAMPUS.theme.toggle();
      e.currentTarget.innerHTML = CAMPUS.icon(CAMPUS.theme.get() === "dark" ? "sun" : "moon", "icon");
    };
    app.querySelector("#notifBtn").onclick = () => CAMPUS.shell.openNotifications();

    return main;
  },

  openNotifications() {
    const notifs = CAMPUS.mock.notifications;
    const body = notifs.map(n =>
      '<div style="padding:12px;border-bottom:1px solid var(--border);display:flex;gap:12px">' +
        '<div style="width:8px;height:8px;border-radius:50%;background:' + (n.read ? "var(--border-strong)" : "var(--accent)") + ';margin-top:6px;flex-shrink:0"></div>' +
        '<div style="flex:1"><div style="font-weight:600;font-size:13px">' + n.title + '</div><div style="color:var(--fg-muted);font-size:12px;margin:2px 0">' + n.content + '</div><div style="color:var(--fg-subtle);font-size:11px">' + n.time + "</div></div>" +
      "</div>"
    ).join("");
    CAMPUS.modal({ title: "消息通知", body: body || '<div class="empty">暂无通知</div>', footer: false, width: "420px" });
  },

  pageHead(breadcrumb, title, desc, actions) {
    const bc = breadcrumb.map((b, i) => {
      const sep = i < breadcrumb.length - 1 ? '<span class="breadcrumb-sep">' + CAMPUS.icon("chevronRight", "icon-sm") + "</span>" : "";
      return '<a href="' + (b.href || "#") + '">' + b.label + "</a>" + sep;
    }).join("");
    return '<div class="page-head"><div><div class="breadcrumb">' + bc + '</div><h1 class="page-title">' + title + '</h1>' + (desc ? '<p class="page-desc">' + desc + "</p>" : "") + "</div>" + (actions ? '<div class="flex gap-2">' + actions + "</div>" : "") + "</div>";
  },

  statCard(s) {
    const trendIcon = s.trendUp ? "arrowUp" : "arrowDown";
    const trendColor = s.trendUp ? "var(--success)" : "var(--danger)";
    return '<div class="stat-card">' +
      '<div class="stat-icon">' + CAMPUS.icon(s.icon, "icon") + "</div>" +
      '<p class="stat-label">' + s.label + "</p>" +
      '<p class="stat-value">' + s.value + "</p>" +
      '<span class="stat-trend" style="color:' + trendColor + '">' + CAMPUS.icon(trendIcon, "icon-sm") + s.trend + "</span>" +
    "</div>";
  },

  tag(text, type) { return '<span class="tag tag-' + (type || "") + '">' + text + "</span>"; },

  statusTag(status) {
    const map = { "已完成": "success", "已结清": "success", "通过": "success", "正常": "success", "在岗": "success", "运行中": "success", "已上线": "success", "可借用": "success", "使用中": "info", "今日使用": "info", "处理中": "info", "报名中": "info", "已发布": "info", "灰度发布": "warning", "待派工": "warning", "迟到": "warning", "降级": "warning", "拥挤": "warning", "即将开始": "warning", "开发中": "warning", "冻结": "danger", "异常": "danger", "已归档": "", "规划中": "", "宽松": "success", "适中": "info" };
    return '<span class="tag tag-' + (map[status] || "") + ' tag-dot">' + status + "</span>";
  },

  empty(text) { return '<div class="empty"><div class="empty-icon">' + CAMPUS.icon("box", "icon-lg") + "</div><p>" + (text || "暂无数据") + "</p></div>"; }
};

/* —— 拓展接口注册（演示） —— */
CAMPUS.extensions.register({
  name: "campus-qa",
  version: "1.0.0",
  description: "校园智能问答（演示）",
  handler(q) { return Promise.resolve({ answer: "（演示接口）关于「" + q + "」的智能回答将在此返回。", source: "extension:campus-qa" }); }
});