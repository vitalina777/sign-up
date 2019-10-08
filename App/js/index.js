// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button5")
                .setDirtyMark(false)
                .setLeft("13.333333333333334em")
                .setTop("11.666666666666666em")
                .setCaption("Sign Up")
                .onClick([
                    {
                        "desc":"Action 1",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            undefined,
                            "Hello, {page.xui_ui_input68.getValue()}",
                            undefined,
                            5000
                        ],
                        "method":"message",
                        "conditions":[
                            {
                                "left":"{page.xui_ui_input46.getValue()}",
                                "symbol":"=",
                                "right":"111"
                            },
                            {
                                "left":"{page.xui_ui_input68.getValue()}",
                                "symbol":"=",
                                "right":"aaa"
                            }
                        ]
                    },
                    {
                        "desc":"Action 2",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            undefined,
                            "Error password"
                        ],
                        "method":"message",
                        "conditions":[
                            {
                                "left":"{page.xui_ui_input46.getValue()}",
                                "symbol":"!=",
                                "right":"111"
                            }
                        ]
                    },
                    {
                        "desc":"Action 3",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            undefined,
                            "Error name"
                        ],
                        "method":"message",
                        "conditions":[
                            {
                                "left":"{page.xui_ui_input68.getValue()}",
                                "symbol":"!=",
                                "right":"aaa"
                            }
                        ]
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input46")
                .setDirtyMark(false)
                .setLeft("7.5em")
                .setTop("7.5em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Password Input")
                .setType("password")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input68")
                .setDirtyMark(false)
                .setLeft("7.5em")
                .setTop("5em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Name")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        functions:{ }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});