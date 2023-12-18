import mongoose, { Schema } from "mongoose";

type IComment = {
    user: string;
    comment: string;
    time: Date;
}

// typescript type (can also be an interface)
type IBlog = {
    title: string;
    slug: string; 
    date: Date;
    description: string; // for preview
    image: string;
  //content: string; // for individual blog page
    comments: IComment[]; // array for comments
};

const commentSchema = new Schema<IComment>({ // make a commentSchema
    user: {type: String, required: true},
    comment: {type: String, required: true},
    time: {type: Date, required: false, default: new Date()}
})

// mongoose schema 
const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    image: {type: String, required: false}, // image
    // content: { type: String, required: false },
  comments: [{type: commentSchema, required: true}]
})

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
mongoose.model('blogs', blogSchema);

export default Blog;
export type { IComment };
export type { IBlog };