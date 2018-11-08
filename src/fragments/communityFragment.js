const communityFragment = `
  fragment CommunityFragment on Community {
    id
    name
    description
    ownerId
    moderatorId
    createdAt
    updatedAt
    membersIds
    bannedMembersIds
    privacy
  }
`

module.exports = { communityFragment }