API realizada con nodeJS, Express, JWT y postgress


para ejecutar proyecto:

descargar repositorio

abrir consola Git bash

ejecutar npm i ( esperar a que se instalen las dependencias)

ejecutar npm run dev ( para ejecutar el servidor y dar funcionamiento a la API)

abrir una nueva pestaña en el navegador y ingresar a http://localhost:3000/

nota : todas la rutas tienen autenticacion por Token

/////////////////////////////////////////////////////////////////////////////////////

API 



Endpoints

    (get) http://localhost:3000 (pagina principal)
            
        (post) http://localhost:3000/auth/login (login)
        (get) http://localhost:3000/auth/refresh_token (refresh_token)
        (delete) http://localhost:3000/auth/refresh_token (logOut)
            
            
        (get) http://localhost:3000/products (productos)
        (get) http://localhost:3000/products/id (producto)
        (post) http://localhost:3000/products ( crear producto)
        (put) http://localhost:3000/products/id ( editar producto)
        (delete) http://localhost:3000/products/id ( borrar producto)
            
        (get) http://localhost:3000/users (crear usuarios)
        (post) http://localhost:3000/users (usuarios)
             
