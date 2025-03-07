import * as React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Workgrid() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const cols = isMobile ? 4 : isTablet ? 6 : 11;
  const rowHeight = isMobile ? 120 : isTablet ? 100 : 100;

  const visibleItems = isMobile
    ? itemData.slice(0, 4)
    : isTablet
    ? itemData.slice(0, 6)
    : itemData;

  return (
    <ImageList
      sx={{
        width: "100%",
        margin: "auto",
        height: isMobile ? "500px" : isTablet ? "540px" : "315px",
        overflow: isMobile || isTablet ? "visible" : "hidden",
      }}
      variant="quilted"
      cols={cols}
      rowHeight={rowHeight}
      style={{ backgroundColor: "black", gap: "7px" }}
    >
      {visibleItems.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            border: "solid 0.5px white",
          }}
        >
          <img
            {...srcset(item.img, rowHeight, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "1",
    cols: 2,
    rows: 3,
  },
  {
    img: "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "2",
    cols: 2,
    rows: 3,
  },
  {
    img: "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "3",
    cols: 2,
    rows: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "4",
    cols: 2,
    rows: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "5",
    cols: 3,
    rows: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "6",
    cols: 3,
    rows: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "7",
    cols: 1,
    rows: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "8",
    cols: 3,
    rows: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "9",
    cols: 1,
    rows: 1,
  },
];
