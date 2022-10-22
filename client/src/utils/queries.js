import { gql } from '@apollo/client';

export const QUERY_ME = gql`
# query me produced errors { seemed to resolve the issue
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        title
        description
        image
        link
      }
    }
  }
`;