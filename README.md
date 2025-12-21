# CIMIENTOS - Sitio Web

Sitio web oficial del Colectivo de Investigación Multidisciplinar sobre Innovación en Niñez y Transformación Social.

## 🌟 Características

- **Diseño Moderno y Responsive**: Interfaz limpia adaptable a todos los dispositivos
- **Navegación Intuitiva**: Menú principal con acceso fácil a todas las secciones
- **Colores Suaves**: Paleta de colores inspirada en niñez y transformación social
- **Componentes Reutilizables**: Arquitectura modular para fácil mantenimiento

## 📄 Páginas Principales

### 1. Inicio
- Hero section con presentación del colectivo
- Contenido destacado con últimas actualizaciones
- Enlaces a publicaciones y comunidad

### 2. Nosotros (/about)
- Misión, objetivos específicos y visión del colectivo
- Valores y principios que guían el trabajo
- Enfoque geográfico: Colombia y Latinoamérica

### 3. Comunidad (/comunidad)
- Perfiles de miembros con tarjetas informativas
- Información de contacto y especialidades
- Formulario para solicitar membresía

### 4. Publicaciones (/publicaciones)
- Policy briefs y documentos de investigación
- Columnas de opinión y posicionamientos
- Eventos próximos y encuentros virtuales

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 14 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Tipografía**: Inter (Google Fonts)

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de instalación

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo**:
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador**:
   Visita [http://localhost:3000](http://localhost:3000)

### Comandos disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Ejecutar versión de producción
npm start

# Linting
npm run lint
```

## 🎨 Paleta de Colores

### Colores Principales
- **CIMIENTOS Blue**: #0ea5e9 (azul principal)
- **Primary Orange**: #f1761c (naranja cálido)
- **Accent Green**: #22c55e (verde natural)

### Variaciones
Cada color principal tiene variaciones del 50 al 900 para diferentes usos y contrastes.

## 📁 Estructura del Proyecto

```
WEB-CIMIENTOS/
├── app/                    # Páginas principales (App Router)
│   ├── about/             # Página Nosotros
│   ├── comunidad/         # Página Comunidad
│   ├── publicaciones/     # Página Publicaciones
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes reutilizables
│   ├── EventCard.tsx      # Tarjeta de eventos
│   ├── FeaturedContent.tsx # Contenido destacado
│   ├── Footer.tsx         # Pie de página
│   ├── Hero.tsx           # Sección hero
│   ├── MemberCard.tsx     # Tarjeta de miembros
│   ├── Navbar.tsx         # Navegación principal
│   └── PublicationCard.tsx # Tarjeta de publicaciones
├── public/                # Archivos estáticos
├── package.json           # Dependencias del proyecto
├── tailwind.config.js     # Configuración de Tailwind
├── tsconfig.json          # Configuración de TypeScript
└── README.md              # Este archivo
```

## 👥 Agregar Nuevos Miembros

Para agregar nuevos miembros a la comunidad:

1. Abre `app/comunidad/page.tsx`
2. Agrega un nuevo objeto al array `members` con:
   - `id`: identificador único
   - `name`: nombre completo
   - `affiliation`: institución de afiliación
   - `location`: ubicación geográfica
   - `interests`: array de intereses en primera infancia
   - `bio`: descripción breve
   - `imageUrl`: URL de la foto (opcional)
   - `email`: correo de contacto (opcional)
   - `website`: sitio web personal (opcional)

### Ejemplo:
```typescript
{
  id: 'nuevo-miembro',
  name: 'Dr. Nombre Apellido',
  affiliation: 'Universidad Ejemplo',
  location: 'Ciudad, País',
  interests: ['Tema 1', 'Tema 2', 'Tema 3'],
  bio: 'Descripción de la experiencia e investigación...',
  imageUrl: '',
  email: 'email@universidad.edu',
  website: 'https://sitio-personal.com'
}
```

## 📚 Agregar Publicaciones

Para agregar nuevas publicaciones:

1. Abre `app/publicaciones/page.tsx`
2. Agrega un nuevo objeto al array `publications` con:
   - `id`: identificador único
   - `title`: título de la publicación
   - `description`: resumen o descripción
   - `type`: tipo ('policy-brief', 'opinion', 'research', 'position')
   - `authors`: array de autores
   - `date`: fecha de publicación
   - `downloadUrl`: enlace de descarga (opcional)
   - `externalUrl`: enlace externo (opcional)
   - `tags`: array de etiquetas

## 📅 Agregar Eventos

Para agregar nuevos eventos:

1. Abre `app/publicaciones/page.tsx`
2. Agrega un nuevo objeto al array `events` con todos los campos requeridos
3. Configura el `status` como 'upcoming', 'ongoing' o 'completed'

## 🔧 Personalización

### Cambiar Colores
Modifica los colores en `tailwind.config.js` en la sección `theme.extend.colors`.

### Agregar Nuevas Páginas
1. Crea una nueva carpeta en `app/`
2. Agrega un archivo `page.tsx` con el componente de la página
3. Actualiza la navegación en `components/Navbar.tsx`

### Modificar Componentes
Todos los componentes están en la carpeta `components/` y pueden ser modificados independientemente.

## 🌐 Despliegue

El sitio está optimizado para despliegue en:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **Cualquier hosting que soporte Node.js**

### Despliegue en Vercel
1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. El sitio se desplegará automáticamente en cada push

## 📞 Contacto

Para consultas sobre el sitio web:
- **Email**: contacto@cimientos.org
- **Sitio**: [cimientos.org](https://cimientos.org)

## 📄 Licencia

Este proyecto está desarrollado para el Colectivo CIMIENTOS. Todos los derechos reservados.

---

**Desarrollado con ❤️ para la primera infancia en Colombia y Latinoamérica**
