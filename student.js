document.getElementById("addStudentBtn").addEventListener("click", function () {
    const studentName = document.getElementById("studentName").value;
    const courses = [];
    
    if (document.getElementById("piano").checked) courses.push("Piano");
    if (document.getElementById("guitar").checked) courses.push("Guitar");
    if (document.getElementById("thanhnhac").checked) courses.push("Thanh Nhạc");
    if (document.getElementById("ve").checked) courses.push("Vẽ");
    if (document.getElementById("nhay").checked) courses.push("Nhảy");
    if (document.getElementById("mc").checked) courses.push("MC");

    // Lưu vào Firebase Firestore
    firebase.firestore().collection("students").add({
        name: studentName,
        courses: courses
    }).then(() => {
        alert("Thêm học sinh thành công!");
    }).catch((error) => {
        console.error("Lỗi khi thêm học sinh: ", error);
    });
});
