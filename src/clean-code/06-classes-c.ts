(() => {
  // Aplicando el principio de responsabilidad unica
  // Priorizar la composicion frente a la herencia! (Evitar las extensiones)

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
    email: String;
    role: String;
  }

  class User {
    public email: String;
    public role: String;
    public lastAccess: Date;
    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: String;
    workingDirectory: String;
  }

  class Settings {
    public lastOpenFolder: String;
    public workingDirectory: String;

    constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
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

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      gender,
      birthdate,
      email,
      role,
      lastOpenFolder,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
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
    areCredentialsValid: newUserSettings.user.checkCredentials(),
  });
})();
