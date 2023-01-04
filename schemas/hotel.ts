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
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
      },
      {
        name: 'isfull',
        title: 'Is Full',
        type: 'boolean',
      },
      {
        name: 'address',
        title: 'Address',
        type: 'string',
      },
      {
        name: 'gpsCoordinates',
        title: 'GPS Coordinates',
        type: 'object',
        fields: [
          {
            name: 'latitude',
            title: 'Latitude',
            type: 'number',
          },
          {
            name: 'longitude',
            title: 'Longitude',
            type: 'number',
          },
        ],
      },
      {
        name: 'specialIndications',
        title: 'Special Indications',
        type: 'text',
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
      {
        name: 'specialConditions',
        title: 'Special Conditions',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Name',
                type: 'string',
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text',
              },
            ],
          },
        ],
      },
      
    ],
  }
  