// Author: Austin Howlett
// Description: Responsible for resolving all mutation (in realtion to REST this would be POST,PUT,PATCH,DELETE) schema endpoints (business logic)

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

setStoryToCommunity = async (_, args, context, info) => {
  const payload = verifyToken(context)
  const community = await context.prisma.community({ id: args.id })
  const updatedList = community.storyIds
  updatedList.push(args.storyId)
  return await context.prisma.updateCommunity({
    where: {
      id: args.id
    },
    data: {
      storyIds: {
        set: updatedList
      }
    }
  }).$fragment(communityFragment)
}

setStoryToCommunityByName = async (_, args, context, info) => {
  const payload = verifyToken(context)
  const community = await context.prisma.community({ id: args.id })
  const updatedList = community.storyIds
  updatedList.push(args.storyId)
  return await context.prisma.updateCommunity({
    where: {
      name: args.name
    },
    data: {
      storyIds: {
        set: updatedList
      }
    }
  }).$fragment(communityFragment)
}

deleteStoryFromCommunity = async (_, args, context, info) => {
  const payload = verifyToken(context)
  const community = await context.prisma.community({ id: args.id })
  let updatedList = community.storyIds
  updatedList = updatedList.filter(member => member !== args.storyId)
  return await context.prisma.updateCommunity({
    where: {
        id: args.id
    },
    data: {
      storyIds: {
        set: updatedList
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

removeMemberFromCommunity = async (_, args, context, info) => {
  const payload = verifyToken(context)
  const community = await context.prisma.community({ id: args.id })
  let updatedList = community.membersIds
  updatedList = updatedList.filter(member => member !== args.profileId)
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

// TODO: Needs implementation
inviteMemberToCommunity = (_, args, context, info) => {
    const payload = verifyToken(context)
}

module.exports = {
    createCommunity,
    updateCommunity,
    deleteCommunity,
    setStoryToCommunity,
    setStoryToCommunityByName,
    deleteStoryFromCommunity,
    setMemberToCommunity,
    removeMemberFromCommunity,
    inviteMemberToCommunity,
}