import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  // to create object
  // const user = await prisma.user.create({
  //   data:{
  //     name:'yajuvendra',
  //     email:'yajuvendra.rathor@teachedison.com',
  //   }
  // })
  // console.log('user', user)

  // to fetch all the objects
  // const users = await prisma.user.findMany()
  // console.log('users', users)


//  to create object with the related object
//   const user = await prisma.user.create({
//     data: {
//       name: 'Bob',
//       email: 'bob@prisma.io',
//       posts: {
//         create: {
//           title: 'Hello World',
//         },
//       },
//     },
//   })
//   console.log(user)

// to fetch objects with related objects
const usersWithPosts = await prisma.user.findMany({
  include: {
    posts: true,
  },
})
console.dir(usersWithPosts, { depth: null })
}



main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })