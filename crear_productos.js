function readItem(nombre, precio, stock, detalle, imagen) {
    const prods = document.getElementById("containerProds");
  
    const nodo_Items = document.createElement("div");
    nodo_Items.classList.add("items");
    const nodo_img = document.createElement("img");
    const nodo_precio = document.createElement("p");
    nodo_precio.classList.add("precio");
    const nodo_nombre = document.createElement("p");
    nodo_nombre.classList.add("nombre");
    const nodo_stock = document.createElement("p");
    nodo_stock.classList.add("stock");
    const verDetalle = document.createElement("button");
    verDetalle.textContent = "ver detalles"; 
    verDetalle.classList.add("button--primary");
    const nodo_detalle = document.createElement("p");
    nodo_detalle.classList.add("detalle");

    nodo_img.src = imagen;
    nodo_precio.textContent = "$" + precio;
    nodo_nombre.textContent = nombre;
    nodo_stock.textContent = "Stock: " + stock;
    nodo_detalle.textContent = "Detalle: " + detalle;
  
    nodo_Items.appendChild(nodo_img);
    nodo_Items.appendChild(nodo_precio);
    nodo_Items.appendChild(nodo_nombre);
    nodo_Items.appendChild(nodo_stock);
    nodo_Items.appendChild(verDetalle);
    nodo_Items.appendChild(nodo_detalle);
    
    verDetalle.addEventListener("click", (e) => {
      e.preventDefault();
      nodo_detalle.style.visibility = "visible";
    });
  
    const cantidad = document.createElement("input");
    cantidad.setAttribute("type", "number");
    cantidad.setAttribute("placeholder", "Cantidad");
    nodo_Items.appendChild(cantidad);
    const boton = document.createElement("button");
    boton.textContent = "Agregar al carrito";
    nodo_Items.appendChild(boton);
    boton.classList.add("button--primary");
  
    boton.addEventListener("click", (e) => {
      e.preventDefault();
      carrito.push({
        img: imagen,
        nombre: nombre,
        precio: precio,
        detalle: detalle,
        cantidad: cantidad.value,
      });
      localStorage.setItem("carrito", JSON.stringify(carrito));
    });

    prods.appendChild(nodo_Items);
   
    
  }
  
  // Hacer una solicitud AJAX para obtener los datos de PHP
  fetch("./traer_productos.php")
  .then((response) => response.json())
  .then((data) => {
    // Recorrer los datos recibidos y llamar a readItem() con cada elemento
    console.log(data)
    data.forEach((item) => {
      readItem(item.nombre, item.precio, item.stock, item.detalle, item.imagen, item.cantidad);
    });
  })
  .catch((error) => {
    console.log("Error en la solicitud AJAX:", error);
  });
  
  if (localStorage.getItem("carrito")) {
    var carrito = JSON.parse(localStorage.getItem("carrito"));
  } else {
    localStorage.setItem("carrito", JSON.stringify([]));
    var carrito = [];
  }
  
  