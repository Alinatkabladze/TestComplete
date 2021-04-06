function readExcel(){

   ProjectSuite.Variables.data.Reset()

   for(;!ProjectSuite.Variables.data.IsEOF();) {
    let excel = ProjectSuite.Variables.data.Value
    var name = excel("Name")

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
  textBox = groupBox.Customer;
  textBox.SetText(name);
  textBox = groupBox.Street;
  textBox.SetText("saakadze");
  textBox = groupBox.City;
  textBox.SetText("tbilisi");
  orderForm.ButtonOK.ClickButton();
  
    ProjectSuite.Variables.data.Next()
    

    }

    }