document.getElementById("queryBtn").addEventListener("click", function () {
    const studentName = document.getElementById("studentNameQuery").value;

    firebase.firestore().collection("attendance")
        .where("studentName", "==", studentName)
        .get()
        .then((querySnapshot) => {
            let resultHTML = "<h3>Kết quả truy vấn:</h3><ul>";
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                resultHTML += `<li>Ngày: ${data.date}, Môn: ${data.course}</li>`;
            });
            resultHTML += "</ul>";
            document.getElementById("queryResults").innerHTML = resultHTML;
        })
        .catch((error) => {
            console.error("Lỗi khi truy vấn lịch sử: ", error);
        });
});
