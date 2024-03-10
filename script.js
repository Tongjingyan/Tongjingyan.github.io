// 实时更新时钟的函数
function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds;

    setTimeout(updateTime, 1000); // 每秒更新时间
}

// 格式化时间的辅助函数
function formatTime(time) {
    return (time < 10 ? "0" : "") + time;
}

// 动态设置当前月份和年份的函数
function setMonthAndYear() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
    document.querySelector('.month').textContent = monthNames[month] + " " + year;
}

// 动态生成日历的函数
function generateCalendar() {
    var now = new Date();
    var currentDay = now.getDate();
    var currentMonth = now.getMonth();
    var currentYear = now.getFullYear();

    var firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    var lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    var calendar = document.querySelector('.days');
    calendar.innerHTML = '';

    for (var i = 0; i < firstDayOfMonth.getDay(); i++) {
        calendar.innerHTML += '<div></div>'; // 填充空白
    }

    for (var day = 1; day <= lastDayOfMonth.getDate(); day++) {
        var dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        if (day === currentDay) {
            dayDiv.classList.add('today'); // 突出显示今天
        }
        calendar.appendChild(dayDiv);
    }
}

// 页面加载时执行的函数
window.onload = function() {
    setMonthAndYear(); // 设置月份和年份
    updateTime(); // 启动时钟
    generateCalendar(); // 生成并填充日历

    // 获取动画元素并添加 final-state 类来触发动画
    var animatedElement = document.querySelector('.animated-element');
    if (animatedElement) {
        animatedElement.classList.add('final-state');
    }
};
