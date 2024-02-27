import Posts from "@/models/postSchema";
import { connect } from "@/utils/dbConfig";

connect();

export const fetchAllPublicPosts = async () => {
  try {
    const posts = await Posts.aggregate([
      {
        $match: {
          isPublished: true,
        },
      },
      {
        $sort: { createdAt: -1 },
      },
    ]);
    return posts;
  } catch (err: any) {
    console.log(err);
  }
};
