import style from "./Homepage.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
export const Homepage = () => {
  return (
    <>
      <div className={style.homepage}>
        <div className={style.searchDiv}>
          <div className={style.locationIcon}>
            {" "}
            <LocationOnIcon
              style={{ width: "100%", height: "100%" }}
            ></LocationOnIcon>
          </div>
          <input className={style.searchInput}></input>
          <div className={style.searchIcon}>
            <SearchIcon
              style={{
                position: "absolute",
                top: "4%",
                width: "100%",
                height: "100%",
              }}
            ></SearchIcon>
          </div>
        </div>
      </div>
    </>
  );
};
