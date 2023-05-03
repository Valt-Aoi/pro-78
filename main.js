var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","dad.png", "mom.jpeg" , "son.png"];
var names = ["Family Book","Dad", "Mom", "Me and Bro"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images;
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names ;
 
    document.getElementById(images).src = updatedImage;
    document.getElementById(names).innerHTML = updatedName;
}
