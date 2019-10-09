let btn = document.querySelectorAll('.accordion');

for(let  i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;

        // if(panel.style.display === "block") {
            if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else  {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
