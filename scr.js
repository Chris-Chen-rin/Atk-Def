console.log("scr.js 載入成功！");

document.addEventListener("DOMContentLoaded", function (){
  let vc = localStorage.getItem('visitCount');
  
  if (vc === null) {
    vc = 1;
  } else {
    vc = parseInt(vc) + 1;
  }
  
  // 更新 localStorage
  localStorage.setItem('visitCount', vc);
  
  // 顯示訪問次數
  // document.getElementById('visitCounter').textContent = visitCount;
  let counterElement = document.getElementById('visitCounter');
  if (counterElement) {
      counterElement.textContent = visitCount;
  } else {
      console.error("錯誤：找不到 ID 為 'visitCounter' 的元素！");
  }
}

