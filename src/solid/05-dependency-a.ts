import { PostService } from "./05-dependency-b";
import {
  JsonDataBaseService,
  LocalDataBaseService,
  WebApiPostService,
} from "./05-dependency-c";

// Main
// (async () => {
//   const postService = new PostService();

//   const posts = await postService.getPosts();

//   console.log({ posts });
// })();

// Aplicando DIP y LSP

(async () => {
  const provider = new JsonDataBaseService();
  const providerFake = new LocalDataBaseService();
  const providerApi = new WebApiPostService();
  const postService = new PostService(providerApi);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
