export const imgError = {
    inserted(el, { value} ) {
        // console.log(el.src==='',value);
        if (el.src === '') { 
            el.src=value
        }
     }
}