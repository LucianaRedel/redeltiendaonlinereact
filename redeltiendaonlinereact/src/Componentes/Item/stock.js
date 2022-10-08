
class Producto {
    constructor(id, nombre, descripcion, precio, stock, disponibilidad, imagen, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion=descripcion;
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
        this.disponibilidad = disponibilidad;
        this.imagen= imagen;
        this.cantidad= parseInt(cantidad);
    }
    sumarIvayEnvio() {
        this.precio = Math.round(this.precio * 1.21 * 1.20);
    }
}

// Creo los items de la pagina con los datos necesarios para la venta 

const productos = [];

productos.push(new Producto(1, 'Quesos', 'Queso Azul, de cuerpo blanco y cremoso, semi blando, caracterizado por presentar venas verdes, grises o azules, de sabor intenso, ', 300, 1, 'Entrega inmediata', '../../Productos/Quesos/queso-azul.jpeg'));
productos.push(new Producto(2, 'Quesos', 'Queso Brie, inconfundible con su corteza comestible blanquecida, de textura suave y sabor cremoso', 400, 10, 'Entrega inmediata', '../../Productos/Quesos/queso-brie.jpeg'));
productos.push(new Producto(3, 'Quesos', 'Queso Cheddar, tipo de queso duro prensado en forma de bloque, caracteristicamente de color naranja, de sabor agrío', 590, 10, 'Entrega inmediata', '../../Productos/Quesos/queso-cheddar.jpeg'));
productos.push(new Producto(4, 'Quesos', 'Queso de Cabra, tipo de queso conocido por su textura blanca y cremosa, con su inteso olor y sabor acido, su textura es una pasta compacta y cremosa', 590, 10, 'Entrega inmediata', '../../Productos/Quesos/queso-decabra.jpeg'));
productos.push(new Producto(5, 'Quesos', 'Queso Gouda, tipo de queso madurado, semi duro, de corteza lisa, brillante y uniforme, de gusto dulce a frutos secos. A medida que madura, su sabor se convierte a un intenso picante', 590, 10, 'Entrega inmediata', '../../Productos/Quesos/queso-gouda.jpeg'));
productos.push(new Producto(6, 'Quesos', 'Queso Gruyere, se caracteriza por una corteza granula y dura, reconocido por su sabor rico, cremoso, salado y con un leve sabor a nuez', 590, 10, 'Entrega inmediata', '../../Productos/Quesos/queso-gruyere.jpeg'));
productos.push(new Producto(7, 'Quesos', 'Queso Parmesano, de tipo semi graso, de pasta dura y textura finamente granulada, tiene un sabor prolongado y duradero, con sabor a pasas, frutos secas y vino', 790, 10, 'Entrega inmediata', '../../Productos/Quesos/queso-parmesano.jpeg'));
productos.push(new Producto(8, 'Quesos', 'Queso Pategras, tipo de queso de mediana humedad, semi duro, de sabor dulce, aroma suave y agradable', 800, 5, 'Entrega inmediata', '../../Productos/Quesos/queso-pategras.jpeg'));
productos.push(new Producto(9, 'Quesos', 'Queso Sardo, tipo de queso duro, con sabor maduro fuerte y salado', 800, 5, 'Entrega inmediata', '../../Productos/Quesos/queso-sardo.jpeg'));
productos.push(new Producto(10, 'Quesos', 'Queso Emmental, tipo de queso con agujeros caracteristicos, de color amarillo claro y consistencia semi firme, con un rico sabor a nuez y ligeramente dulce', 800, 5, 'Entrega inmediata', '../../Productos/Quesos/queso-emmental.jpeg'));
productos.push(new Producto(11, 'Vinos', 'Bianchi Particular Cabernet Sauvignon, Cosecha 2014, vino que tiene toda la complejidad y fuerza para los paladraes mas exigentes, con aroma a frutos negros maduros y un delicado perfume a violetas', 800, 5, 'Entrega inmediata', '../../Productos/Vinos/bianchi-particular-cabernet.png'));
productos.push(new Producto(12, 'Vinos', 'Costa y Pampa Chardonnay, vino freco, fino y de color dorado y leves tonos verdosos, posee notas a manzanas verdes, peras y dejos de pan tostado y manteca', 800, 5, 'Entrega inmediata', '../../Productos/Vinos/costaypampa-chardonnay.jpeg'));
productos.push(new Producto(13, 'Vinos', 'Doña Paula Smoked red, vino elaborado con un 60% Cabernet Sauvignon, 30% Malbec y 10% Bonarda, de color intenso y aromas complejos de mermeladas de frutos rojos, especias, vainilla y un delicado ahumado', 250, 8, 'Entrega en 24 hs', '../../Productos/Vinos/donapaula-smoked-red.jpeg'));
productos.push(new Producto(14, 'Vinos', 'Luigi Bosca Sauvignon Blanc, vino de color amarillo verdoso con reflejos plateados, aromas a frutas tropicales, hierbas y minerales, de sabor refrescante y ácido,', 350, 8, 'Entrega en 24 hs', '../Productos/Vinos/luigibosca-sauvignonblanc.jpeg'));
productos.push(new Producto(15, 'Vinos', 'Lui Pinot Noir, vino espumante, con un dejo a levadura por su reposo sobre las lias, lo que prolonga su sabor en boca', 550, 8, 'Entrega en 24 hs', '../../Productos/Vinos/lui-pinotnoir.jpeg'));
productos.push(new Producto(16, 'Vinos', 'Manija Sauvignon Blanc, vino con sabor floral y muy aromático', 550, 8, 'Entrega en 24 hs', '../../Productos/Vinos/manija-sauvignonblanc.jpeg'));
productos.push(new Producto(17, 'Vinos', 'Nieto Senetiner Bonarda, este vino desborda de sabor y caracter con taninos firmes y final complejo, fresco, delicado y versatil', 550, 8, 'Entrega en 24 hs', '../../Productos/Vinos/nietosenetiner-bonarda.jpeg'));
productos.push(new Producto(18, 'Vinos', 'Norton Cosecha tardía, vino dulce de color amarillo oro brillante, y de sabor suave, con notas de miel que se perciben en el aroma', 550, 8, 'Entrega en 24 hs', '../../Productos/Vinos/norton-cosechatardia.jpeg'));
productos.push(new Producto(19, 'Vinos', 'Rutini Encuentro Malbec, vino con armonías florales y frutos rojos y negros frescos, de sabor intenso y complejo, con una muy lograda acidez', 650, 2, 'Entrega inmediata', '../../Productos/Vinos/rutini-encuentro-malbec.jpeg'));
productos.push(new Producto(20, 'Vinos', 'Santa Julia Chenin dulce, es un vino suave y delicado, de color amarillo verdoso y aromas que recuerdan al durazno blanco, hierbas frescas y algunas notas cítricas como limón y pomelo', 600, 2, 'Entrega inmediata', '../../Productos/Vinos/santajulia-chenin-dulce.jpeg'));
productos.push(new Producto(21, 'Vinos', 'Santa Julia Rosé, vino frutal, fresco y delicado, con aroma a frutas rojas frescas como frutillas, frambuesas y grosellas', 750, 2, 'Entrega inmediata', '../../Productos/Vinos/santajulia-rose.webp'));
productos.push(new Producto(22, 'Vinos', 'Trapiche Gran Medalla Malbec, vino de color púrpura, y aromas concentrados de frutos rojos, ciruelas, cerezas y uvas pasas, resaltadas por notas de pan tostado, coco y vainilla', 650, 2, 'Entrega inmediata', '../../Productos/Vinos/trapiche-GranMedalla-Malbec.jpeg'));
productos.push(new Producto(23, 'Vinos', 'Trivento Gaudeo Malbec, vino de color rojo intenso, con algunos matices azulados, y aroma a frutas rojas frescas especiados con notas florales', 650, 2, 'Entrega inmediata', '../../Productos/Vinos/trivento-gaudeo.jpeg'));
productos.push(new Producto(24, 'Vinos', 'Trivento Malbec, este vino cuenta con suaves notas de vainilla provenientes del contacto con el roble. De un perfil equilibrado, con taninos dulces y final intenso y prolongado', 100, 25, 'Entrega inmediata', '../../Productos/Vinos/trivento-malbec.jpeg'));
productos.push(new Producto(25, 'Vinos', 'Zaha Toko Cabernet Sauvignon, vino con un poderoso sabor en boca, con una agradable frescura y aromas de envejecimiento, y de arboles frutales o cítricos', 100, 18, 'Entrega inmediata', '../../Productos/Vinos/zahatoko-cabernet-sauvignon.jpeg'));

// Sumar el IVA y el costo de envio 

for (const Producto of productos) {
    Producto.sumarIvayEnvio()
}

function guardarProductosJson(){
    localStorage.setItem('productosJson', JSON.stringify(productos));
  }
  
  guardarProductosJson();
  recuperarProductosJson();
  
  
  function recuperarProductosJson(){
    if(productosJson){
        let productos= JSON.parse(localStorage.getItem('productosJson'));
        console.log(productos)
    }}



