let app = document.getElementById("app")
const url = "http://universities.hipolabs.com/search?country=United+States"
let universityList = []
async function handleOnLoad() {
    // console.log("start")
    // setTimeout(() => {
    //     console.log("this will appear after 2 seconds")
    //     console.log("finished")

    // }, 2000)
    await getData()
    buildTable()
}

function buildTable(){

    let html = `
    <table>
        <tr>
            <th>University Name</th>
            <th>University University Web Address</th>
        </tr>`

    universityList.forEach(university => {
        html += `
        <tr>
            <td>${university.name}</td>
            <td>${university.domains[0]}</td>
        </tr>`
    })
    html +=  `</table>`
    console.log(html)
    app.innerHTML = html

}

async function getData(){
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    universityList = data
    
    // fetch(url).then((response) => {
    //     console.log(response)
    //     if(response.status == 200){
    //         return response.json(response)
    //     }
    //     else{
    //         return []
    //     }
    //     //return response.json()
    // }).then((data) => {
    //     console.log(data)
    // })

}

