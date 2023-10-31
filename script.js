/*==============================================================================================================================*/
/* ========= ALTERAR BANNER CONFORME MENU ========= */

document.addEventListener("DOMContentLoaded", function() {
    function updateBackgroundAndMenu(element, imageURL) {
        var menuItems = document.querySelectorAll(".square");
        for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove("menu-selecionado");
        }

        element.classList.add("menu-selecionado");

        document.body.style.backgroundImage = "url(" + imageURL + ")";
    }

    document.getElementById("menu-tera").addEventListener("click", function() {
        updateBackgroundAndMenu(this, "imagens/tera.jpg");
    });

    document.getElementById("menu-sadi").addEventListener("click", function() {
        updateBackgroundAndMenu(this, "imagens/sadi.jpg");
    });

    document.getElementById("menu-drones").addEventListener("click", function() {
        updateBackgroundAndMenu(this, "imagens/drones.jpg");
    });

    document.getElementById("menu-solucoes").addEventListener("click", function() {
        updateBackgroundAndMenu(this, "imagens/solucoes.jpg");
    });
});

/*==============================================================================================================================*/
/* ========= VÍDEO SÓ NO MENU TERA ========= */

document.addEventListener("DOMContentLoaded", function() {
    const videoPlayer = document.getElementById("video-player");
    const menuItems = document.querySelectorAll(".square");

    function updateVideoVisibility(selectedMenu) {
        const menuName = selectedMenu.getAttribute("data-menu");

        if (menuName === "tera") {
            videoPlayer.style.display = "block";
            videoPlayer.play();
        } else {
            videoPlayer.style.display = "none";
            videoPlayer.pause();
        }

        menuItems.forEach((menuItem) => {
            menuItem.classList.remove("menu-selecionado");
        });
        selectedMenu.classList.add("menu-selecionado");
    }

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", function () {
            updateVideoVisibility(this);
        });
    });

    videoPlayer.addEventListener("ended", function () {
        this.currentTime = 0;
        this.play();
    });

    updateVideoVisibility(document.querySelector(".menu-selecionado"));
});

/*==============================================================================================================================*/
/* ========= CARROSSEL PARCEIROS ========= */

document.addEventListener("DOMContentLoaded", function () {
    const parceirosContainer = document.getElementById("logos-parceiros");
    const parceirosImages = [
        "imagens/logos-parceiros/logo-1.png",
        "imagens/logos-parceiros/logo-2.png",
        "imagens/logos-parceiros/logo-3.png",
        "imagens/logos-parceiros/logo-4.png",
        "imagens/logos-parceiros/logo-5.png",
        "imagens/logos-parceiros/logo-6.png",
    ];

    let currentIndex = 0;

    function updateParceirosBackground() {
        parceirosContainer.style.backgroundImage = `url(${parceirosImages[currentIndex]})`;
        currentIndex = (currentIndex + 1) % parceirosImages.length;
    }

    updateParceirosBackground();

    setInterval(updateParceirosBackground, 5000);
});

/*==============================================================================================================================*/
/* ========= CARROSSEL CLIENTES ========= */

document.addEventListener("DOMContentLoaded", function () {
    const clientesContainer = document.getElementById("logos-clientes");
    const clientesImages = [
        "imagens/logos-clientes/logo-1.png",
        "imagens/logos-clientes/logo-2.png",
        "imagens/logos-clientes/logo-3.png",
        "imagens/logos-clientes/logo-4.png",
        "imagens/logos-clientes/logo-5.png",
        "imagens/logos-clientes/logo-6.png",
        "imagens/logos-clientes/logo-7.png",
        "imagens/logos-clientes/logo-8.png",
    ];

    let currentIndex = 0;

    function updateclientesBackground() {
        clientesContainer.style.backgroundImage = `url(${clientesImages[currentIndex]})`;
        currentIndex = (currentIndex + 1) % clientesImages.length;
    }

    updateclientesBackground();

    setInterval(updateclientesBackground, 5000);
});