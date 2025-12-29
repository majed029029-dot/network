// قاعدة بيانات الكروت البرمجية
let cardsDatabase = [
    { user: "admin", pass: "1234", balance: 500, status: "active" },
    { user: "user1", pass: "0000", balance: 0, status: "expired" }
];

function login() {
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;

    // البحث عن الكرت في "المخزن"
    let foundCard = cardsDatabase.find(c => c.user === u && c.pass === p);

    if (foundCard) {
        if (foundCard.status === "expired" || foundCard.balance <= 0) {
            alert("❌ هذا الكرت منتهي الرصيد!");
        } else {
            // نجاح الدخول
            document.getElementById("loginCard").style.display = "none";
            document.getElementById("statusCard").style.display = "block";
            document.getElementById("welcomeMsg").innerText = "🚀 أهلاً بك: " + u;
            document.getElementById("balanceValue").innerText = foundCard.balance + " MB";
            console.log("👤 تم تسجيل دخول: " + u);
        }
    } else {
        alert("⚠️ بيانات الكرت غير صحيحة!");
    }
    
}
