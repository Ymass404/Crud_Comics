import RepoFactories from "@/factories/RepoFactories";
import CreateComic, { comicCreateDTOmodel } from "@/features/CreateComic";
import GetAllComic from "@/features/TakeComic";

export async function GET() {
  try {
    const repo = RepoFactories.comicRepository();
    const feature = new GetAllComic(repo);
    const comic = await feature.execute();
    return Response.json(comic, { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Erreur sur la récupération des comics", {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const comic = comicCreateDTOmodel.parse(data);
    const repo = RepoFactories.comicRepository();
    const feature = new CreateComic(repo);
    const newComic = await feature.execute(comic);
    return Response.json(newComic, { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Erreur", { status: 500 });
  }
}
