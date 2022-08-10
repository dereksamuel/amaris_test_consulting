export default async function useGetCarrousel(prisma) {
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
