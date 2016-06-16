// This is a generated file. Please do not edit directly.
var SAMPLES = this.SAMPLES || [];
SAMPLES.push({"id":"interacting-with-the-editor-adding-an-action-to-an-editor-instance","js":"//---------------------------------------------------\n// Interacting with the editor > Adding an action to an editor instance\n//---------------------------------------------------\n\nvar editor = monaco.editor.create(document.getElementById(\"container\"), {\n\tvalue: [\n\t\t'',\n\t\t'class Example {',\n\t\t'\\tprivate m:number;',\n\t\t'',\n\t\t'\\tpublic met(): string {',\n\t\t'\\t\\treturn \"Hello world!\";',\n\t\t'\\t}',\n\t\t'}'\n\t].join('\\n'),\n\tlanguage: \"typescript\"\n});\n\n// Explanation:\n// Try right clicking on an identifier or keyword => the action will be enabled (due to `tokensAtPosition`)\n// Try right clicking on a string => the action will be disabled (due to `tokensAtPosition`)\n// Try right clicking on whitespace => the action will be disabled (due to `wordAtPosition`)\n// Press F1 (Alt-F1 in IE) => the action will appear and run if it is enabled\n// Press Ctrl-F10 => the action will run if it is enabled\n\neditor.addAction({\n\t// An unique identifier of the contributed action.\n\tid: 'my-unique-id',\n\n\t// A label of the action that will be presented to the user.\n\tlabel: 'My Label!!!',\n\n\t// An optional array of keybindings for the action.\n\tkeybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.F10],\n\n\tkeybindingContext: null,\n\n\t// Control if the action should show up in the context menu and where.\n\t// Built-in groups:\n\t//   1_goto/* => e.g. 1_goto/1_peekDefinition\n\t//   2_change/* => e.g. 2_change/2_format\n\t//   3_edit/* => e.g. 3_edit/1_copy\n\t//   4_tools/* => e.g. 4_tools/1_commands\n\t// You can also create your own group.\n\t// Defaults to null (don't show in context menu).\n\tcontextMenuGroupId: '2_change/2_bla',\n\n\t// Method that will be executed when the action is triggered.\n\t// @param editor The editor instance is passed in as a convinience\n\trun: function(ed) {\n\t\talert(\"i'm running => \" + ed.getPosition());\n\t\treturn null;\n\t},\n\n\t// Optional enablement conditions. All members are optional\n\tenablement: {\n\t\t// The action is enabled only if text in the editor is focused (e.g. blinking cursor).\n\t\t// Warning: This condition will be disabled if the action is marked to be displayed in the context menu\n\t\t// Defaults to false.\n\t\ttextFocus: true,\n\n\t\t// The action is enabled only if the editor or its widgets have focus (e.g. focus is in find widget).\n\t\t// Defaults to false.\n\t\t//widgetFocus: true,\n\n\t\t// The action is enabled only if the editor is not in read only mode.\n\t\t// Defaults to false.\n\t\t//writeableEditor: true,\n\n\t\t// The action is enabled only if the cursor position is over a word (i.e. not whitespace).\n\t\t// Defaults to false.\n\t\twordAtPosition: true,\n\n\t\t// The action is enabled only if the cursor position is over tokens of a certain kind.\n\t\t// Defaults to no tokens required.\n\t\ttokensAtPosition: ['identifier', '', 'keyword'],\n\t}\n});\n","html":"<div id=\"container\" style=\"height:100%;\"></div>\n","css":""});