(() => {
  // No aplicando el principio de responsabilidad unica

  type Gender = "M" | "F";

  // Creacion forma larga (java)

  /* class Person {
    public name: String;
    public gender: Gender;
    public birthdate: Date;

    constructor(name: String, gender: Gender, birthdate: Date) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  } */

  //Creacion forma corta (typescript)

  class Person {
    constructor(
      public name: String,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const newUserSettings = new UserSettings(
    "/usr/home",
    "/home",
    "paco@gmail.com",
    "Admin",
    "Paco",
    "M",
    new Date("1991-04-12")
  );

  console.log({
    newUserSettings,
    areCredentialsValid: newUserSettings.checkCredentials(),
  });
})();
