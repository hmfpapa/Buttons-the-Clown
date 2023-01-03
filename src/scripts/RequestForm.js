import { sendRequest } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
 
        const parentName = document.querySelector("input[name='parentName']").value
        const childName = document.querySelector("input[name='childName']").value
        const attendance = document.querySelector("input[name='Attendance']").value
        const address = document.querySelector("input[name='Address']").value
        const date = document.querySelector("input[name='Date']").value
        const length = document.querySelector("input[name='Length']").value

        const dataToSendToAPI = {
            parentName: parentName,
            childName: childName,
            attendance: attendance,
            address: address,
            date: date,
            length: length
        }

        sendRequest(dataToSendToAPI)
    }
})

export const RequestForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="Attendance">Number of children</label>
            <input type="number" name="Attendance" class="input" />
        </div>
        <div class="field">
            <label class="label" for="Address">Address</label>
            <input type="text" name="Address" class="input" />
        </div>
        <div class="field">
            <label class="label" for="Date">Party date</label>
            <input type="date" name="Date" class="input" />
        </div>
        <div class="field">
            <label class="label" for="Length">Length of reservation</label>
            <input type="number" name="Length" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}