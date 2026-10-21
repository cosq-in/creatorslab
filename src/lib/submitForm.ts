import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from "@/lib/web3forms";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

// Sends a form's fields (plus any extras) to Web3Forms. Resolves true on success.
export async function submitForm(form: HTMLFormElement, subject: string, extra: Record<string, string> = {}): Promise<boolean> {
    const data = Object.fromEntries(new FormData(form).entries());
    try {
        const res = await fetch(WEB3FORMS_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, subject, ...extra, ...data }),
        });
        const result = await res.json();
        return !!result.success;
    } catch (error) {
        console.error("Form submission error:", error);
        return false;
    }
}
