function readExcel(){
  var Driver = DDT.ExcelDriver("‪C:\\Users\\Admin\\Desktop\\Data.xls", "Sheet1");

while (!Driver.EOF())
{

  Driver.Next();
}

DDT.CloseDriver(Driver.Name);
}