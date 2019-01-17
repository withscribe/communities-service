//const { verifyToken } = require('../utils')
const { communityFragment } = require('../fragments/communityFragment')

// TODO: Review permissions for these... for now full access
communityById = (_, args, context, info) => {
  //const payload = verifyToken(context)
  return context.prisma.community({ id: args.id })
    .$fragment(communityFragment)
}

communityByName = (_, args, context, info) => {
  //const payload = verifyToken(context)
  return context.prisma.communities({ where: { name: args.name } })
    .$fragment(communityFragment)
}

communities = (_, args, context, info) => {
  //const payload = verifyToken(context)
  return context.prisma.communities({
    where: {
      first: args.first,
      last: args.last,
      before: args.before,
      after: args.after,
      skip: args.skip
    }
  }).$fragment(communityFragment)
}

membersCommunities = (_, args, context, info) => {
  //const payload = verifyToken(context)
  return context.prisma.communities({
    where: {
      id_in: args.communitiesIds,
      first: args.first,
      last: args.last,
      before: args.before,
      after: args.after,
      skip: args.skip
    }
  }).$fragment(communityFragment)
}

module.exports = {
  communityById,
  communityByName,
  communities,
  membersCommunities
}