var app = Application.currentApplication()
app.includeStandardAdditions = true

app.displayDialog("Please enter a passphrase to use this script.", {
defaultAnswer: "",
withIcon: "stop",
buttons: ["Cancel", "Continue"],
defaultButton: "Continue",
hiddenAnswer: true
})
