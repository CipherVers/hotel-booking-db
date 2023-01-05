export default {
    name: 'client',
    title: 'Client',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'avatar',
        title: 'Avatar',
        type: 'image',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'phoneNumber',
        title: 'Phone Number',
        type: 'string',
      },
      {
        name: 'bookings',
        title: 'Bookings',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'hotelBooking' }] }],
      },
      {
        name: 'socialAuth',
        title: 'Social Auth',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'provider',
                title: 'Provider',
                type: 'string',
              },
              {
                name: 'social_uid',
                title: 'Social Uid',
                type: 'string',
              },
              {
                name: 'username',
                title: 'Username',
                type: 'string',
              },
              {
                name: 'avatarSrc',
                title: 'Avatar Src',
                type: 'string',
              },
              {
                name: 'token',
                title: 'Token',
                type: 'string',
              },
              {
                name: 'expiration',
                title: 'Expiration',
                type: 'date',
              },
            ],
          },
        ],
      },
      {
        name: 'password',
        title: 'Password',
        type: 'string',
      },
    ],
  }
  