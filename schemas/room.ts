export default {
    name: 'room',
    title: 'Room',
    type: 'document',
    fields: [
      {
        name: 'type',
        title: 'Type',
        type: 'string',
      },
      {
        name: 'hotel',
        title: 'Hotel',
        type: 'reference',
        to: [{ type: 'hotel' }],
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'capacity',
        title: 'Capacity',
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
      {
        name: 'amenities',
        title: 'Amenities',
        type: 'array',
        of: [{ type: 'string' }],
      },{
        name: 'availability',
        title: 'Availability',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'isbooked',
                title: 'Is Booked',
                type: 'boolean',
                options: {
                    default: true,
                  },
              },
              {
                name: 'startDate',
                title: 'Start Date',
                type: 'date',
              },
              {
                name: 'endDate',
                title: 'End Date',
                type: 'date',
              },
            ],
          },
        ],
      },

    ],
  }
  