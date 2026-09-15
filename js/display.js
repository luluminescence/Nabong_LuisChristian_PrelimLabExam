import {
    calculateFinalGrade,
    getAcademicStatus,
    getPerformanceRemark,
    calculateClassAverage,
    countPassingStudents,
    getTopStudent
} from "./gradeUtils.js";

const studentList =
    document.getElementById(
        "studentList"
    );

const classAverage =
    document.getElementById(
        "classAverage"
    );

const passingCount =
    document.getElementById(
        "passingCount"
    );

const displayedCount =
    document.getElementById(
        "displayedCount"
    );

const topStudent =
    document.getElementById(
        "topStudent"
    );

const messageArea =
    document.getElementById(
        "messageArea"
    );

export function displayStudents(
    students
) {

    studentList.innerHTML = "";
    if (students.length === 0) {
        studentList.innerHTML =
            '<div class="empty">No students found</div>';
        return;
    }

    students.forEach(
        student => {
            const {
                id,
                name,
                block,
                quiz,
                lab,
                exam
            } = student;

            const finalGrade =
                calculateFinalGrade(student);

            const academicStatus =
                getAcademicStatus(
                    finalGrade
                );

            const performanceRemark =
                getPerformanceRemark(
                    finalGrade
                );

            const card =
                document.createElement(
                    "article"
                );

            card.className =
                "student-card";

            card.innerHTML = `
                <h2>${name}</h2>
                <p class="block">
                    ID: ${id}
                    •
                    Block: ${block}
                </p>

                <div class="scores">
                    <div class="score">
                        <span>Quiz</span>
                        <strong>
                            ${quiz}
                        </strong>
                    </div>

                    <div class="score">
                        <span>
                            Laboratory
                        </span>

                        <strong>
                            ${lab}
                        </strong>
                    </div>

                    <div class="score">
                        <span>
                            Prelim Exam
                        </span>

                        <strong>
                            ${exam}
                        </strong>
                    </div>
                </div>

                <div class="result">
                    <p>
                        <strong>
                            Final Grade:
                        </strong>
                        ${finalGrade.toFixed(2)}
                    </p>

                    <p>
                        <strong>
                            Academic Status:
                        </strong>
                        ${academicStatus}
                    </p>

                    <p>
                        <strong>
                            Performance Remark:
                        </strong>

                        ${performanceRemark}
                    </p>

                </div>
            `;

            studentList.appendChild(
                card
            );
        }
    );
}

export function displaySummary(
    students
) {

    const average =
        calculateClassAverage(
            students
        );

    const passing =
        countPassingStudents(
            students
        );

    const top =
        getTopStudent(
            students
        );

    classAverage.textContent =
        average.toFixed(2);

    passingCount.textContent =
        passing;

    displayedCount.textContent =
        students.length;

    topStudent.textContent =
        top
            ? top.name
            : "None";
}

export function displayMessage(
    message
) {
    messageArea.textContent =
        message;
}