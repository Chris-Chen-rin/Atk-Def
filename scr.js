let visitCount = localStorage.getItem("visitCount");

if (visitCount === null) {
  visitCount = 1;
} else {
  visitCount = parseInt(visitCount) + 1;
}

// 更新 localStorage
localStorage.setItem("visitCount", visitCount);

// 顯示訪問次數
document.getElementById("visitCounter").textContent = visitCount;
