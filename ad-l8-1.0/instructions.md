# AD-14-1 - LAB: Refactorización del Blog

## Objetivo general

En este laboratorio van a **refactorizar** el sitio de blog que ya venían trabajando. Refactorizar significa mejorar un proyecto existente sin cambiar su propósito principal.

El sitio debe usar **Bootstrap** para mejorar su estructura, diseño y comportamiento visual.

Al finalizar, el proyecto debe tener:

- Una paleta de máximo 5 colores.
- Bootstrap instalado mediante CDN.
- Una barra de navegación funcional con Bootstrap.
- Sistema de rejilla usando `container`, `row` y `col`.
- Tres páginas conectadas entre sí: Inicio, Quiénes somos y Contacto.
- Formulario de contacto con estilos Bootstrap.
- Alerta visual que diga **“Mensaje enviado”** al presionar el botón del formulario.
- Diseño limpio, responsive y sin errores evidentes.

---

## Escenario del laboratorio

El cliente envió un nuevo wireframe y pidió que el blog se actualice para usar Bootstrap. El equipo debe mejorar el sitio, mantener su propósito y agregar componentes visuales.

No se trata de hacer otro proyecto desde cero. Se trata de mejorar el blog existente.

---

## Reglas del laboratorio

1. Trabajen en equipo.
2. Usen máximo 5 colores para la paleta visual.
3. Usen HTML.
4. Usen CSS.
5. Usen Bootstrap.
6. Usen VS Code, Replit u otro editor indicado por la instructora.
7. Usen GitHub con el repositorio del blog que ya estaban trabajando.
8. El sitio debe tener 3 páginas conectadas:
   - Inicio
   - Quiénes somos
   - Contacto
9. Las 3 páginas deben usar la misma Navbar.
10. El formulario debe tener campo de correo, área de mensaje y botón.
11. Deben usar un solo archivo CSS principal: `style.css`.
12. Deben respetar el wireframe proporcionado.
13. Revisen la carpeta `Wireframe-Backup` si no pueden abrir el enlace de Figma.

---

## Estructura sugerida del proyecto

```text
AD-14-1/
├── index.html
├── about.html
├── contact.html
├── style.css
├── script.js
├── instructions.md
└── Wireframe-Backup/
```

---

# Tarea 1 - Instalar Bootstrap mediante CDN

Bootstrap ya está agregado en los archivos base de esta versión, pero deben revisar que esté correctamente instalado.

En cada archivo HTML deben existir estos elementos:

1. El CSS de Bootstrap dentro del `<head>`.
2. El script de Bootstrap antes de cerrar el `<body>`.

Ejemplo:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
```

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

---

# Tarea 2 - Elegir los colores del sitio

Como equipo, definan una paleta de máximo 5 colores.

Pueden usar colores de Bootstrap como:

- `primary`
- `secondary`
- `success`
- `warning`
- `danger`
- `info`
- `light`
- `dark`

También pueden agregar algunos colores propios en `style.css`, pero no saturen el sitio.

Recomendación: usen una combinación sencilla, por ejemplo:

- Color principal
- Color secundario
- Fondo claro
- Texto oscuro
- Color de acento

---

# Tarea 3 - Refactorizar todo el sitio

Deben mejorar las tres páginas del blog.

Revisen especialmente:

- Colores.
- Tamaños de texto.
- Tipografía.
- Espaciados.
- Navbar.
- Grid.
- Footer.
- Responsive design.

Usen clases de Bootstrap como:

```html
container
container-fluid
row
col
col-md-3
col-md-6
text-center
p-3
mb-4
btn
btn-primary
navbar
navbar-expand-lg
```

---

# Tarea 4 - Página Inicio

Archivo: `index.html`

La página de inicio debe tener:

1. Navbar funcional.
2. Sección principal de contenido.
3. Texto, imágenes, tarjetas o videos relacionados con el blog.
4. Columna izquierda reservada para futura publicidad.
5. Columna derecha reservada para futuras noticias.
6. Footer con nombres del equipo y correos ficticios.

La estructura sugerida es:

```text
[Columna izquierda] [Contenido principal] [Columna derecha]
```

La columna izquierda puede decir:

> Espacio reservado para publicidad.

La columna derecha puede decir:

> Espacio reservado para noticias.

---

# Tarea 5 - Página Quiénes somos

Archivo: `about.html`

Debe contener:

1. Navbar funcional.
2. Información del equipo.
3. Explicación del propósito del blog.
4. Imágenes, cards o contenido visual.
5. Columnas laterales reservadas, igual que en Inicio.
6. Footer.

Preguntas que pueden responder en esta página:

- ¿Quiénes integran el equipo?
- ¿Por qué existe este blog?
- ¿Qué tema aborda el blog?
- ¿Qué quiere aportar el equipo con este sitio?

---

# Tarea 6 - Página Contacto

Archivo: `contact.html`

Debe contener:

1. Navbar funcional.
2. Formulario Bootstrap.
3. Campo de correo electrónico.
4. Área de texto para el mensaje.
5. Botón de envío.
6. Alerta Bootstrap que diga **“Mensaje enviado”**.
7. La alerta debe poder cerrarse.

En esta versión ya se incluye una base funcional en `script.js`. Pueden mejorarla, pero no deben romperla.

---

# Tarea 7 - Pulir el sitio

Antes de entregar, revisen:

- Que las tres páginas abran correctamente.
- Que la Navbar mande a las páginas correctas.
- Que el formulario muestre la alerta.
- Que no haya imágenes rotas.
- Que no existan errores visibles.
- Que el diseño se adapte a diferentes tamaños de pantalla.
- Que el sitio respete el wireframe.
- Que el código esté limpio y ordenado.

---

## Checklist final de entrega

Antes de entregar, marquen lo siguiente:

- [ ] Bootstrap está instalado en todas las páginas.
- [ ] La Navbar funciona en Inicio, Quiénes somos y Contacto.
- [ ] El sitio usa Grid de Bootstrap.
- [ ] La página Inicio tiene contenido central y columnas laterales.
- [ ] La página Quiénes somos tiene información del equipo y propósito del proyecto.
- [ ] La página Contacto tiene formulario Bootstrap.
- [ ] El botón del formulario muestra la alerta “Mensaje enviado”.
- [ ] La alerta se puede cerrar.
- [ ] El sitio tiene máximo 5 colores principales.
- [ ] El footer aparece en las páginas.
- [ ] El sitio no tiene errores evidentes.

---

## Recursos útiles

- Bootstrap: https://getbootstrap.com/
- Documentación Navbar: https://getbootstrap.com/docs/5.3/components/navbar/
- Documentación Grid: https://getbootstrap.com/docs/5.3/layout/grid/
- Documentación Forms: https://getbootstrap.com/docs/5.3/forms/overview/
- Documentación Alerts: https://getbootstrap.com/docs/5.3/components/alerts/
