// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// dotenv.config();
// import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
// import connectDB from "./config/db.js";
// import userRoutes from "./routes/userRoutes.js";
// import loanRoutes from './routes/loanRoutes.js';
// import cors from "cors";

// const PORT = process.env.PORT || 5000;

// connectDB();

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(cors());

// app.use("/api/members", userRoutes);
// app.use('/api/loans', loanRoutes);

// app.use(notFound);
// app.use(errorHandler);

// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });



import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import loanRoutes from './routes/loanRoutes.js';
import cors from "cors";

const PORT = process.env.PORT || 5000;

connectDB();
// mongoose.connect('mongodb://localhost:27017/CEBWelfare', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
const app = express();

// Middleware for parsing incoming requests with json payloads
app.use(express.json());
// Allow sending form data
app.use(express.urlencoded({ extended: true }));

// Extract cookie data from HTTP requests
app.use(cookieParser());

app.use(cors())
app.use("/api/members", userRoutes);
app.use('/api/loans', loanRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
