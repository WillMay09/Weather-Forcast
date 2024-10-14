export const createElement = ({
    type,textContent,className,
    id,src,alt,


}) =>{
let attributes = {type};//element being created

if(textContent){

    attributes.textContent = textContent;
}
if (className){

    attributes.className = className;
}
if(id){

    attributes.id = id;
}
if( type ==="img"){

    attributes.src=src;
    attributes.alt = alt || "";

}

const element = Object.assign(document.createElement(type), attributes);
return element;


};