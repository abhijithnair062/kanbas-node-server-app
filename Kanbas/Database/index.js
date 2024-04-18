import courses from "./courses.js";
import modules from "./modules.js";
import assignments from "./assignments.js";
import users from "./users.js";
import enrollments from "./enrollments.js"
import grades from "./grades.js"
import quizzes from "./quizzes.js";
import questions from "./questions.js";

let db = {
    courses: courses,
    modules: modules,
    assignments: assignments,
    users: users,
    enrollments: enrollments,
    grades: grades,
    quizzes:quizzes,
    questions:questions
}
export default {  courses, modules, assignments, users, enrollments, grades, quizzes, questions,db  };
