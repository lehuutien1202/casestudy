//Class object
class New {
    constructor(img, type, title, subContent, time) {
        this.img = img;
        this.type = type;
        this.title = title;
        this.subContent = subContent;
        this.time = time;
    }
    getImg() {
        return this.img;
    }
    getType() {
        return this.type;
    }
    getTitle() {
        return this.title;
    }
    getSubContent() {
        return this.subContent;
    }
    getTime() {
        return this.time;
    }
}

// new Object
let new1 = new New("https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/05_2022/KPBS-2.jpg",
    "Sự kiện", "Tham gia Khai Phá Biển Sâu - Lật mở bí ẩn, đón chào Yasuo và Gangplank từ 06/05 đến 12/05",
    "Yasuo Thế Thân Thùy Thần và Gangplank Kẻ Phản Bội đã tới.", "22:00 01/05/2022");


let new2 = new New("https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/05_2022/ban_ve_MSI2022_header.jpg",
    "MSI 2022", "Thông báo mở bán Vé MSI 2022",
    "Vé của sự kiện MSI 2022 sẽ bắt đầu mở bán từ ngày 04/05.", "07:00 03/05/2022");

let new3 = new New("https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/05_2022/202204-142-VongquayNhatNguyen-1220x400.jpg",
    "Sự kiện", "Tham gia Vòng Quay Nhật Nguyệt - Cơ hội mua trang phục xịn chỉ với 10 RP trong tay từ 10:00 02/05 đến 23:59 06/05",
    "Còn gì hấp dẫn hơn khi mua trang phục Huyền Thoại chỉ với 10 RP?", "10:00 02/05/2022");

let new4 = new New("https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/11_2021/Quan/vongloai.jpg",
    "VCS Hè 2022", "Tổng kết Vòng Loại VCS Mùa Hè 2022] AS Esports trở thành nhà vô địch",
    "Đội hình kết hợp sức trẻ và kinh nghiệm của AS đã tạo nên điểm nhấn", "22:00 01/05/2022");

let new5 = new New("https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/05_2022/202204-148-TheDoiTen-1220x400.jpg",
    "Sự kiện", "Giảm giá Thẻ Đổi Tên - Đổi tên mới đẳng cấp mới chỉ với 69 RP từ 01/05 đến 06/05",
    "Đổi ngay tên mới chơi mấy ngày lễ nào mọi người.", "00:00 01/05/2022");

let new6 = new New("https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/04_2022/202204-135-HieuTrieuThienThuc-1220x400.jpg",
    "Sự kiện", "Tham gia Hiệu Triệu Thiên Thực - Đa dạng cách sở hữu trang phục mới từ 11:00 29/04 đến 23:59 05/05",
    "Bạn muốn sở hữu cách nào cũng có nhé.", "11:00 29/04/2022");


//Add object to array
let arr = new Array(new1, new2, new3, new4, new5, new6);

//Add content
let a = "";
let sub = "";
let dem = 0;
for (let i = 0; i < arr.length; i++) {
    if (i == 6) {
        break;
    }
    dem++;
    sub +=
        `<div style="width:35%; text-align: left;">
        <a href="#" style="text-decoration: none">
        <img src="${arr[i].getImg()}" alt="Girl in a jacket" width="300" height="300">
        <h4 style="color: rgb(0, 197, 197);">${arr[i].getType()}</h4>
        <div style="width: 55%;">
            <h3>${arr[i].getTitle()}</h3>
        </div>
        <div style="width: 55%;">
            <p>${arr[i].getSubContent()}</p>
        </div>
        <p>${arr[i].getTime()}</p>
        </a>
        </div>`;
    if (dem == 3) {
        a = a + `<div style='display:flex; margin-left: 15%; margin-top: 3%;' witdth="90%">` + sub +` </div>`;
        sub = "";
        dem = 0;
    }
}
document.getElementById("demo").innerHTML = a;

// Funciton [Xem thêm]  to do