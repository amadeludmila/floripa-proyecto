
      document.querySelectorAll(".galeria-img").forEach((img) => {
        img.addEventListener("click", function () {
          const src = this.getAttribute("src");
          document.getElementById("imagenAmpliada").setAttribute("src", src);
        });
      });
