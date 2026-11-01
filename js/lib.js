const productDatabase = [

//tranh
  {id:14, name:"Tranh Con Voi Sơn Dầu", price:2000000, img:"../assets/treo3.jpg", productLink:"chi-tiet.html", desc:"Tranh con voi sơn dầu không chỉ là một tác phẩm nghệ thuật mà còn mang trong mình những giá trị phong thủy sâu sắc. Con voi là biểu tượng mạnh mẽ của sự thịnh vượng và sức khỏe, và bức tranh này sẽ đem lại những lợi ích phong thủy cho gia chủ"},

  {id:34, name:"Bình Cắm Hoa Khô Sang Trọng", price:2150000, img:"../assets/b3.jpg", productLink:"chi-tiet.html", desc:"Bình cắm hoa khô sang trọng với kiểu dáng hiện đại, giúp tôn lên vẻ đẹp của hoa và mang lại sự ấm áp cho không gian nội thất."},

  {id:46, name:"Đế Đựng Nến", price:290000, img:"../assets/p11.jpg", productLink:"chi-tiet.html", desc:"Đế đựng nến trang nhã giúp không gian trở nên ấm cúng, thích hợp để trang trí phòng khách, phòng ngủ hoặc bàn làm việc."},

  {id:49, name:"Gương Gỗ Trang Trí", price:3800000, img:"../assets/p12.jpg", productLink:"chi-tiet.html", desc:"Gương gỗ trang trí mang phong cách tự nhiên và hiện đại, tạo điểm nhấn nổi bật cho không gian sống."},

  {id:30, name:"Bình Hoa Nghệ Thuật Trang Trí Kệ Tủ", price:2100000, img:"../assets/b4.jpg", productLink:"chi-tiet.html", desc:"Bình hoa nghệ thuật trang trí kệ tủ được thiết kế thanh lịch, phù hợp với nhiều phong cách decor từ hiện đại đến tối giản."},

  {id:22, name:"Tranh In Sơn Dầu Xoáy Cầu Thang", price:15000, img:"../assets/treo2.jpg", productLink:"chi-tiet.html", desc:"Trong phong thủy, hình xoáy cầu thang tượng trưng cho sự phát triển không ngừng, thu hút tài lộc và vận may. Tranh in sơn dầu xoáy cầu thang của Decorpro không chỉ giúp không gian sống thêm ấn tượng mà còn mang lại những ảnh hưởng tích cực về mặt phong thủy."},

  {id:25, name:"Tranh 3 Chiều Bằng Gỗ Nguyên Khối", price:100000, img:"../assets/treo1.jpg", productLink:"chi-tiet.html", desc:"Mang vẻ đẹp tự nhiên và sang trọng vào không gian sống với tranh 3 chiều được chế tác từ gỗ nguyên khối cao cấp. Từng chi tiết được chạm khắc tỉ mỉ, tạo hiệu ứng chiều sâu độc đáo, giúp bức tranh trở nên sống động và nổi bật hơn so với các loại tranh thông thường."},

  {id:1, name:"Ghế Công Thái Học Manson", price:5000000, img:"../assets/h1.webp", productLink:"chi-tiet.html", desc:"Ghế công thái học cao cấp hỗ trợ tư thế ngồi đúng, giảm áp lực lên cột sống và mang lại sự thoải mái khi học tập, làm việc trong thời gian dài."},

  {id:13, name:"Đèn Học Rạng Đông", price:180000, img:"../assets/h2.webp", productLink:"chi-tiet.html", desc:"Đèn học với ánh sáng dịu nhẹ, bảo vệ mắt và giúp tăng khả năng tập trung cho góc học tập hiện đại."},

  {id:36, name:"Bộ Hoa Bằng Đá Thạch Anh", price:900000, img:"../assets/b8.jpg", productLink:"chi-tiet.html", desc:"Bộ hoa bằng đá thạch anh mang vẻ đẹp sang trọng cùng năng lượng tích cực, giúp không gian trở nên nổi bật và cuốn hút hơn."},

  {id:15, name:"Phù Điêu 3D Mộc Lan Ngọc Xuân Ý", price:2000000, img:"../assets/treo9.jpg", productLink:"chi-tiet.html", desc:"Phù điêu treo tường hoa mẫu đơn trong gió mang vẻ đẹp tinh tế và phong thủy tốt đẹp."},

  {id:16, name:"Đồng Hồ Morandi Tối Giản Hiện Đại", price:1600000, img:"../assets/treo4.jpg", productLink:"chi-tiet.html", desc:"Đồng hồ Morandi tối giản hiện đại mang phong cách tinh tế, sang trọng cho không gian sống."},

  {id:27, name:"Chim Vàng Trên Quả Cầu Pha Lê", price:2000000, img:"../assets/b7.jpg", productLink:"chi-tiet.html", desc:"Chim vàng trên quả cầu pha lê là sự kết hợp hài hòa giữa nghệ thuật và phong thủy, tạo điểm nhấn đẳng cấp cho không gian sống."},

  {id:4, name:"Đèn Học PIXAR", price:160000, img:"../assets/h3.webp", productLink:"chi-tiet.html", desc:"Đèn học thiết kế lấy cảm hứng từ phong cách Pixar, nhỏ gọn, linh hoạt và tạo điểm nhấn độc đáo cho bàn học."},

  {id:35, name:"Lá Sung Nghệ Thuật Đặt Bàn", price:2000000, img:"../assets/b5.jpg", productLink:"chi-tiet.html", desc:"Lá sung nghệ thuật đặt bàn mang vẻ đẹp tự nhiên và ý nghĩa phong thủy tốt lành, giúp không gian thêm sang trọng và hài hòa."},

  {id:19, name:"Gương Tròn Hiện Đại", price:6000000, img:"../assets/treo10.jpg", productLink:"chi-tiet.html", desc:"Gương tròn hiện đại mang lại vẻ đẹp tinh tế cho không gian sống."},

  {id:20, name:"Đồng Hồ Treo Tường Hình Ngọn Núi", price:1500000, img:"../assets/treo5.jpg", productLink:"chi-tiet.html", desc:"Trong thiết kế nội thất hiện đại, đồng hồ treo tường hình ngọn núi là món đồ decor được ưa chuộng."},
  
  {id:32, name:"Cặp Hươu Sừng Tấm", price:905000, img:"../assets/b6.jpg", productLink:"chi-tiet.html", desc:"Cặp hươu sừng tấm tượng trưng cho sự may mắn, tài lộc và thịnh vượng, thích hợp làm vật trang trí hoặc quà tặng ý nghĩa."},

  {id:10, name:"Sổ Tay A5", price:20000, img:"../assets/h4.jpg", productLink:"chi-tiet.html", desc:"Sổ tay A5 tiện dụng với kích thước nhỏ gọn, thích hợp để ghi chú, lập kế hoạch và lưu giữ ý tưởng hằng ngày."},

  {id:17, name:"Phù Điêu Dải Hoa Vàng 3D", price:3000000, img:"../assets/treo7.jpg", productLink:"chi-tiet.html", desc:"Phù điêu dải hoa vàng 3D mang vẻ đẹp nghệ thuật và giá trị phong thủy cho không gian sống."},

  {id:18, name:"Phù Điêu 3D Đầu Ngựa", price:8000000, img:"../assets/treo8.jpg", productLink:"chi-tiet.html", desc:"Phù điêu 3D đầu ngựa không chỉ đẹp mắt mà còn mang lại nhiều ý nghĩa phong thủy tốt cho không gian."},
  

  {id:31, name:"Thác Khói Trầm Hương", price:4000000, img:"../assets/b1.jpg", productLink:"chi-tiet.html", desc:"Thác khói trầm hương với thiết kế tinh xảo, tạo dòng khói mềm mại như thác nước, mang đến cảm giác thư thái và bình yên cho không gian sống."},

  {id:28, name:"Thác Khói Trầm Hương Địa Tạng Vương Từ Bi An Lạc", price:2000000, img:"../assets/b9.jpg", productLink:"chi-tiet.html", desc:"Thác khói trầm hương Địa Tạng Vương Từ Bi An Lạc mang ý nghĩa bình an, thanh tịnh và giúp tạo bầu không khí thư giãn cho ngôi nhà."},

  {id:29, name:"Tượng Đầu Ngựa Tối Giản", price:800000, img:"../assets/10.jpg", productLink:"chi-tiet.html", desc:"Tượng đầu ngựa tối giản sở hữu thiết kế hiện đại, mạnh mẽ và tinh tế, tượng trưng cho sự thành công và phát triển bền vững."},

  {id:26, name:"Mô Hình Đá Kết Hợp Động Vật", price:2000000, img:"../assets/b11.jpg", productLink:"chi-tiet.html", desc:"Mô hình đá kết hợp động vật được chế tác độc đáo, mang vẻ đẹp nghệ thuật và tạo điểm nhấn nổi bật cho bàn làm việc hoặc kệ trang trí."},

  {id:37, name:"Quả Địa Cầu Pha Lê", price:1800000, img:"../assets/b12.jpg", productLink:"chi-tiet.html", desc:"Quả địa cầu pha lê với thiết kế sang trọng và trong suốt, là món đồ decor tinh tế dành cho phòng khách, văn phòng hoặc góc học tập."},

  {id:33, name:"Bình Hoa Gốm Vân Tổ Ong", price:5500000, img:"../assets/b2.jpg", productLink:"chi-tiet.html", desc:"Bình hoa gốm vân tổ ong sở hữu thiết kế độc đáo cùng họa tiết nổi bật, là điểm nhấn tinh tế cho phòng khách, phòng ngủ hoặc góc làm việc."},

  {id:5, name:"Sổ Da Loxo A4", price:150000, img:"../assets/h5.jpg", productLink:"chi-tiet.html", desc:"Sổ da A4 sang trọng với chất liệu bền đẹp, phù hợp cho công việc, học tập và ghi chép chuyên nghiệp."},

  {id:2, name:"Kệ Để Sách", price:100000, img:"../assets/h6.png", productLink:"chi-tiet.html", desc:"Kệ để sách giúp sắp xếp tài liệu gọn gàng, tiết kiệm không gian và mang lại sự ngăn nắp cho góc học tập."},

  {id:3, name:"Tai Nghe Bluetooth JBL", price:180000, img:"../assets/h7.webp", productLink:"chi-tiet.html", desc:"Tai nghe Bluetooth cho âm thanh sống động, kết nối ổn định và mang lại trải nghiệm giải trí, học tập tiện lợi."},

  {id:39, name:"Kệ Đựng Đồ", price:1800000, img:"../assets/p7.jpg", productLink:"chi-tiet.html", desc:"Kệ đựng đồ đa năng với thiết kế hiện đại, giúp sắp xếp vật dụng ngăn nắp và tạo điểm nhấn cho không gian."},

  {id:47, name:"Giỏ Đựng Quần Áo", price:300000, img:"../assets/p8.jpg", productLink:"chi-tiet.html", desc:"Giỏ đựng quần áo tiện lợi, chất liệu bền đẹp, giúp lưu trữ đồ dùng gọn gàng và tăng tính thẩm mỹ cho căn phòng."},

  {id:7, name:"Lịch Gỗ Để Bàn", price:90000, img:"../assets/h8.jpg", productLink:"chi-tiet.html", desc:"Lịch gỗ để bàn mang phong cách tối giản, vừa hữu ích trong việc quản lý thời gian vừa là món decor đẹp mắt."},

  {id:40, name:"Gối Tựa", price:160000, img:"../assets/p3.jpg", productLink:"chi-tiet.html", desc:"Gối tựa mềm mại với kiểu dáng hiện đại, mang lại cảm giác thoải mái và tăng tính thẩm mỹ cho không gian sống."},

  {id:44, name:"Gương Để Bàn", price:600000, img:"../assets/p4.jpg", productLink:"chi-tiet.html", desc:"Gương để bàn nhỏ gọn, thiết kế thanh lịch, phù hợp cho bàn trang điểm hoặc bàn học, giúp không gian thêm tinh tế."},

  {id:8, name:"Giá Để Laptop", price:800000, img:"../assets/h9.png", productLink:"chi-tiet.html", desc:"Giá đỡ laptop chắc chắn giúp nâng cao màn hình, cải thiện tư thế ngồi và tăng hiệu quả làm việc."},

  {id:38, name:"Khung Tranh Để Bàn", price:8000000, img:"../assets/p9.jpg", productLink:"chi-tiet.html", desc:"Khung tranh để bàn sang trọng, thích hợp để lưu giữ những khoảnh khắc đáng nhớ và trang trí góc làm việc."},

  {id:48, name:"Bàn Tròn Nhỏ", price:5500000, img:"../assets/p10.jpg", productLink:"chi-tiet.html", desc:"Bàn tròn nhỏ với thiết kế tinh tế, phù hợp làm bàn trà, bàn decor hoặc đặt các vật dụng trang trí trong phòng."},

  {id:11, name:"Giá Sách Để Bàn Gỗ", price:500000, img:"../assets/h10.jpg", productLink:"chi-tiet.html", desc:"Giá sách gỗ để bàn thiết kế tinh tế, giúp lưu trữ sách vở và tạo điểm nhấn ấm áp cho không gian học tập."},

  {id:45, name:"Gương Soi Toàn Thân", price:1500000, img:"../assets/p5.jpg", productLink:"chi-tiet.html", desc:"Gương soi toàn thân hiện đại với kiểu dáng sang trọng, giúp mở rộng cảm giác không gian và tăng vẻ đẹp cho căn phòng."},

  {id:42, name:"Hộp Đựng Khăn Giấy", price:100000, img:"../assets/p6.jpg", productLink:"chi-tiet.html", desc:"Hộp đựng khăn giấy thiết kế tối giản, vừa tiện dụng vừa là món đồ decor giúp bàn làm việc luôn gọn gàng."},

  {id:6, name:"Cây Mini Để Bàn", price:29000, img:"../assets/h11.jpg", productLink:"chi-tiet.html", desc:"Cây mini để bàn mang đến cảm giác tươi mới, giúp không gian học tập và làm việc trở nên sinh động hơn."},

  {id:21, name:"Gương Tròn Trang Trí Phòng Khách", price:5500000, img:"../assets/treo11.jpg", productLink:"chi-tiet.html", desc:"Gương tròn decor là món đồ trang trí không thể thiếu trong không gian phòng khách hiện đại."},

  {id:23, name:"Đồng Hồ Treo Tường Bản Đồ Thế Giới", price:2900000, img:"../assets/treo6.jpg", productLink:"chi-tiet.html", desc:"Đồng hồ treo tường bản đồ thế giới từ Decorpro là sự lựa chọn lý tưởng cho những ai yêu thích sự độc đáo."},

  {id:24, name:"Gương Trang Trí Hình Bông Hoa Đẹp", price:3800000, img:"../assets/treo12.jpg", productLink:"chi-tiet.html", desc:"Gương trang trí hình bông hoa đang trở thành xu hướng hot nhờ thiết kế sang trọng và tinh tế."},

  {id:41, name:"Đồng Hồ Để Bàn", price:200000, img:"../assets/p1.jpg", productLink:"chi-tiet.html", desc:"Đồng hồ để bàn thiết kế tối giản, giúp quản lý thời gian hiệu quả và tạo điểm nhấn tinh tế cho góc học tập, làm việc."},
 
  {id:43, name:"Giá Để Điện Thoại", price:180000, img:"../assets/p2.jpg", productLink:"chi-tiet.html", desc:"Giá đỡ điện thoại tiện lợi với thiết kế chắc chắn, phù hợp để học tập, làm việc hoặc xem video một cách thoải mái."},

  {id:12, name:"Bút Bi Bấm Nhiều Màu", price:38000, img:"../assets/h12.jpg", productLink:"chi-tiet.html", desc:"Bút bi nhiều màu tiện lợi cho việc ghi chú, học tập và sáng tạo, giúp nội dung trở nên nổi bật và dễ theo dõi."}

   
];

// ====== SẢN PHẨM DO QUẢN TRỊ VIÊN THÊM / SỬA / XÓA ======
// Danh sách ở trên là dữ liệu gốc. Khi admin thêm / sửa / xóa, thay đổi được lưu trong
// localStorage của trình duyệt (mỗi thông tin một khóa, không dùng JSON: name, price, img, desc, category) rồi được
// ghép vào danh sách này mỗi lần tải trang.
// ====== DANH MỤC SẢN PHẨM (dùng cho bộ lọc) ======
// Khớp 4 mục ở trang chủ: decor bàn / tường / phòng / góc học tập.
const CATEGORIES = {
  ban: "Decor bàn",
  tuong: "Decor tường",
  phong: "Decor phòng",
  hoctap: "Góc học tập",
  khac: "Khác",
};

// Sản phẩm gốc chia theo dãy id; sản phẩm admin thêm sẽ tự chọn danh mục trong trang quản trị
function categoryOfId(id) {
  if (id >= 1 && id <= 13) return "hoctap";
  if (id >= 14 && id <= 25) return "tuong";
  if (id >= 26 && id <= 37) return "ban";
  if (id >= 38 && id <= 49) return "phong";
  return "khac";
}

const DEFAULT_PRODUCTS = productDatabase.map(function (p) {
  return Object.assign({}, p, { category: categoryOfId(p.id) });
});
const LS_PRODUCT = "tiembo_product|"; // tiembo_product|<id>|<name/price/img/desc>
const LS_DELETED = "tiembo_deleted";  // danh sách id sản phẩm gốc đã xóa: "3,7,9"
const LS_NEXTID = "tiembo_nextid";    // số id kế tiếp cho sản phẩm mới

function readDeletedIds() {
  const s = localStorage.getItem(LS_DELETED) || "";
  return s === "" ? [] : s.split(",").map(Number);
}

// Gom các khóa tiembo_product|id|field thành { id: {name, price, img, desc} }
function readOverrides() {
  const map = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!k || k.indexOf(LS_PRODUCT) !== 0) continue;
    const parts = k.split("|");
    const id = Number(parts[1]);
    if (!id || !parts[2]) continue;
    (map[id] = map[id] || {})[parts[2]] = localStorage.getItem(k);
  }
  return map;
}

// Ghép dữ liệu quản trị vào productDatabase
function applyLocalProducts() {
  try {
    const deleted = readDeletedIds();
    const over = readOverrides();
    const list = DEFAULT_PRODUCTS
      .filter(function (p) { return !deleted.includes(p.id); })
      .map(function (p) { return Object.assign({}, p); });

    Object.keys(over).forEach(function (k) {
      const id = Number(k);
      const o = over[k];
      if (deleted.includes(id)) return;
      let p = list.find(function (x) { return x.id === id; });
      if (!p) {
        p = { id: id, name: "", price: 0, img: "", productLink: "chi-tiet.html", desc: "", category: "khac" };
        list.push(p);
      }
      if (o.name !== undefined) p.name = o.name;
      if (o.price !== undefined) p.price = Number(o.price) || 0;
      if (o.img !== undefined) p.img = o.img;
      if (o.desc !== undefined) p.desc = o.desc;
      if (o.category !== undefined && CATEGORIES[o.category]) p.category = o.category;
    });

    productDatabase.length = 0; // giữ nguyên mảng để các tham chiếu cũ vẫn dùng được
    list.forEach(function (p) {
      if (p.name) productDatabase.push(p);
    });
  } catch (e) {
    console.warn("Không đọc được sản phẩm của quản trị viên:", e.message);
  }
}

function nextProductId() {
  let max = 0;
  DEFAULT_PRODUCTS.forEach(function (p) { if (p.id > max) max = p.id; });
  Object.keys(readOverrides()).forEach(function (k) { if (Number(k) > max) max = Number(k); });
  return Math.max(max + 1, Number(localStorage.getItem(LS_NEXTID)) || 0);
}

// Quản trị viên: thêm (không có p.id) hoặc sửa (có p.id). Trả về id sản phẩm.
function saveLocalProduct(p) {
  const isNew = !p.id;
  const id = isNew ? nextProductId() : Number(p.id);
  const fields = {
    name: p.name,
    price: String(p.price),
    img: p.img,
    desc: p.desc || "",
    category: CATEGORIES[p.category] ? p.category : "khac",
  };
  try {
    Object.keys(fields).forEach(function (f) {
      localStorage.setItem(LS_PRODUCT + id + "|" + f, fields[f]);
    });
    if (isNew) localStorage.setItem(LS_NEXTID, String(id + 1));
  } catch (e) {
    throw new Error("Bộ nhớ trình duyệt đã đầy. Hãy dùng ảnh nhỏ hơn hoặc nhập đường dẫn ảnh có sẵn.");
  }
  applyLocalProducts();
  return id;
}

// Quản trị viên: xóa sản phẩm
function deleteLocalProduct(id) {
  id = Number(id);
  const remove = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.indexOf(LS_PRODUCT + id + "|") === 0) remove.push(k);
  }
  remove.forEach(function (k) { localStorage.removeItem(k); });

  // Sản phẩm gốc thì ghi vào danh sách "đã xóa"; sản phẩm admin tự thêm thì xóa hẳn là xong
  if (DEFAULT_PRODUCTS.some(function (p) { return p.id === id; })) {
    const d = readDeletedIds();
    if (!d.includes(id)) d.push(id);
    localStorage.setItem(LS_DELETED, d.join(","));
  }
  applyLocalProducts();
}

// Quản trị viên: bỏ mọi thay đổi, quay về danh sách sản phẩm gốc
function resetLocalProducts() {
  const remove = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.indexOf(LS_PRODUCT) === 0) remove.push(k);
  }
  remove.forEach(function (k) { localStorage.removeItem(k); });
  localStorage.removeItem(LS_DELETED);
  localStorage.removeItem(LS_NEXTID);
  applyLocalProducts();
}

applyLocalProducts();
// Các trang dùng productReady.then(...) — ở chế độ này dữ liệu đã sẵn sàng ngay
const productReady = Promise.resolve();

// Chống chèn mã HTML khi in tên / mô tả sản phẩm bằng innerHTML
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function addProduct_v2(product) {
  const container = document.getElementById("product-list");
  if (!container) return;

  const myDiv = document.createElement("div");
  myDiv.setAttribute("class", "product-item col-sm-4 mb-4");

  const myDiv1 = document.createElement("div");
  myDiv1.setAttribute("class", "product-image");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.img);
  productImg.setAttribute("alt", product.name);
  productImg.setAttribute("class", "img-fluid");

  myDiv1.appendChild(productImg);
  myDiv.appendChild(myDiv1);

  const myDiv2 = document.createElement("div");
  myDiv2.setAttribute("class", "product-info");

  const myP1 = document.createElement("p");
  myP1.textContent = product.name;

  const myP2 = document.createElement("p");
  myP2.textContent = product.price.toLocaleString() + " VND";

  const myLink = document.createElement("a");
  myLink.setAttribute("href", product.productLink + "?id=" + product.id);
  myLink.setAttribute("class", "btn btn-info");
  myLink.textContent = "Xem chi tiết";

  myDiv2.appendChild(myP1);
  myDiv2.appendChild(myP2);
  // Nút MUA NGAY: đã đăng nhập -> sang trang mua hàng, chưa -> sang trang đăng nhập
  const buyBtn = document.createElement("button");
  buyBtn.setAttribute("type", "button");
  buyBtn.setAttribute("class", "btn btn-success ms-2");
  buyBtn.textContent = "Mua ngay";
  buyBtn.addEventListener("click", function () {
    buyNow(product.id);
  });

  myDiv2.appendChild(myLink);
  myDiv2.appendChild(buyBtn);
  myDiv.appendChild(myDiv2);
  container.appendChild(myDiv);
}

function loadProducts(products) {
  for (let i = 0; i < products.length; i++) {
    addProduct_v2(products[i]);
  }
}

// ====== MUA NGAY ======
// Kiểm tra đăng nhập trực tiếp từ localStorage (cùng khóa mà user.js lưu),
// nên nút Mua ngay hoạt động kể cả khi trang chưa nhúng user.js.
function isLoggedIn() {
  try {
    return !!localStorage.getItem("tiembo_session_email");
  } catch (e) {
    return false;
  }
}

// Đã đăng nhập -> sang trang target. Chưa đăng nhập -> báo rồi sang trang đăng nhập
// (đăng nhập xong tự quay lại target).
function goOrLogin(target, message) {
  if (isLoggedIn()) {
    window.location.href = target;
    return;
  }
  const loginPage = "sign-in.html?redirect=" + encodeURIComponent(target);
  const text = message || "Vui lòng đăng nhập để mua hàng.";

  if (typeof UserLib !== "undefined" && UserLib.popup) {
    UserLib.popup({
      type: "info",
      title: "Bạn chưa đăng nhập",
      text: text,
      buttonText: "Đăng nhập",
      onClose: function () {
        window.location.href = loginPage;
      },
    });
  } else {
    alert("Bạn chưa đăng nhập. " + text);
    window.location.href = loginPage;
  }
}

// Mua ngay 1 sản phẩm (dùng ở san-pham.html, chi-tiet.html...)
function buyNow(id) {
  goOrLogin("mua-hang.html?id=" + id);
}

// Thanh toán cả giỏ hàng
function checkoutCart() {
  goOrLogin("mua-hang.html?cart=1", "Vui lòng đăng nhập để thanh toán.");
}


// ====== TÌM KIẾM SẢN PHẨM ======
// Bỏ dấu tiếng Việt + chữ thường: "Đèn Học" -> "den hoc"
function boDau(s) {
  return String(s)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

// true nếu tên chứa TẤT CẢ các từ trong từ khóa (không phân biệt hoa thường, có dấu hay không)
function matchKeyword(text, keyword) {
  const t = boDau(text);
  return boDau(keyword)
    .split(/\s+/)
    .filter(Boolean)
    .every(function (w) {
      return t.includes(w);
    });
}

// Trả về danh sách sản phẩm khớp từ khóa
function searchProducts(keyword) {
  return productDatabase.filter(function (p) {
    return matchKeyword(p.name, keyword);
  });
}