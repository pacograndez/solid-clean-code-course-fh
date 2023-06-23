(() => {
  // No aplicando el principio de responsabilidad unica

  type Gender = "M" | "F";

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: String;
  }
  //Creacion forma corta (typescript)

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: String;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    birthdate: Date;
    email: String;
    gender: Gender;
    name: String;
    role: String;
  }

  class User extends Person {
    public email: String;
    public role: String;
    public lastAccess: Date;
    constructor({ email, role, name, gender, birthdate }: UserProps) {
      super({ name, gender, birthdate });
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    birthdate: Date;
    email: String;
    gender: Gender;
    lastOpenFolder: String;
    name: String;
    role: String;
    workingDirectory: String;
  }

  class UserSettings extends User {
    public lastOpenFolder: String;
    public workingDirectory: String;

    constructor({
      birthdate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate });
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  const newUserSettings = new UserSettings({
    birthdate: new Date("1991-04-12"),
    email: "paco@gmail.com",
    gender: "M",
    lastOpenFolder: "/home",
    name: "Paco",
    role: "Admin",
    workingDirectory: "/usr/home",
  });

  console.log({
    newUserSettings,
    areCredentialsValid: newUserSettings.checkCredentials(),
  });
})();
