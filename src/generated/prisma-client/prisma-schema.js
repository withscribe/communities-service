module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCommunity {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Community {
  id: ID!
  ownerId: ID
  moderatorId: ID
  name: String!
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!
  membersIds: [ID!]!
  bannedMembersIds: [ID!]!
  privacy: Privacy
}

type CommunityConnection {
  pageInfo: PageInfo!
  edges: [CommunityEdge]!
  aggregate: AggregateCommunity!
}

input CommunityCreatebannedMembersIdsInput {
  set: [ID!]
}

input CommunityCreateInput {
  ownerId: ID
  moderatorId: ID
  name: String!
  description: String
  membersIds: CommunityCreatemembersIdsInput
  bannedMembersIds: CommunityCreatebannedMembersIdsInput
  privacy: Privacy
}

input CommunityCreatemembersIdsInput {
  set: [ID!]
}

type CommunityEdge {
  node: Community!
  cursor: String!
}

enum CommunityOrderByInput {
  id_ASC
  id_DESC
  ownerId_ASC
  ownerId_DESC
  moderatorId_ASC
  moderatorId_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  privacy_ASC
  privacy_DESC
}

type CommunityPreviousValues {
  id: ID!
  ownerId: ID
  moderatorId: ID
  name: String!
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!
  membersIds: [ID!]!
  bannedMembersIds: [ID!]!
  privacy: Privacy
}

type CommunitySubscriptionPayload {
  mutation: MutationType!
  node: Community
  updatedFields: [String!]
  previousValues: CommunityPreviousValues
}

input CommunitySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommunityWhereInput
  AND: [CommunitySubscriptionWhereInput!]
  OR: [CommunitySubscriptionWhereInput!]
  NOT: [CommunitySubscriptionWhereInput!]
}

input CommunityUpdatebannedMembersIdsInput {
  set: [ID!]
}

input CommunityUpdateInput {
  ownerId: ID
  moderatorId: ID
  name: String
  description: String
  membersIds: CommunityUpdatemembersIdsInput
  bannedMembersIds: CommunityUpdatebannedMembersIdsInput
  privacy: Privacy
}

input CommunityUpdatemembersIdsInput {
  set: [ID!]
}

input CommunityWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  ownerId: ID
  ownerId_not: ID
  ownerId_in: [ID!]
  ownerId_not_in: [ID!]
  ownerId_lt: ID
  ownerId_lte: ID
  ownerId_gt: ID
  ownerId_gte: ID
  ownerId_contains: ID
  ownerId_not_contains: ID
  ownerId_starts_with: ID
  ownerId_not_starts_with: ID
  ownerId_ends_with: ID
  ownerId_not_ends_with: ID
  moderatorId: ID
  moderatorId_not: ID
  moderatorId_in: [ID!]
  moderatorId_not_in: [ID!]
  moderatorId_lt: ID
  moderatorId_lte: ID
  moderatorId_gt: ID
  moderatorId_gte: ID
  moderatorId_contains: ID
  moderatorId_not_contains: ID
  moderatorId_starts_with: ID
  moderatorId_not_starts_with: ID
  moderatorId_ends_with: ID
  moderatorId_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  privacy: Privacy
  privacy_not: Privacy
  privacy_in: [Privacy!]
  privacy_not_in: [Privacy!]
  AND: [CommunityWhereInput!]
  OR: [CommunityWhereInput!]
  NOT: [CommunityWhereInput!]
}

input CommunityWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createCommunity(data: CommunityCreateInput!): Community!
  updateCommunity(data: CommunityUpdateInput!, where: CommunityWhereUniqueInput!): Community
  updateManyCommunities(data: CommunityUpdateInput!, where: CommunityWhereInput): BatchPayload!
  upsertCommunity(where: CommunityWhereUniqueInput!, create: CommunityCreateInput!, update: CommunityUpdateInput!): Community!
  deleteCommunity(where: CommunityWhereUniqueInput!): Community
  deleteManyCommunities(where: CommunityWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

enum Privacy {
  PUBLIC
  PRIVATE
  INVITE_ONLY
}

type Query {
  community(where: CommunityWhereUniqueInput!): Community
  communities(where: CommunityWhereInput, orderBy: CommunityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Community]!
  communitiesConnection(where: CommunityWhereInput, orderBy: CommunityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommunityConnection!
  node(id: ID!): Node
}

type Subscription {
  community(where: CommunitySubscriptionWhereInput): CommunitySubscriptionPayload
}
`
      }
    