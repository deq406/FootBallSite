import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      imgSrc:
        "https://banner2.cleanpng.com/20190223/bqv/kisspng-fc-barcelona-logo-vector-graphics-football-image-5c71e478167a69.5648857315509679280921.jpg",
      headerText: "dsa",
      Text: "abv",
      FullText: "gdezc",
    },
    {
      imgSrc:
        "https://banner2.cleanpng.com/20190223/bqv/kisspng-fc-barcelona-logo-vector-graphics-football-image-5c71e478167a69.5648857315509679280921.jpg",
      headerText: "dsa2",
      Text: "abv",
      FullText: "gdezc",
    },
  ],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

export const postReducer = postSlice.reducer;
