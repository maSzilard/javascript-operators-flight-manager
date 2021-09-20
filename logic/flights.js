function Flights() {
    function calculateNumberOfFlights(passengers, capacity) {
        return Math.ceil((passengers / capacity)) ;
    }
    
    return {calculateNumberOfFlights};
}

module.exports = Flights();