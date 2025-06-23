// server/api/upscale.post.ts
export default defineEventHandler(async () => {
    // Simulate a delay and return a sample image
    await new Promise((r) => setTimeout(r, 1500))
    return { url: '/images/tools/dog-before.png' }
  })
  