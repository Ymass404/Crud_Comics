import RepoFactories from "@/factories/RepoFactories";
import DeleteComic from "@/features/DeleteComic";
import GetAllComicById from "@/features/GetComicById";
import { comicUpdateDTOmodel } from "@/features/UpdateComic";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id: idStr } = await params;
    if (!idStr) {
      return new Response("ID invalide", { status: 400 });
    }
    const id = parseInt(idStr);
    const repo = RepoFactories.comicRepository();
    const feature = new GetAllComicById(repo);
    const comic = await feature.execute(id);
    return Response.json(comic, { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Erreur serveur", { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id: idStr } = await params;
    if (!idStr) {
      return new Response("ID invalide", { status: 400 });
    }
    const id = parseInt(idStr);
    const body = await request.json();
    const repo = RepoFactories.comicRepository();
    const parse = comicUpdateDTOmodel.parse(body);
    const feature = new GetAllComicById(repo);
    const updatedComic = await feature.execute(id, parse);
    return Response.json(updatedComic, { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Erreur serveur", { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id: idStr } = await params;
    if (!idStr) {
      return new Response("Id manquante", { status: 400 });
    }
    const id = parseInt(idStr);
    const repo = RepoFactories.comicRepository();
    const feature = new DeleteComic(repo);
    await feature.execute(id);
    return new Response(null, { status: 204 });
  } catch (error) {
    console.log(error);
    return new Response("Erreur lors de la suppression", { status: 500 });
  }
}
