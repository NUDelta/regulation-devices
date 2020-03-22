function skillOnePracticed() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var cell = sheet.getRange("B2:B2");
  var value = cell.getValue();
  value += 1;
  console.log('value: ',value)
  cell.setValue(value)
}