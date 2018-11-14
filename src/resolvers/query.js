const { verifyToken } = require('../utils')
const { communityFragment } = require('../fragments/communityFragment')

communityById = (_, args, context, info) => {
  const payload = verifyToken(context)
  return context.prisma.community({ id: args.id })
    .$fragment(communityFragment)
}

communityByName = (_, args, context, info) => {
  const payload = verifyToken(context)
  return context.prisma.communities({ where: { name: args.name } })
    .$fragment(communityFragment)
}

communities = (_, args, context, info) => {
  //const payload = verifyToken(context)
  return context.prisma.communities()
    .$fragment(communityFragment)
}

membersCommunities = (_, args, context, info) => {
  const payload = verifyToken(context)
  return context.prisma.communities({ where: { id_in: args.communitiesIds }})
    .$fragment(communityFragment)
}

module.exports = {
  communityById,
  communityByName,
  communities,
  membersCommunities
}