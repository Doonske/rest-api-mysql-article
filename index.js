const express = require("express");
const app = express();
const port = 3001;
const entriesRouter = require("./routes/entries");
const interestRouter = require("./routes/interest");
const imageRouter = require("./routes/image");
const searchRouter = require("./routes/search");
const filterRouter = require("./routes/filter");
const testdataRouter = require("./routes/testdata")
var cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});


app.use("/entries", entriesRouter);
app.use("/entries/interest", interestRouter);
app.use("/entries/image", imageRouter);
app.use("/search", searchRouter);
app.use("/filter", filterRouter);
app.use("/testdata", testdataRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  //console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
//test