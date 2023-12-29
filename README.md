# Proyecto de prueba (Angular 17)

### <a name="name"></a> Beyman Magrego López Mejía

Componentes dinámicos para un desarrollo más eficiente.

### <a name="name"></a> Demo

https://beymans-code.github.io/beyman.s-gml-project/

# Introducción

Este proyecto utiliza componentes dinámicos para reducir la cantidad de código necesario para construir y maquetar componentes comunes, como formularios, tablas, tarjetas y botones. Esto permite crear componentes y plantillas con pocas líneas de código, lo que facilita su mantenimiento y escalabilidad.

# Beneficios de los componentes dinámicos

Los componentes dinámicos ofrecen una serie de beneficios, entre los que se incluyen:

`Reducción del código`.

`Mejor legibilidad`.

`Mayor flexibilidad`.

`NO USO de librerías de terceros`.

# Conclusiones

Los componentes dinámicos son una herramienta eficaz para el desarrollo de aplicaciones Angular. Pueden ayudar a reducir la cantidad de código, mejorar la legibilidad, aumentar la flexibilidad y evitar el uso de librerías de terceros.

Manteniendo la aplicación libre de librerías deprecadas, problemas de dependencias y vulnerabilidades facilitando así la migración a nuevas versiones de angular y mejorando la seguridad.

# Dependencias.

`"@angular/animations": "^17.0.0"`

`"@angular/common": "^17.0.0"`

`"@angular/compiler": "^17.0.0"`

`"@angular/core": "^17.0.0"`

`"@angular/forms": "^17.0.0"`

`"@angular/platform-browser": "^17.0.0"`

`"@angular/platform-browser-dynamic": "^17.0.0"`

`"@angular/platform-server": "^17.0.0"`

`"@angular/router": "^17.0.0"`

`"@angular/ssr": "^17.0.8"`

`"express": "^4.18.2"`

`"lodash": "^4.17.21"`

`"rxjs": "~7.8.0"`

`"tslib": "^2.3.0"`

`"zone.js": "~0.14.2"`

# Instalación

Para instalar el proyecto, siga estos pasos:

Clone el repositorio:

```bash
git clone https://github.com/beymans-code/beyman.s-gml-project.git
```

Instale las dependencias:

```bash
cd beyman.s-gml-project
```

```bash
npm install
```

Inicie el servidor de desarrollo:

```bash
npm start
```

El proyecto estará disponible en la dirección

```bash
http://localhost:4200
```

# Uso

El proyecto incluye una serie de componentes dinámicos que se pueden utilizar para crear formularios, tablas, tarjetas y botones. Para utilizar un componente dinámico, simplemente importe el componente al archivo de plantilla y especifique los parámetros de entrada necesarios.

Por ejemplo, para crear un formulario dinámico, puede utilizar el siguiente código:

### <a name="html"></a> HTML

```html
<app-dynamic-form [baseControls]="controls || []" (formValue)="formValue($event)"></app-dynamic-form>
```

El parámetro `baseControls` es un arreglo de objetos que especifica la configuración del formulario.

El output `formValue` retorna el valor del formulario con un EventEmitter.

El arreglo de objetos `baseControls` debe tener al menos los siguientes atributos:

`type`: El tipo de campo.

`key`: El nombre clave del campo (sin espacios).

`label`: La etiqueta del campo.

`col`: La configuracion de columnas del campo.

Por ejemplo, el siguiente código crea un formulario con tres campos: 'text', 'date', 'email'.

### <a name="TypeScript"></a> TypeScript

```javascript
  public controls: BaseControl[] = [
    {
      key: 'descripcion',
      label: 'Descripción',
      type: 'Input',
      col: {
        xxl: 6,
        xl: 6,
        lg: 6,
        md: 6,
        sm: 12,
        xs: 12,
      },
      _input_placeholder: 'Ingresa la descripción',
    },
    {
      key: 'fecha',
      label: 'Fecha',
      type: 'Input',
      col: {
        xxl: 6,
        xl: 6,
        lg: 6,
        md: 6,
        sm: 12,
        xs: 12,
      },
      _input_type: 'date',
      _input_placeholder: 'Selecciona la fecha',
    },
    {
      key: 'correo',
      label: 'Correo',
      type: 'Input',
      col: {
        xxl: 6,
        xl: 6,
        lg: 6,
        md: 6,
        sm: 12,
        xs: 12,
      },
        _input_type: 'email',
      _input_placeholder: 'Ingresa el correo electrónico',
    },
  ];

  public formValue(value: object) {
    console.log(value);
  }
```

### <a name="Licencia"></a> Licencia Apache 2.0.
