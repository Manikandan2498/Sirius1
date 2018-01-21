console.log("jquery added");
$.ajax({
  type:"GET",
  url:"/movies/all",
  dataType:"json",
  success:function(response){

    //console.log("Data from serveer",response);
    var data=formObject(response);
    constructDOM(data);
  },

error:function(err)
{
  console.log("error in GET method",er);
}

});


function formObject(resp)
{
  var flags=[],categoryobject=[];
  var length=resp.length;
  for(i=0;i<length;i++)
  {
    var movie=resp[i];
  //  console.log("movie" ,movie);
    //console.log("Language",movie.language);
    var index=flags.indexOf(movie.language);
    if(index>=0)
    {
      categoryobject[index].movies.push(movie);
      continue;
    }
    else{
      flags.push(movie.language);
    }
  /*  if(flags.indexOf(movie.language)==-1){
    flags.push(movie.language);}*/
    var objectSchma={
      "category":movie.language,
      "movies":[]
    }
    objectSchema.movies.push(movie);
    categoryobject.push(objectSchema);

  //  console.log(flags);
    //console.log("ObjcetSchema",objectSchema);

  }
  console.log("categoyobject",categoryobject);
  return categoryobject;
//  console.log("formobject response",resp);
}

function constuctDOM(data)
{
  var categoryContent=[];
  for(i=0;i<data.length;i++)
  {
    var objectSchema=data[i];
    console.log("ConstructDom",objectSchema);
    var categoryTitle=$('<h3 class="categoryName">'+objectSchema.category+'</h3>');
    categoryContent.push(categoryTitle);
    for(j=0;j<objectScehma.movies.length;j++)
    {
      console.log(objectSchema.movies[j].name);
    }

  }
    $('section.content').html(categoryContent);
}
