function renderCarrito() {
  const carritoContainer = document.getElementById("carrito__container");
  var carrito = JSON.parse(localStorage.getItem("carrito"));


  carrito.map((e) => {
    const item = document.createElement("div");
    item.classList.add("item");

    const img = document.createElement("img");
    img.src = e.img;
    item.appendChild(img);

    const name = document.createElement("p");
    name.textContent = "Producto: " + e.nombre;
    item.appendChild(name);

    const precios = document.createElement("p");
    precios.textContent = "Producto: " + e.precio;
    item.appendChild(precios);

    const detalle = document.createElement("p");
    detalle.textContent = "Producto: " + e.detalle;
    item.appendChild(detalle);
    
    const cantidad = document.createElement("p");
    cantidad.textContent = "Cantidad: " + e.cantidad;
    item.appendChild(cantidad);

    const precio = document.createElement("p");
    precio.textContent = "Precio: " + e.precio * Number(e.cantidad);
    item.appendChild(precio);

    

    carritoContainer.appendChild(item);
  });

  const comprar = document.createElement("button");
  comprar.textContent = "comprar";
  comprar.classList.add("button--primary");
  const inputUsuario = document.getElementById("inputUsuario");
  const inputPassword = document.getElementById("inputContraseña");
  const formLogin = document.forms[0];

 
  comprar.addEventListener("click", () =>{
        inputUsuario.style.visibility = "visible";
        inputPassword.style.visibility = "visible";
        inputSubmit.style.visibility = "visible";
    } );
    
    formLogin.addEventListener("submit", (e) =>  {
      e.preventDefault();
      var verifica;
      fetch("verificar_user.php",{method:"post",body:new FormData(formLogin)})
      .then(response => response.json())
      .then(data => {
      // Aquí puedes trabajar con los datos recibidos en JavaScript
        verifica = data;
        if (verifica === 1){
        
          alert("Compraste los articulos del carrito");
          localStorage.removeItem("carrito");
          location.reload();
           
        }else{
          alert("Usuario invalido");
        }
      })
      .catch(error => {
      // Manejo de errores en caso de que la solicitud falle
        console.log("Error en la solicitud AJAX:", error);
      });
      console.log(verifica);

     

    });

   
   
   

  carritoContainer.appendChild(comprar);
  
}
if (document.getElementById("carrito__container")) {
  renderCarrito();
}
