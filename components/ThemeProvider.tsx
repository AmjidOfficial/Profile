"use client";
import {createContext,useContext,useEffect,useMemo,useState} from "react";
type Theme="neumorphic"|"light"|"dark"|"cinematic";
type Profile="gravity"|"editorial"|"cinematic";
type Ctx={theme:Theme;profile:Profile;setTheme:(x:Theme)=>void;setProfile:(x:Profile)=>void};
const ThemeContext=createContext<Ctx|null>(null);
export function ThemeProvider({children}:{children:React.ReactNode}){
  const [theme,setThemeState]=useState<Theme>("neumorphic");
  const [profile,setProfileState]=useState<Profile>("gravity");
  useEffect(()=>{
    const t=localStorage.getItem("amjid-theme") as Theme|null;
    const p=localStorage.getItem("amjid-profile") as Profile|null;
    if(t) setThemeState(["neumorphic","light","dark","cinematic"].includes(t)?t:"neumorphic");
    if(p) setProfileState(["gravity","editorial","cinematic"].includes(p)?p:"gravity");
  },[]);
  useEffect(()=>{document.documentElement.dataset.theme=theme;document.documentElement.dataset.profile=profile;localStorage.setItem("amjid-theme",theme);localStorage.setItem("amjid-profile",profile)},[theme,profile]);
  const value=useMemo(()=>({theme,profile,setTheme:setThemeState,setProfile:setProfileState}),[theme,profile]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
export const useTheme=()=>{const c=useContext(ThemeContext);if(!c)throw new Error("useTheme must be used inside ThemeProvider");return c};