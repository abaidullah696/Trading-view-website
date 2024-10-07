import mongoose from "mongoose";

const StockSchema = new mongoose.Schema({
  symbol: String,
  name: String,
  price: Number,
  change: Number,
});

export default mongoose.models.Stock || mongoose.model("Stock", StockSchema);
