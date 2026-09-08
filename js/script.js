const openBtn = document.getElementById("openMap");
const modal = document.getElementById("mapModal");
const closeBtn = document.querySelector(".close-map");

openBtn.addEventListener("click", function(e){
    e.preventDefault();
    modal.style.display = "block";
});

closeBtn.addEventListener("click", function(){
    modal.style.display = "none";
});

window.addEventListener("click", function(e){
    if(e.target === modal){
        modal.style.display = "none";
    }
});

// =====================================
//              GALERI DESA
// =====================================

const galleryItems =
    document.querySelectorAll(".gallery-item");

const galleryModal =
    document.getElementById("galleryModal");

const galleryModalImage =
    document.getElementById("galleryModalImage");

const galleryCounter =
    document.getElementById("galleryCounter");

const galleryClose =
    document.getElementById("galleryClose");

const galleryPrev =
    document.getElementById("galleryPrev");

const galleryNext =
    document.getElementById("galleryNext");

const galleryGrid =
    document.getElementById("galleryGrid");

const galleryMoreBtn =
    document.getElementById("galleryMoreBtn");


const galleryImages =
    Array.from(galleryItems).map(item => ({

        src: item.querySelector("img").src,

        alt: item.querySelector("img").alt

    }));


let currentGalleryIndex = 0;


// =====================================
//        MENAMPILKAN FOTO
// =====================================

function showGalleryImage(index){

    currentGalleryIndex =
        (index + galleryImages.length)
        % galleryImages.length;


    galleryModalImage.src =
        galleryImages[currentGalleryIndex].src;


    galleryModalImage.alt =
        galleryImages[currentGalleryIndex].alt;


    galleryCounter.textContent =
        `${currentGalleryIndex + 1} / ${galleryImages.length}`;
}


// =====================================
//        MEMBUKA PREVIEW
// =====================================

function openGallery(index){

    showGalleryImage(index);

    galleryModal.classList.add("show");

    document.body.style.overflow = "hidden";
}


// =====================================
//        MENUTUP PREVIEW
// =====================================

function closeGallery(){

    galleryModal.classList.remove("show");

    document.body.style.overflow = "";
}


// =====================================
//        KLIK FOTO
// =====================================

galleryItems.forEach((item, index) => {

    item.addEventListener("click", function(){

        openGallery(index);

    });

});


// =====================================
//        PREVIOUS
// =====================================

galleryPrev.addEventListener("click", function(){

    showGalleryImage(
        currentGalleryIndex - 1
    );

});


// =====================================
//        NEXT
// =====================================

galleryNext.addEventListener("click", function(){

    showGalleryImage(
        currentGalleryIndex + 1
    );

});


// =====================================
//        CLOSE
// =====================================

galleryClose.addEventListener(
    "click",
    closeGallery
);


// =====================================
//     KLIK AREA LUAR FOTO
// =====================================

galleryModal.addEventListener("click", function(e){

    if(e.target === galleryModal){

        closeGallery();

    }

});


// =====================================
//       LIHAT SEMUA FOTO
// =====================================

galleryMoreBtn.addEventListener(
    "click",
    function(){

        galleryGrid.classList.toggle(
            "show-all"
        );


        if(
            galleryGrid.classList.contains(
                "show-all"
            )
        ){

            this.innerHTML =
                'Tutup Foto <i class="fa-solid fa-arrow-up"></i>';

        }else{

            this.innerHTML =
                'Lihat Semua Foto <i class="fa-solid fa-arrow-right"></i>';

        }

    }
);


// =====================================
//          KEYBOARD
// =====================================

document.addEventListener(
    "keydown",
    function(e){

        if(
            !galleryModal.classList.contains(
                "show"
            )
        ){

            return;

        }


        // Tombol kiri
        if(e.key === "ArrowLeft"){

            showGalleryImage(
                currentGalleryIndex - 1
            );

        }


        // Tombol kanan
        if(e.key === "ArrowRight"){

            showGalleryImage(
                currentGalleryIndex + 1
            );

        }


        // Tombol ESC
        if(e.key === "Escape"){

            closeGallery();

        }

    }
);

// =====================================
//        SLIDER PEMERINTAHAN DESA
// =====================================

const governmentSlider =
    document.getElementById("governmentSlider");

const governmentPrev =
    document.getElementById("governmentPrev");

const governmentNext =
    document.getElementById("governmentNext");


if(
    governmentSlider &&
    governmentPrev &&
    governmentNext
){

    governmentPrev.addEventListener(
        "click",
        function(){

            governmentSlider.scrollBy({
                left:-300,
                behavior:"smooth"
            });

        }
    );


    governmentNext.addEventListener(
        "click",
        function(){

            governmentSlider.scrollBy({
                left:300,
                behavior:"smooth"
            });

        }
    );

}

// =====================================
//          MOBILE NAVBAR
// =====================================

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const navMenu =
    document.querySelector(".nav-menu");


if(mobileMenuBtn && navMenu){

    mobileMenuBtn.addEventListener("click", function(){

        navMenu.classList.toggle("active");

    });


    // Tutup menu setelah memilih menu

    navMenu.querySelectorAll("a").forEach(function(link){

        link.addEventListener("click", function(){

            navMenu.classList.remove("active");

        });

    });

}