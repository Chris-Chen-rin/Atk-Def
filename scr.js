// 检查localStorage中是否已经有一个名为"visitCount"的键
if (localStorage.getItem('visitCount') === null) {
    // 如果没有，说明是第一次访问，将计数器设置为1
    localStorage.setItem('visitCount', 1);
} else {
    // 如果有，说明不是第一次访问，将计数器加1
    let currentCount = parseInt(localStorage.getItem('visitCount'), 10);
    localStorage.setItem('visitCount', currentCount + 1);
}

// 获取更新后的计数器值
let visitCount = localStorage.getItem('visitCount');

// 将计数器值显示在页面上
document.getElementById('visitCounter').textContent =  visitCount ;

function addComment() {
            let input = document.getElementById("commentInput");
            let commentText = input.value.trim();
            if (commentText === "") return;
            
            let commentDiv = document.createElement("div");
            commentDiv.classList.add("comment");
            commentDiv.innerText = commentText;
            
            document.getElementById("commentSection").appendChild(commentDiv);
            input.value = ""; 
        }
