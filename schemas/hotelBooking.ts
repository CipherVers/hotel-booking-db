export default {
    name: 'hotelBooking',
    title: 'Hotel Booking',
    type: 'document',
    fields: [
      {
        name: 'hotelId',
        title: 'Hotel ID',
        type: 'string',
      },
      {
        name: 'roomType',
        title: 'Room Type',
        type: 'string',
      },
      {
        name: 'checkInDate',
        title: 'Check-in Date',
        type: 'date',
      },
      {
        name: 'checkOutDate',
        title: 'Check-out Date',
        type: 'date',
      },
      {
        name: 'numberOfGuests',
        title: 'Number of Guests',
        type: 'number',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'currency',
        title: 'Currency',
        type: 'string',
      },
    ],
  }
  