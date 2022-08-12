export default async function getUser(prisma) {
  let error = null

  try {
    const userData = await prisma.user.findMany()

    return {
      userData: {
        data: userData,
        error
      }
    }
  } catch (err) {
    console.error(err)
    error = err

    return {
      userData: {
        data: null,
        error
      }
    }
  }
}
