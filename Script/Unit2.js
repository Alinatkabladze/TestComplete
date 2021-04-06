function Test1()
{
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView.Header, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView.Header, "WndCaption", cmpEqual, "");
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView.Header, "wItem(1)", cmpEqual, "Product");
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView.Header, "wItemCount", cmpEqual, 11);
}

function Test2()
{
  let listView = Aliases.Orders.MainForm.OrdersView;
  aqObject.CheckProperty(listView, "WndCaption", cmpEqual, "");
  aqObject.CheckProperty(listView, "WndCaption", cmpEqual, "");
  listView.Click(393, 191);
}

function Test3()
{
  TestedApps.Orders.Run();
  let orders = Aliases.Orders;
  let mainForm = orders.MainForm;
  mainForm.Click(72, 47);
  mainForm.MainMenu.Click("File|New");
  mainForm.MainMenu.Click("Orders|New order...");
  let orderForm = orders.OrderForm;
  let numericUpDown = orderForm.Group.Quantity;
  let upDownEdit = numericUpDown.UpDownEdit;
  upDownEdit.Click(28, 12);
  upDownEdit.SetText("");
  numericUpDown.wValue = 2;
  orderForm.ButtonOK.ClickButton();
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "WndCaption", cmpEqual, "10");
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wItemCount", cmpEqual, 1);
}