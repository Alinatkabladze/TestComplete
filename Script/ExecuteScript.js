var common=require("common")

  function printName(){

      let title=common.getDataFromDb("SELECT top 1 title FROM [ebookshop].[dbo].[books]",["title"]);

      Log.Message(title)

    }