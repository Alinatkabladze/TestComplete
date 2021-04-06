function Test1()
{
  TestedApps.Orders.Run();
  let orders = Aliases.Orders;
  orders.MainForm.MainMenu.Click("Orders|Edit order...");
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.Group;
  let textBox = groupBox.Customer;
  textBox.SetText("alina");
  textBox.Keys("[Tab]");
  textBox = groupBox.Street;
  textBox.SetText("saakadze");
  textBox.Keys("[Tab]");
  groupBox.City.Keys("[Tab]");
  groupBox.State.SetText("georgia");
  groupBox.MasterCard.ClickButton();
  groupBox.ProductNames.ClickItem("FamilyAlbum");
  orderForm.ButtonOK.ClickButton();
  Tables.OrdersView.Check();
  let listView = Aliases.Orders.MainForm.OrdersView;
  listView.ClickItem("alina", 0);
  listView.DblClickItem("alina", "1");
aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Customer, "wText", cmpEqual, "alina", false)

 
   aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.MasterCard, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.MasterCard, "WndCaption", cmpEqual, "MasterCard");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.MasterCard, "wChecked", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.ProductNames, "wItemCount", cmpEqual, 3);
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.ProductNames, "wSelectedItem", cmpEqual, 1);
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.ProductNames, "wText", cmpEqual, "FamilyAlbum");
}

function Test2()
{
  TestedApps.Orders.Run();
  let orders = Aliases.Orders;
  orders.MainForm.MainMenu.Click("Orders|New order...");
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.Group;
  let textBox = groupBox.Customer;
  textBox.Click(44, 14);
  textBox.SetText("alina");
  textBox.Keys("[Tab]");
  textBox = groupBox.Street;
  textBox.SetText("saakadze");
  textBox.Keys("[Tab]");
  
  Aliases.Orders.OrderForm.Group.City.SetText("tbilisi");
 
  textBox.Keys("[Tab]");
  textBox = groupBox.State;
  textBox.SetText("georgia");
  textBox.Keys("[Tab]");
  groupBox.Zip.SetText("0132");
   validateName("MasterCard");
  orderForm.ButtonOK.ClickButton();
   Tables.OrdersView4.Check();
   aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wItemCount", cmpEqual, 8);
 
}

function validateName(name){
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.MasterCard, "WndCaption", cmpEqual, name);
}

function Test3()
{
  Tables.OrdersView4.Check();
}
function validateTableRow(){
   TestedApps.Orders.Run();
      Tables.OrdersView4.Check();
   // aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wValue", cmpEqual, 7);
   
}
function ExcelExample()
{
  // Get the sheet of the Excel file
  var excelFile = Excel.Open("‪C:\\Users\\Admin\\Desktop\\Data.xlsx");
  var excelSheet = excelFile.SheetByTitle("Sheet1");
  
  // Read data from the Excel file
  var valueA = excelSheet.Cell("A", 3).Value;
  var valueB = excelSheet.Cell(2, 3).Value;
  var valueC = excelSheet.CellByName("C3").Value;
  
  // Write the obtained data into a new row of the file
  var rowIndex = excelSheet.RowCount + 1;
  excelSheet.Cell("A", rowIndex).Value = valueA;
  excelSheet.Cell(2, rowIndex).Value = valueB;
  excelSheet.Cell("C", rowIndex).Value = valueC;
  
  // Save the file to apply the changes
  excelFile.Save();
  
  // Save the file with another name
  // excelFile.SaveAs("C:\\temp\\DataStorageExcel_new.xlsx");
}