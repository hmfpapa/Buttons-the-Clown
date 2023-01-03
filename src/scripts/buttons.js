import { requests } from "./Requests.js"
import { RequestForm } from "./RequestForm.js"

export const Buttons = () => {
    return `
    <h1>Buttons the Clown</h1>
    <section class="requestForm">
    ${RequestForm()}
    </section>

    <section class="Requests">
        <h2>Requests</h2>
        ${requests()}
    </section>
    `
}





