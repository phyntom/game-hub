export function getOptimizedImage(imageURL: string) {
    if (!imageURL) {
        return ''
    }
    const target = 'media/'
    const indexTarget = imageURL?.indexOf('media/') + target.length
    return imageURL.slice(0, indexTarget) + 'crop/600/400/' + imageURL.slice(indexTarget)
}
