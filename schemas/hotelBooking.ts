export default {
    name: 'hotelBooking',
    title: 'Hotel Booking',
    type: 'document',
    fields: [
      {
        name: 'bookingId',
        title: 'Booking ID',
        type: 'string',
      },
      {
        name: 'client',
        title: 'Client',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'client' }] 
          }]
      },
      {
        name: 'hotel',
        title: 'Hotel',
        type: 'reference', to: [{ type: 'hotel' }] 
      },
      {
        name: 'Room',
        title: 'Room',
        type: 'reference', to: [{ type: 'room' }] 
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
  