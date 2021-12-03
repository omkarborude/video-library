import { dataReducer } from "./dataReducer";

describe("test playlist data reducer", () => {
  // 1
  test("should Set Playlist data from api", () => {
    const initialState = {
      videoList: [],
    };
    const action = {
      type: "SET_VIDEOLIST",
      payload: {
        playlistLData: [
          {
            _id: 1321,
            name: "name",
            author: "author",
          },
        ],
      },
    };
    const state = dataReducer(initialState, action);

    expect(state).toEqual({
      videoList: [
        {
          _id: 1321,
          name: "name",
          author: "author",
        },
      ],
    });
  });

  //   2
  test("should load like video from api", () => {
    const initialState = {
      userId: 123,
      videos: [11, 22, 33],
    };

    const action = {
      type: "LOAD_LIKED_VIDEOS",
      payload: {
        likeVideos: [
          {
            _id: 123,
            active: Boolean,
          },
        ],
      },
    };

    const state = dataReducer(initialState, action);

    expect(state).toEqual({
      userId: 123,
      videos: [
        {
          _id: 123,
          active: Boolean,
        },
      ],
    });
  });
});
