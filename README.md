# CIMIENTOS - Sitio Web

Sitio web oficial del Colectivo de investigación multidisciplinar sobre innovación en niñez y transformación Social.

## 🌟 Características

- **Diseño Moderno y Responsive**: Interfaz limpia adaptable a todos los dispositivos
- **Navegación Intuitiva**: Menú principal con acceso fácil a todas las secciones
- **Identidad Visual**: Colores, tipografías, logos y tejido chumbe del brandbook de CIMIENTOS
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
- **Tipografía**: Montserrat y Fresh Mango (archivos locales vía `next/font`)

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

## 🎨 Identidad Visual

El sitio sigue el brandbook de CIMIENTOS. La carpeta `BRANDBOOK_CIMIENTOS/` está en `.gitignore`; los recursos que usa la web viven en `public/brand/`.

### Colores
Definidos en `tailwind.config.js` como `brand-*` (por ejemplo `bg-brand-cyan` o `text-brand-brown`).

| Token | Hex | Tipo |
|---|---|---|
| `brand-cyan` | `#41c0f0` | Primario |
| `brand-yellow` | `#fcd300` | Primario |
| `brand-pink` | `#ff7bac` | Primario |
| `brand-brown` | `#603813` | Primario (color de texto del sitio) |
| `brand-navy` | `#14387f` | Secundario |
| `brand-orange` | `#ff9e5c` | Secundario |
| `brand-magenta` | `#f2308d` | Secundario |
| `brand-gray` | `#7c7c7b` | Secundario |

Los secundarios son para datos adicionales y gráficos; el brandbook pide no abusar de su uso.

Para que los textos se lean bien, el texto va en marrón sobre fondos claros, o en blanco sobre marrón. El blanco sobre cian o rosa y el amarillo sobre blanco se reservan para logos, íconos y titulares grandes.

### Tipografía
- **Montserrat** (`font-sans`): familia principal, para todo el texto.
- **Fresh Mango** (`font-display`): solo para algunos titulares y textos destacados. Tiene un único peso, así que no se combina con `font-bold`.

### Recursos gráficos
- `public/brand/logo-horizontal-color.svg`: logo principal (navbar).
- `public/brand/logo-horizontal-blanco.svg`: logo en negativo para fondos de color (footer).
- `public/brand/logo-vertical-color.svg`: versión vertical, para avatares y espacios estrechos.
- `public/brand/tejido.svg`: tejido chumbe del logo, recortado para repetirse sin cortes.
- `components/BrandStripe.tsx`: franja del logo (línea cian, tejido y línea rosa).
- `components/PageHeader.tsx`: encabezado de las páginas interiores.

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
Los colores de marca están en `tailwind.config.js`, en `theme.extend.colors.brand`. Cualquier cambio debe seguir el brandbook.

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
