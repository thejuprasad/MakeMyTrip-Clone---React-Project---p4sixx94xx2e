import React, { useContext } from "react";
import { context } from "../App";
import { v4 as uuidv4 } from "uuid";
import TicketCard from "./TicketCard";

import FlightTicket from "./tickets/FlightTicket";
import HotelTicket from "./tickets/HotelTicket";
import TrainTicket from "./tickets/TrainTicket";

const Tickets = ({ tripType }) => {
    const ticketCompType = (ticketData, index) => {
        let reccomned = false;
        if (index === 0) {
            reccomned = true;
        }
        console.log("look here", tripType);
        let options = {
            flights: (
                <FlightTicket
                    reccomned={reccomned}
                    tripType={tripType}
                    key={uuidv4()}
                    data={ticketData}
                />
            ),
            trains: (
                <TrainTicket
                    reccomned={reccomned}
                    tripType={tripType}
                    key={uuidv4()}
                    data={ticketData}
                />
            ),
            hotels: (
                <HotelTicket
                    reccomned={reccomned}
                    tripType={tripType}
                    key={uuidv4()}
                    data={ticketData}
                />
            ),
        };
        return options[tripType];
    };
    const { data } = useContext(context);
    return (
        <>
            <h2 className="available-tickets-heading">Available Tickets</h2>
            <div className="tickets-container">
                {data &&
                    data.map((ticketData, index) =>
                        ticketCompType(ticketData, index)
                    )}
            </div>
        </>
    );
};

export default Tickets;
