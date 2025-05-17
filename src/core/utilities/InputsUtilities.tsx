export function capitalizeFirstLetter(text: string): string {
    if (!text) return text; // Verifica si la cadena está vacía
    return text.charAt(0).toUpperCase() + text.slice(1);
}