# Principios SOLID y Clean Code

## Temas vistos

- Clean Code y Deuda técnica
- Clean Code - Clases y comentarios
- Acrónimo - **STUPID**
- Principios **SOLID**

## Introducción

> "Practicar y aprender buenas prácticas para el manejo de nuestro código y reducir la deuda técnica".

## Clean Code y Deuda Técnica

### Temas de la sección

- ¿Qué es la deuda técnica?
- ¿Cómo se paga la deuda técnica?
- Refactorización
- Nombres de variables
- Nombres para funciones
- Ejercicios de refactorización
- Principios DRY

## Deuda técnica

> "Es la falta de calidad presente en el código, la cual genera una deuda que repercutirá en costos futuros".

##### Costos económicos:

- Tiempo en realizar mantenimientos.
- Tiempo en refactorizar código.
- Tiempo en comprender código ya desarrollado.
- Tiempo adicional en la transferencia de código.

##### Esquema de deuda técnica de Martin Fowler

Imprudente  | Inadvertida
------------- | -------------
No hay tiempo, solo copia y pega eso de nuevo. | Se genera por el desconocimiento o falta de experiencia, generalmente es generada por un desarrollador de perfil Jr. o un falso Senior.  **"¿Qué son patrones de diseños?"**

Prudente y Deliverada  | Prudente e Inadvertida
------------- | -------------
Es la deuda en la que estamos conscientes de ella,  lo peligroso de este tipo de deuda es que si no se llega a pagar a tiempo más intereses se terminarán pagando después. **"Tenemos que entragar rápido, ya refactorizaremos."**, ** Mensajes de TODO y luego lo hacemos, no hay tiempo para refactorizar.** | No se tiene el conocimiento total de como terminará el proyecto. La deuda se hace visible mientras se avanza o madura el proyecto (codificar). **"No sé si valga la pena volverlo a hacer e implementar bien la arquitectura o patrón".** **"Ahora sabemos cómo lo deberíamos haber hecho".**

> "Caer en dueda técnica es normal y por lo generar inevitable".


## Pagar la deuda técnica

La deuda técnica se llega a pagar mediante la refactorización de código.

## Refactorización

Es simplemente un proceso que tiene como objetivo mejorar el código sin alterar su comportamiento para que sea más entendible y tolerante a cambios.

Para que una refactorización tenga el resultado esperado, el código refactorizado tenga pruebas automáticas.  No tener este tipo de pruebas no es el fin del mundo, sin embargo asegura el perfecto funcionamiento de código no solo localmente. 

Tampoco se podría saber si la refactorización funcionó de la manera esperada y se llega a producir el famoso **"Si funciona, no lo toques".**

> "La mala calidad en el software siempre la acaba pagando o asumiendo  alguien, ya se el cliente, el proveedor con recursos o el propio desarrollador dedicando tiempo a refactorizar o malgastando tiempo programando sobre un sistema frágil".

## Clean Code

> -"Código Limpio es aquel que se ha escrito con la intención de que otra persona o uno mismo en el futuro lo entienda". - Carlos Blé

> -"Nuestro código tiene que ser simple y directo, debería leerse con la misma facilidad que un texto bien escrito". - Grady Booch

> -"Programar es el arte de decirle a otro humano lo que quieres que la computadora haga". - Donald Knuth

## Nombres de variables

##### Nombres pronunciables y expresivos

> "Los nombres de las variables siempre deben ser escritos en inglés y deben ser pronunciables".

- Evitar utilizar palabras que lleven guiones bajo con ciertas excepciones.
- Seguir las convenciones del lenguaje de programación a utilizar.
- CamelCase, UpperCcamelCase.
- No ahorrar letras en los nombres.

:fa-times-circle: No hagas esto

```typescript
const n = 53;
const tx = 0.15;
const cat = 'T-Shirts':
const ddmmyyyy = new Date('August 15, 1965 00:00:00');
```

:fa-check-circle: Haz esto

```typescript
const numberOfUnits = 53;
const tax = 0.15;
const category = 'T-Shirts':
const birthDate = new Date('August 15, 1965 00:00:00');
```

##### Ausencia de información técnica en nombres

- Es la implementación que la clase o interface está realizando.
- Evitar que el nombre incluya información técnica o la relación que tiene dependiendo de la tecnología usada.

:fa-times-circle: No hagas esto
```typescript
class AbstractUser { };
class UserMixin { };
class UserImplementation { };
interface UserInterface { };
```
:fa-check-circle: Haz esto
```typescript
class User { };
interface User { };
```

___Ver clases de la <abbr title="Clean Code y Deuda técnica">Sección 2</abbr>___

###End