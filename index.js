import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/", (req, res) => {
  const data = req.body;

  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({
      message: "No data received",
    });
  }

  res.status(200).json({
    message: "Data received successfully",
    data: data,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
