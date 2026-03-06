import { youtube } from "@googleapis/youtube";


const YouTubeAPIClient = youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY,
})

export const APIYouTube = {
    course: {
        getAll: async () => {
            const { data } = await YouTubeAPIClient.playlists.list({
                maxResults: 50,
                part: ['snippet'],
                channelId: 'UCtJ3j1ANBe91ZHXzw6FJveg'
            })

            const courses = (data.items || []).map(item => ({
                id: item.id || '',
                title: item.snippet?.title || '',
                description: item.snippet?.description || '',
                image: item.snippet?.thumbnails?.medium?.url || '',
            }));

            return courses.filter(course => course.description.includes('#CORDARSE'))
        }
    }
}