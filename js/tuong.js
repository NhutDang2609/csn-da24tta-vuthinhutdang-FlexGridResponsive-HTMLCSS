// =====================================================================
//  Trang danh mục sản phẩm dành cho KHÁCH (ví dụ: Treo Tường)
// =====================================================================
// - Không còn danh sách sản phẩm riêng trong file này. Sản phẩm lấy từ lib.js (productDatabase)
//   và chỉ hiện những sản phẩm thuộc danh mục của trang. Nhờ vậy khi quản trị viên thêm / sửa / xóa
//   ở trang quan-tri.html thì trang này tự cập nhật.
// - Khách chỉ có 2 nút: "Xem chi tiết" và "Mua ngay".
// - Danh mục đọc từ thẻ <body data-category="...">:
//       tuong = Decor tường | ban = Decor bàn | phong = Decor phòng | hoctap = Góc học tập
//   Có thể dùng chung file này cho cả 4 trang danh mục, chỉ cần đổi data-category.
// - Cần nhúng user.js và lib.js TRƯỚC file này.
(function () {
  const DANH_MUC = document.body.dataset.category || "tuong";

  const container = document.getElementById("product-list");
  const fPrice = document.getElementById("f-price");
  const fSort = document.getElementById("f-sort");
  container.className = "row";

  const PRICE_FILTERS = {
    "duoi200":   (p) => p < 200000,
    "200-1000":  (p) => p >= 200000 && p <= 1000000,
    "1000-3000": (p) => p > 1000000 && p <= 3000000,
    "tren3000":  (p) => p > 3000000,
  };
  const SORTERS = {
    "gia-tang": (a, b) => a.price - b.price,
    "gia-giam": (a, b) => b.price - a.price,
    "ten":      (a, b) => a.name.localeCompare(b.name, "vi"),
  };

  // Lấy lại lựa chọn từ địa chỉ trang, ví dụ san-pham-tuong.html?price=duoi200&sort=gia-tang
  function docBoLocTuUrl() {
    const sp = new URLSearchParams(window.location.search);
    const gan = (sel, val) => { if ([...sel.options].some((o) => o.value === val)) sel.value = val; };
    gan(fPrice, sp.get("price") || "");
    gan(fSort, sp.get("sort") || "");
  }

  // Ghi lựa chọn lên địa chỉ trang (tải lại trang vẫn giữ bộ lọc)
  function ghiBoLocLenUrl() {
    try {
      const url = new URL(window.location.href);
      [["price", fPrice.value], ["sort", fSort.value]].forEach(function (kv) {
        if (kv[1]) url.searchParams.set(kv[0], kv[1]); else url.searchParams.delete(kv[0]);
      });
      window.history.replaceState(null, "", url);
    } catch (e) { /* mở bằng file:// thì bỏ qua */ }
  }

  function hienThi() {
    // Chỉ lấy sản phẩm thuộc danh mục của trang này
    const trongMuc = productDatabase.filter((p) => p.category === DANH_MUC);

    let visible = trongMuc.slice();
    if (fPrice.value) visible = visible.filter((p) => PRICE_FILTERS[fPrice.value](p.price));
    if (fSort.value) visible.sort(SORTERS[fSort.value]);
    ghiBoLocLenUrl();

    document.getElementById("filter-count").textContent =
      fPrice.value ? "Hiển thị " + visible.length + " / " + trongMuc.length + " sản phẩm" : "";

    container.innerHTML = "";
    if (trongMuc.length === 0) {
      container.innerHTML = "<p class='text-center'>Hiện chưa có sản phẩm nào trong mục này.</p>";
      return;
    }
    if (visible.length === 0) {
      container.innerHTML = "<p class='text-center'>Không có sản phẩm nào phù hợp với bộ lọc. Hãy thử chọn mức giá khác.</p>";
      return;
    }

    visible.forEach(function (product) {
      const col = document.createElement("div");
      col.className = "col-6 col-md-4 col-lg-3 mb-4";
      col.innerHTML = `
        <div class="card h-100">
          <img src="${escapeHtml(product.img)}" alt="${escapeHtml(product.name)}" class="card-img-top" style="height:180px; object-fit:cover;">
          <div class="card-body">
            <h6 class="card-title">${escapeHtml(product.name)}</h6>
            <p class="card-text text-danger fw-bold">${product.price.toLocaleString()} VND</p>
            <a href="chi-tiet.html?id=${product.id}" class="btn btn-sm btn-outline-secondary w-100 mb-2">Xem chi tiết</a>
            <button onclick="buyNow(${product.id})" class="btn btn-sm btn-danger w-100">Mua ngay</button>
          </div>
        </div>`;
      container.appendChild(col);
    });
  }

  [fPrice, fSort].forEach((el) => el.addEventListener("change", hienThi));
  document.getElementById("f-reset").addEventListener("click", function () {
    fPrice.value = "";
    fSort.value = "";
    hienThi();
  });

  // Chờ lib.js ghép xong dữ liệu (kể cả thay đổi của quản trị viên) rồi mới hiển thị
  productReady.then(function () {
    docBoLocTuUrl();
    hienThi();
  });

  // Nút "Mua ngay" gọi buyNow(id) trong lib.js:
  //  - đã đăng nhập  -> sang trang mua-hang.html
  //  - chưa đăng nhập -> báo và chuyển sang trang đăng nhập
  // Hiện "Xin chào, tên" + Đăng xuất (hoặc "Quản trị") trên menu
  if (typeof UserLib !== "undefined") UserLib.renderNavUser();
})();