export function addItem(name: string, value: any) {
    localStorage.setItem(name, btoa(JSON.stringify(value)))
}

export function getItem(name: string) {
    return JSON.parse(localStorage.getItem(name) ? atob(localStorage.getItem(name) || 'null') : 'null')
}

export function removeItem(name: string) {
    localStorage.removeItem(name)
}

export function clearItems() {
    localStorage.clear()
}