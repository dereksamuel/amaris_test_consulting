export default async function getCarrousel(prisma) {
  let error = null

  try {
    const carrouselData = await prisma.carrousel.findMany()

    return {
      carrousel: {
        data: carrouselData,
        error
      }
    }
  } catch (err) {
    console.error(err)
    error = err

    return {
      carrousel: {
        data: null,
        error
      }
    }
  }
}
