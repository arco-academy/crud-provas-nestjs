-- SQLite
CREATE TABLE questions (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    examId INTEGER,
    enunciated TEXT
);

CREATE TABLE answer (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    is_correct INTEGER,
    answer TEXT,
    question_id INTEGER,
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

SELECT * FROM questions

