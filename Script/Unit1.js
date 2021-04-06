function Test1()
{
  TestedApps.Orders.Run();
  let orders = Aliases.Orders;
  orders.MainForm.MainMenu.Click("Orders|New order...");
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.Group;
  groupBox.ProductNames.ClickItem("FamilyAlbum");
  let numericUpDown = groupBox.Quantity;
  let upDownEdit = numericUpDown.UpDownEdit;
  numericUpDown.wValue = 5;
  let textBox = groupBox.Price;
  textBox.SetText("$800");
  textBox = groupBox.Discount;
  textBox.SetText("10%");
  textBox = groupBox.groupBox1.Total;
  textBox.SetText("40");
  groupBox.Date.wDate = "2020-04-02";
  textBox = groupBox.Customer;
  textBox.SetText("alina");
  textBox = groupBox.Street;
  textBox.SetText("saakadze");
  textBox = groupBox.City;
  textBox.SetText("tbilisi");
  textBox = groupBox.State;
  textBox.SetText("georgia");
  textBox = groupBox.Zip;
  textBox.SetText("0132");
  groupBox.MasterCard.ClickButton();
  textBox = groupBox.CardNo;
  textBox.SetText("25");
  groupBox.ExpDate.wDate = "2020-02-08";
  orderForm.ButtonOK.ClickButton();
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wSelectedItems", cmpEqual, "alina");
}

function Test2()
{
  let orders = Aliases.Orders;
  let mainForm = orders.MainForm;
  mainForm.Activate();
  mainForm.Activate();
  mainForm.MainMenu.Click("Orders|New order...");
  orders.OrderForm.ButtonOK.ClickButton();
}