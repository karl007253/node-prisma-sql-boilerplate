import express from "express";
import apiRoutes from "./routes";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  console.info("%s %s", req.method, req.url);
  next();
});

app.listen(PORT, () => {
  console.info(`🚀 Server ready at: http://localhost:${PORT}`);

  app.use("/api", apiRoutes);

  // app.use('/api', routes)
});
