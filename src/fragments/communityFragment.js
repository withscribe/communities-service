// Author: Austin Howlett
// Description: Fragments ensure that, if requested, all of these fields will be returned

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