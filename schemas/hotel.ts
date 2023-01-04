export default {
    name: 'hotel',
    title: 'Hotel',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'amenities',
        title: 'Amenities',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
      },
      {
        name: 'rooms',
        title: 'Rooms',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'room' }] }],
      },
    ],
  }
  