const communityFragment = `
  fragment CommunityFragment on Community {
    id
    name
    description
    ownerId
    moderatorId
    createdAt
    updatedAt
    stories {
      storyId
    }
    members {
      memberId
    }
    bannedMembers {
      memberId
    }
    privacy
  }
`

module.exports = { communityFragment }