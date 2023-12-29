/**
 * Agrega un item encriptado al localStorage.
 * @param name - Nombre.
 * @param value - Valor.
 */
export function addItem(name: any, value: any) {
    localStorage.setItem(name, btoa(JSON.stringify(value)))
}

/**
 * Obtiene el item del localStorage.
 * @param name - Nombre.
 * @returns Valor | undefined.
 */
export function getItem(name: string) {
    let val: any = `${localStorage.getItem(name)}`
    if (val === 'null') {
        val = undefined;
    }
    const value = val !== undefined ? JSON.parse(atob(val)) : undefined;
    return value;
}

/**
 * Elimina un item del localStorage.
 * @param name - Nombre.
 */
export function removeItem(name: string) {
    localStorage.removeItem(name)
}

/**
 * Reinicia el localStorage.
 */
export function clearItems() {
    localStorage.clear()
}