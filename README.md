# 🚀 CashTrackr Frontend

El frontend de **CashTrackr** está desarrollado con **Next.js 15**, **TypeScript** y **Tailwind CSS**, proporcionando una interfaz moderna y receptiva para la gestión financiera.

## 📋 Requisitos Previos

- **Node.js** (versión 18 o superior)
- **npm** o **yarn**
- Servicio backend en ejecución

## 🛠️ Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/cashtrackr-frontend.git
   cd cashtrackr-frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```
3. Configura las variables de entorno:

   Crea un archivo `.env.local` en la raíz del proyecto y define las variables necesarias.

## 🔧 Configuración del Entorno

Asegúrate de tener configuradas las variables de entorno necesarias en el archivo `.env.local`.

## 🏃‍♂️ Ejecutar la Aplicación

Para iniciar el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
```

Esto ejecutará la aplicación en `http://localhost:3000/`.

## 🧪 Pruebas

Ejecuta los tests con:

```bash
npm test
# o
yarn test
```

## 🎨 Funcionalidades

✅ Panel de control responsivo  
✅ Seguimiento de transacciones en tiempo real  
✅ Soporte para modo claro/oscuro  
✅ Gráficos e informes interactivos  
✅ Compatibilidad con múltiples monedas

## 🏗️ Estructura del Proyecto

```
📂 frontend
 ┣ 📂 .next *(Archivos de compilación de Next.js)*
 ┣ 📂 actions *(Acciones del backend)*
 ┣ 📂 app *(Páginas y layouts principales)*
 ┣ 📂 components *(Componentes reutilizables de la UI)*
 ┣ 📂 public *(Recursos estáticos como imágenes y logos)*
 ┣ 📂 src *(Utilidades, servicios y esquemas de validación)*
 ┣ 📜 package.json *(Dependencias y scripts del proyecto)*
 ┣ 📜 tsconfig.json *(Configuración de TypeScript)*
 ┣ 📜 tailwind.config.ts *(Configuración de Tailwind CSS)*
 ┣ 📜 next.config.ts *(Configuración de Next.js)*
```

## 🛠️ Stack Tecnológico

- **Next.js 15**
- **TypeScript**
- **Tailwind CSS**
- **React Query**
- **Zustand**
- **Jest & React Testing Library**

## 📱 Capturas de Pantalla

_(Añade capturas de pantalla de la aplicación aquí.)_

## 🔐 Características de Seguridad

🔒 Autenticación con **JWT**  
🔒 Rutas protegidas  
🔒 Validación de entrada de datos  
🔒 Protección contra **XSS**

## 📜 Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo `LICENSE` para más detalles.

## 👥 Contribuyentes

- **Tu Nombre** – Desarrollo inicial – [TuGitHub](https://github.com/tu-usuario)

## 🤝 Cómo Contribuir

1. Haz un fork del proyecto
2. Crea una rama para tu funcionalidad (`git checkout -b feature/NuevaFuncion`)
3. Realiza los cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`)
4. Sube los cambios (`git push origin feature/NuevaFuncion`)
5. Abre un **Pull Request**

## 📦 Referencia de Comandos

```bash
npm run dev       # Inicia el servidor de desarrollo
npm run build     # Compila la aplicación
npm run start     # Ejecuta la aplicación en producción
npm run test      # Ejecuta las pruebas
```
