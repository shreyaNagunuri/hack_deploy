const getTrip = async (req, res) => {
    const trip = [
        {
            destination: 'Paris',
            startDate: '2024-08-01',
            endDate: '',
            journalEntry: 'Had a wonderful time visiting the Eiffel Tower and the Louvre.'
        }
    ];

    res.status(200).json(trip);
}

const postTrip = async (req, res) => {
    const { trip } = req.body;
    const { destination, startDate, endDate, journalEntry } = trip;

    if (!destination || !startDate || !journalEntry) {
        return res.status(400).json({ error: 'Invalid request' });
    }

    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;

    if (end && start > end) {
        return res.status(400).json({ error: 'End date must be after start date' });
    } else {
        res.status(200).json({ trip });
    }
}

module.exports = { getTrip, postTrip };
