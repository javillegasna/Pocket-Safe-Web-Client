import { StyledOptions } from "@emotion/styled"
interface IStyleOverrides{
  styleOverrides: any
  defaultProps?: {[index: string]:boolean|string}
}
interface IOverrideThemeProps{
  elementKey:string,
  defaultProps?:{[index: string]:boolean|string}
}
export function OverrideTheme({elementKey, defaultProps={}}:IOverrideThemeProps){
  return function (styleOverrides:any={}){
    const styledElement: {[index: string]:IStyleOverrides} = {}
    styledElement['Mui'+elementKey] = {
      defaultProps,
      styleOverrides
    }
    return styledElement
  }

}