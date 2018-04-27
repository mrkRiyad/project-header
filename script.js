// Project Header JS
var container = document.getElementById('ph-container');    
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
        
        if(this.readyState == 4 && this.status == 200) {
            retriveData(this);
        }
};
xmlhttp.onerror = function () {
    console.log('Connection Error.');
}
xmlhttp.open('GET', 'https://raw.githack.com/mrkRiyad/project-header/master/data.json', true);
xmlhttp.send();

function retriveData(xml) {
    
    var content = '';
    var data = JSON.parse(xml.response);

    content += '<div class="ph-struc"><div class="ph-logo" ><a href="https://github.com/mrkRiyad/"><i class="fa fa-github"></i>Riyad Khan</a></div><div class="ph-menu"><span id="ph-menu-btn"><i class="fa fa-bars"></i></span></div></div><div id="menu-body" class="ph-menu-slide"><h3>All Projects</h3><ul>';

    for (var i = 0; i < data.length; i++) {
        content += '<li><a href="' + data[i].url +'" target="_blank">'+ data[i].name +'</a></li>'; 
    }
    content += '</ul></div >';    
    container.innerHTML = content;

    var menuBody = document.getElementById('menu-body'),
        btn = document.getElementById('ph-menu-btn'),
        icon = document.querySelector('#ph-menu-btn i');
    
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-arrow-right');
        menuBody.classList.toggle('menu-show');
    });
    container.insertAdjacentHTML('afterend', '<div class="ph-layer"></div>');
}