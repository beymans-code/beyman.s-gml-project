/**
 * Configuracion de la tabla.
 */
export interface TableConfig {
    /**
     * Id de la tabla.
     */
    id: string,
    /**
     * Columnas.
     */
    columns: TableColumn[];
    /**
     * Filas de la tabla.
     */
    rows: object[];
    /**
     * Opciones de la tabla.
     */
    options: TableOptions
}

/**
 * Columna de la tabla.
 */
export interface TableColumn {
    /**
     * Nombre del campo del row al que se apunta.
     */
    key: string;
    /**
     * Texto del header.
     */
    headerText: string;
    /**
     * Mascaras para visualizar la informacion.
     */
    mask: 'logo' | 'date';
}

/**
 * Opciones de la tabla.
 */
export interface TableOptions {
    /**
     * Acciones de la tabla.
     */
    actions: TableActions;
    /**
     * Activar / Desactivar el filtro de la tabla.
     */
    filter: boolean;
}

/**
 * Acciones de la tabla.
 */
export interface TableActions {
    /**
     * Accion de editar.
     */
    edit: boolean;
    /**
     * Accion de eliminar.
     */
    delete: boolean;
}