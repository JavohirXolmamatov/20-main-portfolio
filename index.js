document.getElementById("download-btn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "public/MyResume.pdf"; // Rezyume fayl manzili
  link.download = "MyResume.pdf"; // Yuklab olinadigan fayl nomi
  link.click();
});

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";

  setTimeout(() => {
    sidebar.classList.add("show"); // .show sinfini qo'shib transform o'tishini faollashtirish
  }, 10); // 10ms kechikish bilan transform o'tishini boshlash
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
