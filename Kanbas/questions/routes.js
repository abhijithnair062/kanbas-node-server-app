import db from "../Database/index.js";

function QuestionsRoutes(app) {
  app.get("/api/quizzes/:qid/questions", (req, res) => {
    const { qid } = req.params;
    const questions = db.questions
      .filter((q) => q.quiz === qid);
    res.send(questions);
  });
  app.post("/api/quizzes/:qid/questions", (req, res) => {
    const { qid } = req.params;
    const newQuestion = {
      ...req.body,
      quiz: qid,
      // _id: new Date().getTime().toString(),
    };
    db.questions.push(newQuestion);
    res.send(newQuestion);
  });
  app.delete("/api/questions/:qid", (req, res) => {
    const { qid } = req.params;
    db.questions = db.questions.filter((q) => q._id !== qid);
    res.sendStatus(200);
  });
  app.put("/api/questions/:qid", (req, res) => {
    const { qid } = req.params;
    const questionIndex = db.questions.findIndex(
      (q) => q._id === qid);
    db.questions[questionIndex] = {
      ...db.questions[questionIndex],
      ...req.body
    };
    res.sendStatus(204);
  });
  app.get("/api/questions/:qid", (req, res) => {
    const { qid } = req.params;
    console.log(db.questions);
    const question = db.questions.find((q) => q._id === qid);
    if (!question) {
      return res.status(404).send("Question not found");
    }
    res.send(question);
  });
}
export default QuestionsRoutes;