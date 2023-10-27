/**
 * Converts String to ArrayBuffer.
 *
 */
export function stringToArrayBuffer(str: string): ArrayBuffer {
    const buf = new ArrayBuffer(str.length)
    const bufView = new Uint8Array(buf)
    for (let i = 0; i < str.length; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf
}

/**
 * Converts Base64 strings to ArrayBuffer.
 *
 */
export function base64ToArrayBuffer(base64: string): ArrayBuffer {
    return stringToArrayBuffer(atob(base64))
}

/**
 * Converts ArrayBuffer to String.
 *
 */
export function arrayBufferToString(buf: ArrayBuffer): string {
    return String.fromCharCode.call(null, ...new Uint8Array(buf))
}

/**
 * Converts ArrayBuffer to Base64.
 *
 */
export function arrayBufferToBase64(buf: ArrayBuffer): string {
    let binary = ''
    const bytes = new Uint8Array(buf)
    const len = bytes.byteLength
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i])
    }
    return btoa(binary)
}
