export async function fetchDatas(url = "", page = 1) {
    if(!url || url === ""){
        alert("No fetch url")
        return {totalPages: 0, datas: []}
    }

    let request = await fetch(url.replace("[page]", page))
    let requestedData = await request.json()

    let totalPages = Math.ceil(10 / 3)
    let datas = requestedData

    return {totalPages: totalPages, datas: datas}
}