const ALLMENU = document.getElementById("your-menu");

const CLICKING = document.getElementById("check").addEventListener("click", function(){
    if (ALLMENU.style.display === 'none') {
        return ALLMENU.style.display = 'block';
    } else {
        return ALLMENU.style.display = 'none'; 
    }
});