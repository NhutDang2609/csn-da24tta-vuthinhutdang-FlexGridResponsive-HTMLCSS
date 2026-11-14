/**
 * user.js - Quản lý người dùng (đăng ký / đăng nhập) cho Tiệm của Bơ
 * Lưu trữ bằng localStorage của trình duyệt (không dùng JSON).
 *
 * Nhúng vào cả sign-in.html và sign-up.html (trước đoạn gọi UserLib.init...):
 *   <script src="../js/user.js"></script>
 */
const UserLib = (function () {
  "use strict";

  const USERS_KEY = "tiembo_users";
  const SESSION_KEY = "tiembo_session";
  const HOME_PAGE = "../index.html";
  const LOGIN_PAGE = "sign-in.html";
  const REGISTER_PAGE = "sign-up.html";
  const ADMIN_PAGE = "quan-tri.html";
  const ACCOUNT_PAGE = "tai-khoan.html";

  /* =====================================================
   *  TIỆN ÍCH
   * ===================================================== */
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  // Gán style với !important để CSS của trang không ghi đè / ẩn mất thông báo
  function css(el, styles) {
    Object.keys(styles).forEach(function (k) {
      el.style.setProperty(k, styles[k], "important");
    });
  }

  const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
  const isPhone = (s) => /^0\d{9}$/.test(s);

  const COLORS = {
    success: { bg: "#d1e7dd", fg: "#0f5132", bd: "#badbcc" },
    error: { bg: "#f8d7da", fg: "#842029", bd: "#f5c2c7" },
    info: { bg: "#cff4fc", fg: "#055160", bd: "#b6effb",  },
  };

  /* =====================================================
   *  LƯU TRỮ
   * ===================================================== */
  function storageOK() {
    try {
      localStorage.setItem("__test__", "1");
      localStorage.removeItem("__test__");
      return true;
    } catch (e) {
      return false;
    }
  }

  // Mỗi thông tin của người dùng lưu thành một khóa riêng trong localStorage,
  // ví dụ:  tiembo_user|a@gmail.com|hoTen  =  "Nguyễn Văn A"
  // (không dùng JSON)
  const FIELDS = ["hoTen", "email", "gioiTinh", "dienThoai", "password", "ngayTao"];
  const userKey = (email, field) => "tiembo_user|" + email + "|" + field;

  function findUser(email) {
    if (localStorage.getItem(userKey(email, "password")) === null) return null;
    const user = {};
    FIELDS.forEach(function (f) {
      user[f] = localStorage.getItem(userKey(email, f)) || "";
    });
    return user;
  }

  function addUser(user) {
    FIELDS.forEach(function (f) {
      localStorage.setItem(userKey(user.email, f), user[f]);
    });
  }

  async function hashPassword(password) {
    if (window.crypto && window.crypto.subtle) {
      const data = new TextEncoder().encode(password);
      const buf = await window.crypto.subtle.digest("SHA-256", data);
      return Array.from(new Uint8Array(buf))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    }
    let h = 0;
    for (let i = 0; i < password.length; i++) {
      h = (h << 5) - h + password.charCodeAt(i);
      h |= 0;
    }
    return "fallback_" + h;
  }

  /* =====================================================
   *  THÔNG BÁO
   * ===================================================== */

  /* 1. Hộp thông báo ngay trong form */
  function showMessage(form, text, type, link) {
    let box = document.getElementById("alertMsg");
    if (!box) {
      box = document.createElement("div");
      box.id = "alertMsg";
      form.insertBefore(box, form.firstChild);
    }
    const c = COLORS[type] || COLORS.info;
    box.textContent = c.icon + " " + text;
    css(box, {
      display: "block",
      visibility: "visible",
      opacity: "1",
      padding: "10px 14px",
      margin: "0 0 14px 0",
      "border-radius": "6px",
      border: "1px solid " + c.bd,
      background: c.bg,
      color: c.fg,
      "font-size": "15px",
    });
    if (link) {
      const a = document.createElement("a");
      a.href = link.href;
      a.textContent = link.text;
      css(a, { "margin-left": "8px", "font-weight": "bold", "text-decoration": "underline", color: c.fg });
      box.appendChild(a);
    }
  }

  /* 2. Cửa sổ thông báo giữa màn hình (luôn nổi bật) */
  function popup(opts) {
    // opts: { type, title, text, buttonText, onClose, autoCloseMs }
    const old = document.getElementById("ub-popup");
    if (old) old.remove();

    const c = COLORS[opts.type] || COLORS.info;

    const overlay = document.createElement("div");
    overlay.id = "ub-popup";
    css(overlay, {
      position: "fixed", top: "0", left: "0", width: "100%", height: "100%",
      background: "rgba(0,0,0,.45)", "z-index": "2147483647",
      display: "flex", "align-items": "center", "justify-content": "center",
    });

    const box = document.createElement("div");
    css(box, {
      background: "#fff", color: "#333", width: "90%", "max-width": "380px",
      padding: "24px", "border-radius": "12px", "text-align": "center",
      "box-shadow": "0 8px 30px rgba(0,0,0,.3)", "font-family": "inherit",
      "border-top": "6px solid " + c.fg,
    });

    const icon = document.createElement("div");
    icon.textContent = c.icon;
    css(icon, { "font-size": "40px", "margin-bottom": "8px" });

    const title = document.createElement("div");
    title.textContent = opts.title || "";
    css(title, { "font-size": "20px", "font-weight": "bold", color: c.fg, "margin-bottom": "8px" });

    const msg = document.createElement("div");
    msg.textContent = opts.text || "";
    css(msg, { "font-size": "15px", "margin-bottom": "18px", "line-height": "1.5" });

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = opts.buttonText || "Đóng";
    css(btn, {
      background: c.fg, color: "#fff", border: "none", padding: "10px 26px",
      "border-radius": "8px", cursor: "pointer", "font-size": "15px",
    });

    let closed = false;
    function close() {
      if (closed) return;
      closed = true;
      overlay.remove();
      if (typeof opts.onClose === "function") opts.onClose();
    }
    btn.addEventListener("click", close);

    box.append(icon, title, msg, btn);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
    btn.focus();

    if (opts.autoCloseMs) setTimeout(close, opts.autoCloseMs);
  }

  /* 3. Dòng gợi ý dưới ô nhập */
  function showHint(input, text, type, link) {
    let hint = document.getElementById(input.id + "Hint");
    if (!hint) {
      hint = document.createElement("div");
      hint.id = input.id + "Hint";
      input.insertAdjacentElement("afterend", hint);
    }
    const c = COLORS[type] || COLORS.info;
    hint.textContent = text;
    css(hint, { display: "block", "font-size": "13px", "margin-top": "4px", color: c.fg });
    if (link) {
      const a = document.createElement("a");
      a.href = link.href;
      a.textContent = link.text;
      css(a, { "margin-left": "6px", "font-weight": "bold", "text-decoration": "underline", color: c.fg });
      hint.appendChild(a);
    }
  }

  function clearHint(input) {
    const hint = document.getElementById(input.id + "Hint");
    if (hint) hint.textContent = "";
  }

  /* =====================================================
   *  QUẢN TRỊ VIÊN
   *  Tài khoản admin đặt trong js/admin-config.js (ADMIN_ACCOUNTS)
   * ===================================================== */
  const ADMIN_SESSION_KEY = "tiembo_admin";

  // Trả về: "ok" | "wrong_password" | "not_admin"
  async function adminLogin(username, password) {
    const accounts =
      typeof ADMIN_ACCOUNTS !== "undefined" && Array.isArray(ADMIN_ACCOUNTS) ? ADMIN_ACCOUNTS : [];
    const acc = accounts.find(function (a) {
      return String(a.username).toLowerCase() === String(username).toLowerCase();
    });
    if (!acc) return "not_admin"; // không phải admin -> kiểm tra như người dùng thường
    if (acc.password !== password) return "wrong_password";
    localStorage.setItem(ADMIN_SESSION_KEY, acc.username);
    return "ok";
  }

  // Tên quản trị viên đang đăng nhập, hoặc null
  async function adminMe() {
    return localStorage.getItem(ADMIN_SESSION_KEY) || null;
  }

  async function adminLogout() {
    localStorage.removeItem(ADMIN_SESSION_KEY);
  }

  /* =====================================================
   *  CHUYỂN TRANG SAU KHI ĐĂNG NHẬP (?redirect=...)
   * ===================================================== */
  // Chỉ cho phép chuyển đến file .html cùng thư mục (tránh chuyển sang trang lạ)
  function getRedirect() {
    const r = new URLSearchParams(window.location.search).get("redirect");
    return r && /^[\w\-.]+\.html(\?[\w=&%\-.]*)?$/.test(r) ? r : null;
  }

  // Giữ tham số redirect khi đi qua lại giữa trang đăng nhập và đăng ký
  function withRedirect(page) {
    const r = getRedirect();
    return r ? page + "?redirect=" + encodeURIComponent(r) : page;
  }

  /* =====================================================
   *  PHIÊN ĐĂNG NHẬP
   * ===================================================== */
  const SESSION_FIELDS = ["hoTen", "email", "gioiTinh", "dienThoai"];

  function setSession(user) {
    SESSION_FIELDS.forEach(function (f) {
      localStorage.setItem(SESSION_KEY + "_" + f, user[f]);
    });
  }

  function getCurrentUser() {
    const email = localStorage.getItem(SESSION_KEY + "_email");
    if (!email) return null;
    const user = {};
    SESSION_FIELDS.forEach(function (f) {
      user[f] = localStorage.getItem(SESSION_KEY + "_" + f) || "";
    });
    return user;
  }

  function logout() {
    SESSION_FIELDS.forEach(function (f) {
      localStorage.removeItem(SESSION_KEY + "_" + f);
    });
  }

  /* =====================================================
   *  ĐĂNG KÝ
   * ===================================================== */
  function initRegisterForm() {
    ready(function () {
      const form = document.getElementById("frmRegister");
      if (!form) {
        console.error("UserLib: không tìm thấy form #frmRegister");
        return;
      }
      const el = (id) => document.getElementById(id);

      if (!storageOK()) {
        showMessage(form, "Trình duyệt đang chặn lưu trữ dữ liệu, không thể đăng ký.", "error");
      }

      form.addEventListener("submit", async function (e) {
        e.preventDefault();
        try {
          const hoTen = el("txtHoTen").value.trim();
          const email = el("txtEmail").value.trim().toLowerCase();
          const checked = form.querySelector('input[name="rdGioiTinh"]:checked');
          const gioiTinh = checked ? checked.value : "";
          const dienThoai = el("txtDT").value.trim();
          const password = el("txtPassword").value;
          const confirm = el("txtConfirmPassword").value;

          const fail = (msg) => {
            showMessage(form, msg, "error");
            popup({ type: "error", title: "Chưa thể đăng ký", text: msg });
          };

          if (hoTen.length < 2) return fail("Họ tên phải có ít nhất 2 ký tự.");
          if (!isEmail(email)) return fail("Email không hợp lệ.");
          if (!gioiTinh) return fail("Vui lòng chọn giới tính.");
          if (!isPhone(dienThoai)) return fail("Số điện thoại phải gồm 10 chữ số và bắt đầu bằng 0.");
          if (password.length < 6) return fail("Mật khẩu phải có ít nhất 6 ký tự.");
          if (password !== confirm) return fail("Mật khẩu xác nhận không khớp.");

          // Tài khoản đã tồn tại
          if (findUser(email)) {
            showMessage(form, "Email này đã được đăng ký trước đó.", "error", {
              href: withRedirect(LOGIN_PAGE),
              text: "Đăng nhập",
            });
            popup({
              type: "error",
              title: "Tài khoản đã tồn tại",
              text: "Email " + email + " đã được đăng ký. Bạn hãy đăng nhập hoặc dùng email khác.",
              buttonText: "Đến trang đăng nhập",
              onClose: () => (window.location.href = withRedirect(LOGIN_PAGE)),
            });
            return;
          }

          addUser({
            hoTen: hoTen,
            email: email,
            gioiTinh: gioiTinh,
            dienThoai: dienThoai,
            password: await hashPassword(password),
            ngayTao: new Date().toISOString(),
          });

          // Đăng ký thành công
          showMessage(form, "Đăng ký thành công!", "success");
          form.reset();
          clearHint(el("txtEmail"));
          popup({
            type: "success",
            title: "Đăng ký thành công!",
            text: "Tài khoản " + email + " đã được tạo. Hãy đăng nhập để tiếp tục.",
            buttonText: "Đăng nhập ngay",
            autoCloseMs: 3000,
            onClose: () => (window.location.href = withRedirect(LOGIN_PAGE)),
          });
        } catch (err) {
          console.error(err);
          popup({ type: "error", title: "Có lỗi xảy ra", text: String(err.message || err) });
        }
      });
    });
  }

  /* =====================================================
   *  ĐĂNG NHẬP
   * ===================================================== */
  function initLoginForm() {
    ready(function () {
      const form = document.getElementById("frmLogin");
      if (!form) {
        console.error("UserLib: không tìm thấy form #frmLogin");
        return;
      }
      const el = (id) => document.getElementById(id);

      if (!storageOK()) {
        showMessage(form, "Trình duyệt đang chặn lưu trữ dữ liệu, không thể đăng nhập.", "error");
      }

      form.addEventListener("submit", async function (e) {
        e.preventDefault();
        try {
          const email = el("txtUsername").value.trim().toLowerCase();
          const password = el("txtPassword").value;

          if (!email || !password) {
            showMessage(form, "Vui lòng nhập đầy đủ email và mật khẩu.", "error");
            popup({ type: "error", title: "Thiếu thông tin", text: "Vui lòng nhập đầy đủ email và mật khẩu." });
            return;
          }

          // 0. Thử đăng nhập quản trị (tài khoản trong MySQL) trước
          const adminResult = await adminLogin(el("txtUsername").value.trim(), password);
          if (adminResult === "ok") {
            showMessage(form, "Đăng nhập quản trị thành công!", "success");
            popup({
              type: "success",
              title: "Đăng nhập quản trị thành công!",
              text: "Chào mừng quản trị viên. Bạn có thể thêm, sửa, xóa sản phẩm.",
              buttonText: "Vào trang quản trị",
              autoCloseMs: 2000,
              onClose: () => (window.location.href = ADMIN_PAGE),
            });
            return;
          }
          if (adminResult === "wrong_password") {
            showMessage(form, "Mật khẩu quản trị không đúng. Vui lòng thử lại.", "error");
            popup({ type: "error", title: "Sai mật khẩu", text: "Mật khẩu quản trị không đúng. Vui lòng thử lại." });
            return;
          }
          // Không phải quản trị viên -> kiểm tra như người dùng thường (localStorage)
          const user = findUser(email);

          // 1. Chưa đăng ký -> báo phải đăng ký
          if (!user) {
            showMessage(form, "Tài khoản này chưa được đăng ký.", "error", {
              href: withRedirect(REGISTER_PAGE),
              text: "Đăng ký ngay",
            });
            popup({
              type: "error",
              title: "Tài khoản chưa đăng ký",
              text: "Email " + email + " chưa có trong hệ thống. Bạn cần đăng ký tài khoản trước khi đăng nhập.",
              buttonText: "Đăng ký ngay",
              onClose: () => (window.location.href = withRedirect(REGISTER_PAGE)),
            });
            return;
          }

          // 2. Sai mật khẩu
          const hashed = await hashPassword(password);
          if (user.password !== hashed) {
            showMessage(form, "Mật khẩu không đúng. Vui lòng thử lại.", "error");
            popup({ type: "error", title: "Sai mật khẩu", text: "Mật khẩu không đúng. Vui lòng thử lại." });
            return;
          }

          // 3. Thành công
          setSession(user);
          showMessage(form, "Đăng nhập thành công! Xin chào " + user.hoTen + ".", "success");
          popup({
            type: "success",
            title: "Đăng nhập thành công!",
            text: "Xin chào " + user.hoTen + ", chào mừng bạn đến với Tiệm của Bơ.",
            buttonText: getRedirect() ? "Tiếp tục" : "Vào trang chủ",
            autoCloseMs: 2000,
            onClose: () => (window.location.href = getRedirect() || HOME_PAGE),
          });
        } catch (err) {
          console.error(err);
          popup({ type: "error", title: "Có lỗi xảy ra", text: String(err.message || err) });
        }
      });
    });
  }

  /* =====================================================
   *  TÀI KHOẢN NGƯỜI DÙNG (dùng cho trang tai-khoan.html)
   * ===================================================== */
  // Thông tin đầy đủ của người dùng đang đăng nhập (có cả ngày tạo), hoặc null
  function getUserFull() {
    const cur = getCurrentUser();
    return cur ? findUser(cur.email) : null;
  }

  // Cập nhật họ tên, giới tính, số điện thoại (email là khóa nên không đổi)
  function updateProfile(info) {
    const cur = getCurrentUser();
    if (!cur) return false;
    ["hoTen", "gioiTinh", "dienThoai"].forEach(function (f) {
      localStorage.setItem(userKey(cur.email, f), info[f]);
      localStorage.setItem(SESSION_KEY + "_" + f, info[f]);
    });
    return true;
  }

  // Trả về: "ok" | "wrong_password" | "not_logged_in"
  async function changePassword(oldPassword, newPassword) {
    const cur = getCurrentUser();
    const user = cur ? findUser(cur.email) : null;
    if (!user) return "not_logged_in";
    if (user.password !== (await hashPassword(oldPassword))) return "wrong_password";
    localStorage.setItem(userKey(cur.email, "password"), await hashPassword(newPassword));
    return "ok";
  }

  // Ảnh đại diện: lưu dạng chuỗi dữ liệu ảnh (data URL) riêng cho từng người dùng
  function getAvatar() {
    const cur = getCurrentUser();
    return cur ? (localStorage.getItem(userKey(cur.email, "avatar")) || "") : "";
  }
  function setAvatar(dataUrl) {
    const cur = getCurrentUser();
    if (!cur) return false;
    try {
      localStorage.setItem(userKey(cur.email, "avatar"), dataUrl);
      return true;
    } catch (e) { return false; }   // bộ nhớ trình duyệt đầy
  }
  function removeAvatar() {
    const cur = getCurrentUser();
    if (cur) localStorage.removeItem(userKey(cur.email, "avatar"));
  }

  /* =====================================================
   *  HÀM DÙNG Ở CÁC TRANG KHÁC
   * ===================================================== */
  // Thêm "Xin chào, tên" + Đăng xuất vào menu .nav-links
  // (người dùng thường) hoặc "Quản trị" + Đăng xuất (quản trị viên)
  function renderNavUser(loginHref) {
    ready(function () {
      const nav = document.querySelector(".nav-links");
      if (!nav) return;
      const user = getCurrentUser();

      const addLink = function (text, href, onClick) {
        const a = document.createElement("a");
        a.textContent = text;
        a.href = href;
        a.style.marginLeft = "12px";
        if (onClick) a.addEventListener("click", onClick);
        nav.appendChild(a);
      };

      if (user) {
        // Bấm vào "Xin chào, tên" -> sang trang tài khoản của người dùng
        const hello = document.createElement("a");
        hello.textContent = "Xin chào, " + user.hoTen;
        hello.href = ACCOUNT_PAGE;
        hello.title = "Xem tài khoản của tôi";
        hello.style.marginLeft = "12px";
        nav.appendChild(hello);
        addLink("Đăng xuất", loginHref || LOGIN_PAGE, logout);
      } else {
        adminMe().then(function (name) {
          if (!name) return;
          addLink("⚙️ Quản trị", ADMIN_PAGE);
          addLink("Đăng xuất", loginHref || LOGIN_PAGE, adminLogout);   // không hiện email quản trị
        });
      }
    });
  }

  // Dùng cho trang chủ: đổi chữ "Sign In / Sign Up" theo trạng thái đăng nhập
  //   selector: ví dụ ".login-bar a"     base: thư mục chứa các trang, ví dụ "html/"
  function renderLoginBar(selector, base) {
    ready(function () {
      const link = document.querySelector(selector);
      if (!link) return;
      const prefix = base || "";

      const addLogout = function (onClick) {
        const out = document.createElement("a");
        out.textContent = "Đăng xuất";
        out.href = "#";
        out.style.marginLeft = "10px";
        out.addEventListener("click", function (e) {
          e.preventDefault();
          Promise.resolve(onClick()).then(function () {
            window.location.reload();
          });
        });
        link.insertAdjacentElement("afterend", out);
      };

      const user = getCurrentUser();
      if (user) {
        link.textContent = "Xin chào, " + user.hoTen;
        link.href = prefix + ACCOUNT_PAGE;   // bấm vào tên -> trang tài khoản
        addLogout(logout);
      } else {
        adminMe().then(function (name) {
          if (!name) return;
          link.textContent = "⚙️ Quản trị";   // không hiện email quản trị
          link.href = prefix + ADMIN_PAGE;
          addLogout(adminLogout);
        });
      }
    });
  }

  // Dùng cho trang cần đăng nhập: chưa đăng nhập thì chuyển sang trang đăng nhập,
  // đăng nhập xong sẽ quay lại đúng trang này.
  function requireLogin(loginHref) {
    if (!getCurrentUser()) {
      const here = window.location.pathname.split("/").pop() + window.location.search;
      window.location.href = (loginHref || LOGIN_PAGE) + "?redirect=" + encodeURIComponent(here);
    }
  }

  return { initLoginForm, initRegisterForm, getCurrentUser, getUserFull, updateProfile, changePassword, getAvatar, setAvatar, removeAvatar, logout, renderNavUser, renderLoginBar, requireLogin, popup, adminMe, adminLogout };
})();