<h2 align="center"> Proyecto de Aplicación Web y Móvil - Ionic React con TypeScript </h2>

Este proyecto es una aplicación creada con **Ionic** y **React** usando **TypeScript**. La aplicación está diseñada para funcionar tanto como una aplicación web progresiva (PWA) como una aplicación móvil que se puede compilar para plataformas iOS y Android.

## Descripción

Esta aplicación permite a los usuarios **buscar productos**, **añadirlos a una lista de deseos** y **visualizar sus productos favoritos**. Los productos se obtienen de una API pública y los datos de la lista de deseos se gestionan de manera local utilizando Redux.

## Características

- **Buscar productos**: Los usuarios pueden buscar productos a través de una API.
- **Lista de deseos**: Los productos pueden ser añadidos o eliminados de la lista de deseos.
- **Persistencia local**: Los datos de la lista de deseos se guardan localmente.
- **Diseño responsivo**: Funciona tanto en web como en dispositivos móviles (iOS/Android).
- **Tecnologías**: Ionic Framework, React, TypeScript, Redux, API Rest.

### Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- **Node.js** (versión 14 o superior)
- **npm** (viene incluido con Node.js)
- **Ionic CLI**: puedes instalarlo globalmente con el siguiente comando:

  ```bash
  npm install -g @ionic/cli
  ```
  1. **Clonar el repositorio**
       ```bash
      git clone https://github.com/AnderAlvarado13/storeapi-web.git
      ```
  2. **Instalar dependencias**
     ```bash
      npm install
      ```
  3. **Ejecución de la aplicación**
     - **Para la web (PWA)**
     Para ejecutar la aplicación en el navegador como una aplicación web:
     ```bash
      ionic serve
      ```
     - **Para móvil (Android)**
     Primero, asegúrate de que tienes configurado el entorno de desarrollo para Android.
     ```bash
      ionic capacitor run android
      ```

### Herramientas y Librerías

  - **Ionic Framework**: Utilizado para la UI y la estructura responsiva de la aplicación.
  - **React**: Para la creación de la interfaz de usuario basada en componentes.
  - **Redux**: Para la gestión del estado de la aplicación.
  - **TypeScript**: Para añadir tipos a JavaScript y mejorar la seguridad del código.
  - **Capacitor**: Para compilar la aplicación en plataformas móviles

> [!NOTE]
  > Tener en cuenta que es necesario tener JDK para que ionic funcione correctamente en mi caso use la versión 17.0.10 y me fue necesario configurar el SDK de mi Android e incluirlo en un archivo agregado `local.properties:` sdk.dir=C:\\Users\\USER\\AppData\\Local\\Android\\Sdk
 esto por que tuve complicaciones en la ejecución para aplicaciones móviles Android.
