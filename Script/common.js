﻿function getDataFromDb(queryString,fieldNames){

    Delay(2000);
        var Qry1;
        var results=[];

//         Create a query
        Qry1 = ADO.CreateADOQuery();

//         Specify the connection string
 


  Qry1.ConnectionString = "Provider=SQLOLEDB.1;Server=DESKTOP-IJJ0T75\\SQLEXPRESS;" +

                        "Database=ebookshop;Uid=alina; Pwd=123;"

   
//         Specify the SQL expression

            Qry1.SQL = queryString;           

//         Execute the query

        Qry1.Open();
//         Process results and insert data into the test log

        Qry1.First();

        while (!Qry1.EOF) {

          for(i=0;i<fieldNames.length;i++)

        results.push(Qry1.FieldByName(fieldNames[i]).Value)

        Qry1.Next();

        }

//         Closes the query

        Qry1.Close();
        return results; 

}

 

module.exports.getDataFromDb=getDataFromDb