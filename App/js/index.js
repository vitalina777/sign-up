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
                            "{page.xui_ui_label50.getValue()}",
                            undefined,
                            5000
                        ],
                        "method":"message",
                        "conditions":[
                            {
                                "left":"{page.xui_ui_input46.getValue()}",
                                "symbol":"=",
                                "right":"111"
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
                .setHost(host,"xui_ui_input61")
                .setDirtyMark(false)
                .setLeft("15.833333333333334em")
                .setTop("5em")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label50")
                .setLeft("10.833333333333334em")
                .setTop("5em")
                .setWidth("4.083333333333333em")
                .setCaption("Name")
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