export interface WpPost {
    id: number
    slug: string
    title: {
        rendered: string
    }
    excerpt: {
        rendered: string
        protected: boolean
    }
}

const getLastArticles = async (): Promise<WpPost[]> => {
    const response = await fetch('https://code.patriotovsky.ru/wp-json/wp/v2/posts?_fields=id,title,slug,excerpt&per_page=5');

    // @ts-ignore
    return await response.json();
}

export default { getLastArticles };
