/* QUESTION MODEL */
export interface QUESTION_MODEL {
    question_id: number;
    question: string;
    additional_info: string;
    category: string;
    date_created: string;
    question_asker: string;
    answers: ANSWER_MODEL[]
}

/* ANSWER MODEL */
export interface ANSWER_MODEL {
    answer_id: number;
    answer: string;
    answerer: string;
}