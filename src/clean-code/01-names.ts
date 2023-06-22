(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const fs = [
    { id: 1, f: false },
    { id: 2, f: false },
    { id: 3, f: true },
    { id: 4, f: false },
    { id: 5, f: false },
    { id: 7, f: true },
  ];

  // Archivos marcados para borrar - files to delete
  const arhivos = fs.map((f) => f.f);

  // Malos
  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Tarea

  // día de hoy - today
  const ddmmyyyy = new Date();

  // días transcurridos - elapsed time in days
  const d: number = 23;

  // número de archivos en un directorio - number of files in directory
  const dir = 33;

  // primer nombre - first name
  const nombre = "Fernando";

  // primer apellido - last name
  const apellido = "Herrera";

  // días desde la última modificación - days since modification
  const dsm = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  const max = 6;

  //Todo: Tarea
  // Refactorizando

  const filesToEvaluate = [
    { id: 1, isToEvaluate: false },
    { id: 2, isToEvaluate: false },
    { id: 3, isToEvaluate: true },
    { id: 4, isToEvaluate: false },
    { id: 5, isToEvaluate: false },
    { id: 7, isToEvaluate: true },
  ];
  const filesToDelete = filesToEvaluate.map((file) => file.isToEvaluate);

  // día de hoy - today
  const today = new Date();

  // días transcurridos - elapsed time in days
  const daysPassed: number = 23;
  const elapsedTimeInDays: number = 23;

  // número de archivos en un directorio - number of files in directory
  const numberOfFilesInDirectory = 33;

  // primer nombre - first name
  const firstName = "Fernando";

  // primer apellido - last name
  const lastName = "Herrera";

  // días desde la última modificación - days since modification
  const lastChange = 12;
  const daysSinceLastChange = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  const maxNumberOfClassesPerStudent = 6;
  const maxClassesPerStudent = 6;
})();
