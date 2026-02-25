import { API } from "@/app/api/api";
import { comicCreateDTOmodel } from "@/features/CreateComic";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function AddComic() {
  const form = useForm<comicCreateDTOmodel>({
    resolver: zodResolver(comicCreateDTOmodel),
    defaultValues: {
      title: "",
      author: "",
      picture: "",
    },
  });

  async function onSubmit(values: comicCreateDTOmodel) {
    try {
      await API.comicRequest.addComic(values);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Page add</h1>
    </div>
  );
}
