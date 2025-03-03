import axios from "axios";

const API_URL = "http://localhost:5001/api/v1/chatbot/api/qna/ask";

export const fetchChatResponse = async (question) => {
    try {
        const response = await axios.post(API_URL, {question});
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}