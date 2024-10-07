db.Carros.insertMany([
  { marca: "Toyota", modelo: "Corolla", aniof: 2020, precio: 96000000, consumocom: 15, color: "Blanco", capacidadP: 5, transmision: "automatico", potenciaM: 132, sistemaSEG: "Airbags, ABS, control de estabilidad" },
  { marca: "Ford", modelo: "Mustang", aniof: 2019, precio: 330000000, consumocom: 12, color: "Rojo", capacidadP: 4, transmision: "Manual", potenciaM: 450, sistemaSEG: "Airbags, ABS, frenos de disco, monitoreo" },
  { marca: "Honda", modelo: "Civic", aniof: 2021, precio: 93000000, consumocom: 16, color: "Negro", capacidadP: 5, transmision: "automatico", potenciaM: 158, sistemaSEG: "Airbags, ABS, control de estabilidad" },
  { marca: "Chevrolet", modelo: "Camaro", aniof: 2020, precio: 230000000, consumocom: 10, color: "Azul", capacidadP: 4, transmision: "automatico", potenciaM: 275, sistemaSEG: "Airbags, ABS, frenado asistido" },
  { marca: "BMW", modelo: "Serie 3", aniof: 2019, precio: 75000000, consumocom: 14, color: "Gris", capacidadP: 5, transmision: "automatico", potenciaM: 255, sistemaSEG: "Airbags, ABS, tracción" },
  { marca: "Nissan", modelo: "Altima", aniof: 2021, precio: 112000000, consumocom: 18, color: "Plata", capacidadP: 5, transmision: "CVT", potenciaM: 188, sistemaSEG: "Airbags, ABS, control de estabilidad" },
  { marca: "Audi", modelo: "A4", aniof: 2020, precio: 180000000, consumocom: 12, color: "Blanco", capacidadP: 5, transmision: "automatico", potenciaM: 261, sistemaSEG: "Airbags, ABS, monitoreo de puntos ciegos" },
  { marca: "Mercedes-Benz", modelo: "Clase C", aniof: 2021, precio: 320000000, consumocom: 13, color: "Negro", capacidadP: 5, transmision: "automatico", potenciaM: 255, sistemaSEG: "Airbags, ABS, asistencia de frenado" },
  { marca: "Hyundai", modelo: "Elantra", aniof: 2021, precio: 126000000, consumocom: 20, color: "Rojo", capacidadP: 5, transmision: "automatico", potenciaM: 147, sistemaSEG: "Airbags, ABS, control de estabilidad" },
  { marca: "Kia", modelo: "Soul", aniof: 2020, precio: 36000000, consumocom: 19, color: "Verde", capacidadP: 5, transmision: "automatico", potenciaM: 147, sistemaSEG: "Airbags, ABS, estabilidad electrónica" },
  { marca: "Volkswagen", modelo: "Jetta", aniof: 2020, precio: 85000000, consumocom: 16, color: "Blanco", capacidadP: 5, transmision: "automatico", potenciaM: 147, sistemaSEG: "Airbags, ABS, monitoreo de presión de llantas" },
  { marca: "Mazda", modelo: "CX-5", aniof: 2021, precio: 115000000, consumocom: 14, color: "Rojo", capacidadP: 5, transmision: "automatico", potenciaM: 187, sistemaSEG: "Airbags, ABS, control de tracción" },
  { marca: "Subaru", modelo: "Outback", aniof: 2020, precio: 110000000, consumocom: 11, color: "Azul", capacidadP: 5, transmision: "automatico", potenciaM: 182, sistemaSEG: "Airbags, ABS, monitoreo de ángulo muerto" },
  { marca: "Porsche", modelo: "911", aniof: 2021, precio: 530000000, consumocom: 9, color: "Gris", capacidadP: 4, transmision: "automatico", potenciaM: 379, sistemaSEG: "Airbags, ABS, frenos de alto rendimiento" },
  { marca: "Ferrari", modelo: "488", aniof: 2020, precio: 1200000000, consumocom: 8, color: "Rojo", capacidadP: 2, transmision: "automatico", potenciaM: 661, sistemaSEG: "Airbags, ABS, control de estabilidad avanzado" },
  { marca: "Tesla", modelo: "Model 3", aniof: 2021, precio: 140000000, consumocom: 0, color: "Negro", capacidadP: 5, transmision: "automatico", potenciaM: 283, sistemaSEG: "Airbags, ABS, piloto automatico" },
  { marca: "Jeep", modelo: "Wrangler", aniof: 2020, precio: 130000000, consumocom: 10, color: "Verde", capacidadP: 5, transmision: "Manual", potenciaM: 285, sistemaSEG: "Airbags, ABS, control de descenso" },
  { marca: "Lamborghini", modelo: "Huracán", aniof: 2021, precio: 1200000000, consumocom: 7, color: "Amarillo", capacidadP: 2, transmision: "automatico", potenciaM: 631, sistemaSEG: "Airbags, ABS, control de estabilidad avanzado" },
  { marca: "Volvo", modelo: "XC90", aniof: 2020, precio: 170000000, consumocom: 12, color: "Plata", capacidadP: 7, transmision: "automatico", potenciaM: 316, sistemaSEG: "Airbags, ABS, monitoreo de punto ciego" },
  { marca: "Range Rover", modelo: "Evoque", aniof: 2021, precio: 250000000, consumocom: 9, color: "Gris", capacidadP: 5, transmision: "automatico", potenciaM: 246, sistemaSEG: "Airbags, ABS, sistema de frenado automatico" },
  { marca: "Ford", modelo: "Ranger", aniof: 2021, precio: 120000000, consumocom: 12, color: "Azul", capacidadP: 5, transmision: "Manual", potenciaM: 270, sistemaSEG: "Airbags, ABS, control de estabilidad" },
  { marca: "Nissan", modelo: "Murano", aniof: 2020, precio: 150000000, consumocom: 10, color: "Plateado", capacidadP: 5, transmision: "automatico", potenciaM: 260, sistemaSEG: "Airbags, ABS, frenos automaticos" },
  { marca: "Toyota", modelo: "Tacoma", aniof: 2021, precio: 180000000, consumocom: 10, color: "Negro", capacidadP: 5, transmision: "automatico", potenciaM: 278, sistemaSEG: "Airbags, ABS, monitoreo de punto ciego" },
  { marca: "Chevrolet", modelo: "Traverse", aniof: 2021, precio: 170000000, consumocom: 11, color: "Blanco", capacidadP: 7, transmision: "automatico", potenciaM: 310, sistemaSEG: "Airbags, ABS, control de tracción" },
  { marca: "Mitsubishi", modelo: "Outlander", aniof: 2020, precio: 110000000, consumocom: 13, color: "Rojo", capacidadP: 7, transmision: "automatico", potenciaM: 166, sistemaSEG: "Airbags, ABS, sistema de frenado automatico" },
  { marca: "Audi", modelo: "Q5", aniof: 2021, precio: 220000000, consumocom: 12, color: "Gris", capacidadP: 5, transmision: "automatico", potenciaM: 261, sistemaSEG: "Airbags, ABS, asistente de cambio de carril" },
  { marca: "Kia", modelo: "Sorento", aniof: 2021, precio: 145000000, consumocom: 11, color: "Azul", capacidadP: 7, transmision: "automatico", potenciaM: 191, sistemaSEG: "Airbags, ABS, control de descenso" },
  { marca: "Hyundai", modelo: "Santa Fe", aniof: 2020, precio: 130000000, consumocom: 12, color: "Blanco", capacidadP: 7, transmision: "automatico", potenciaM: 185, sistemaSEG: "Airbags, ABS, control de tracción" },
  { marca: "Honda", modelo: "Civic", aniof: 2020, precio: 95000000, consumocom: 16, color: "Gris", capacidadP: 5, transmision: "Manual", potenciaM: 158, sistemaSEG: "Airbags, ABS, control de estabilidad" },
  { marca: "BMW", modelo: "Serie 5", aniof: 2021, precio: 270000000, consumocom: 9, color: "Negro", capacidadP: 5, transmision: "automatico", potenciaM: 335, sistemaSEG: "Airbags, ABS, asistente de carril" },
  { marca: "Mercedes-Benz", modelo: "GLC", aniof: 2021, precio: 320000000, consumocom: 8, color: "Azul", capacidadP: 5, transmision: "automatico", potenciaM: 255, sistemaSEG: "Airbags, ABS, sistema de asistencia al conductor" },
  { marca: "Volkswagen", modelo: "Touareg", aniof: 2020, precio: 180000000, consumocom: 11, color: "Negro", capacidadP: 5, transmision: "automatico", potenciaM: 335, sistemaSEG: "Airbags, ABS, control de crucero adaptativo" },
  { marca: "Jaguar", modelo: "F-Pace", aniof: 2021, precio: 450000000, consumocom: 10, color: "Rojo", capacidadP: 5, transmision: "automatico", potenciaM: 246, sistemaSEG: "Airbags, ABS, monitoreo de punto ciego" },
  { marca: "Land Rover", modelo: "Discovery", aniof: 2020, precio: 400000000, consumocom: 9, color: "Blanco", capacidadP: 7, transmision: "automatico", potenciaM: 355, sistemaSEG: "Airbags, ABS, sistema de frenado automatico" },
  { marca: "Infiniti", modelo: "QX60", aniof: 2021, precio: 200000000, consumocom: 12, color: "Azul", capacidadP: 7, transmision: "automatico", potenciaM: 295, sistemaSEG: "Airbags, ABS, control de crucero adaptativo" },
  { marca: "Volvo", modelo: "S60", aniof: 2021, precio: 240000000, consumocom: 10, color: "Rojo", capacidadP: 5, transmision: "automatico", potenciaM: 250, sistemaSEG: "Airbags, ABS, sistema de frenado automatico" },
  { marca: "GMC", modelo: "Terrain", aniof: 2020, precio: 120000000, consumocom: 11, color: "Gris", capacidadP: 5, transmision: "automatico", potenciaM: 170, sistemaSEG: "Airbags, ABS, control de tracción" },
  { marca: "Dodge", modelo: "Durango", aniof: 2021, precio: 220000000, consumocom: 9, color: "Negro", capacidadP: 7, transmision: "automatico", potenciaM: 293, sistemaSEG: "Airbags, ABS, control de estabilidad" },
  { marca: "Cadillac", modelo: "XT5", aniof: 2020, precio: 350000000, consumocom: 10, color: "Blanco", capacidadP: 5, transmision: "automatico", potenciaM: 310, sistemaSEG: "Airbags, ABS, monitoreo de punto ciego" },
  { marca: "Genesis", modelo: "GV80", aniof: 2022, precio: 400000000, consumocom: 10, color: "Verde", capacidadP: 5, transmision: "automatico", potenciaM: 375, sistemaSEG: "Airbags, ABS, sistema de crucero adaptativo" }
]);
//db.Carros.find({ color: "Blanco" }); 1
//db.Carros.find({ aniof: { $gt: 2021 } }); 2
//db.Carros.find({ precio: { $gte: 400000000 } }); 3
//db.Carros.find({ capacidadP: { $lt: 3 } }); 4
//db.Carros.find({ potenciaM: { $lte: 150 } }); 5
//db.Carros.distinct("marca", { marca: { $ne: "Toyota" } }); 6
//db.Carros.find({ precio: { $gte: 500000000, $lte: 700000000 } }); 7
//db.Carros.find({ precio: { $not: { $gte: 20000000, $lte: 700000000 } } }); 8
//db.Carros.find({}); 9
//db.Carros.deleteOne({ modelo: "Civic" }); 10










