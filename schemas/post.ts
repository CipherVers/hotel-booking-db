
export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
      {
        name: 'index',
        title: 'Index',
        type: 'number'
      },
      {
        name: 'id',
        title: 'ID',
        type: 'string'
      },
      {
        name: 'featuredImage',
        title: 'Featured Image',
        type: 'image'
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'desc',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'date',
        title: 'Date',
        type: 'date'
      },
      {
        name: 'href',
        title: 'Href',
        type: 'string'
      },
      {
        name: 'commentCount',
        title: 'Comment Count',
        type: 'number'
      },
      {
        name: 'viewdCount',
        title: 'Viewed Count',
        type: 'number'
      },
      {
        name: 'readingTime',
        title: 'Reading Time',
        type: 'number'
      },
      {
        name: 'bookmark',
        title: 'Bookmark',
        type: 'object',
        fields: [
          {
            name: 'count',
            title: 'Count',
            type: 'number'
          },
          {
            name: 'isBookmarked',
            title: 'Is Bookmarked',
            type: 'boolean'
          }
        ]
      },
      {
        name: 'like',
        title: 'Like',
        type: 'object',
        fields: [
          {
            name: 'count',
            title: 'Count',
            type: 'number'
          },
          {
            name: 'isLiked',
            title: 'Is Liked',
            type: 'boolean'
          }
        ]
      },
      {
        name: 'authorId',
        title: 'Author ID',
        type: 'number'
      },
      {
        name: 'categoriesId',
        title: 'Categories ID',
        type: 'array',
        of: [
          {
            type: 'number'
          }
        ]
      },
      {
        name: 'postType',
        title: 'Post Type',
        type: 'string'
      }
    ]
  }