import {
  JsonDataBaseService,
  LocalDataBaseService,
  PostProvider,
} from "./05-dependency-c";

// interface Post {
//   body: string;
//   id: number;
//   title: string;
//   userId: number;
// }

// export class PostService {
//   private posts: Post[] = [];

//   constructor() {}

//   async getPosts() {
//     const jsonDB = new LocalDataBaseService();
//     this.posts = await jsonDB.getFakePosts();

//     return this.posts;
//   }
// }

// Aplicando DIP y LSP

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: Post[] = [];

  constructor(private postsProvider: PostProvider) {}

  async getPosts() {
    this.posts = await this.postsProvider.getPosts();

    return this.posts;
  }
}
