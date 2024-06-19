import { foods } from "@/data";
export async function GET (
    req: Request,
    {params}:{params: {name: string}}
){
    const index= foods.findIndex(
        (food) => food.name.toLocaleLowerCase().replace(/ /g, '_') === params.name
    )
    if (index !== -1) {
        return new Response(JSON.stringify(foods[index]), {
            headers: {
                "Content-Type": "application/json"
            },
            status: 200
        })
    } else {
        return new Response("Food not found.", {
            headers: {
                "Content-Type": "application/json"
            },
            status: 404
        });
    }
}