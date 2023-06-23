(() => {
  // función para obtener información de una película por Id
  function getAllMovies(movieId: string) {
    console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getAllMovieActors(id: string) {
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getUsuario(ActorId: string) {
    console.log({ ActorId });
  }

  // Crear una película
  function movie(
    title: string,
    description: string,
    rating: number,
    cast: string[]
  ) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActorIfActorNotExists(
    fullName: string,
    birthdate: Date
  ): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor");
    return true;
  }

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }) => {
    let result;
    if (isDead) {
      result = 1500;
    } else {
      if (isSeparated) {
        result = 2500;
      } else {
        if (isRetired) {
          result = 3000;
        } else {
          result = 4000;
        }
      }
    }

    return result;
  };

  //Todo: Tarea
  // Refactorizando funciones

  // función para obtener información de una película por Id
  function getMovieById(id: string) {
    console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getActorsByMovieId(id: string) {
    console.log({ id });
  }

  function getMovieCastById(id: string) {
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getActorById(id: string) {
    console.log({ id });
  }

  function getActorBioById(id: string) {
    console.log({ id });
  }

  // Crear una película
  function createMovie(
    cast: string[],
    description: string,
    title: string,
    rating: number
  ) {
    console.log({ title, description, rating, cast });
  }

  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }
  function createMovie2({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor(birthdate: Date, fullName: string): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log(birthdate, "Crear actor");
    return true;
  }

  interface Actor {
    birthdate: Date;
    fullName: string;
  }

  function createActor2({ birthdate, fullName }: Actor): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log(birthdate, "Crear actor");
    return true;
  }

  const getPayAmount2 = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) {
      return 1500;
    }

    if (isSeparated) {
      return 2500;
    }

    return isRetired ? 3000 : 4000;

    // if (isDead) return 1500;

    // if (isSeparated) return 2500;

    // if (isRetired) return 3000;

    // return 4000;
  };
})();
