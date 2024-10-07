db.materias.insertMany([
    { Materia: "Bioquímica de los Alimentos", codigo: "BA325", descripcion: "Estudio de la composición química de los alimentos y su relación con la salud.", creditos: 4, horasTeoricas: 3, horasPracticas: 2, profesor: "Dr. Julián Carreño", aulas: "Aula 135", prerequisitos: "Bioquímica General", promedioCAL: 4.2 },
    { Materia: "Nutrición Infantil", codigo: "NIN326", descripcion: "Nutrición y alimentación adecuada en la infancia.", creditos: 4, horasTeoricas: 3, horasPracticas: 2, profesor: "Dra. Valentina Gómez", aulas: "Aula 136", prerrequisitos: "Ninguno", promedioCAL: 4.1 },
    { Materia: "Dietoterapia II", codigo: "DII327", descripcion: "Intervenciones nutricionales en enfermedades específicas.", creditos: 4, horasTeoricas: 3, horasPracticas: 2, profesor: "Dra. Marcela Herrera", aulas: "Aula 137", prerrequisitos: "Dietoterapia I", promedioCAL: 4.3 },
    { Materia: "Psicología de la Alimentación", codigo: "PA328", descripcion: "Impacto de la psicología en los hábitos alimentarios.", creditos: 3, horasTeoricas: 2, horasPracticas: 1, profesor: "Dra. Laura Salazar", aulas: "Aula 138", prerrequisitos: "Ninguno", promedioCAL: 4.2 },
    { Materia: "Tecnología de los Alimentos", codigo: "TA329", descripcion: "Métodos de conservación y procesamiento de alimentos.", creditos: 3, horasTeoricas: 2, horasPracticas: 1, profesor: "Dr. Tomás León", aulas: "Aula 139", prerrequisitos: "Ninguno", promedioCAL: 4.0 },
    { Materia: "Nutrición y Medio Ambiente", codigo: "NMA330", descripcion: "Relación entre la alimentación y la sostenibilidad ambiental.", creditos: 3, horasTeoricas: 3, horasPracticas: 1, profesor: "Dra. Antonia Torres", aulas: "Aula 140", prerrequisitos: "Ninguno", promedioCAL: 4.1 },
    { Materia: "Alimentos Funcionales", codigo: "AF331", descripcion: "Estudio de alimentos que proporcionan beneficios para la salud.", creditos: 3, horasTeoricas: 3, horasPracticas: 1, profesor: "Dr. Felipe Moreno", aulas: "Aula 141", prerrequisitos: "Ninguno", promedioCAL: 4.3 },
    { Materia: "Investigación en Nutrición", codigo: "IN332", descripcion: "Metodología de investigación aplicada a la nutrición y dietética.", creditos: 4, horasTeoricas: 2, horasPracticas: 2, profesor: "Dra. Juliana Espinosa", aulas: "Aula 142", prerrequisitos: "Ninguno", promedioCAL: 4.0 },
    { Materia: "Seguridad Alimentaria", codigo: "SA333", descripcion: "Conceptos y prácticas para asegurar la calidad y seguridad de los alimentos.", creditos: 3, horasTeoricas: 3, horasPracticas: 1, profesor: "Dra. Cristina Martínez", aulas: "Aula 143", prerrequisitos: "Ninguno", promedioCAL: 4.2 },
    { Materia: "Nutrición y Farmacología", codigo: "NF334", descripcion: "Interacción entre alimentos y medicamentos.", creditos: 3, horasTeoricas: 3, horasPracticas: 1, profesor: "Dr. Hugo Arias", aulas: "Aula 144", prerrequisitos: "Farmacología General", promedioCAL: 4.1 },
    { Materia: "Sociología de la Alimentación", codigo: "SA335", descripcion: "Análisis social de los hábitos alimentarios y su evolución.", creditos: 3, horasTeoricas: 3, horasPracticas: 1, profesor: "Dra. Mariana Cuervo", aulas: "Aula 145", prerrequisitos: "Ninguno", promedioCAL: 4.4 },
    { Materia: "Tendencias en Nutrición", codigo: "TN336", descripcion: "Análisis de las tendencias actuales en nutrición y dietética.", creditos: 2, horasTeoricas: 2, horasPracticas: 1, profesor: "Dra. Sara Castro", aulas: "Aula 146", prerrequisitos: "Ninguno", promedioCAL: 4.3 },
    { Materia: "Gestión de Proyectos en Nutrición", codigo: "GP337", descripcion: "Diseño y gestión de proyectos en el ámbito de la nutrición.", creditos: 4, horasTeoricas: 3, horasPracticas: 1, profesor: "Dra. Andrea Becerra", aulas: "Aula 147", prerrequisitos: "Ninguno", promedioCAL: 4.2 },
    { Materia: "Fisiología y Nutrición", codigo: "FN338", descripcion: "Relación entre la fisiología humana y la nutrición.", creditos: 4, horasTeoricas: 3, horasPracticas: 2, profesor: "Dr. Juan Carlos Mejía", aulas: "Aula 148", prerrequisitos: "Ninguno", promedioCAL: 4.3 },
    { Materia: "Bioquímica General", codigo: "BIO101", descripcion: "Estudio de los principios bioquímicos básicos en el contexto de la salud humana.", creditos: 4, horasTeoricas: 3, horasPracticas: 2, profesor: "Dr. Juan Pérez", aulas: "Aula 102", prerrequisitos: "Ninguno", promedioCAL: 4.2 },
    { Materia: "Anatomía Humana", codigo: "ANA102", descripcion: "Descripción detallada de la estructura del cuerpo humano.", creditos: 3, horasTeoricas: 2, horasPracticas: 2, profesor: "Dra. Carolina Martínez", aulas: "Aula 103", prerrequisitos: "Ninguno", promedioCAL: 4.0 },
    { Materia: "Fisiología Humana", codigo: "FIS103", descripcion: "Estudio de las funciones y mecanismos del cuerpo humano.", creditos: 3, horasTeoricas: 3, horasPracticas: 1, profesor: "Dr. Mario Sánchez", aulas: "Aula 104", prerrequisitos: "Anatomía Humana", promedioCAL: 4.1 },
    { Materia: "Microbiología General", codigo: "MIC104", descripcion: "Examen de los microorganismos y su relación con la salud humana.", creditos: 3, horasTeoricas: 2, horasPracticas: 2, profesor: "Dra. Sandra Gómez", aulas: "Aula 105", prerrequisitos: "Bioquímica General", promedioCAL: 3.9 },
    { Materia: "Química Orgánica", codigo: "QUI105", descripcion: "Análisis de las estructuras y reacciones de los compuestos orgánicos.", creditos: 4, horasTeoricas: 3, horasPracticas: 2, profesor: "Dr. Pedro López", aulas: "Aula 106", prerrequisitos: "Bioquímica General", promedioCAL: 4.0 },
    { Materia: "Evaluación Nutricional", codigo: "NUT201", descripcion: "Técnicas y métodos para evaluar el estado nutricional de los individuos.", creditos: 3, horasTeoricas: 2, horasPracticas: 2, profesor: "Dra. Laura Vargas", aulas: "Aula 107", prerrequisitos: "Fisiología Humana", promedioCAL: 4.3 },
    { Materia: "Dietoterapia I", codigo: "DIE202", descripcion: "Aplicación de la nutrición en el tratamiento de enfermedades.", creditos: 3, horasTeoricas: 3, horasPracticas: 1, profesor: "Dr. Carlos Ramírez", aulas: "Aula 108", prerrequisitos: "Evaluación Nutricional", promedioCAL: 4.5 },
    { Materia: "Nutrición Comunitaria", codigo: "NUT203", descripcion: "Estudio de la nutrición en poblaciones y comunidades.", creditos: 4, horasTeoricas: 3, horasPracticas: 2, profesor: "Dra. Ana Rojas", aulas: "Aula 109", prerrequisitos: "Evaluación Nutricional", promedioCAL: 4.4 },
    { Materia: "Educación Alimentaria", codigo: "EDU204", descripcion: "Métodos para enseñar hábitos alimentarios saludables.", creditos: 2, horasTeoricas: 2, horasPracticas: 1, profesor: "Dra. Beatriz Castaño", aulas: "Aula 110", prerrequisitos: "Nutrición Comunitaria", promedioCAL: 4.6 },
    { Materia: "Metodología de la Investigación", codigo: "INV301", descripcion: "Fundamentos de la investigación científica aplicada a la nutrición.", creditos: 3, horasTeoricas: 2, horasPracticas: 2, profesor: "Dra. María Torres", aulas: "Aula 111", prerrequisitos: "Ninguno", promedioCAL: 4.3 },
    { Materia: "Bioestadística", codigo: "EST302", descripcion: "Aplicación de técnicas estadísticas en el campo de la nutrición.", creditos: 3, horasTeoricas: 2, horasPracticas: 2, profesor: "Dr. Jorge Mendoza", aulas: "Aula 112", prerrequisitos: "Metodología de la Investigación", promedioCAL: 4.1 },
    { Materia: "Toxicología Alimentaria", codigo: "TOX303", descripcion: "Estudio de las sustancias tóxicas en los alimentos y su impacto en la salud.", creditos: 4, horasTeoricas: 3, horasPracticas: 2, profesor: "Dra. Angela Salazar", aulas: "Aula 113", prerrequisitos: "Química Orgánica", promedioCAL: 4.0 },
    { Materia: "Tecnología de los Alimentos", codigo: "TEC304", descripcion: "Proceso de producción y conservación de alimentos.", creditos: 3, horasTeoricas: 2, horasPracticas: 2, profesor: "Dr. Luis García", aulas: "Aula 114", prerrequisitos: "Bioquímica General", promedioCAL: 4.2 },
    { Materia: "Nutrición Infantil", codigo: "NIN305", descripcion: "Principios de nutrición aplicados al desarrollo infantil.", creditos: 3, horasTeoricas: 3, horasPracticas: 1, profesor: "Dra. Isabel Franco", aulas: "Aula 115", prerrequisitos: "Evaluación Nutricional", promedioCAL: 4.5 },
    { Materia: "Farmacología Aplicada", codigo: "FAR306", descripcion: "Interacción de los medicamentos con la alimentación y su impacto en la salud.", creditos: 4, horasTeoricas: 3, horasPracticas: 2, profesor: "Dr. Javier Acosta", aulas: "Aula 116", prerrequisitos: "Fisiología Humana", promedioCAL: 4.3 },
    { Materia: "Salud Pública", codigo: "SAL307", descripcion: "Estudio de la salud a nivel comunitario y los determinantes sociales.", creditos: 4, horasTeoricas: 3, horasPracticas: 2, profesor: "Dra. Marta Herrera", aulas: "Aula 117", prerrequisitos: "Nutrición Comunitaria", promedioCAL: 4.4 },
    { Materia: "Psicología de la Alimentación", codigo: "PSI308", descripcion: "Análisis del comportamiento humano en relación con la alimentación.", creditos: 3, horasTeoricas: 3, horasPracticas: 1, profesor: "Dra. Claudia Castillo", aulas: "Aula 118", prerrequisitos: "Ninguno", promedioCAL: 4.0 },
    { Materia: "Nutrición y Salud Pública", codigo: "NUT309", descripcion: "Relación entre nutrición y políticas de salud pública.", creditos: 4, horasTeoricas: 3, horasPracticas: 2, profesor: "Dra. Paula Mendoza", aulas: "Aula 119", prerrequisitos: "Salud Pública", promedioCAL: 4.2 },
    { Materia: "Ética Profesional", codigo: "ETI310", descripcion: "Principios éticos en la práctica profesional de la nutrición.", creditos: 2, horasTeoricas: 2, horasPracticas: 0, profesor: "Dra. Sofia Martínez", aulas: "Aula 120", prerrequisitos: "Ninguno", promedioCAL: 4.3 },
    { Materia: "Alimentación y Cultura", codigo: "ALC311", descripcion: "Influencia de la cultura en los hábitos alimentarios.", creditos: 3, horasTeoricas: 3, horasPracticas: 1, profesor: "Dr. Andrés Rivas", aulas: "Aula 121", prerrequisitos: "Ninguno", promedioCAL: 4.0 },
    { Materia: "Nutrición en el Ciclo Vital", codigo: "NUT312", descripcion: "Nutrición en diferentes etapas de la vida.", creditos: 3, horasTeoricas: 2, horasPracticas: 2, profesor: "Dra. Gabriela Ríos", aulas: "Aula 122", prerrequisitos: "Nutrición Infantil", promedioCAL: 4.4 },
    { Materia: "Nutrición Deportiva", codigo: "DEP313", descripcion: "Principios de nutrición aplicados al rendimiento deportivo.", creditos: 4, horasTeoricas: 3, horasPracticas: 2, profesor: "Dr. Nicolás Romero", aulas: "Aula 123", prerrequisitos: "Fisiología Humana", promedioCAL: 4.5 },
    { Materia: "Nutrición en Adultos Mayores", codigo: "NUT314", descripcion: "Nutrición y manejo dietético en adultos mayores.", creditos: 3, horasTeoricas: 2, horasPracticas: 2, profesor: "Dra. Laura Ceballos", aulas: "Aula 124", prerrequisitos: "Nutrición y Salud Pública", promedioCAL: 4.1 },
    { Materia: "Gestión de Servicios de Alimentación", codigo: "GES315", descripcion: "Organización y gestión de servicios de alimentación en instituciones.", creditos: 4, horasTeoricas: 3, horasPracticas: 2, profesor: "Dr. Esteban Velásquez", aulas: "Aula 125", prerrequisitos: "Tecnología de los Alimentos", promedioCAL: 4.0 },
    { Materia: "Nutrición en la Prevención de Enfermedades", codigo: "NUT316", descripcion: "Relación entre la alimentación y la prevención de enfermedades crónicas.", creditos: 4, horasTeoricas: 3, horasPracticas: 1, profesor: "Dra. Julia Sánchez", aulas: "Aula 126", prerrequisitos: "Dietoterapia I", promedioCAL: 4.3 }
]);
//db.materias.find({ Materia: { $eq: "Bioquímica de los Alimentos" } })
//db.materias.find({ creditos: { $gt: 3 } })
//db.materias.find({ horasTeoricas: { $gte: 3 } })
//db.materias.find({ horasPracticas: { $lt: 2 } })
//db.materias.find({ codigo: { $lte: "NIN326" } })
//db.materias.find({ profesor: { $ne: "Dr. Julián Carreño" } })
//db.materias.find({ aulas: { $in: ["Aula 135", "Aula 136", "Aula 137"] } })
//db.materias.find({ aulas: { $nin: ["Aula 135", "Aula 136"] } })
//db.materias.find({});
//db.materias.deleteOne({ codigo: "NIN326" })









