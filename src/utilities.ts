export function escapeHtml(str: string): string {
    const tempDiv = document.createElement("div");
    tempDiv.appendChild(document.createTextNode(str));
    return tempDiv.innerHTML;
}

export function truncateTo(length: number, clippingIndicator: string): (s: string) => string {
    return s => s.length > length ? s.slice(0, length) + clippingIndicator : s;
}
