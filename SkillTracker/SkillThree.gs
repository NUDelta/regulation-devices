function skillThreePracticed() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var cell = sheet.getRange("B4:B4");
  var value = cell.getValue();
  value += 1;
  console.log('value: ',value)
  cell.setValue(value)
}

