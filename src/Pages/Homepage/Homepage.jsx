   import style from './Homepage.module.css';
   import LocationOnIcon from '@mui/icons-material/LocationOn';
   export const Homepage = () => {
     return (
       <>
            <div className={style.homepage}>
                <input className={style.searchBox}>
                  
                {/* <div className={style.searchLocation}>
                <div className={style.searchIcon}><LocationOnIcon style={{"height":"100%","width":"100%"}}></LocationOnIcon></div>
                <div className={style.searchLocationText}>Search Location</div>
                </div> */}
                </input>
               
            </div> 
       </>
     )
   }
   
   