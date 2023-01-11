import axios from "./axios";

class TicketCardService {

    getWelcomeCard() {
        return axios.get("/challenge/card/welcome");
    }
    
    getTicketCards() {
        return axios.get("/challenge/cards");
    }

    createTicketCard(data) {
        return axios.post("/challenge/cards", data);
    }
}

export default new TicketCardService();
