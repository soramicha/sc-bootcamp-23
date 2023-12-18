import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type IPortfolio = {
    title: string;
    description: string; // for preview
    link: string;
    image: string;
    slug: string;
};

// mongoose schema 
const portfolioSchema = new Schema<IPortfolio>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    image: { type: String, required: false }, // image is not required
    slug: { type: String, required: true }
})

// defining the collection and model
const Portfolios = mongoose.models['Project'] ||
mongoose.model('Project', portfolioSchema);

export default Portfolios;
export type { IPortfolio };