// 第一段是实时更新时钟
function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    // 格式化时间，保证显示为两位数
    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);
    
    // 更新时间显示
    document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds;
    
    // 每隔一秒调用 updateTime 函数，实现实时更新
    setTimeout(updateTime, 1000);
}

// 第二段是动态效果
function formatTime(time) {
    return (time < 10 ? "0" : "") + time;
}

// 页面加载时启动 updateTime 函数并添加动画效果
window.onload = function() {
    // 启动时钟更新
    updateTime();
    
    // 尝试获取要添加动画效果的元素
    var element = document.getElementById('element');
    
    // 如果元素存在，则添加动画效果的样式
    if (element) {
        element.style.transition = 'transform 1s ease-in-out';
        element.style.transform = 'translateY(50px)';
    }
};
