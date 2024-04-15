import db from "../Database/index.js";
function QuizzesRoutes(app) {
  app.get("/api/courses/:cid/quizzes", (req, res) => {
    const { cid } = req.params;
    const quizzes = db.quizzes
      .filter((q) => q.course === cid);
    res.send(quizzes);
  });
  app.post("/api/courses/:cid/quizzes", (req, res) => {
    const { cid } = req.params;
    const newQuiz = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    db.quizzes.push(newQuiz);
    res.send(newQuiz);
  });
  app.delete("/api/quizzes/:qid", (req, res) => {
    const { qid } = req.params;
    db.quizzes = db.quizzes.filter((q) => q._id !== qid);
    res.sendStatus(200);
  });
  app.put("/api/quizzes/:qid", (req, res) => {
    const { qid } = req.params;
    const quizIndex = db.quizzes.findIndex(
      (q) => q._id === qid);
    db.quizzes[quizIndex] = {
      ...db.quizzes[quizIndex],
      ...req.body
    };
    res.sendStatus(204);
  });
  app.get("/api/quizzes/:qid", (req, res) => {
    const { qid } = req.params;
    const quiz = db.quizzes.find((q) => q._id === qid);
    if (!quiz) {
      return res.status(404).send("Quiz not found");
    }
    res.send(quiz);
  });
}
export default QuizzesRoutes;