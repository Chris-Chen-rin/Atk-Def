document.addEventListener("DOMContentLoaded", update);

function update(){
  console.log("scr.js 載入成功！");
  
  const vc = localStorage.getItem('visitCount');
  
  if (vc === null) {
    vc = 1;
  } else {
    vc = parseInt(vc) + 1;
  }
  
  // 更新 localStorage 
  localStorage.setItem('visitCount', vc);
  
  // 顯示訪問次數
  document.getElementById('visitCounter').textContent = vc;
}

// hello?
