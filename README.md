# TEST

## CORRER EL PROYECTO POR PRIMERA VEZ
1. Debe ejecutar la dependencia de instalación con este comando:
```bash
npm install
```

2. El siguiente comando ejecuta migraciones de la base de datos y después de esto,
  lo que resta es decir cuál es el nombre de la migración
```bash
npm run migration
```

3. Debido a que el modelo de base de datos no contiene los datos básicos para comenzar,
debe ejecutar este comando para obtener algunos datos:
```bash
npm run seed
```

4. Puede ejecutar este comando para ver la aplicación en dev

```bash
npm run dev
```

## APP ROUTING
1. Puede reconocer la ruta principal como "/".
2. La última ruta es "/admin" para la gestión de la sección del carrusel.

## USUARIOS
Estos son los usuarios para la autenticación creados con el comando npm run seed:

* - Email: 11hoogan@gmail.com
  - Password: admin123
  - Role: admin

* - Email: JanethChanel@yahoo.com
  - Password: editor123
  - Role: editor

* - Email: happyAngry@gmail.com
  - Password: reader123
  - Role: reader

## DOCUMENTACIÓN
Este es link para acceder a la documentación: https://docs.google.com/document/d/1a1vL4-g1Q0qR3iX6j-uZFJTtxogtp8rIawx2PX23XBo/edit?usp=sharing
