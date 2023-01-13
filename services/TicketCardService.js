import axios from "./axios";

class TicketCardService {
    getTicketCards() {
        return axios.get("/api/ticketcard");
    }
}

export default new TicketCardService();
