window.addEventListener("scroll", function(){
    let header = document.querySelector('#header');
    let Logo = document.querySelector('#logo');

    header.classList.toggle('rolagem', this.window.scroll > 0);

    if(this.window.screenX > 0){
        Logo.src = "/img/Logo/Captura_de_tela_2025-08-02_014353-removebg-preview.png";
    }else {
        Logo.src = "/img/Logo/image-removebg-preview.png";
    }
})