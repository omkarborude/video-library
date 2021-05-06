

export const data = [
    // Tech
    {
        id: 1,
        name: "Startup or Service Companies?",
        channelLink: "https://www.youtube.com/channel/UCNFmBuclxQPe57orKiQbyfA",
        channelName: "Tanay Pratap",
        date: "Mar 28, 2021",
        url: "https://www.youtube.com/embed/Zp8a0IskmkE",
        thumbnail: "http://i3.ytimg.com/vi/Zp8a0IskmkE/maxresdefault.jpg",
        category: "tech",
        views : 240000
    },
    {
        id: 2,
        name: "How to Become a Web Developer!",
        channelLink: "https://www.youtube.com/channel/UCNFmBuclxQPe57orKiQbyfA",
        channelName: "Tanay Pratap",
        date: "Nov 6, 2020",
        url: "https://www.youtube.com/embed/UPIwstHZJpw",
        thumbnail:'http://i3.ytimg.com/vi/UPIwstHZJpw/maxresdefault.jpg',
        category: "tech",
        views : 1200000
    },
    {
        id: 3,
        name: "Asynchronous JavaScript & EVENT LOOP from scratch 🔥 ",
        channelLink: "https://www.youtube.com/c/akshaymarch7/featured",
        channelName: "Akshay Saini",
        date: "Dec 27, 2020",
        url: "https://www.youtube.com/embed/8zKuNo4ay8E",
        thumbnail:"http://i3.ytimg.com/vi/8zKuNo4ay8E/maxresdefault.jpg",
        category: "tech",
        views : 32200
    },
    {
        id: 4,
        name: "Currying in Javascript | JS Interview Questions",
        channelLink: "https://www.youtube.com/c/akshaymarch7/featured",
        channelName: "Akshay Saini",
        date: "Feb 6, 2019",
        url: "https://youtu.be/vQcCNpuaJO8",
        thumbnail:"http://i3.ytimg.com/vi/vQcCNpuaJO8/maxresdefault.jpg",
        category: "tech",
        views : 560000
    },
    {
        id: 5,
        name: "useRef hook in reactjs ||",
        channelLink: "https://www.youtube.com/c/HiteshChoudharydotcom/featured",
        channelName: "Hitesh Choudhary",
        date: "Mar 29, 2021",
        url: "https://www.youtube.com/embed/yviJikU4gwk",
        thumbnail:"http://i3.ytimg.com/vi/yviJikU4gwk/maxresdefault.jpg",
        category: "tech",
        views : 85000
    },
    {
        id: 6,
        name: "Income Share agreement | reality for students",
        channelLink: "https://www.youtube.com/c/HiteshChoudharydotcom/featured",
        channelName: "Hitesh Choudhary",
        date: "Apr 3, 2021",
        url: "https://www.youtube.com/embed/pvPA9sX7-Oc",
        thumbnail:'http://i3.ytimg.com/vi/pvPA9sX7-Oc/maxresdefault.jpg',
        category: "tech",
        views : 42200
    },

    // Meditation

    {
        id: 7,
        name: "Hinduism Explained !!",
        channelLink: "https://www.youtube.com/c/KrishnaWestinGermany/featured",
        channelName: "Krishna West Germany",
        date: "Now 30, 2019",
        url: "https://www.youtube.com/embed/IlBytzpLiu4",
        thumbnail:"http://i3.ytimg.com/vi/IlBytzpLiu4/maxresdefault.jpg",
        category: "meditation",
        views : 2400000
    },
    {
        id: 8,
        name: "DANDAPANI : How To Control Your Mind",
        channelLink: "https://www.youtube.com/c/BeInspiredChannel/featured",
        channelName: "Be Inspired",
        date: "Aug 7, 2018",
        url: "https://www.youtube.com/embed/WYfYmYbp7C4",
        thumbnail:"http://img.youtube.com/vi/WYfYmYbp7C4/mqdefault.jpg",
        category: "meditation",
        views : 1600000
    },
    {
        id: 9,
        name: "You Won't Wate Time After watching This !!",
        channelLink: "https://www.youtube.com/channel/UCy48CHOjMNRFoEQqYN1GbBQ/featured",
        channelName: "Bhagavad Gita",
        date: "Mar 7, 2021",
        url: "https://www.youtube.com/embed/170wVs41DiI",
        thumbnail:"http://i3.ytimg.com/vi/170wVs41DiI/maxresdefault.jpg",
        category: "meditation",
        views : 6200000
    },
    {
        id: 10,
        name: "Focus on You Everyday !!",
        channelLink: "https://www.youtube.com/channel/UCy48CHOjMNRFoEQqYN1GbBQ/featured",
        channelName: "Bhagavad Gita",
        date: "Jan 17, 2021",
        url: "https://www.youtube.com/embed/TVmUrgiq9sA",
        thumbnail:"http://i3.ytimg.com/vi/TVmUrgiq9sA/maxresdefault.jpg",
        category: "meditation",
        views : 3500000
    },
    
]

// export const likedVideos = []
// export const watchLater = []
// export const playlists = []

// export const reducer = (state, action) => {
//     switch (action.TYPE) {
//         case "likeVideo":
//             if (state.likedVideos.includes(action.PAYLOAD)) {
//                 return { ...state, likedVideos: state.likedVideos.filter(video => video !== action.PAYLOAD) }
//             } else return { ...state, likedVideos: [...state.likedVideos, action.PAYLOAD] }
//         case "watchLater":
//             if (state.watchLater.includes(action.PAYLOAD)) {
//                 return { ...state, watchLater: state.watchLater.filter(video => video !== action.PAYLOAD) }
//             } else return { ...state, watchLater: [...state.watchLater, action.PAYLOAD] }
//         case "addToPlaylist":
//             return {
//                 ...state,
//                 playlists: state.playlists.map(playlist =>
//                     playlist.id === action.PLAYLIST.id ?
//                         { ...playlist, videos: [...playlist.videos, action.PAYLOAD] } :
//                         playlist
//                 )
//             }
//         case "addNewPlaylist":
//             return { ...state, playlists: [...state.playlists, { id: state.playlists.length + 1, name: action.PAYLOAD, videos: [] }] }
//         default:
//         // do nothing
//     }
//     return state
// }