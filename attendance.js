document.getElementById("markAttendanceBtn").addEventListener("click", function () {
    const studentName = document.getElementById("studentName").value;
    const course = document.getElementById("course").value;
    const currentDate = new Date().toISOString();

    firebase.firestore().collection("attendance").add({
        studentName: studentName,
        course: course,
        date: currentDate
    }).then(() => {
        alert("Điểm danh thành công!");
    }).catch((error) => {
        console.error("Lỗi khi điểm danh: ", error);
    });
});
