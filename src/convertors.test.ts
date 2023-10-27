import { stringToArrayBuffer, base64ToArrayBuffer, arrayBufferToBase64, arrayBufferToString } from "./convertors.ts"
import { expect, test } from "vitest"

test("stringToArrayBuffer", () => {
    const str: string = "Hello Security!"
    const buf: ArrayBuffer = stringToArrayBuffer(str)
    expect(buf.byteLength).toBe(str.length)
    const bufView = new Uint8Array(buf)
    for (let i = 0; i < str.length; i++) {
        expect(bufView[i]).toBe(str.charCodeAt(i))
    }
})

test("base64ToArrayBuffer", () => {
    const str: string = "Hello Security!"
    const base64: string = "SGVsbG8gU2VjdXJpdHkh"
    const buf: ArrayBuffer = base64ToArrayBuffer(base64)
    expect(buf.byteLength).toBe(15)
    const bufView = new Uint8Array(buf)
    for (let i = 0; i < str.length; i++) {
        expect(bufView[i]).toBe(str.charCodeAt(i))
    }
})

test("arrayBufferToString", () => {
    const str: string = "Hello Security!"
    const buf: ArrayBuffer = stringToArrayBuffer(str)
    expect(arrayBufferToString(buf)).toBe(str)
})

test("arrayBufferToBase64", () => {
    const str: string = "Hello Security!"
    const base64: string = "SGVsbG8gU2VjdXJpdHkh"
    const buf: ArrayBuffer = stringToArrayBuffer(str)
    expect(arrayBufferToBase64(buf)).toBe(base64)
})
