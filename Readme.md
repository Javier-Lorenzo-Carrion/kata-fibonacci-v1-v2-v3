# Template TypeScript
## Diseño Sostenible - Ingeniería y Artesanía del Software con TypeScript
![Diseño Sostenible](coverds.png)

Plantilla base para practicar las katas del curso o para empezar un proyecto nuevo.

Incluye:
* TypeScript
* Jest
* ESLint
* Prettier
* Husky

## Instrucciones
* `nvm use`
* `npm install`
* `npm test`

Más información sobre el curso en [diseñosostenible.com](https://diseñosostenible.com).

### ESLint
[TypeScript ESLint Rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

### Husky hooks
* Pre-commit: Execute npm analize (tsc + eslint --fix)
* Pre-push: Execute test

## Requisitos de la kata

Vamos a construir una funcion que reciba como parámetro un número entero y devuelva el enésimo número de Fibonacci. En matemáticas, la serie de Fibonacci es la sucesión infinita de números naturales tales como los siguientes:

* 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597

La sucesión comienza con 0 y 1, los siguientes térmninos siempre son la suma de los dos anteriores
