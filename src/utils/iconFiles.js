
export const iconFiles = (name) => {
   const ex = name.split(".")[1]
   return  ex === "pdf" || ex === "html" || ex === "htm" || ex === "exe";
}