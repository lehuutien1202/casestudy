//Class object
class News {
    constructor(img, topic, title, subContent, time) {
        this.img = img;
        this.topic = topic;
        this.title = title;
        this.subContent = subContent;
        this.time = time;
    }
}


// new Object
var newGarenas = [];
const key_Enter = 13;
const key_data = "new_data";
// hàm khởi tạo
function init() {
    if (getData(key_data) == null) {
        newGarenas = [
            new News("https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/05_2022/KPBS-2.jpg",
                "Sự kiện", "Tham gia Khai Phá Biển Sâu - Lật mở bí ẩn, đón chào Yasuo và Gangplank từ 06/05 đến 12/05",
                "Yasuo Thế Thân Thùy Thần và Gangplank Kẻ Phản Bội đã tới.", "22:00 01/05/2022"),
            new News("https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/05_2022/ban_ve_MSI2022_header.jpg",
                "MSI 2022", "Thông báo mở bán Vé MSI 2022",
                "Vé của sự kiện MSI 2022 sẽ bắt đầu mở bán từ ngày 04/05.", "07:00 03/05/2022"),
            new News("https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/05_2022/202204-142-VongquayNhatNguyen-1220x400.jpg",
                "Sự kiện", "Tham gia Vòng Quay Nhật Nguyệt - Cơ hội mua trang phục xịn chỉ với 10 RP trong tay từ 10:00 02/05 đến 23:59 06/05",
                "Còn gì hấp dẫn hơn khi mua trang phục Huyền Thoại chỉ với 10 RP?", "10:00 02/05/2022"),
            new News("https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/11_2021/Quan/vongloai.jpg",
                "VCS Hè 2022", "Tổng kết Vòng Loại VCS Mùa Hè 2022] AS Esports trở thành nhà vô địch",
                "Đội hình kết hợp sức trẻ và kinh nghiệm của AS đã tạo nên điểm nhấn", "22:00 01/05/2022"),
            new News("https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/05_2022/202204-148-TheDoiTen-1220x400.jpg",
                "Sự kiện", "Giảm giá Thẻ Đổi Tên - Đổi tên mới đẳng cấp mới chỉ với 69 RP từ 01/05 đến 06/05",
                "Đổi ngay tên mới chơi mấy ngày lễ nào mọi người.", "00:00 01/05/2022"),
            new News("https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/04_2022/202204-135-HieuTrieuThienThuc-1220x400.jpg",
                "Sự kiện", "Tham gia Hiệu Triệu Thiên Thực - Đa dạng cách sở hữu trang phục mới từ 11:00 29/04 đến 23:59 05/05",
                "Bạn muốn sở hữu cách nào cũng có nhé.", "11:00 29/04/2022")
        ]
        setData(key_data, newGarenas);
    }
    else {
        newGarenas = getData(key_data);
    }
}
// lưu dữ liệu vào local storage
function getData(key) {
    return JSON.parse(localStorage.getItem(key))
}
function setData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
//hàm hiển thị tin tức
function renderNews(data) {
    let htmls = data.map(function (newGarena, index) {
        return `
        <div style="width:30%; text-align: left;">
            <img src="${newGarena.img}" width="300" height="300">
            <h4 style="color: rgb(0, 197, 197);">${newGarena.topic}</h4>
        <div style="width: 50%;">
            <h3>${newGarena.title}</h3>
        </div>
        <div style="width: 50%;">
            <p>${newGarena.subContent}</p>
        </div>
            <p>${newGarena.time}</p>
            <img id="action_${index}" onclick="fix(${index})" src="fix.png" title="Fix" style="width: 30px; height: 30px">
            <img id="action_${index}" onclick="remove(${index})" src="remove.png" title="Remove" style="width: 30px; height: 30px">
        </div>
        `;
    })
    document.getElementById("demo").innerHTML = htmls.join("");
    setData(key_data, newGarenas);
}
//hàm hiển thị thẻ để nhập thông tin cần thêm

function add() {
    document.querySelector('.add').classList.add('d-none');
    document.querySelector('.addN').classList.remove('d-none');
}
//hàm thêm tin tức
function addNews() {
    let img = document.querySelector('.img').value;
    let topic = document.querySelector('.topic').value;
    let title = document.querySelector('.title').value;
    let subContent = document.querySelector('.subContent').value;
    let datetime = document.querySelector('.datetime').value;
    let newarray = new News(img, topic, title, subContent, datetime);
    newGarenas.push(newarray);
    resetForm();
    renderNews(newGarenas);
}

function resetForm(){
    document.querySelector('.img').value = "";
    document.querySelector('.topic').value = "";
    document.querySelector('.title').value = "";
    document.querySelector('.subContent').value = "";
    document.querySelector('.datetime').value = "";
}
//hàm để hủy phần thêm tin tức
function cancleA() {
    document.querySelector('.add').classList.remove('d-none');
    document.querySelector('.addN').classList.add('d-none');
    resetForm();
}
//hàm để hủy phần sửa tin tức
function cancleF() {
    document.querySelector('.add').classList.remove('d-none');
    document.querySelector('.fixN').classList.add('d-none');
}

// hàm hiển thị thẻ sửa tin tức
function fix(index) {
    document.querySelector('.add').classList.add('d-none');
    document.querySelector('.fixN').classList.remove('d-none');
    let str = `
        <div class="fixN_1">
            <div>
                <label for="image">Sửa ảnh: <input type="text" name="image" class="fImg" value="${newGarenas[index].img}"></label>
            </div>
            <div>
                <label for="topic">Sửa chủ để: <input type="text" name="topic" class="fTopic" value="${newGarenas[index].topic}"></label>
            </div>
            <div>
                <label for="title">Sửa tiêu để: <input type="text" name="title" class="fTitle" value="${newGarenas[index].title}"></label>
            </div>
            <div>
                <label for="subContent">Sửa nội dung: <input type="text" name="subContent" class="fSubContent" value="${newGarenas[index].subContent}"></label>
            </div>
            <div>
                <label for="datetime">Sửa thời gian: <input type="date" name="datetime" class="fDatetime" value="${newGarenas[index].time}"></label>
            </div>
            <div>
                <button type="button" class="btn" onclick="fixNews(${index})">Sửa</button>
            </div>
            <div>
                <button type="button" class="btn" onclick="cancleF()">HỦY</button>
            </div>
        </div>
        `;

    document.querySelector('.fixN').innerHTML = str;
}
//hàm cập nhật thông tin cần sửa
function fixNews(index) {
    let newI = newGarenas[index];
    let img = document.querySelector('.fImg').value;
    let topic = document.querySelector('.fTopic').value;
    let title = document.querySelector('.fTitle').value;
    let subContent = document.querySelector('.fSubContent').value;
    let datetime = document.querySelector('.fDatetime').value;
    newI.img = img;
    newI.topic = topic;
    newI.title = title;
    newI.subContent = subContent;
    newI.time = datetime;
    setData(key_data, newGarenas);
    renderNews(newGarenas);
}
//hàm xóa tin tức
function remove(index) {
    let confirmed = window.confirm("Bạn có chắc muốn xóa tin tức này?");

    if (confirmed) {
        newGarenas.splice(index, 1);
        renderNews(newGarenas);
        setData(key_data, newGarenas);
    }
}

function pressEnter(e) {
    if (e.keyCode == key_Enter)
        addNews();
}

function ready() {
    init();
    renderNews(newGarenas);
}

ready();