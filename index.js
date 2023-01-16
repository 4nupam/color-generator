const getcolor = () =>
{
    const randomNumber = Math.floor(Math.random() * 16777215); 
    /* multipying this number because we want a hexa decimal number*/
    const randomCode = "#" + randomNumber.toString(16);

    /* sirf normal tostring likhenge to normal string dega, but 16 likhne se hexadecimal dega */
 
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
    navigator.clipboard.writeText(randomCode);// clipboard p copy krwane k lie
}
//event call
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)
//initial call
getcolor(); // page reload hone se phle k lie
