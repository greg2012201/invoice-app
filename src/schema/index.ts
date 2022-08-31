import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';
import contractor from 'schema/contractor';
import user from 'schema/user';

const linkSchema: DocumentNode = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;
const schema: DocumentNode[] = [linkSchema, contractor, user];
export default schema;
