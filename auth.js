document.getElementById("loginBtn").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "kidstars" && password === "kidstars145@") {
        window.location.href = "dashboard.html";  // Chuyển hướng đến trang dashboard nếu đăng nhập thành công
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại!");
    }
});
