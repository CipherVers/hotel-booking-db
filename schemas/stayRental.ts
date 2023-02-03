
export default {
    name: 'listingStayDetail',
    title: 'Listing Stay Detail',
    type: 'document',
    fields: [
      {
        name: 'id',
        type: 'string',
      },
      {
        name: 'authorId',
        title: 'Author ID',
        type: 'number',
      },
      {
        name: 'date',
        title: 'Date',
        type: 'date',
      },
      {
        name: 'href',
        title: 'Href',
        type: 'string',
      },
      {
        name: 'listingCategoryId',
        title: 'Listing Category ID',
        type: 'number',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'featuredImage',
        title: 'Featured Image',
        type: 'image',
      },
      {
        name: 'galleryImgs',
        title: 'Gallery Images',
        type: 'array',
        of: [
          {
            type: 'image',
          },
        ],
      },
      {
        name: 'commentCount',
        title: 'Comment Count',
        type: 'number',
      },
      {
        name: 'viewCount',
        title: 'View Count',
        type: 'number',
      },
      {
        name: 'like',
        title: 'Like',
        type: 'boolean',
      },
      {
        name: 'address',
        title: 'Address',
        type: 'string',
      },
      {
        name: 'reviewStart',
        title: 'Review Stars',
        type: 'number',
      },
      {
        name: 'reviewCount',
        title: 'Review Count',
        type: 'number',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'string',
      },
      {
        name: 'maxGuests',
        title: 'Max Guests',
        type: 'number',
      },
      {
        name: 'bedrooms',
        title: 'Bedrooms',
        type: 'number',
      },
      {
        name: 'bathrooms',
        title: 'Bathrooms',
        type: 'number',
      },
      {
        name: 'saleOff',
        title: 'Sale Off',
        type: 'number',
      },
      {
        name: 'isAds',
        title: 'Is Ads',
        type: 'boolean',
      },
      {
        name: 'map',
        title: 'Map',
        type: 'object',
        fields: [
          {
            name: 'lat',
            type: 'number',
          },
          {
            name: 'lng',
            type: 'number',
          },
        ],
      },
    ],
  };