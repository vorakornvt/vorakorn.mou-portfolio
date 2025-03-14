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
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          <img
            {...srcset(item.img, rowHeight, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            style={{
              opacity: "0.4",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "filter 0.5s ease-in-out, opacity 0.5s ease-in-out",
              filter: "grayscale(100%)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "grayscale(0%)";
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "grayscale(100%)";
              e.currentTarget.style.opacity = "0.4";
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "/src/assets/WorkGrid/1.3.png",
    title: "1",
    cols: 2,
    rows: 3,
  },
  {
    img: "/src/assets/WorkGrid/3.1.png",
    title: "2",
    cols: 2,
    rows: 3,
  },
  {
    img: "/src/assets/WorkGrid/1.3.png",
    title: "3",
    cols: 2,
    rows: 1,
  },
  {
    img: "/src/assets/WorkGrid/3.1.png",
    title: "4",
    cols: 2,
    rows: 1,
  },
  {
    img: "/src/assets/WorkGrid/4.2.png",
    title: "5",
    cols: 3,
    rows: 2,
  },
  {
    img: "/src/assets/WorkGrid/4.3.png",
    title: "6",
    cols: 3,
    rows: 2,
  },
  {
    img: "/src/assets/WorkGrid/2.2.png",
    cols: 1,
    rows: 1,
  },
  {
    img: "/src/assets/WorkGrid/4.3.png",
    title: "8",
    cols: 3,
    rows: 1,
  },
  {
    img: "/src/assets/WorkGrid/1.2.png",
    title: "9",
    cols: 1,
    rows: 1,
  },
];
