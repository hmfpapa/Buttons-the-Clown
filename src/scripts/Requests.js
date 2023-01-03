import { getClowns, getRequests, deleteRequest, saveCompletion} from "./dataAccess.js";

const createListElement = (request) =>{
    const clowns = getClowns()
    return `
    <li>
        ${request.date} ${request.childName}
        <button class="request__delete" id="request--${request.id}">
            Deny
        </button>
        <select class="clowns" id="clowns">
        <option value="">Choose</option>
            ${
            clowns.map(
                clown => {
                    return `<option value="${request.id}--${clown.id}">${clown.name}</option>`
                }
            ).join("")
            }
        </select>
    </li>
`
}

export const requests = () => {
    const requests = getRequests()
    let html = `
        <ul>
            ${
                requests.map(createListElement).join("")
            }
        </ul>
    `
    return html 
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")

          
            const completion = { 
                requestId: requestId,
                clownId: clownId,
                date_created: new Date()
            }

           
            saveCompletion(completion)
        }
    }
)