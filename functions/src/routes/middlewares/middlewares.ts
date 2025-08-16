export const validateHeader = async (_, next: any) => {
    console.log('Middleware')
    await next()
}
