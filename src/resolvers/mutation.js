const { verifyToken } = require('../utils')
const { communityFragment } = require('../fragments/communityFragment')

createCommunity = (_, args, context, info) => {
  const payload = verifyToken(context)
  return context.prisma.createCommunity({
    name: args.name,
    description: args.description,
    privacy: args.privacy
  }).$fragment(communityFragment)
}

updateCommunity = (_, args, context, info) => {
  const payload = verifyToken(context)
  return context.prisma.updateCommunity({
    where: {
      id: args.id
    },
    data: {
      name: args.name,
      description: args.description,
      privacy: args.privacy
    }
  }).$fragment(communityFragment)
}

deleteCommunity = (_, args, context, info) => {
  const payload = verifyToken(context)
  return context.prisma.deleteCommunity({ id: args.id })
    .$fragment(communityFragment)
}

addStoryToCommunity = (_, args, context, info) => {
  const payload = verifyToken(context)
  return context.prisma.updateCommunity({
    where: {
      id: args.id
    },
    data: {
      stories: {
        create: [{
          storyId: args.storyId
        }]
      }
    }
  }).$fragment(communityFragment)
}

removeStoryFromCommunity = (_, args, context, info) => {
    const payload = verifyToken(context)
    return context.prisma.updateCommunity({
      where: {
          id: args.id
      },
      data: {
        stories: {
          disconnect: [{
            storyId: args.storyId
          }]
        }
      }
    }).$fragment(communityFragment)
}

addMemberToCommunity = (_, args, context, info) => {
    const payload = verifyToken(context)
    return context.prisma.updateCommunity({
      where: {
        id: args.id
      },
      data: {
        members: {
          create: [{
            memberId: args.profileId
          }]
        }
      }
    }).$fragment(communityFragment)
}

inviteMemberToCommunity = (_, args, context, info) => {
    const payload = verifyToken(context)

    // *head scratch*
}

module.exports = {
    createCommunity,
    updateCommunity,
    deleteCommunity,
    addStoryToCommunity,
    removeStoryFromCommunity,
    addMemberToCommunity,
    inviteMemberToCommunity,
}