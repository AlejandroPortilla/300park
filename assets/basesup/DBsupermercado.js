db.supermercado.insertMany([
  { nombre: "Leche Entera", descripcion: "Leche entera de vaca", precio: 4500, categoria: "Lácteos", disponibilidad: 50, marca: "Alpina", modelo: "Clásica", peso: 1, UnidadesVen: 200, ValoracionProm: 4.5 },
  { nombre: "Pan Integral", descripcion: "Pan de trigo integral", precio: 7000, categoria: "Panadería", disponibilidad: 30, marca: "Bimbo", modelo: "Integral", peso: 0.5, UnidadesVen: 150, ValoracionProm: 4.3 },
  { nombre: "Arroz Blanco", descripcion: "Arroz de grano largo", precio: 3000, categoria: "Cereales", disponibilidad: 100, marca: "Diana", modelo: "Tradicional", peso: 1, UnidadesVen: 300, ValoracionProm: 4.7 },
  { nombre: "Azúcar Morena", descripcion: "Azúcar de caña morena", precio: 5000, categoria: "Endulzantes", disponibilidad: 40, marca: "Carulla", modelo: "Morena", peso: 1, UnidadesVen: 220, ValoracionProm: 4.6 },
  { nombre: "Mantequilla", descripcion: "Mantequilla sin sal", precio: 8000, categoria: "Lácteos", disponibilidad: 60, marca: "La Fina", modelo: "Sin Sal", peso: 0.2, UnidadesVen: 180, ValoracionProm: 4.4 },
  { nombre: "Yogur Natural", descripcion: "Yogur natural sin azúcar", precio: 12000, categoria: "Lácteos", disponibilidad: 25, marca: "Yoplait", modelo: "Natural", peso: 0.5, UnidadesVen: 120, ValoracionProm: 4.2 },
  { nombre: "Aceite de Oliva", descripcion: "Aceite de oliva extra virgen", precio: 10000, categoria: "Aceites", disponibilidad: 70, marca: "Goya", modelo: "Extra Virgen", peso: 1, UnidadesVen: 100, ValoracionProm: 4.9 },
  { nombre: "Huevos", descripcion: "Docena de huevos de gallina", precio: 12000, categoria: "Huevos", disponibilidad: 80, marca: "Kikes", modelo: "Docena", peso: 0.7, UnidadesVen: 250, ValoracionProm: 4.5 },
  { nombre: "Pollo Entero", descripcion: "Pollo entero fresco", precio: 25000, categoria: "Carnes", disponibilidad: 20, marca: "Colanta", modelo: "Fresco", peso: 2, UnidadesVen: 60, ValoracionProm: 4.6 },
  { nombre: "Carne Molida", descripcion: "Carne molida de res", precio: 7000, categoria: "Carnes", disponibilidad: 35, marca: "Angus", modelo: "Premium", peso: 0.5, UnidadesVen: 140, ValoracionProm: 4.8 },
  { nombre: "Pasta Espagueti", descripcion: "Pasta de trigo", precio: 2000, categoria: "Pasta", disponibilidad: 90, marca: "Barilla", modelo: "Espagueti", peso: 0.5, UnidadesVen: 190, ValoracionProm: 4.4 },
  { nombre: "Tomates", descripcion: "Tomates frescos", precio: 3000, categoria: "Verduras", disponibilidad: 60, marca: "Organics", modelo: "Frescos", peso: 1, UnidadesVen: 210, ValoracionProm: 4.7 },
  { nombre: "Cebolla", descripcion: "Cebolla cabezona", precio: 4000, categoria: "Verduras", disponibilidad: 50, marca: "AgroCampo", modelo: "Cabeza", peso: 1, UnidadesVen: 160, ValoracionProm: 4.3 },
  { nombre: "Zanahorias", descripcion: "Zanahorias frescas", precio: 4000, categoria: "Verduras", disponibilidad: 40, marca: "Fresh", modelo: "Frescas", peso: 1, UnidadesVen: 130, ValoracionProm: 4.5 },
  { nombre: "Manzanas", descripcion: "Manzanas rojas", precio: 8000, categoria: "Frutas", disponibilidad: 30, marca: "Fruitland", modelo: "Rojas", peso: 1, UnidadesVen: 110, ValoracionProm: 4.6 },
  { nombre: "Plátanos", descripcion: "Plátanos maduros", precio: 3000, categoria: "Frutas", disponibilidad: 70, marca: "Banacol", modelo: "Maduros", peso: 1.5, UnidadesVen: 170, ValoracionProm: 4.4 },
  { nombre: "Jabón Líquido", descripcion: "Jabón líquido para manos", precio: 2500, categoria: "Higiene", disponibilidad: 100, marca: "Protex", modelo: "Aloe Vera", peso: 0.3, UnidadesVen: 220, ValoracionProm: 4.8 },
  { nombre: "Papel Higiénico", descripcion: "Papel higiénico de 4 rollos", precio: 20000, categoria: "Higiene", disponibilidad: 90, marca: "Scott", modelo: "Suave", peso: 0.5, UnidadesVen: 150, ValoracionProm: 4.7 },
  { nombre: "Detergente en Polvo", descripcion: "Detergente para ropa", precio: 5.0, categoria: "Limpieza", disponibilidad: 80, marca: "Ariel", modelo: "Original", peso: 2, UnidadesVen: 100, ValoracionProm: 4.9 },
  { nombre: "Lechuga", descripcion: "Lechuga romana fresca", precio: 4500, categoria: "Verduras", disponibilidad: 60, marca: "Horti", modelo: "Romaine", peso: 1, UnidadesVen: 140, ValoracionProm: 4.2 },
  { nombre: "Jugo de Naranja", descripcion: "Jugo de naranja natural", precio: 2800, categoria: "Bebidas", disponibilidad: 40, marca: "Del Valle", modelo: "Natural", peso: 1, UnidadesVen: 200, ValoracionProm: 4.7 },
  { nombre: "Café Molido", descripcion: "Café molido 100% colombiano", precio: 3000, categoria: "Bebidas", disponibilidad: 70, marca: "Juan Valdez", modelo: "Tradicional", peso: 0.5, UnidadesVen: 160, ValoracionProm: 4.8 },
  { nombre: "Atún en Lata", descripcion: "Atún en aceite", precio: 2.5, categoria: "Conservas", disponibilidad: 90, marca: "Van Camp's", modelo: "En Aceite", peso: 0.2, UnidadesVen: 180, ValoracionProm: 4.4 },
  { nombre: "Mermelada de Fresa", descripcion: "Mermelada de fresa natural", precio: 5000, categoria: "Alimentos", disponibilidad: 50, marca: "La Constancia", modelo: "Fresa", peso: 0.5, UnidadesVen: 110, ValoracionProm: 4.5 },
  { nombre: "Galletas de Chocolate", descripcion: "Galletas rellenas de chocolate", precio: 1500, categoria: "Snacks", disponibilidad: 100, marca: "Nabisco", modelo: "Oreo", peso: 0.3, UnidadesVen: 200, ValoracionProm: 4.8 },
  { nombre: "Cereal de Maíz", descripcion: "Cereal de maíz con miel", precio: 3200, categoria: "Cereales", disponibilidad: 90, marca: "Kellogg's", modelo: "Corn Flakes", peso: 0.7, UnidadesVen: 130, ValoracionProm: 4.6 },
  { nombre: "Refresco de Cola", descripcion: "Refresco gaseoso de cola", precio: 1500, categoria: "Bebidas", disponibilidad: 150, marca: "Coca Cola", modelo: "Clásico", peso: 1.5, UnidadesVen: 300, ValoracionProm: 4},
  { nombre: "Queso Mozzarella", descripcion: "Queso mozzarella fresco", precio: 7000, categoria: "Lácteos", disponibilidad: 45, marca: "Colanta", modelo: "Fresco", peso: 0.5, UnidadesVen: 140, ValoracionProm: 4.6 },
  { nombre: "Té Verde", descripcion: "Té verde en bolsitas", precio: 1000, categoria: "Bebidas", disponibilidad: 100, marca: "Lipton", modelo: "Verde", peso: 0.1, UnidadesVen: 160, ValoracionProm: 4.7 },
  { nombre: "Salsa de Tomate", descripcion: "Salsa de tomate clásica", precio: 2300, categoria: "Condimentos", disponibilidad: 80, marca: "Heinz", modelo: "Clásica", peso: 0.4, UnidadesVen: 210, ValoracionProm: 4.8 },
  { nombre: "Cerveza Lager", descripcion: "Cerveza lager rubia", precio: 5600, categoria: "Bebidas alcohólicas", disponibilidad: 150, marca: "Corona", modelo: "Lager", peso: 0.35, UnidadesVen: 280, ValoracionProm: 4.5 },
  { nombre: "Jabón en Polvo", descripcion: "Jabón en polvo para ropa", precio: 6500, categoria: "Limpieza", disponibilidad: 90, marca: "Rindex", modelo: "Multicolor", peso: 1.5, UnidadesVen: 120, ValoracionProm: 4.2 },
  { nombre: "Desodorante en Barra", descripcion: "Desodorante en barra para hombres", precio: 3800, categoria: "Higiene personal", disponibilidad: 50, marca: "Old Spice", modelo: "Fresh", peso: 0.1, UnidadesVen: 100, ValoracionProm: 4.7 },
  { nombre: "Crema Dental", descripcion: "Pasta dental con flúor", precio: 1700, categoria: "Higiene personal", disponibilidad: 80, marca: "Colgate", modelo: "Total", peso: 0.1, UnidadesVen: 180, ValoracionProm: 4.5 },
  { nombre: "Galletas Saladas", descripcion: "Galletas saladas tradicionales", precio: 4200, categoria: "Snacks", disponibilidad: 100, marca: "Saltín Noel", modelo: "Tradicional", peso: 0.3, UnidadesVen: 150, ValoracionProm: 4.3 },
  { nombre: "Cereal Integral", descripcion: "Cereal de trigo integral", precio: 3000, categoria: "Cereales", disponibilidad: 70, marca: "Fitness", modelo: "Integral", peso: 0.5, UnidadesVen: 120, ValoracionProm: 4.6 },
  { nombre: "Maíz Dulce en Lata", descripcion: "Maíz dulce en conserva", precio: 4600, categoria: "Conservas", disponibilidad: 60, marca: "Del Monte", modelo: "Dulce", peso: 0.3, UnidadesVen: 130, ValoracionProm: 4.4 },
  { nombre: "Gaseosa de Limón", descripcion: "Bebida gaseosa sabor limón", precio: 1500, categoria: "Bebidas", disponibilidad: 120, marca: "Sprite", modelo: "Clásico", peso: 1.5, UnidadesVen: 240, ValoracionProm: 4.7 },
  { nombre: "Helado de Vainilla", descripcion: "Helado de vainilla cremoso", precio: 10000, categoria: "Congelados", disponibilidad: 40, marca: "Häagen-Dazs", modelo: "Vainilla", peso: 0.5, UnidadesVen: 80, ValoracionProm: 4.9 },
  { nombre: "Papas Fritas", descripcion: "Papas fritas crujientes", precio: 2400, categoria: "Snacks", disponibilidad: 110, marca: "Lays", modelo: "Clásicas", peso: 0.2, UnidadesVen: 230, ValoracionProm: 4.8 }
]);

//db.supermercado.find({ nombre: { $eq: "Leche Entera" } });
//db.supermercado.find({ precio: { $gt: 10000 } });
//db.supermercado.find({ disponibilidad: { $gte: 120 } });
//db.supermercado.find({ precio: { $lt: 1500 } }); 
//db.supermercado.find({ peso: { $lte: 0.2 } });
//db.supermercado.find({ UnidadesVen: { $ne: 200 } });
//db.supermercado.find({ ValoracionProm: { $in: [ 4.6, 4.7] } });
//db.supermercado.find({ ValoracionProm: { $nin: [ 4.6, 4.7] } });
//db.supermercadofind();
//db.supermercado.updateOne({ nombre: "Leche Entera" },{ $set: { precio: 5000 } })
);
