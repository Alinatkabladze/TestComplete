var RecNo;
  
// Posts data to the log (helper routine)
function ProcessData()
{
  var Fldr, i;
  
  Fldr = Log.CreateFolder("Record: " + aqConvert.VarToStr(RecNo));
  Log.PushLogFolder(Fldr);
  
  for(i = 0; i < DDT.CurrentDriver.ColumnCount; i++)
    Log.Message(DDT.CurrentDriver.ColumnName(i) + ": " + aqConvert.VarToStr(DDT.CurrentDriver.Value(i)));
  
  Log.PopLogFolder();
  RecNo = RecNo + 1;
}
  
// Creates the driver (main routine)
function TestDriver()
{
  var Driver;
  
  // Creates the driver
  // If you connect to an Excel 2007 sheet, use the following method call:
  // Driver = DDT.ExcelDriver("C:\\MyFile.xlsx", "Sheet1", true);
  Driver = DDT.ExcelDriver("‪C:\\Users\\Admin\\Desktop\\Data.xls", "Sheet1");
  
  // Iterates through records
  RecNo = 0;
  while (! Driver.EOF() )
  {
    ProcessData(); // Processes data
    Driver.Next(); // Goes to the next record
  }
  
  // Closing the driver
  DDT.CloseDriver(Driver.Name);
}