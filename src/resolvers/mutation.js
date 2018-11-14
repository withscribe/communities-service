const { verifyToken } = require('../utils')
const { communityFragment } = require('../fragments/communityFragment')

createCommunity = async (_, args, context, info) => {
  //const payload = verifyToken(context)
  return await context.prisma.createCommunity({
    ownerId: args.ownerId,
    name: args.name,
    description: args.description,
    privacy: args.privacy
  }).$fragment(communityFragment)
}

updateCommunity = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.updateCommunity({
    where: {
      id: args.id
    },
    data: {
      name: args.name,
      description: args.description,
      moderatorId: args.moderatorId,
      privacy: args.privacy
    }
  }).$fragment(communityFragment)
}

deleteCommunity = async (_, args, context, info) => {
  //const payload = verifyToken(context)
  return await context.prisma.deleteCommunity({ id: args.id })
    .$fragment(communityFragment)
}

addStoryToCommunity = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.updateCommunity({
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

removeStoryFromCommunity = async (_, args, context, info) => {
  const payload = verifyToken(context)
  return await context.prisma.updateCommunity({
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

setMemberToCommunity = async (_, args, context, info) => {
  const payload = verifyToken(context)
  const community = await context.prisma.community({ id: args.id })
  const updatedList = community.membersIds
  updatedList.push(args.profileId)

  return await context.prisma.updateCommunity({
    where: {
      id: args.id
    },
    data: {
      membersIds: {
        set: updatedList
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
    setMemberToCommunity,
    inviteMemberToCommunity,
}