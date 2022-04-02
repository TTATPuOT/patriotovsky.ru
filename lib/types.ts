export interface WishlistItemData {
    id?: string
    name: string
    image: string
    price: number
    description?: string
    text: string
    links?: WishlistItemLinkData[]
}

export interface WishlistItemLinkData {
    name: string
    url: string
}
